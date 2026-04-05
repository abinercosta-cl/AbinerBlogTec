# 🟣 abiner.dev — Blog Pessoal

> _"Código, Curiosidade & Caos."_

Um blog pessoal feito do zero, sem framework, sem CMS, sem complicação. HTML, CSS e JS puros — porque às vezes a melhor ferramenta é a mais simples.

---

## 🧭 Por que esse projeto existe?

Comecei a programar sem curso, sem orientação e sem saber direito onde isso ia me levar. Fui aprendendo do jeito mais caótico possível — vídeo aqui, documentação ali, erro na linha 47, stack overflow, tenta de novo.

Com o tempo percebi que grande parte do que eu aprendia ficava só na minha cabeça. Não tinha onde registrar, não tinha como compartilhar, e quando eu precisava de algo que eu já tinha aprendido meses antes, precisava aprender tudo de novo do zero.

**Esse blog nasceu pra resolver isso.**

Não é um portfólio corporativo. Não é um site de agência. É um espaço honesto onde eu documento minha caminhada, escrevo o que aprendo, compartilho curiosidades que me fascinam e mostro os projetos que estou construindo — incluindo os que deram errado.

---

## 🗺️ Minha trajetória no mundo tech

Sou **Abiner Costa**, desenvolvedor backend de **Santarém, Pará**.

Cresci no interior da Amazônia, longe dos grandes centros tech do Brasil. Não tinha bootcamp na esquina, não tinha comunidade local de devs, não tinha ninguém do lado ensinando. O que eu tinha era internet, curiosidade e muita vontade de entender como as coisas funcionavam por baixo.

Comecei mexendo com Python — porque era o que aparecia primeiro quando eu pesquisava _"como aprender a programar"_. Depois veio JavaScript, depois Go, depois TypeScript. Cada linguagem abriu uma porta diferente: Python me mostrou automação, Go me mostrou performance e eficiência, TypeScript me mostrou que código pode ser seguro e previsível.

Hoje trabalho principalmente com **backend**, construindo APIs, sistemas de gestão e ferramentas que resolvem problemas reais. Meu projeto atual é o **EstoquePRO** — um sistema de PDV e gestão de estoque para negócios híbridos, construído com Next.js, TypeScript, Prisma e SQLite.

Uso Linux no dia a dia (Manjaro), tenho um setup com Tmux no Android via Termux pra codar de onde estiver, e tenho uma relação amor-ódio com configurações de rede e servidores domésticos.

---

## 🎯 O que você vai encontrar aqui

### 📝 Blog

Posts técnicos e pessoais sobre o que estou aprendendo, construindo e quebrando. Sem perfumaria — vai direto ao ponto.

Tópicos recorrentes:

- Backend com Go e Node.js
- Arquitetura de sistemas e decisões técnicas
- Linux, terminal e setup de desenvolvimento
- Segurança em aplicações web
- SaaS e produto — a visão de quem constrói sozinho

### 🔬 Curiosidades

Fatos sobre tecnologia, internet, história da computação e ciência que me deixam acordado à noite pensando. Coisas que você não aprende em tutorial nenhum mas que mudam como você enxerga o mundo digital.

### 🛠️ Projetos de Estudo

À medida que aprendo tecnologias novas, vou construindo projetos pequenos e focados pra solidificar o conhecimento. Cada um vem com:

- O que motivou o projeto
- O que aprendi construindo
- Link para o repositório
- Pontos de melhoria futura

Não são projetos perfeitos. São projetos reais, com commits feios, decisões questionáveis e comentários do tipo `// arrumar depois`. Exatamente como é aprender de verdade.

---

## 🏗️ Estrutura do projeto

```
📁 blog/
├── index.html    → estrutura e conteúdo das páginas
├── style.css     → todo o visual (14 seções comentadas)
└── script.js     → comportamentos e interações
```

O projeto foi construído intencionalmente **sem dependências**. Sem npm, sem build step, sem configuração. Abre o `index.html` no navegador e funciona.

### Stack

| Camada    | Tecnologia                                                 |
| --------- | ---------------------------------------------------------- |
| Estrutura | HTML5 semântico                                            |
| Estilos   | CSS3 puro (variáveis, grid, animações)                     |
| Scripts   | JavaScript vanilla                                         |
| Fontes    | Google Fonts (Syne + Lora + JetBrains Mono)                |
| Deploy    | Qualquer servidor estático (Netlify, Vercel, GitHub Pages) |

### Paleta de cores

