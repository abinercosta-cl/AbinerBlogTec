import Link from 'next/link';
import { Clock, Calendar, ArrowRight, Tag } from 'lucide-react';

export interface Post {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  slug: string;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-emerald-500/5 ${
        post.featured ? 'md:col-span-2 border-emerald-500/30 bg-slate-900/80' : ''
      }`}
    >
      <div>
        {/* Meta Info Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-400">
            <Tag className="h-3 w-3" />
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Post Title */}
        <h3 className="font-sans text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug mb-3">
          <Link href={`/posts/${post.slug}`} className="cursor-pointer">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed text-slate-400 line-clamp-3 mb-6">
          {post.excerpt}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
        >
          <span>Ler artigo completo</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
