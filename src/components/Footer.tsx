import Link from 'next/link';
import { Terminal, Mail } from 'lucide-react';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-[#080C14] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-base font-bold text-slate-100">
              <Terminal className="h-5 w-5 text-emerald-400" />
              <span>abiner.dev</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Blog pessoal sobre backend, Go, Linux e arquitetura de sistemas. Registrando código, curiosidade e aprendizados.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Artigos & Tutoriais
                </Link>
              </li>
              <li>
                <Link href="/#curiosidades" className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Curiosidades Tecnológicas
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Sobre Abiner Costa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              Contato & Links
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="mailto:abinerclcosta@gmail.com"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>abinerclcosta@gmail.com</span>
              </a>
              <a
                href="https://github.com/abinercosta-cl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <GithubIcon className="h-4 w-4 text-emerald-400" />
                <span>github.com/abinercosta-cl</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Abiner Costa. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Santarém, PA 🇧🇷 — Construído com Next.js & Design System Dark
          </p>
        </div>
      </div>
    </footer>
  );
}
