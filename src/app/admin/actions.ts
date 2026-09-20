'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function signIn(_prevState: { error: string } | undefined, formData: FormData) {
  const email = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: 'Incorrect email or password.' }
  }

  redirect('/admin')
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}

export async function uploadMaterial(_prevState: { error: string } | undefined, formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Not signed in.' }

  const title = String(formData.get('title') ?? '').trim()
  const category = String(formData.get('category') ?? '')
  const file = formData.get('file') as File | null

  if (!title || !file || file.size === 0) {
    return { error: 'A title and a file are required.' }
  }
  if (category !== 'audio' && category !== 'sheet_music') {
    return { error: 'Invalid category.' }
  }

  const ext = file.name.split('.').pop()
  const path = `${category}/${crypto.randomUUID()}${ext ? `.${ext}` : ''}`

  const { error: uploadError } = await supabase.storage
    .from('choir-materials')
    .upload(path, file, { contentType: file.type || undefined })

  if (uploadError) {
    return { error: `Upload failed: ${uploadError.message}` }
  }

  const { data: { publicUrl } } = supabase.storage.from('choir-materials').getPublicUrl(path)

  const { error: insertError } = await supabase.from('choir_materials').insert({
    title,
    category,
    file_path: path,
    file_url: publicUrl,
    uploaded_by: user.id,
  })

  if (insertError) {
    // Roll back the upload so a failed insert doesn't leave an orphaned file.
    await supabase.storage.from('choir-materials').remove([path])
    return { error: `Could not save material: ${insertError.message}` }
  }

  revalidatePath('/admin')
  revalidatePath('/materials')
  return { error: '' }
}

export async function deleteMaterial(id: string, filePath: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  await supabase.storage.from('choir-materials').remove([filePath])
  await supabase.from('choir_materials').delete().eq('id', id)

  revalidatePath('/admin')
  revalidatePath('/materials')
}
