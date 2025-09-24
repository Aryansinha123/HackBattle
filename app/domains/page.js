import Link from 'next/link';

async function fetchDomains() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/domains`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function DomainsPage() {
  const domains = await fetchDomains();
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Choose a Domain</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {domains.map((domain) => (
          <Link
            key={domain.id}
            href={`/domains/${domain.id}`}
            className="border rounded-lg p-4 hover:shadow-sm transition"
          >
            <div className="text-lg font-medium">{domain.name}</div>
            <p className="text-sm opacity-80 mt-1">{domain.description}</p>
          </Link>
        ))}
        {domains.length === 0 && (
          <div className="opacity-70">No domains found.</div>
        )}
      </div>
    </main>
  );
}



