# 🧠 GEMINI.md — Registro Técnico & Roadmap

Este documento serve como a fonte da verdade técnica para o **AbinerBlogTec**, consolidando a arquitetura do projeto, decisões de engenharia e as diretrizes de evolução do ecossistema de desenvolvimento de Abiner Costa.

## 1. 🚀 Visão Geral
O **AbinerBlogTec** não é apenas um blog; é um manifesto de engenharia backend materializado em uma interface de alta performance. Ele funciona como o portfólio central e hub de documentação para o aprendizado contínuo do autor, priorizando a clareza técnica, a curiosidade científica e o compartilhamento de soluções para problemas reais de software.

## 2. 🛠 Stack Tecnológica
O projeto foi construído seguindo o princípio da "Simplicidade Robusta" (*Robust Simplicity*), utilizando:

- **HTML5 Semântico:** Estrutura otimizada para SEO e acessibilidade, garantindo que o conteúdo seja o protagonista.
- **CSS3 Moderno:** 
    - **Variáveis (`:root`):** Sistema de design centralizado para fácil manutenção de cores, espaçamentos e temas.
    - **Animações Complexas:** Uso de `@keyframes` e `cubic-bezier` para transições fluidas, *scroll reveal* e efeitos de profundidade (*orbs* e *noise overlay*).
    - **Layout:** Mix de Flexbox e CSS Grid para responsividade extrema sem dependências externas (Tailwind-free).
- **JavaScript Vanilla:** Lógica de renderização dinâmica de posts, controle de estado de modais e observadores de interseção (*Intersection Observer API*) para performance otimizada sem overhead de frameworks pesados no client-side.

## 3. 💎 Diferencial Técnico (Conexão EstoquePRO)
O blog herda e documenta os aprendizados críticos do **EstoquePRO**, o principal sistema de gestão híbrida desenvolvido pelo autor. As principais integrações conceituais incluem:

- **Arquitetura White-Label:** Refatoração do sistema para funcionar como um "camaleão", onde a identidade visual e comportamental é injetada via variáveis de ambiente e configurações de banco, permitindo múltiplas instâncias a partir de um único core.
- **Precisão Financeira:** Implementação de rigor matemático em transações utilizando `Decimal(10,2)` no Neon PostgreSQL via Prisma, mitigando os erros de ponto flutuante comuns em aplicações financeiras.
- **Performance Serverless:** Otimização de rotas de alta latência na Vercel através de:
    - Paginação eficiente de registros.
    - Paralelização de requisições de IO-bound utilizando `Promise.all`.
    - Cache estratégico de respostas.

## 4. 🧠 Instruções de Atualização
Este arquivo deve ser atualizado pelo **Gemini CLI** sempre que houver mudanças significativas no ecossistema, incluindo:
- Implementação de novos microsserviços em **Go (Golang)**.
- Conteinerização de partes da infraestrutura com **Docker**.
- Mudanças na estratégia de CI/CD ou infraestrutura (ex: migração para AWS/Azure).
- Refatorações profundas que alterem a stack frontend ou backend.

---
*Última atualização: Abril de 2026.*
