"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/10 dark:border-white/15 bg-background text-foreground">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center gap-4">
        {/* Left group: logo + middle links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg sm:text-xl font-semibold tracking-tight">
            skillUp
          </Link>
          {/* Inline primary nav links near the logo (sm+) */}
          <ul className="hidden sm:flex items-center gap-6 text-sm sm:text-base">
            <li>
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline underline-offset-4">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline underline-offset-4">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right controls */}
        <div className="ml-auto flex items-center gap-3">
          {/* Login button visible on sm+ */}
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Login
          </Link>

          <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="text-xl select-none">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-over panel */}
            <motion.aside
              key="panel"
              id="mobile-menu"
              className="fixed right-0 top-0 h-full w-[85%] sm:w-[360px] max-w-full bg-background text-foreground border-l border-black/10 dark:border-white/15 shadow-xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="px-5 py-4 border-b border-black/10 dark:border-white/15 flex items-center justify-between">
                <span className="text-base font-semibold">Menu</span>
                <button
                  aria-label="Close menu"
                  className="h-9 w-9 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className="p-5 border-b border-black/10 dark:border-white/15">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search internships..."
                    className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                  />
                  <Link
                    href="/internships"
                    className="mt-3 inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    Go to Search
                  </Link>
                </div>
              </div>

              <ul className="p-3 flex-1 overflow-y-auto">
                <NavItem href="/internships" label="Search Internships" onClick={() => setIsOpen(false)} />
                <NavItem href="/exercises" label="Exercises by Topic" onClick={() => setIsOpen(false)} />
                <NavItem href="/quizzes" label="Quizzes" onClick={() => setIsOpen(false)} />
                <NavItem href="/profile" label="Profile" onClick={() => setIsOpen(false)} />
                <div className="my-2 h-px bg-black/10 dark:bg-white/15" />
                <NavItem href="/login" label="Login" onClick={() => setIsOpen(false)} />
              </ul>

              <div className="p-4 text-xs opacity-60 border-t border-black/10 dark:border-white/15">
                © {new Date().getFullYear()} skillUp
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, label, onClick }) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-md px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10"
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}
