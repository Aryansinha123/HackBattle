import Link from 'next/link';

async function fetchDomain(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/domains/${id}`, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  return res.json();
}

async function fetchExercises(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/domains/${id}/exercises`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
}

function DifficultyBadge({ level }) {
  const color = level === 'easy' ? 'bg-green-100 text-green-800' : level === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800';
  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded ${color}`}>{level}</span>
  );
}

export default async function DomainExercisesPage({ params, searchParams }) {
  const { domain } = params;
  const [selectedDomain, all] = await Promise.all([
    fetchDomain(domain),
    fetchExercises(domain)
  ]);

  if (!selectedDomain) {
    return (
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h1 className="text-xl font-semibold">Domain not found</h1>
        <p className="mt-2"><Link className="underline" href="/domains">Back to domains</Link></p>
      </main>
    );
  }

  const difficulty = searchParams?.difficulty || 'all';
  const filtered = difficulty === 'all' ? all : all.filter(e => e.difficulty === difficulty);
  const diffLink = (lvl) => `/domains/${selectedDomain.id}?difficulty=${lvl}`;

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">{selectedDomain.name} Exercises</h1>
          <p className="text-sm sm:text-base opacity-80 mt-1">{selectedDomain.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm opacity-60">Difficulty:</span>
          <Link href={diffLink('all')} className={`text-sm px-2 py-1 rounded border ${difficulty==='all'?'bg-gray-100':''}`}>All</Link>
          <Link href={diffLink('easy')} className={`text-sm px-2 py-1 rounded border ${difficulty==='easy'?'bg-gray-100':''}`}>Easy</Link>
          <Link href={diffLink('medium')} className={`text-sm px-2 py-1 rounded border ${difficulty==='medium'?'bg-gray-100':''}`}>Medium</Link>
          <Link href={diffLink('hard')} className={`text-sm px-2 py-1 rounded border ${difficulty==='hard'?'bg-gray-100':''}`}>Hard</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(ex => (
          <Link key={ex._id || ex.slug} href={`/domains/${selectedDomain.id}/${ex.slug}`} className="border rounded-lg p-4 hover:shadow-sm transition">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{ex.title}</h3>
              <DifficultyBadge level={ex.difficulty} />
            </div>
            <p className="text-sm opacity-80 mt-1 line-clamp-2">{ex.description}</p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="opacity-70">No exercises for this filter.</div>
        )}
      </div>
    </main>
  );
}



