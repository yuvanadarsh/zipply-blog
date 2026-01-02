import React from "react";
import { MoveRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="bg-slate-950 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <span>Build Update</span>
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            <span>January 2, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 tracking-tight">
            Building Zipply: A Day of UI Polish
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From fluid cursor physics to pixel-perfect navigation details, here's a deep dive into the frontend engineering work delivered today.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-slate max-w-none">
          <div className="mb-16 p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-lg">1</span>
              Buying and setting up domains
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Finding the perfect domain is really difficult. Sometimes it takes days to find the right domain name, but with a little bit of openmindedness and persistence, you can find the right
              domain name and even get it at a good price. I used tools like Google Gemini to prompt some names for the project and while it is very bland, it offers a silly but unique name. I managed
              to get the name "Zipply" after about 3 iterations. <br></br>
              <br></br>To secure the domain and verify it wasn't taken by anyone else, I used{" "}
              <a href="https://namecheap.com" target="_blank" rel="noopener noreferrer" className="underline">
                namecheap.com
              </a>{" "}
              to find zipply.dev through their advanced domain search
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  We implemented a centered "Blog" link with a custom hover animation. Instead of a simple color change, we added a progressive underline that draws itself from left to right.
                </p>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-2 block">Implementation Details</span>
                  <p className="text-slate-300 text-sm">
                    Typography: <span className="text-emerald-300 font-mono">text-xl font-bold</span> (Matching Brand)
                    <br />
                    Animation: <span className="text-emerald-300 font-mono">0.3s ease-out</span>
                  </p>
                </div>
              </div>

              <div className="relative shrink-0 p-8 bg-slate-950 rounded-xl border border-slate-800">
                <button className="text-xl font-bold text-slate-300 relative group">
                  Blog
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 scale-x-100 origin-left" />
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">(Static Preview)</p>
              </div>
            </div>
          </div>

          {/* Section 1: The Spotlight */}
          <div className="mb-16 p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-lg">1</span>
              Fluid "Comet" Cursor
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              The landing page needed to feel alive. We moved beyond simple CSS hover states to implement a physics-based spotlight effect. This isn't just a static circle following your mouse—it's a
              simulated physical object that responds to velocity.
            </p>

            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              <li className="flex gap-3 items-start text-slate-400 text-sm">
                <MoveRight className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Velocity Deformation:</strong> The cursor stretches ("stretches") along the axis of movement and flattens ("squashes") perpendicularly, creating a
                  jelly-like feel.
                </span>
              </li>
              <li className="flex gap-3 items-start text-slate-400 text-sm">
                <MoveRight className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Rotational inertia:</strong> The spotlight rotates to face the direction of travel, calculated using `Math.atan2` on the delta vectors.
                </span>
              </li>
            </ul>

            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 overflow-x-auto">
              <code className="text-xs text-indigo-300 font-mono">
                {`// Physics state for deformation
const updatePhysics = () => {
  const dx = currentX - prevPos.current.x;
  const dy = currentY - prevPos.current.y;
  const speed = Math.sqrt(dx * dx + dy * dy);

  // Stretch based on speed
  const stretch = Math.min(1 + speed * 0.04, 3.0);
  scaleX.set(stretch);
}`}
              </code>
            </div>
          </div>

          {/* Section 2: Navbar */}
          <div className="mb-16 p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-lg">2</span>
              Navigation Micro-Interactions
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Navigation needs to be functional but delightful. We enhanced the top navbar with a new entry point for our engineering blog. The goal was to make it noticeable without distracting from
              the primary "Sign In" call-to-action.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  We implemented a centered "Blog" link with a custom hover animation. Instead of a simple color change, we added a progressive underline that draws itself from left to right.
                </p>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-2 block">Implementation Details</span>
                  <p className="text-slate-300 text-sm">
                    Typography: <span className="text-emerald-300 font-mono">text-xl font-bold</span> (Matching Brand)
                    <br />
                    Animation: <span className="text-emerald-300 font-mono">0.3s ease-out</span>
                  </p>
                </div>
              </div>

              <div className="relative shrink-0 p-8 bg-slate-950 rounded-xl border border-slate-800">
                <button className="text-xl font-bold text-slate-300 relative group">
                  Blog
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 scale-x-100 origin-left" />
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">(Static Preview)</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="border-t border-slate-800 pt-12 text-center">
            <p className="text-slate-400 italic">
              "We're just getting started. Zipply is evolving rapidly, and these foundational UI elements set the stage for the premium experience we are building."
            </p>
            <div className="mt-8">
              <span className="inline-block px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium">Next up: Authentication & Dashboard</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
