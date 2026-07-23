import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CodeBlock } from '@/components/CodeBlock';
import { ReadingProgressBar } from '@/components/ReadingProgressBar';
import { INITIAL_POSTS } from '@/data/posts';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INITIAL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = INITIAL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: `${post.title} | AbinerBlogTec`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = INITIAL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-[#F8FAFC]">
      <ReadingProgressBar />
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <article className="mx-auto max-w-prose px-4 sm:px-6">
          {/* Voltar */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Voltar para todos os artigos</span>
          </Link>

          {/* Post Header */}
          <header className="space-y-4 pb-8 border-b border-slate-800/80 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs font-medium text-emerald-400">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed italic">
              "{post.excerpt}"
            </p>
          </header>

          {/* Article Body */}
          <div className="space-y-6 text-base leading-relaxed text-slate-300">
            {post.content.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Code Snippets */}
            {post.content.codeSnippets?.map((snippet, idx) => (
              <CodeBlock
                key={idx}
                filename={snippet.filename}
                language={snippet.language}
                code={snippet.code}
              />
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/60 p-6 flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono font-bold">
              AC
            </div>
            <div>
              <h4 className="font-sans text-sm font-bold text-slate-100">Abiner Costa</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Desenvolvedor backend focado em arquitetura distribuída, Go, TypeScript e ecossistema Linux. Escrevendo sobre código prático e sistemas.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
