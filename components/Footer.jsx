import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-[#0f172a] via-[#064e3b] to-[#0ea5e9] text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <div className="text-lg font-semibold">skillUp</div>
          <p className="mt-2 text-sm text-white/70">Identify gaps, learn actively, and land internships.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Product</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/internships" className="hover:underline">Search Internships</Link></li>
            <li><Link href="/exercises" className="hover:underline">Exercises</Link></li>
            <li><Link href="/quizzes" className="hover:underline">Quizzes</Link></li>
            <li><Link href="/profile" className="hover:underline">Profile</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Stay in the loop</div>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-300/40" />
            <button type="submit" className="rounded-md border border-white/20 px-3 py-2 text-sm hover:bg-white/10">Subscribe</button>
          </form>
          <div className="mt-4 flex gap-4 text-sm">
            <a href="#" aria-label="Twitter" className="hover:underline">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="hover:underline">LinkedIn</a>
            <a href="#" aria-label="GitHub" className="hover:underline">GitHub</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-4 text-xs text-white/70">
          © {new Date().getFullYear()} skillUp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


