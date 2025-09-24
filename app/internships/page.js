export default function InternshipsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Search Internships</h1>
      <p className="text-sm sm:text-base opacity-80 mb-4">Find internships by role, company, or location.</p>
      <div className="flex gap-3">
        <input className="flex-1 rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" placeholder="Search internships..." />
        <button className="rounded-md border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">Search</button>
      </div>
    </main>
  );
}


