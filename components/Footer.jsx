import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-teal-200 bg-[#e6fffb]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
        <div className="text-sm text-slate-700">© {new Date().getFullYear()} skillUp</div>
        <ul className="flex flex-wrap gap-4 text-sm text-teal-800">
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
          <li><Link href="/terms" className="hover:underline">Terms</Link></li>
        </ul>
        <div className="flex justify-start sm:justify-end gap-4 text-teal-800">
          <a href="#" aria-label="Twitter" className="hover:underline">Twitter</a>
          <a href="#" aria-label="LinkedIn" className="hover:underline">LinkedIn</a>
          <a href="#" aria-label="GitHub" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}


