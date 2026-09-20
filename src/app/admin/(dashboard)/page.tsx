import { createClient } from '@/lib/supabase/server'
import UploadForm from '@/components/admin/UploadForm'
import DeleteButton from '@/components/admin/DeleteButton'
import { FileAudio, FileText } from 'lucide-react'

export default async function AdminDashboardPage() {
  const supabase = await createClient()
  const { data: materials } = await supabase
    .from('choir_materials')
    .select('id, title, category, file_path, file_url, created_at')
    .order('created_at', { ascending: false })

  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-2">Materials</p>
        <h1 className="font-display font-semibold text-2xl text-ink">Upload New Material</h1>
      </div>

      <UploadForm />

      <div>
        <h2 className="font-display text-[15px] text-ink mb-4">
          {materials?.length ?? 0} Material{materials?.length === 1 ? '' : 's'}
        </h2>
        <div className="flex flex-col gap-2">
          {materials?.map((m) => (
            <div key={m.id} className="flex items-center gap-4 border border-border rounded-sm px-4 py-3 bg-white">
              <div className="w-9 h-9 rounded-full border border-blue/30 flex items-center justify-center shrink-0">
                {m.category === 'audio' ? (
                  <FileAudio size={14} className="text-blue" />
                ) : (
                  <FileText size={14} className="text-blue" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] text-ink truncate">{m.title}</p>
                <p className="text-[11px] text-ink-dim">{m.category === 'audio' ? 'Audio Track' : 'Sheet Music'}</p>
              </div>
              <DeleteButton id={m.id} filePath={m.file_path} />
            </div>
          ))}
          {materials?.length === 0 && (
            <p className="text-[13px] text-ink-dim">No materials uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
