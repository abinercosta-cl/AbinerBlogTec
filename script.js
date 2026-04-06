/* ─── DADOS DO BLOG ─── */
const POSTS = [
  {
    id: 1,
    featured: true,
    category: "Segurança · Dev",
    title: "Como eu migrei meu SaaS de localStorage para JWT com HTTP-Only Cookies",
    excerpt: "Minha aplicação tinha um problema sério: autenticação no frontend com localStorage. Aqui está o passo a passo de como resolvi isso de forma limpa usando jose e middleware no Next.js.",
    content: `
      <div class="post-content">
        <p>A autenticação via <strong>localStorage</strong> é conveniente, mas perigosa. Qualquer script XSS pode roubar seus tokens. Neste artigo, mostro como migrei o <strong>EstoquePRO</strong> para uma arquitetura mais segura.</p>
        <h2>O Problema</h2>
        <p>Armazenar o JWT no <code>localStorage</code> deixava a aplicação vulnerável. Se um atacante conseguisse injetar um script simples, ele teria acesso total à sessão do usuário.</p>
        <h2>A Solução</h2>
        <p>A migração envolveu configurar o servidor para enviar o token via <strong>Set-Cookie</strong> com as flags <code>httpOnly</code>, <code>secure</code> e <code>sameSite: 'strict'</code>.</p>
        <p>No Next.js, usei a biblioteca <code>jose</code> para validar os tokens nos Middlewares, garantindo que o usuário nunca veja o token diretamente no JavaScript do cliente.</p>
      </div>
    `,
    date: "Abr 2026",
    readTime: "8 min",
    project: "EstoquePRO",
    icon: "🔐",
    link: "javascript:void(0)"
  },
  {
    id: 2,
    featured: false,
    category: "Go · Backend",
    title: "Por que Go é minha linguagem favorita para APIs REST",
    excerpt: "Velocidade, simplicidade e concorrência nativa. Depois de usar Python e Node.js por anos, Go mudou minha visão de como construir backends.",
    content: `
      <div class="post-content">
        <p>Depois de passar anos no ecossistema JavaScript e Python, descobri em <strong>Go</strong> (Golang) o equilíbrio perfeito entre performance e legibilidade.</p>
        <h2>Tipagem Forte e Simplicidade</h2>
        <p>Go não tenta ser complexo. Ele não tem herança de classes tradicional, o que força um design de sistema mais limpo baseado em interfaces e composição.</p>
        <h2>Concorrência Nativa</h2>
        <p>As <code>goroutines</code> são incrivelmente leves. Lidar com milhares de conexões simultâneas em uma API REST se torna uma tarefa trivial comparado ao modelo de threads tradicional.</p>
      </div>
    `,
    date: "Mar 2026",
    readTime: "5 min",
    icon: "🐹",
    gradient: "linear-gradient(135deg, #0f0020, rgba(30, 80, 20, 0.3))",
    link: "javascript:void(0)"
  }
];

/* ─── RENDERIZAR BLOG ─── */
function renderBlog() {
  const blogGrid = document.querySelector('.blog-grid');
  if (!blogGrid) return;

  blogGrid.innerHTML = POSTS.map(post => `
    <article class="post-card ${post.featured ? 'featured' : ''} reveal" data-id="${post.id}">
      <div class="post-card-img" style="${!post.featured ? 'height: 160px' : ''}">
        <div class="post-card-img-bg" style="${post.gradient ? `background: ${post.gradient}` : ''}"></div>
        <div class="post-icon" style="${!post.featured ? 'font-size: 3rem' : ''}">${post.icon}</div>
      </div>
      <div class="post-card-body">
        <div class="post-category">${post.category}</div>
        <h3 class="post-title">${post.title}</h3>
        <p class="post-excerpt">${post.excerpt}</p>
        <div class="post-meta">
          <span>${post.date}</span>
          <span class="post-meta-dot"></span>
          <span>${post.readTime} ${post.readTime.includes('leitura') ? '' : 'de leitura'}</span>
          ${post.project ? `<span class="post-meta-dot"></span><span>${post.project}</span>` : ''}
        </div>
        <br />
        <span class="post-read-more">Ler ${post.featured ? 'post' : ''} →</span>
      </div>
    </article>
  `).join('');

  // Adicionar eventos de clique
  document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-id');
      openPost(postId);
    });
  });
}

/* ─── LÓGICA DO MODAL ─── */
const modal = document.getElementById("post-modal");
const closeModal = document.querySelector(".close-modal");

function openPost(id) {
  const post = POSTS.find(p => p.id == id);
  if (!post) return;

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <div class="post-category">${post.category}</div>
    <h1 class="post-title">${post.title}</h1>
    <div class="post-meta" style="margin-bottom: 2rem;">
      <span>${post.date}</span> • <span>${post.readTime} de leitura</span>
    </div>
    ${post.content}
  `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Trava o scroll
}

if (closeModal) {
  closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

/* ─── SCROLL REVEAL ─── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderBlog();
  initScrollReveal();
});
