export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-32">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a
          href="/day-1-blog"
          className="group relative block overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80"
        >
          {/* Image Container */}
          <div className="relative h-48 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
            <img src="/blog-day-1.png" alt="Day 1 Blog Thumbnail" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Content */}
          <div className="relative z-20 p-6 -mt-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">Update</span>
              <span className="text-xs text-slate-400">January 2, 2026</span>
            </div>

            <h3 className="mb-2 text-xl font-bold text-slate-100 group-hover:text-white">Building Zipply: A Day of UI Polish</h3>

            <p className="mb-6 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
              From fluid cursor physics to pixel-perfect navigation details, we dive deep into the frontend engineering work that makes Zipply feel alive. Explore how we built the "comet" cursor and
              the new blog navigation.
            </p>

            <div className="flex items-center text-sm font-medium text-indigo-400 transition-colors group-hover:text-indigo-300">
              Open Article
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
