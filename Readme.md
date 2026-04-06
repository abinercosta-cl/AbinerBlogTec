# 🟣 abiner.dev — Blog Pessoal

> _"Código, Curiosidade & Caos."_

Um blog pessoal feito do zero, focado em desenvolvimento backend, Linux e o universo digital.

---

## 🧭 Por que esse projeto existe?

Este blog é meu rastro digital. Um lugar para documentar o que aprendo (Go, TypeScript, Python), compartilhar curiosidades que me fascinam e mostrar o progresso dos meus sistemas, como o **EstoquePRO**.

---

## 🚀 Como rodar localmente

Não precisa de nada instalado. Basta abrir o `index.html` no seu navegador.

```bash
git clone https://github.com/abinercosta-cl/AbinerBlogTec
cd AbinerBlogTec
# Abra o index.html
```

---

## ✏️ Como atualizar o conteúdo

### Adicionar um novo post no blog (Dinâmico)

O blog utiliza renderização dinâmica via JavaScript. Para adicionar um post:

1. Abra o arquivo `script.js`.
2. Adicione um novo objeto ao array `const POSTS = [...]`:

```javascript
{
  id: 6, 
  featured: false, // true para destacar no topo
  category: "Backend · Go",
  title: "Meu novo artigo",
  excerpt: "Um breve resumo do que se trata o post.",
  content: `
    <div class="post-content">
      <p>Seu texto aqui. Use <strong>HTML</strong> para formatar.</p>
      <h2>Subtítulo</h2>
      <p>Conteúdo detalhado...</p>
    </div>
  `,
  date: "Maio 2026",
  readTime: "5 min",
  icon: "🐹",
  gradient: "linear-gradient(135deg, #0f0020, rgba(30, 80, 20, 0.3))",
  link: "javascript:void(0)"
}
```

### Adicionar uma nova curiosidade

No arquivo `index.html`, localize a `div.curio-grid` e adicione:

```html
<div class="curio-card reveal">
  <div class="curio-num">07</div>
  <div class="curio-title">Título da curiosidade</div>
  <p class="curio-text">Descrição do fato curioso.</p>
  <div class="curio-source">// fonte: Referência</div>
</div>
```

---

## 🏗️ Estrutura do projeto

- `index.html`: Estrutura base e containers dinâmicos.
- `style.css`: Design moderno (Dark Mode, Orbs, Noise) e responsividade.
- `script.js`: Motor do blog, dados dos posts e lógica do Modal de leitura.

---

## 📫 Contato

- **Email:** abinerclcosta@gmail.com
- **GitHub:** [@abinercosta-cl](https://github.com/abinercosta-cl)
- **Instagram:** [@\_abinerc](https://instagram.com/_abinerc)

---

<div align="center">
Feito com código e curiosidade em Santarém, PA 🇧🇷
</div>
