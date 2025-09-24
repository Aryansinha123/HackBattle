"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function WebDevExercisesPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("all");

  useEffect(() => {
    const qs = topic !== 'all' ? `?topic=${encodeURIComponent(topic)}` : '';
    fetch(`/api/webdev-questions${qs}`)
      .then((res) => res.json())
      .then((data) => { setItems(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [topic]);

  const difficultyText = (rating) => {
    if (!rating && rating !== 0) return "Not Rated";
    if (rating <= 3) return "Easy";
    if (rating <= 6) return "Medium";
    return "Hard";
  };

  const difficultyClass = (rating) => {
    if (!rating && rating !== 0) return "bg-gray-500/20 text-gray-200 border-gray-400/30";
    if (rating <= 3) return "bg-green-500/20 text-green-200 border-green-400/30";
    if (rating <= 6) return "bg-yellow-500/20 text-yellow-200 border-yellow-400/30";
    return "bg-red-500/20 text-red-200 border-red-400/30";
  };

  const filtered = useMemo(() => {
    const s = search.toLowerCase();
    const list = Array.isArray(items) ? items : [];
    return list.filter(q => {
      const matches = q.name.toLowerCase().includes(s) || (q.tags || []).some(t => t.toLowerCase().includes(s));
      if (filter === "all") return matches;
      return matches && difficultyText(q.rating).toLowerCase() === filter;
    });
  }, [items, search, filter]);

  if (loading) return <div className="p-6">Loading web dev exercises...</div>;

  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold">Web Development Exercises</h1>
          <Link href="/exercises" className="text-sm underline">Back</Link>
        </div>

        <div className="flex flex-wrap gap-3 items-center mb-6">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm"
          >
            {['all','html','css','javascript','node','react','nextjs'].map(v => (
              <option key={v} value={v}>{v.toUpperCase()}</option>
            ))}
          </select>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or tag..."
            className="flex-1 min-w-[220px] rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-300"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border border-white/20 bg-white/80 px-3 py-2 text-sm"
          >
            {['all','easy','medium','hard'].map(v => <option key={v} value={v}>{v[0].toUpperCase()+v.slice(1)}</option>)}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((q) => (
            <Link
              key={q.id}
              href={`/exercises/webdev/${q.id}`}
              className="rounded-xl border border-cyan-200 bg-white p-4 shadow-sm hover:shadow transition"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-slate-900 line-clamp-2">{q.name}</h3>
                <span className={`ml-2 whitespace-nowrap rounded-md border px-2 py-0.5 text-xs ${difficultyClass(q.rating)}`}>
                  {difficultyText(q.rating)}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{q.description}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                {(q.tags || []).slice(0, 4).map((t, i) => (
                  <span key={i} className="rounded border border-slate-200 px-2 py-0.5 bg-slate-50">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


