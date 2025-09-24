import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-24 bg-gradient-to-r from-[#0f172a] via-[#064e3b] to-[#0ea5e9] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Don’t just search for internships. Be ready for them.
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg">
              Identify your skill gaps, learn actively, and land your dream internship with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/internships" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm sm:text-base border border-white/20">Find Internships</Link>
              <Link href="/exercises" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10 px-4 py-2 text-sm sm:text-base">Start Learning</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/10 border border-white/20 shadow-sm flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 p-6 w-full max-w-sm">
                <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
                <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
                <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
                <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
                <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
                <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">Students progressing from skills → internship</p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#064e3b]">Core Features</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Feature title="Internship Search" desc="Filter by skills & domains." />
            <Feature title="Skill Gap Analyzer" desc="Detect missing skills instantly." />
            <Feature title="Learning Paths" desc="Quizzes, practice sets, projects." />
            <Feature title="Gamification" desc="Points, badges, progress tracking." />
            <Feature title="Fit Prediction" desc="Smart recommendations for you." />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-14 bg-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#064e3b]">How It Works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Step num="1" title="Choose an internship" />
            <Step num="2" title="Find missing skills" />
            <Step num="3" title="Learn & apply with confidence" />
          </div>
        </div>
      </section>

      {/* Progress & Motivation */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#064e3b]">Track your progress</h2>
            <p className="mt-3 text-slate-700">Earn badges, track growth, and stay motivated.</p>
          </div>
          <div className="rounded-2xl border border-cyan-200 p-6 bg-white shadow-sm">
            <div className="h-3 w-full bg-cyan-100 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-cyan-500" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-lg bg-cyan-50 border border-cyan-200 p-3">Badge: Explorer</div>
              <div className="rounded-lg bg-cyan-50 border border-cyan-200 p-3">Quizzes: 12</div>
              <div className="rounded-lg bg-cyan-50 border border-cyan-200 p-3">Projects: 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-gradient-to-r from-[#0f172a] via-[#064e3b] to-[#0ea5e9] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Start your journey today.</h2>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/register" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm sm:text-base border border-white/20">Sign Up Free</Link>
            <Link href="/internships" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10 px-4 py-2 text-sm sm:text-base">Explore Internships</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-emerald-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

function Step({ num, title }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm text-center">
      <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-semibold">
        {num}
      </div>
      <p className="text-slate-700">{title}</p>
    </div>
  );
}
