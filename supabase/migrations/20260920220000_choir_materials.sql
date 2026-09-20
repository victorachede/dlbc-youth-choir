-- Choir materials library: sheet music + audio tracks, managed by a small
-- admin allowlist. Tables live in the shared "ASKTC" Supabase project but
-- are namespaced with a choir_ prefix and gated by choir_is_admin() so
-- ASKTC's own authenticated users (panelists, moderators, etc.) never get
-- implicit access to this data — only user_ids explicitly listed in
-- choir_admins do.

create table if not exists public.choir_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.choir_materials (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null check (category in ('audio', 'sheet_music')),
  file_path text not null,
  file_url text not null,
  uploaded_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create or replace function public.choir_is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.choir_admins where user_id = auth.uid()
  );
$$;

alter table public.choir_admins enable row level security;
alter table public.choir_materials enable row level security;

drop policy if exists "choir_admins_self_select" on public.choir_admins;
create policy "choir_admins_self_select" on public.choir_admins
  for select to authenticated
  using (public.choir_is_admin());

drop policy if exists "choir_materials_public_select" on public.choir_materials;
create policy "choir_materials_public_select" on public.choir_materials
  for select to anon, authenticated
  using (true);

drop policy if exists "choir_materials_admin_insert" on public.choir_materials;
create policy "choir_materials_admin_insert" on public.choir_materials
  for insert to authenticated
  with check (public.choir_is_admin());

drop policy if exists "choir_materials_admin_update" on public.choir_materials;
create policy "choir_materials_admin_update" on public.choir_materials
  for update to authenticated
  using (public.choir_is_admin())
  with check (public.choir_is_admin());

drop policy if exists "choir_materials_admin_delete" on public.choir_materials;
create policy "choir_materials_admin_delete" on public.choir_materials
  for delete to authenticated
  using (public.choir_is_admin());

-- Storage bucket for the actual files (PDFs, audio) backing choir_materials.
insert into storage.buckets (id, name, public)
values ('choir-materials', 'choir-materials', true)
on conflict (id) do nothing;

drop policy if exists "choir_materials_bucket_public_select" on storage.objects;
create policy "choir_materials_bucket_public_select" on storage.objects
  for select
  using (bucket_id = 'choir-materials');

drop policy if exists "choir_materials_bucket_admin_insert" on storage.objects;
create policy "choir_materials_bucket_admin_insert" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'choir-materials' and public.choir_is_admin());

drop policy if exists "choir_materials_bucket_admin_delete" on storage.objects;
create policy "choir_materials_bucket_admin_delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'choir-materials' and public.choir_is_admin());
