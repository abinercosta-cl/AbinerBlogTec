import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PostCard } from '@/components/PostCard';
import { ReadingProgressBar } from '@/components/ReadingProgressBar';
import { ScrollReveal } from '@/components/ScrollReveal';
import { INITIAL_POSTS } from '@/data/posts';
import { Terminal, Sparkles, Code2, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-[#F8FAFC]">
      <ReadingProgressBar />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative border-b border-slate-800/80 bg-gradient-to-b from-[#0B1120] via-[#080C14] to-[#080C14] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              {/* Badge (Amber support color) */}
              <div className="opacity-0 animate-hero-fade inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 font-mono text-xs font-medium text-amber-400">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>abiner.dev — Blog Pessoal & Engenharia</span>
              </div>

              {/* Title (Emerald reserved for "Caos") */}
              <h1 className="opacity-0 animate-hero-fade animation-delay-100 font-sans text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-slate-100">
                Código, Curiosidade &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Caos
                </span>
                .
              </h1>

              {/* Subtitle */}
              <p className="opacity-0 animate-hero-fade animation-delay-200 text-base sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
                Um espaço dedicado a arquitetura backend, ecossistema Go, desenvolvimento seguro no Next.js e aprendizados no mundo Linux por Abiner Costa.
              </p>

              {/* Tech Stack Pills (Amber support icons) */}
              <div className="opacity-0 animate-hero-fade animation-delay-300 flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1">
                  <Code2 className="h-3.5 w-3.5 text-amber-400" /> Golang
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1">
                  <Zap className="h-3.5 w-3.5 text-amber-400" /> TypeScript & Next.js
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1">
                  <Cpu className="h-3.5 w-3.5 text-amber-400" /> Linux Kernel
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-400" /> Segurança App
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FEED DE ARTIGOS */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-amber-400" />
                <h2 className="font-mono text-xl font-bold text-slate-100">Artigos Recentes</h2>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {INITIAL_POSTS.length} publicações
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INITIAL_POSTS.map((post, idx) => (
                <ScrollReveal key={post.id} delayMs={idx * 120}>
                  <PostCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO CURIOSIDADES (Cards distintos: sem borda, fundo chapado #0D1425, sem hover) */}
        <section id="curiosidades" className="py-12 sm:py-16 border-t border-slate-800/80 bg-slate-950/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                // Fatos & Aprendizados
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 mt-1">
                Curiosidades Tecnológicas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollReveal delayMs={0}>
                <div className="rounded-xl bg-[#0D1425] p-6 shadow-sm">
                  <div className="font-mono text-xs font-semibold text-amber-400 mb-2">#01 · GO CONCURRENCY</div>
                  <h3 className="font-bold text-slate-200 mb-2">Goroutines pesam apenas 2KB</h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Ao contrário das threads tradicionais do sistema operacional (que consomem ~1MB cada), as goroutines começam com apenas 2KB de stack memory e crescem sob demanda.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={150}>
                <div className="rounded-xl bg-[#0D1425] p-6 shadow-sm">
                  <div className="font-mono text-xs font-semibold text-amber-400 mb-2">#02 · LINUX HISTORY</div>
                  <h3 className="font-bold text-slate-200 mb-2">Linus Torvalds criou o Git em 10 dias</h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Insatisfeito com os sistemas de controle de versão existentes na época, Linus escreveu o núcleo inicial do Git em menos de duas semanas para gerenciar a fonte do Linux.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={300}>
                <div className="rounded-xl bg-[#0D1425] p-6 shadow-sm">
                  <div className="font-mono text-xs font-semibold text-amber-400 mb-2">#03 · HTTP-ONLY COOKIES</div>
                  <h3 className="font-bold text-slate-200 mb-2">Imunidade total contra XSS de leitura</h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Um cookie marcado com `httpOnly` não pode ser acessado via `document.cookie` em nenhum script JS do cliente, desarmando ataques automatizados de roubo de credencial.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