```css
--bg: #07000f /* preto com tom roxo — fundo principal */ --bg2: #0f0020
  /* roxo escuro — fundo de seções alternadas */ --card: #110022
  /* roxo profundo — cards e superfícies */ --purple: #8b5cf6
  /* roxo médio — cor de destaque */ --purple2: #a78bfa
  /* roxo claro — links e labels */ --purple3: #c4b5fd
  /* lavanda — textos de destaque */ --white: #f5f0ff
  /* branco com toque roxo — texto principal */ --muted: #a89ec0
  /* cinza-roxo — texto secundário */;
```

---

## 🚀 Como rodar localmente

Não precisa de nada instalado.

```bash
# Clone o repositório
git clone https://github.com/abinercosta-cl/blog

# Abra a pasta
cd blog

# Abra no navegador
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Ou simplesmente arraste o `index.html` para o navegador.

---

## ✏️ Como atualizar o conteúdo

### Adicionar um novo post no blog

No `index.html`, dentro da `div.blog-grid`, copie e cole o bloco abaixo e edite:

```html
<a href="#" class="post-card reveal">
  <div class="post-card-img" style="height: 160px;">
    <div
      class="post-card-img-bg"
      style="background: linear-gradient(135deg, #0f0020, rgba(80,0,80,0.3));"
    ></div>
    <div class="post-icon" style="font-size: 3rem;">🔧</div>
    <!-- troque o emoji -->
  </div>
  <div class="post-card-body">
    <div class="post-category">Categoria · Subcategoria</div>
    <h3 class="post-title">Título do post aqui</h3>
    <p class="post-excerpt">Descrição curta do post — 2 a 3 frases.</p>
    <div class="post-meta">
      <span>Mês Ano</span>
      <span class="post-meta-dot"></span>
      <span>X min</span>
    </div>
    <br />
    <span class="post-read-more">Ler →</span>
  </div>
</a>
```

### Adicionar uma nova curiosidade

Na `div.curio-grid`, copie e edite:

```html
<div class="curio-card reveal">
  <div class="curio-num">07</div>
  <!-- próximo número -->
  <div class="curio-title">Título da curiosidade</div>
  <p class="curio-text">Texto explicativo da curiosidade aqui.</p>
  <div class="curio-source">// fonte: Nome da fonte</div>
</div>
```

### Mudar as cores

Tudo está centralizado no topo do `style.css` nas variáveis CSS. Basta editar os valores do bloco `:root {}` e a mudança se propaga pelo site inteiro.

---

## 📌 Projetos em destaque

| Projeto                                                      | Descrição                       | Stack                     | Status                |
| ------------------------------------------------------------ | ------------------------------- | ------------------------- | --------------------- |
| [EstoquePRO](https://github.com/abinercosta-cl/EstoquePRO)   | Sistema POS e gestão de estoque | Next.js · Prisma · SQLite | 🟡 Em desenvolvimento |
| [api_rest_go](https://github.com/abinercosta-cl/api_rest_go) | API REST com Go                 | Go                        | ✅ Concluído          |
| [Sorteio_APP](https://github.com/abinercosta-cl/Sorteio_APP) | Sistema de sorteio financeiro   | Python                    | ✅ Concluído          |
| [nlw_pocket](https://github.com/abinercosta-cl/nlw_pocket)   | Projeto NLW Rocketseat          | JavaScript                | ✅ Concluído          |

---

## 🗺️ Roadmap

Coisas que quero adicionar com o tempo:

- [ ] Página individual para cada post
- [ ] Seção de projetos de estudo com cards detalhados
- [ ] Filtro de posts por categoria
- [ ] Sistema de busca simples (JS puro)
- [ ] Feed RSS para os posts
- [ ] Menu mobile com hamburger
- [ ] Dark/light mode toggle
- [ ] Contador de tempo de leitura estimado

---

## 🤝 Contribuições

Esse é um projeto pessoal, mas se você encontrou um bug, quer sugerir algo ou só quer trocar ideia sobre o código — abre uma issue ou me manda mensagem.

---

## 📫 Contato

- **Email:** abinerclcosta@gmail.com
- **GitHub:** [@abinercosta-cl](https://github.com/abinercosta-cl)
- **Instagram:** [@\_abinerc](https://instagram.com/_abinerc)

---

<div align="center">

Feito com código e curiosidade em **Santarém, Pará 🇧🇷**

_"Não importa de onde você é. Importa o que você constrói."_

</div>
