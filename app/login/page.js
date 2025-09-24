export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 sm:px-6 py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Login</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="w-full rounded-md border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
          Sign In
        </button>
      </form>
    </main>
  );
}


