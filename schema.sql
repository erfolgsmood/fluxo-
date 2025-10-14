-- Supabase schema
create table if not exists search_events (
  id uuid primary key default gen_random_uuid(),
  q text not null,
  ts timestamptz default now(),
  user_id uuid
);

create table if not exists click_events (
  id uuid primary key default gen_random_uuid(),
  q text not null,
  url text not null,
  vendor text,
  ts timestamptz default now(),
  user_id uuid
);

create table if not exists product_cache (
  url text primary key,
  title text,
  price numeric,
  currency text,
  vendor text,
  image text,
  updated_at timestamptz default now()
);
