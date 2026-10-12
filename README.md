# ⚡ WikiRace — JerryScript

> **O jogo definitivo de velocidade e estratégia na Wikipédia.**  
> Disponível em [jerryscript.me](https://jerryscript.me)

Inspirado no conceito de corrida da Wikipédia (popularizado por plataformas como *wiki-racing.com*), este projeto foi desenvolvido do zero para solucionar os principais gargalos de performance, usabilidade e design encontrados em outras implementações na web.

---

## 🚀 Principais Diferenciais e Otimizações

### 1. Performance Extrema e Sanitização
- **Zero Anúncios & Zero Rastreamento:** Carregamento ultra-leve em menos de 50ms.
- **Sanitização de DOM Inteligente:** Remove seções pesadas como referências (`[1][2]`), caixas de navegação gigantes (`.navbox`), tags de edição e scripts inúteis antes de renderizar.
- **Cache em Memória LRU:** Qualquer artigo visitado durante a corrida carrega em **0ms** ao voltar ou revisitar.
- **Lazy Loading de Mídia:** Imagens da Wikipédia carregam sob demanda conforme a rolagem do usuário.

### 2. Ergonomia e Usabilidade Mobile de Alto Nível
- **Hitboxes de Toque Amigáveis:** Links com espaçamento inteligente e área de clique confortável para polegares.
- **HUD Fixa Inferior:** Em celulares, o cronômetro, contador de cliques e ações ficam na base da tela para acesso fácil com uma só mão.
- **Infobox Colapsável:** Fichas técnicas não empurram mais o artigo 4 telas para baixo no celular; agora ficam reunidas em um cartão colapsável com um toque.
- **Tabelas com Rolagem Suave:** Envolvidas em containers responsivos que nunca quebram a largura da tela.

### 3. Busca Rápida de Links no Artigo (Link Finder)
- Chega de rolar infinitamente procurando onde está a palavra-chave!
- Pressione o ícone de busca flutuante ou o atalho `/` ou `Ctrl+F` para filtrar todos os links jogáveis do artigo em tempo real, com navegação passo a passo e chips rápidos de um toque.

### 4. Modos de Jogo
- ⭐ **Desafio Diário:** Um percurso determinístico novo a cada 24 horas, idêntico para todos os jogadores do mundo. Compartilhe seu resultado estilo Wordle com emojis!
- ⚡ **Corrida Rápida:** Partidas instantâneas calibradas em 3 níveis (Fácil, Médio, Difícil).
- 🎲 **Aleatório:** Sorteie artigos dinâmicos direto da Wikipédia para um desafio imprevisível.
- 🎯 **Desafio Personalizado:** Escolha qualquer artigo de largada e chegada com autocompletar ao vivo via OpenSearch API. Compartilhe o link gerado com amigos!

### 5. Polimento e Acessibilidade
- Efeitos sonoros sintetizados nativamente com a **Web Audio API** (sem arquivos externos de áudio pesados).
- Celebração com confetes dinâmicos em Canvas a 60 FPS.
- Temas Escuro e Claro com persistência em `localStorage`.
- Suporte bilíngue integrado: **Wikipédia em Português (PT)** e **Wikipedia em Inglês (EN)**.
- Atalhos de teclado no PC: `/` para buscar links, `Z` para voltar, `H` para espiar o objetivo, `Esc` para fechar modais.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5 Semântico & PWA Ready**
- **CSS3 Moderno** (Flexbox, Grid, Variáveis CSS, Glassmorphism, Safe Area Insets)
- **Vanilla JavaScript ES6+** (DOMParser, Web Audio API, Canvas API, Fetch API, LocalStorage)
- **Wikimedia APIs** (MediaWiki Action API & REST API)

---

Desenvolvido por [Richard Brito (JerryScript)](https://github.com/ScriptJerry) · Hospedado no GitHub Pages em [jerryscript.me](https://jerryscript.me).