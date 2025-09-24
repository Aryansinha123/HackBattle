import Link from 'next/link';

export default function ExercisesCategoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Exercises by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/exercises/dsa" className="border rounded-lg p-4 hover:shadow-sm transition">
          <div className="text-lg font-medium">Data Structures & Algorithms</div>
          <p className="text-sm opacity-80 mt-1">Arrays, graphs, DP, greedy, and more.</p>
        </Link>
        <Link href="/exercises/webdev" className="border rounded-lg p-4 hover:shadow-sm transition">
          <div className="text-lg font-medium">Web Development</div>
          <p className="text-sm opacity-80 mt-1">HTML, CSS, JavaScript fundamentals.</p>
        </Link>
      </div>
    </main>
  );
}


