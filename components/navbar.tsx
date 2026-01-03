import { Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-900/50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="bg-emerald-500/10 p-2 rounded-lg hover:opacity-80 transition-opacity">
              <Mail className="h-6 w-6 text-emerald-400" />
            </Link>

            <div className="flex items-center gap-1">
              <Link href="https://zipply.dev/" className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-blue-500 hover:opacity-80 transition-opacity">
                Zipply
              </Link>
              <Link href="/" className="text-slate-400 text-xl font-medium hover:text-slate-200 transition-colors">
                / Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
