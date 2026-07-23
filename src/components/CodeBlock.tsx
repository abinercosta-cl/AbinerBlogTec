'use client';

import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  filename?: string;
  language?: string;
  code: string;
}

export function CodeBlock({ filename, language = 'bash', code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar código:', err);
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-800 bg-[#0B1120] shadow-2xl shadow-black/40">
      {/* Header do Bloco */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#080C14]/90 px-4 py-2.5 text-xs text-slate-400">
        <div className="flex items-center gap-2 font-mono">
          <div className="flex gap-1.5 mr-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-800 border border-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-800 border border-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-800 border border-slate-700" />
          </div>
          <Terminal className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-slate-300 font-medium">{filename || language}</span>
        </div>

        {/* Botão de Cópia */}
        <button
          onClick={handleCopy}
          className="flex cursor-pointer items-center gap-1.5 rounded-md border border-slate-700/60 bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300 transition-all duration-200 hover:border-emerald-500/40 hover:bg-slate-800 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Copiar trecho de código"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-400" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Conteúdo de Código */}
      <div className="code-scroll overflow-x-auto p-4 font-mono text-sm leading-relaxed text-slate-200">
        <pre className="selection:bg-emerald-500/30 selection:text-emerald-200">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}
