export interface PostData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: {
    paragraphs: string[];
    codeSnippets?: {
      filename: string;
      language: string;
      code: string;
    }[];
  };
}

export const INITIAL_POSTS: PostData[] = [
  {
    id: '1',
    slug: 'migracao-saas-jwt-http-only-cookies',
    title: 'Como migrei a autenticação do meu SaaS de localStorage para HTTP-Only Cookies',
    excerpt: 'Guardar JWT no localStorage é conveniente, mas perigoso contra ataques XSS. Veja o passo a passo de como resolvi isso de forma limpa usando jose e Middlewares no Next.js.',
    category: 'Segurança · Next.js',
    date: 'Abril 2026',
    readTime: '8 min',
    featured: true,
    content: {
      paragraphs: [
        'A autenticação via localStorage é uma das escolhas mais comuns no desenvolvimento frontend inicial. No entanto, ela apresenta uma vulnerabilidade crítica: qualquer script malicioso injetado via XSS (Cross-Site Scripting) possui acesso direto ao objeto localStorage do leitor, permitindo o roubo silencioso de tokens de acesso.',
        'Para resolver essa falha no EstoquePRO, migrei a estratégia para HTTP-Only Cookies. Com essa abordagem, o JavaScript do navegador fica fisicamente impedido de ler o cookie do token, mitigando 100% dos ataques de exfiltração de credenciais via XSS.',
        'Abaixo está a implementação prática do nosso middleware no Next.js App Router para verificação segura do token JWT em cada requisição:'
      ],
      codeSnippets: [
        {
          filename: 'middleware.ts',
          language: 'typescript',
          code: `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'secret-chave-segura');

export async function middleware(request: NextRequest) {
  // 1. Extrai o token do cookie HTTP-Only seguro
  const token = request.cookies.get('auth_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // 2. Valida o token de forma assíncrona com a lib 'jose'
    const { payload } = await jwtVerify(token, JWT_SECRET);
    
    // Injeta o ID do usuário verificado nos headers da requisição
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', payload.sub as string);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    // Token inválido ou expirado
    return NextResponse.redirect(new URL('/login?error=expired', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'],
};`
        }
      ]
    }
  },
  {
    id: '2',
    slug: 'porque-go-e-minha-linguagem-favorita-para-apis-rest',
    title: 'Por que Go é minha linguagem favorita para APIs REST de alta performance',
    excerpt: 'Velocidade de compilação, simplicidade e concorrência nativa com goroutines. Depois de anos com Node.js e Python, Go mudou minha percepção de arquitetura backend.',
    category: 'Go · Backend',
    date: 'Março 2026',
    readTime: '5 min',
    featured: false,
    content: {
      paragraphs: [
        'Depois de passar anos construindo serviços em Node.js e Python (FastAPI), encontrei em Go (Golang) o equilíbrio ideal entre performance bruta, baixo consumo de memória e clareza de código.',
        'Diferente de frameworks pesados de outras linguagens, a biblioteca padrão de Go (`net/http`) é tão robusta que permite criar servidores HTTP prontos para produção sem nenhuma dependência externa.',
        'Veja como criamos um servidor web simples com roteamento moderno e tratamento de graciosidade:'
      ],
      codeSnippets: [
        {
          filename: 'main.go',
          language: 'go',
          code: `package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

type Response struct {
	Message   string    \`json:"message"\`
	Status    int       \`json:"status"\`
	Timestamp time.Time \`json:"timestamp"\`
}

func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	res := Response{
		Message:   "API AbinerBlogTec rodando com sucesso em Go!",
		Status:    http.StatusOK,
		Timestamp: time.Now(),
	}

	_ = json.NewEncoder(w).Encode(res)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /health", healthCheckHandler)

	server := &http.Server{
		Addr:         ":8080",
		Handler:      mux,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	log.Println("🚀 Servidor Go iniciado na porta 8080...")
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Erro no servidor: %v", err)
	}
}`
        }
      ]
    }
  },
  {
    id: '3',
    slug: 'linux-e-produtividade-zsh-tmux-neovim',
    title: 'Meu setup de desenvolvimento no Linux: Zsh, Tmux e Neovim sem firulas',
    excerpt: 'Um guia prático de como configurei um ambiente de desenvolvimento ultra leve no Linux para navegar por projetos backend com o mínimo de atrito mental.',
    category: 'Linux · Workflow',
    date: 'Fevereiro 2026',
    readTime: '6 min',
    featured: false,
    content: {
      paragraphs: [
        'No Linux, a velocidade do seu ambiente de trabalho depende da simplicidade das suas ferramentas. Ao longo dos últimos 2 anos, eliminei o excesso de plugins visuais em favor de comandos diretos e atalhos de teclado ágeis.',
        'Minha combinação atual é composta por Zsh (com aliases estratégicos), Tmux para gerenciamento de sessões persistentes e Neovim para edição rápida de arquivos de configuração e código.'
      ],
      codeSnippets: [
        {
          filename: '~/.zshrc',
          language: 'bash',
          code: `# Alias estratégicos para navegação e produtividade
alias g="git"
alias gs="git status"
alias gd="git diff"
alias v="nvim"
alias lg="lazygit"

# Atalhos para o servidor de desenvolvimento
alias ddev="npm run dev"
alias goup="go run main.go"

# Atalho rápido para Tmux
tnew() {
  tmux new-session -s "\${1:-workspace}"
}`
        }
      ]
    }
  }
];
