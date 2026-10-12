/**
 * WikiRace JerryScript (jerryscript.me)
 * Motor principal de jogo, sanitizador de Wikipédia e sintetizador de áudio.
 */

(() => {
  'use strict';

  // ==========================================================================
  // 1. BANCO DE DADOS DE CORRIDAS CURADAS (PT & EN)
  // ==========================================================================
  const CURATED_RACES = {
    pt: {
      easy: [
        { start: 'Albert Einstein', target: 'Física' },
        { start: 'Brasil', target: 'Futebol' },
        { start: 'Pizza', target: 'Itália' },
        { start: 'Cinema', target: 'Hollywood' },
        { start: 'Minecraft', target: 'Suécia' },
        { start: 'Taylor Swift', target: 'Música pop' },
        { start: 'Steve Jobs', target: 'Apple Inc.' }
      ],
      medium: [
        { start: 'Albert Einstein', target: 'Buraco negro' },
        { start: 'Brasil', target: 'Café' },
        { start: 'Roma Antiga', target: 'Internet' },
        { start: 'Leonardo da Vinci', target: 'Helicóptero' },
        { start: 'Chocolate', target: 'Astecas' },
        { start: 'Beatles', target: 'Submarino' },
        { start: 'Machado de Assis', target: 'Rio de Janeiro' },
        { start: 'DNA', target: 'Clonagem' },
        { start: 'Marie Curie', target: 'Raio X' },
        { start: 'Aristóteles', target: 'Inteligência artificial' }
      ],
      hard: [
        { start: 'Cleópatra', target: 'Satélite artificial' },
        { start: 'Mecânica quântica', target: 'Pinguim-imperador' },
        { start: 'Platão', target: 'PlayStation' },
        { start: 'Monalisa', target: 'Corrida espacial' },
        { start: 'Canguru', target: 'Revolução Francesa' },
        { start: 'Samurai', target: 'Teoria da relatividade' },
        { start: 'Vulcão', target: 'Bolsa de valores' }
      ]
    },
    en: {
      easy: [
        { start: 'Albert Einstein', target: 'Physics' },
        { start: 'Brazil', target: 'Football' },
        { start: 'Pizza', target: 'Italy' },
        { start: 'Cinema', target: 'Hollywood' },
        { start: 'Minecraft', target: 'Sweden' },
        { start: 'Taylor Swift', target: 'Pop music' },
        { start: 'Steve Jobs', target: 'Apple Inc.' }
      ],
      medium: [
        { start: 'Albert Einstein', target: 'Black hole' },
        { start: 'Brazil', target: 'Coffee' },
        { start: 'Ancient Rome', target: 'Internet' },
        { start: 'Leonardo da Vinci', target: 'Helicopter' },
        { start: 'Chocolate', target: 'Aztecs' },
        { start: 'The Beatles', target: 'Submarine' },
        { start: 'DNA', target: 'Cloning' },
        { start: 'Marie Curie', target: 'X-ray' },
        { start: 'Aristotle', target: 'Artificial intelligence' }
      ],
      hard: [
        { start: 'Cleopatra', target: 'Artificial satellite' },
        { start: 'Quantum mechanics', target: 'Emperor penguin' },
        { start: 'Plato', target: 'PlayStation' },
        { start: 'Mona Lisa', target: 'Space Race' },
        { start: 'Kangaroo', target: 'French Revolution' },
        { start: 'Samurai', target: 'Theory of relativity' },
        { start: 'Volcano', target: 'Stock exchange' }
      ]
    }
  };

  // Desafios diários pré-computados
  const DAILY_CHALLENGES = {
    pt: [
      { start: 'Albert Einstein', target: 'Buraco negro' },
      { start: 'Brasil', target: 'Café' },
      { start: 'Leonardo da Vinci', target: 'Helicóptero' },
      { start: 'Roma Antiga', target: 'Internet' },
      { start: 'Aristóteles', target: 'Inteligência artificial' },
      { start: 'Pizza', target: 'Marte' },
      { start: 'Taylor Swift', target: 'Dinossauro' },
      { start: 'Cleópatra', target: 'Pirâmides de Gizé' },
      { start: 'Futebol', target: 'Japão' },
      { start: 'Minecraft', target: 'Suécia' },
      { start: 'Chocolate', target: 'Astecas' },
      { start: 'Teoria da relatividade', target: 'Satélite artificial' },
      { start: 'Marie Curie', target: 'Raio X' },
      { start: 'Beatles', target: 'Submarino' },
      { start: 'Mitologia grega', target: 'PlayStation' },
      { start: 'Amazônia', target: 'Oxigênio' },
      { start: 'Steve Jobs', target: 'Caligrafia' },
      { start: 'William Shakespeare', target: 'Hollywood' },
      { start: 'Machado de Assis', target: 'Rio de Janeiro' },
      { start: 'Oceano', target: 'Monte Everest' }
    ],
    en: [
      { start: 'Albert Einstein', target: 'Black hole' },
      { start: 'Brazil', target: 'Coffee' },
      { start: 'Leonardo da Vinci', target: 'Helicopter' },
      { start: 'Ancient Rome', target: 'Internet' },
      { start: 'Aristotle', target: 'Artificial intelligence' },
      { start: 'Pizza', target: 'Mars' },
      { start: 'Taylor Swift', target: 'Dinosaur' },
      { start: 'Cleopatra', target: 'Giza pyramid complex' },
      { start: 'Football', target: 'Japan' },
      { start: 'Minecraft', target: 'Sweden' },
      { start: 'Chocolate', target: 'Aztecs' },
      { start: 'Theory of relativity', target: 'Artificial satellite' },
      { start: 'Marie Curie', target: 'X-ray' },
      { start: 'The Beatles', target: 'Submarine' },
      { start: 'Greek mythology', target: 'PlayStation' },
      { start: 'Amazon rainforest', target: 'Oxygen' },
      { start: 'Steve Jobs', target: 'Calligraphy' },
      { start: 'William Shakespeare', target: 'Hollywood' },
      { start: 'Ocean', target: 'Mount Everest' }
    ]
  };

  // ==========================================================================
  // 2. SERVIÇO DE ÁUDIO SINTETIZADO (Web Audio API)
  // ==========================================================================
  class SoundService {
    constructor() {
      this.ctx = null;
      this.enabled = localStorage.getItem('wikirace_sound') !== 'false';
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('wikirace_sound', this.enabled ? 'true' : 'false');
      return this.enabled;
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }

    playUndo() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
      } catch (e) {}
    }

    playWin() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const startTime = this.ctx.currentTime + idx * 0.12;
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0.2, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.45);
        });
      } catch (e) {}
    }
  }

  // ==========================================================================
  // 3. EFEITO DE CONFETES EM CANVAS (Leve & 60 FPS)
  // ==========================================================================
  class ConfettiService {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
      this.particles = [];
      this.animId = null;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    explode(count = 90) {
      if (!this.canvas || !this.ctx) return;
      this.resize();
      this.particles = [];
      const colors = ['#6366f1', '#a855f7', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#f43f5e'];

      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
          y: this.canvas.height * 0.35 + (Math.random() - 0.5) * 80,
          vx: (Math.random() - 0.5) * 14,
          vy: (Math.random() - 0.85) * 16,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 1
        });
      }

      if (this.animId) cancelAnimationFrame(this.animId);
      this.animate();
    }

    animate() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      let alive = false;
      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravidade
        p.vx *= 0.98; // arrasto
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.007;

        if (p.opacity > 0 && p.y < this.canvas.height) {
          alive = true;
          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rotation * Math.PI) / 180);
          this.ctx.fillStyle = p.color;
          this.ctx.globalAlpha = Math.max(0, p.opacity);
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
          this.ctx.restore();
        }
      }

      if (alive) {
        this.animId = requestAnimationFrame(() => this.animate());
      } else {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  // ==========================================================================
  // 4. SERVIÇO DE INTEGRAÇÃO COM A WIKIPÉDIA (API & SANITIZAÇÃO)
  // ==========================================================================
  class WikipediaService {
    constructor() {
      this.cache = new Map(); // Cache em memória LRU (acesso instantâneo 0ms)
      this.maxCacheSize = 60;
    }

    getApiBase(lang = 'pt') {
      return `https://${lang}.wikipedia.org`;
    }

    normalizeTitle(title) {
      if (!title) return '';
      return decodeURIComponent(title.replace(/_/g, ' ')).trim();
    }

    compareTitles(t1, t2) {
      if (!t1 || !t2) return false;
      const clean1 = this.normalizeTitle(t1).toLowerCase();
      const clean2 = this.normalizeTitle(t2).toLowerCase();
      return clean1 === clean2;
    }

    async fetchSummary(title, lang = 'pt') {
      const clean = encodeURIComponent(title.replace(/ /g, '_'));
      const url = `${this.getApiBase(lang)}/api/rest_v1/page/summary/${clean}`;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Summary error: ${res.status}`);
        return await res.json();
      } catch (err) {
        return {
          title: title,
          description: '',
          extract: 'Não foi possível carregar o resumo prévio.'
        };
      }
    }

    async getRandomArticle(lang = 'pt') {
      const url = `${this.getApiBase(lang)}/api/rest_v1/page/random/summary`;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Random fetch error');
        const data = await res.json();
        return data.title;
      } catch (err) {
        return lang === 'pt' ? 'Brasil' : 'United States';
      }
    }

    async searchArticles(query, lang = 'pt') {
      if (!query || query.trim().length < 2) return [];
      const url = `${this.getApiBase(lang)}/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=6&namespace=0&format=json&origin=*`;
      try {
        const res = await fetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        return data[1] || [];
      } catch (err) {
        return [];
      }
    }

    /**
     * Busca o artigo completo, filtra nós pesados e reescreve links.
     */
    async fetchArticle(title, lang = 'pt') {
      const cacheKey = `${lang}:${this.normalizeTitle(title)}`;
      if (this.cache.has(cacheKey)) {
        return this.cache.get(cacheKey);
      }

      const encoded = encodeURIComponent(title.replace(/ /g, '_'));
      const url = `${this.getApiBase(lang)}/w/api.php?action=parse&page=${encoded}&prop=text|displaytitle&redirects=1&format=json&origin=*`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro ao buscar página (${response.status})`);
      }

      const data = await response.json();
      if (data.error || !data.parse) {
        throw new Error(data.error ? data.error.info : 'Página não encontrada');
      }

      const canonicalTitle = data.parse.title || title;
      const rawHtml = data.parse.text['*'];

      // Sanitiza e otimiza o DOM
      const sanitized = this.cleanAndOptimizeHtml(rawHtml, lang);

      const result = {
        title: canonicalTitle,
        html: sanitized.html,
        linksCount: sanitized.linksCount,
        validLinks: sanitized.validLinks
      };

      // Gerencia tamanho do cache
      if (this.cache.size >= this.maxCacheSize) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
      this.cache.set(cacheKey, result);

      return result;
    }

    cleanAndOptimizeHtml(rawHtml, lang) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawHtml, 'text/html');

      // 1. Remove elementos desnecessários e pesados
      const selectorsToRemove = [
        'sup.reference',
        '.reference',
        '.reflist',
        '.mw-editsection',
        '.catlinks',
        '.navbox',
        '.sidebar',
        '.vertical-navbox',
        '.infobox-navbar',
        '.portal',
        '.metadata',
        '.ambox',
        '.hatnote',
        '.noprint',
        '.mw-jump-link',
        'script',
        'style',
        'link',
        '.mw-empty-elt',
        '#toc',
        '.toc',
        '.citation-needed',
        '.mbox-small',
        '.magnify',
        '.mw-indicators',
        '.mw-cite-backlink',
        '.mw-references-wrap',
        '#References',
        '#Notas',
        '#Ligações_externas',
        '#Ver_também',
        '#Bibliografia'
      ];

      doc.querySelectorAll(selectorsToRemove.join(', ')).forEach(el => el.remove());

      // 2. Remove seções inteiras de notas / referências no final
      const headings = doc.querySelectorAll('h2, h3');
      headings.forEach(heading => {
        const text = heading.textContent.toLowerCase();
        if (
          text.includes('referência') ||
          text.includes('referencia') ||
          text.includes('reference') ||
          text.includes('ligações externas') ||
          text.includes('external links') ||
          text.includes('ver também') ||
          text.includes('see also') ||
          text.includes('notas') ||
          text.includes('notes')
        ) {
          let curr = heading.nextElementSibling;
          while (curr && !['H2', 'H3'].includes(curr.tagName)) {
            const next = curr.nextElementSibling;
            curr.remove();
            curr = next;
          }
          heading.remove();
        }
      });

      // 3. Ajusta imagens (HTTPS e Lazy Loading)
      doc.querySelectorAll('img').forEach(img => {
        let src = img.getAttribute('src');
        if (src) {
          if (src.startsWith('//')) {
            src = 'https:' + src;
          }
          img.setAttribute('src', src);
          img.setAttribute('loading', 'lazy');
          img.removeAttribute('srcset'); // evita sobrecarga de resoluções gigantes
        }
      });

      // 4. Envolve tabelas em containers responsivos para rolagem suave
      doc.querySelectorAll('table').forEach(table => {
        if (!table.closest('.infobox') && !table.closest('.infobox-accordion')) {
          const wrapper = doc.createElement('div');
          wrapper.className = 'table-responsive-wrapper';
          table.parentNode.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
      });

      // 5. Transforma infobox em accordion colapsável (melhoria drástica para Mobile!)
      const infobox = doc.querySelector('.infobox, .infobox_v2');
      if (infobox) {
        const details = doc.createElement('details');
        details.className = 'infobox-accordion';
        
        const summary = doc.createElement('summary');
        summary.className = 'infobox-summary';
        summary.innerHTML = '<span>📊 Ficha Técnica / Informações Rápidas</span><span>▼</span>';
        
        const inner = doc.createElement('div');
        inner.className = 'infobox-inner';

        infobox.parentNode.insertBefore(details, infobox);
        details.appendChild(summary);
        inner.appendChild(infobox);
        details.appendChild(inner);
      }

      // 6. Higieniza links e transforma em links jogáveis
      const validLinks = new Set();
      const forbiddenPrefixes = [
        'ficheiro:', 'file:', 'ajuda:', 'help:', 'categoria:', 'category:',
        'especial:', 'special:', 'template:', 'predefinição:', 'portal:',
        'discussão:', 'talk:', 'wikipédia:', 'wikipedia:'
      ];

      doc.querySelectorAll('a').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (!href) {
          anchor.replaceWith(...anchor.childNodes);
          return;
        }

        // Detecta link interno de artigo
        let targetTitle = null;
        if (href.startsWith('/wiki/')) {
          targetTitle = href.substring(6);
        } else if (href.startsWith('./')) {
          targetTitle = href.substring(2);
        }

        if (targetTitle) {
          // Remove âncoras como #História
          targetTitle = targetTitle.split('#')[0];
          try {
            targetTitle = decodeURIComponent(targetTitle);
          } catch (e) {}

          const lower = targetTitle.toLowerCase();
          const isForbidden = forbiddenPrefixes.some(prefix => lower.startsWith(prefix));

          if (!isForbidden && targetTitle.trim().length > 0) {
            const cleanTitle = targetTitle.replace(/_/g, ' ');
            anchor.setAttribute('href', '#');
            anchor.setAttribute('data-wiki-target', cleanTitle);
            anchor.className = 'wiki-game-link';
            validLinks.add(cleanTitle);
            return;
          }
        }

        // Se for link externo, âncora ou namespace proibido, desativa
        anchor.removeAttribute('href');
        anchor.style.pointerEvents = 'none';
        anchor.style.color = 'inherit';
        anchor.style.textDecoration = 'none';
      });

      return {
        html: doc.body.innerHTML,
        linksCount: validLinks.size,
        validLinks: Array.from(validLinks)
      };
    }
  }

  // ==========================================================================
  // 5. CONTROLADOR DO FILTRO/BUSCA RÁPIDA DE LINKS (Mobile & PC)
  // ==========================================================================
  class LinkFilterController {
    constructor(articleBodyEl, onLinkSelected) {
      this.articleBody = articleBodyEl;
      this.onLinkSelected = onLinkSelected;
      this.drawer = document.getElementById('link-search-drawer');
      this.input = document.getElementById('link-search-input');
      this.counter = document.getElementById('search-counter');
      this.clearBtn = document.getElementById('btn-clear-search');
      this.prevBtn = document.getElementById('btn-prev-match');
      this.nextBtn = document.getElementById('btn-next-match');
      this.closeBtn = document.getElementById('btn-close-search');
      this.chipsContainer = document.getElementById('search-results-list');

      this.matches = [];
      this.currentIndex = -1;

      this.bindEvents();
    }

    bindEvents() {
      this.input.addEventListener('input', () => this.handleSearch());
      this.clearBtn.addEventListener('click', () => {
        this.input.value = '';
        this.clearBtn.hidden = true;
        this.handleSearch();
        this.input.focus();
      });

      this.prevBtn.addEventListener('click', () => this.navigateMatch(-1));
      this.nextBtn.addEventListener('click', () => this.navigateMatch(1));
      this.closeBtn.addEventListener('click', () => this.hide());

      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (e.shiftKey) this.navigateMatch(-1);
          else this.navigateMatch(1);
        } else if (e.key === 'Escape') {
          this.hide();
        }
      });
    }

    show() {
      this.drawer.hidden = false;
      this.input.focus();
      this.input.select();
      if (this.input.value.trim()) {
        this.handleSearch();
      }
    }

    hide() {
      this.drawer.hidden = true;
      this.clearHighlights();
    }

    toggle() {
      if (this.drawer.hidden) this.show();
      else this.hide();
    }

    clearHighlights() {
      const highlighted = this.articleBody.querySelectorAll('.link-matched, .link-matched-active');
      highlighted.forEach(el => {
        el.classList.remove('link-matched', 'link-matched-active');
      });
      this.matches = [];
      this.currentIndex = -1;
      this.counter.textContent = '0 encontrados';
      this.prevBtn.disabled = true;
      this.nextBtn.disabled = true;
      this.chipsContainer.hidden = true;
      this.chipsContainer.innerHTML = '';
    }

    handleSearch() {
      const query = this.input.value.trim().toLowerCase();
      this.clearBtn.hidden = query.length === 0;

      if (!query || query.length < 2) {
        this.clearHighlights();
        return;
      }

      this.clearHighlights();
      const allLinks = Array.from(this.articleBody.querySelectorAll('.wiki-game-link'));
      const matchingLinks = [];
      const uniqueTargets = new Set();

      allLinks.forEach(link => {
        const target = (link.getAttribute('data-wiki-target') || '').toLowerCase();
        const text = link.textContent.toLowerCase();

        if (target.includes(query) || text.includes(query)) {
          link.classList.add('link-matched');
          matchingLinks.push(link);
          uniqueTargets.add(link.getAttribute('data-wiki-target'));
        }
      });

      this.matches = matchingLinks;

      if (this.matches.length > 0) {
        this.counter.textContent = `${this.matches.length} link${this.matches.length > 1 ? 's' : ''}`;
        this.prevBtn.disabled = false;
        this.nextBtn.disabled = false;
        this.currentIndex = 0;
        this.highlightActiveMatch();

        // Popula os chips rápidos para toque com o polegar no mobile
        this.populateChips(Array.from(uniqueTargets).slice(0, 12));
      } else {
        this.counter.textContent = 'Nenhum link';
      }
    }

    populateChips(targets) {
      this.chipsContainer.innerHTML = '';
      if (targets.length === 0) {
        this.chipsContainer.hidden = true;
        return;
      }

      targets.forEach(target => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'search-chip';
        chip.textContent = target;
        chip.addEventListener('click', () => {
          this.hide();
          this.onLinkSelected(target);
        });
        this.chipsContainer.appendChild(chip);
      });

      this.chipsContainer.hidden = false;
    }

    navigateMatch(direction) {
      if (this.matches.length === 0) return;
      this.currentIndex = (this.currentIndex + direction + this.matches.length) % this.matches.length;
      this.highlightActiveMatch();
    }

    highlightActiveMatch() {
      this.matches.forEach((el, idx) => {
        if (idx === this.currentIndex) {
          el.classList.add('link-matched-active');
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          el.classList.remove('link-matched-active');
        }
      });
      this.counter.textContent = `${this.currentIndex + 1} de ${this.matches.length}`;
    }
  }

  // ==========================================================================
  // 6. GERENCIADOR DO JOGO (Race Engine)
  // ==========================================================================
  class WikiRaceApp {
    constructor() {
      this.wiki = new WikipediaService();
      this.sound = new SoundService();
      this.confetti = new ConfettiService('confetti-canvas');

      // Estado do Jogo
      this.lang = localStorage.getItem('wikirace_lang') || 'pt';
      this.state = 'LOBBY'; // LOBBY, RACING, WON
      this.startTitle = '';
      this.targetTitle = '';
      this.currentTitle = '';
      this.history = []; // [{ title, timeFormatted }]
      this.clicksCount = 0;
      this.startTime = null;
      this.timerInterval = null;
      this.elapsedMs = 0;
      this.targetSummaryCache = null;

      this.initDom();
      this.initEventListeners();
      this.initDailyChallengePreview();
      this.applySavedTheme();
      this.checkUrlParameters();
    }

    initDom() {
      // Views
      this.viewLobby = document.getElementById('view-lobby');
      this.viewGame = document.getElementById('view-game');

      // HUD
      this.hudTargetBtn = document.getElementById('hud-target-btn');
      this.hudTargetTitle = document.getElementById('hud-target-title');
      this.hudClicksCount = document.getElementById('hud-clicks-count');
      this.hudTimer = document.getElementById('hud-timer');
      this.btnHudFilter = document.getElementById('btn-hud-filter');
      this.btnHudUndo = document.getElementById('btn-hud-undo');
      this.btnHudPath = document.getElementById('btn-hud-path');
      this.btnHudGiveup = document.getElementById('btn-hud-giveup');
      this.fabSearch = document.getElementById('fab-search');

      // Artigo
      this.articleTitle = document.getElementById('article-title');
      this.articleBody = document.getElementById('article-body');
      this.articleSourceLink = document.getElementById('article-source-link');
      this.articleBreadcrumbs = document.getElementById('article-breadcrumbs');
      this.crumbStart = document.getElementById('crumb-start');
      this.crumbCurrent = document.getElementById('crumb-current');
      this.skeletonLoader = document.getElementById('skeleton-loader');
      this.articleError = document.getElementById('article-error');
      this.btnRetryFetch = document.getElementById('btn-retry-fetch');
      this.articleLangBadge = document.getElementById('article-lang-badge');

      // Modais
      this.modalVictory = document.getElementById('modal-victory');
      this.modalTargetPeek = document.getElementById('modal-target-peek');
      this.modalPathHistory = document.getElementById('modal-path-history');
      this.modalStats = document.getElementById('modal-stats');
      this.modalHelp = document.getElementById('modal-help');

      // Link Filter
      this.linkFilter = new LinkFilterController(this.articleBody, (title) => this.navigateTo(title));
    }

    initEventListeners() {
      // Alternador de Idioma
      document.getElementById('btn-lang-pt').addEventListener('click', () => this.setLanguage('pt'));
      document.getElementById('btn-lang-en').addEventListener('click', () => this.setLanguage('en'));

      // Som e Tema
      document.getElementById('btn-toggle-sound').addEventListener('click', () => {
        const isSoundOn = this.sound.toggle();
        document.getElementById('sound-icon').textContent = isSoundOn ? '🔊' : '🔇';
        this.showToast(isSoundOn ? 'Som ativado' : 'Som desativado');
      });

      document.getElementById('btn-toggle-theme').addEventListener('click', () => {
        const isLight = document.body.classList.toggle('theme-light');
        localStorage.setItem('wikirace_theme', isLight ? 'light' : 'dark');
        document.getElementById('theme-icon').textContent = isLight ? '☀️' : '🌙';
      });

      // Abrir Modais do Topo
      document.getElementById('btn-open-stats').addEventListener('click', () => this.showStatsModal());
      document.getElementById('btn-open-help').addEventListener('click', () => this.openModal(this.modalHelp));
      document.getElementById('brand-link').addEventListener('click', (e) => {
        e.preventDefault();
        if (this.state === 'RACING') {
          if (confirm('Deseja abandonar a corrida atual e voltar ao menu?')) {
            this.returnToLobby();
          }
        } else {
          this.returnToLobby();
        }
      });

      // Fechar Modais via botão com data-close
      document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-close');
          const modal = document.getElementById(targetId);
          if (modal) this.closeModal(modal);
        });
      });

      // Fechar modais ao clicar no fundo escuro
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeModal(modal);
        });
      });

      // Botões do Lobby
      document.getElementById('btn-play-daily').addEventListener('click', () => this.startDailyChallenge());
      document.getElementById('btn-play-quick').addEventListener('click', () => this.startQuickRace());
      document.getElementById('btn-play-random').addEventListener('click', () => this.startRandomRace());
      document.getElementById('btn-play-custom').addEventListener('click', () => this.startCustomRace());

      // Dificuldades
      document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });

      // Autocomplete de Desafio Personalizado
      this.setupAutocomplete('custom-start-input', 'start-autocomplete-list');
      this.setupAutocomplete('custom-target-input', 'target-autocomplete-list');

      // Ações da HUD
      this.hudTargetBtn.addEventListener('click', () => this.openTargetPeekModal());
      this.btnHudFilter.addEventListener('click', () => this.linkFilter.toggle());
      this.fabSearch.addEventListener('click', () => this.linkFilter.toggle());
      this.btnHudUndo.addEventListener('click', () => this.undoLastStep());
      this.btnHudPath.addEventListener('click', () => this.openPathHistoryModal());
      this.btnHudGiveup.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja desistir desta corrida?')) {
          this.returnToLobby();
        }
      });

      // Tentar novamente em caso de erro
      this.btnRetryFetch.addEventListener('click', () => this.loadArticle(this.currentTitle));

      // Modal de Vitória
      document.getElementById('btn-share-result').addEventListener('click', () => this.shareResult());
      document.getElementById('btn-play-again').addEventListener('click', () => {
        this.closeModal(this.modalVictory);
        this.startQuickRace();
      });
      document.getElementById('btn-return-lobby').addEventListener('click', () => {
        this.closeModal(this.modalVictory);
        this.returnToLobby();
      });

      // Resetar Estatísticas
      document.getElementById('btn-reset-stats').addEventListener('click', () => {
        if (confirm('Tem certeza que deseja zerar todas as suas estatísticas?')) {
          localStorage.removeItem('wikirace_stats');
          this.showStatsModal();
          this.showToast('Estatísticas zeradas com sucesso');
        }
      });

      // Delegação de cliques em links de artigos
      this.articleBody.addEventListener('click', (e) => {
        const link = e.target.closest('.wiki-game-link');
        if (link) {
          e.preventDefault();
          const target = link.getAttribute('data-wiki-target');
          if (target) {
            this.sound.playClick();
            this.navigateTo(target);
          }
        }
      });

      // Atalhos de Teclado no PC
      window.addEventListener('keydown', (e) => {
        if (this.state !== 'RACING') return;

        // Se estiver digitando em algum input, ignora atalhos de letra
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          if (e.key === 'Escape') {
            this.linkFilter.hide();
          }
          return;
        }

        if (e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'f')) {
          e.preventDefault();
          this.linkFilter.toggle();
        } else if (e.key.toLowerCase() === 'z') {
          e.preventDefault();
          this.undoLastStep();
        } else if (e.key.toLowerCase() === 'h') {
          e.preventDefault();
          this.openTargetPeekModal();
        } else if (e.key === 'Escape') {
          document.querySelectorAll('.modal-overlay').forEach(m => this.closeModal(m));
          this.linkFilter.hide();
        }
      });
    }

    applySavedTheme() {
      const savedTheme = localStorage.getItem('wikirace_theme');
      if (savedTheme === 'light') {
        document.body.classList.add('theme-light');
        document.getElementById('theme-icon').textContent = '☀️';
      }
      const isSoundOn = localStorage.getItem('wikirace_sound') !== 'false';
      document.getElementById('sound-icon').textContent = isSoundOn ? '🔊' : '🔇';
    }

    setLanguage(lang) {
      if (this.lang === lang) return;
      this.lang = lang;
      localStorage.setItem('wikirace_lang', lang);
      document.getElementById('btn-lang-pt').classList.toggle('active', lang === 'pt');
      document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
      this.initDailyChallengePreview();
      this.showToast(lang === 'pt' ? 'Idioma: Wikipédia em Português' : 'Language: English Wikipedia');
    }

    // ========================================================================
    // MODOS DE JOGO
    // ========================================================================

    getDailyPair() {
      const today = new Date().toISOString().slice(0, 10);
      const list = DAILY_CHALLENGES[this.lang] || DAILY_CHALLENGES.pt;
      
      // Hash determinístico da data YYYY-MM-DD
      let hash = 0;
      for (let i = 0; i < today.length; i++) {
        hash = (hash << 5) - hash + today.charCodeAt(i);
        hash |= 0;
      }
      const index = Math.abs(hash) % list.length;
      return { pair: list[index], date: today };
    }

    initDailyChallengePreview() {
      const { pair, date } = this.getDailyPair();
      document.getElementById('daily-start-preview').textContent = pair.start;
      document.getElementById('daily-target-preview').textContent = pair.target;
      document.getElementById('daily-date-label').textContent = date;
    }

    startDailyChallenge() {
      const { pair } = this.getDailyPair();
      this.startRace(pair.start, pair.target, 'daily');
    }

    startQuickRace() {
      const activeDiffBtn = document.querySelector('.diff-btn.active');
      const diff = activeDiffBtn ? activeDiffBtn.getAttribute('data-diff') : 'medium';
      const pool = (CURATED_RACES[this.lang] && CURATED_RACES[this.lang][diff]) || CURATED_RACES.pt.medium;
      const randomPair = pool[Math.floor(Math.random() * pool.length)];
      this.startRace(randomPair.start, randomPair.target, 'quick');
    }

    async startRandomRace() {
      this.showToast('Sorteando artigos na Wikipédia...');
      try {
        const start = await this.wiki.getRandomArticle(this.lang);
        const target = await this.wiki.getRandomArticle(this.lang);
        if (start === target) {
          this.startQuickRace();
          return;
        }
        this.startRace(start, target, 'random');
      } catch (err) {
        this.startQuickRace();
      }
    }

    startCustomRace() {
      const start = document.getElementById('custom-start-input').value.trim();
      const target = document.getElementById('custom-target-input').value.trim();
      if (!start || !target) {
        this.showToast('Preencha os artigos de início e de destino!');
        return;
      }
      if (this.wiki.compareTitles(start, target)) {
        this.showToast('O artigo de início e de destino não podem ser iguais!');
        return;
      }
      this.startRace(start, target, 'custom');
    }

    checkUrlParameters() {
      const params = new URLSearchParams(window.location.search);
      const urlStart = params.get('start');
      const urlTarget = params.get('target');
      const urlLang = params.get('lang');

      if (urlLang && ['pt', 'en'].includes(urlLang)) {
        this.setLanguage(urlLang);
      }

      if (urlStart && urlTarget) {
        this.startRace(decodeURIComponent(urlStart), decodeURIComponent(urlTarget), 'shared');
      }
    }

    // ========================================================================
    // CICLO DE VIDA DA CORRIDA
    // ========================================================================

    async startRace(start, target, mode = 'standard') {
      this.state = 'RACING';
      this.startTitle = start;
      this.targetTitle = target;
      this.currentTitle = start;
      this.raceMode = mode;
      this.history = [];
      this.clicksCount = 0;
      this.targetSummaryCache = null;

      // Troca views
      this.viewLobby.hidden = true;
      this.viewGame.hidden = false;
      window.scrollTo(0, 0);

      // Atualiza HUD
      this.hudTargetTitle.textContent = this.targetTitle;
      this.hudClicksCount.textContent = '0';
      this.btnHudUndo.disabled = true;
      this.articleLangBadge.textContent = this.lang === 'pt' ? 'Wikipédia PT' : 'Wikipedia EN';

      // Dispara pré-carregamento do resumo do objetivo (para o Peek)
      this.preloadTargetSummary();

      // Inicia cronômetro
      this.startTimer();

      // Carrega o artigo inicial
      await this.loadArticle(start);
    }

    startTimer() {
      this.startTime = Date.now();
      this.elapsedMs = 0;
      if (this.timerInterval) clearInterval(this.timerInterval);

      this.timerInterval = setInterval(() => {
        this.elapsedMs = Date.now() - this.startTime;
        this.hudTimer.textContent = this.formatTime(this.elapsedMs);
      }, 100);
    }

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    formatTime(ms) {
      const totalSeconds = Math.floor(ms / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const tenths = Math.floor((ms % 1000) / 100);
      const mm = String(minutes).padStart(2, '0');
      const ss = String(seconds).padStart(2, '0');
      return `${mm}:${ss}.${tenths}`;
    }

    async loadArticle(title) {
      this.skeletonLoader.hidden = false;
      this.articleBody.innerHTML = '';
      this.articleError.hidden = true;
      this.linkFilter.hide();

      try {
        const data = await this.wiki.fetchArticle(title, this.lang);
        
        this.currentTitle = data.title;
        this.articleTitle.textContent = data.title;
        this.articleSourceLink.href = `${this.wiki.getApiBase(this.lang)}/wiki/${encodeURIComponent(data.title.replace(/ /g, '_'))}`;
        this.articleBody.innerHTML = data.html;

        // Atualiza breadcrumbs
        this.crumbStart.textContent = this.startTitle;
        this.crumbCurrent.textContent = data.title;

        // Registra histórico
        this.history.push({
          title: data.title,
          time: this.formatTime(this.elapsedMs)
        });

        this.btnHudUndo.disabled = this.history.length <= 1;

        // Rola até o topo do artigo suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Verifica condição de vitória!
        if (this.wiki.compareTitles(data.title, this.targetTitle)) {
          this.handleVictory();
        }
      } catch (err) {
        console.error('Erro ao carregar artigo:', err);
        this.articleError.hidden = false;
        document.getElementById('error-desc').textContent = err.message || 'Erro ao comunicar com a Wikipédia.';
      } finally {
        this.skeletonLoader.hidden = true;
      }
    }

    async navigateTo(nextTitle) {
      if (this.state !== 'RACING') return;
      this.clicksCount++;
      this.hudClicksCount.textContent = String(this.clicksCount);
      await this.loadArticle(nextTitle);
    }

    async undoLastStep() {
      if (this.history.length <= 1) return;
      this.sound.playUndo();
      
      // Remove o atual
      this.history.pop();
      const previous = this.history.pop(); // tira para recarregar sem duplicar
      this.clicksCount++;
      this.hudClicksCount.textContent = String(this.clicksCount);
      this.showToast(`Voltou para: ${previous.title}`);
      await this.loadArticle(previous.title);
    }

    handleVictory() {
      this.state = 'WON';
      this.stopTimer();
      this.sound.playWin();
      this.confetti.explode(110);

      // Salva estatísticas
      this.recordVictoryStats();

      // Preenche modal de vitória
      document.getElementById('victory-time').textContent = this.formatTime(this.elapsedMs);
      document.getElementById('victory-clicks').textContent = String(this.clicksCount);

      const timelineEl = document.getElementById('victory-path-timeline');
      timelineEl.innerHTML = '';
      this.history.forEach((step, idx) => {
        const item = document.createElement('div');
        item.className = 'path-step-item';
        item.innerHTML = `
          <span class="step-num">${idx + 1}</span>
          <span class="step-name">${step.title}</span>
          <span class="stat-unit">(${step.time})</span>
        `;
        timelineEl.appendChild(item);
      });

      this.openModal(this.modalVictory);
    }

    returnToLobby() {
      this.stopTimer();
      this.state = 'LOBBY';
      this.viewGame.hidden = true;
      this.viewLobby.hidden = false;
      this.linkFilter.hide();
      window.scrollTo(0, 0);
    }

    // ========================================================================
    // MODAIS AUXILIARES
    // ========================================================================

    async preloadTargetSummary() {
      try {
        this.targetSummaryCache = await this.wiki.fetchSummary(this.targetTitle, this.lang);
      } catch (e) {}
    }

    async openTargetPeekModal() {
      document.getElementById('peek-article-title').textContent = this.targetTitle;
      const extractEl = document.getElementById('peek-extract');
      const descEl = document.getElementById('peek-description');
      const imgWrap = document.getElementById('peek-image-wrap');
      const imgEl = document.getElementById('peek-image');

      extractEl.textContent = 'Carregando resumo do objetivo...';
      descEl.textContent = '';
      imgWrap.hidden = true;

      this.openModal(this.modalTargetPeek);

      if (!this.targetSummaryCache) {
        await this.preloadTargetSummary();
      }

      if (this.targetSummaryCache) {
        descEl.textContent = this.targetSummaryCache.description || '';
        extractEl.textContent = this.targetSummaryCache.extract || 'Nenhum resumo disponível.';
        if (this.targetSummaryCache.thumbnail && this.targetSummaryCache.thumbnail.source) {
          imgEl.src = this.targetSummaryCache.thumbnail.source;
          imgWrap.hidden = false;
        }
      }
    }

    openPathHistoryModal() {
      document.getElementById('history-summary').textContent = `Você deu ${this.clicksCount} clique(s) até agora:`;
      const listEl = document.getElementById('history-list');
      listEl.innerHTML = '';

      this.history.forEach((step, idx) => {
        const div = document.createElement('div');
        div.className = 'path-step-item';
        div.style.marginBottom = '8px';
        div.innerHTML = `
          <span class="step-num">${idx + 1}</span>
          <span class="step-name">${step.title}</span>
          <span class="stat-unit" style="margin-left:auto">${step.time}</span>
        `;
        listEl.appendChild(div);
      });

      this.openModal(this.modalPathHistory);
    }

    showStatsModal() {
      const stats = this.getStats();
      document.getElementById('stat-total-games').textContent = stats.games;
      document.getElementById('stat-total-wins').textContent = stats.wins;
      const rate = stats.games > 0 ? Math.round((stats.wins / stats.games) * 100) : 0;
      document.getElementById('stat-win-rate').textContent = `${rate}%`;
      document.getElementById('stat-best-time').textContent = stats.bestTimeMs ? this.formatTime(stats.bestTimeMs) : '--:--';
      document.getElementById('stat-best-clicks').textContent = stats.bestClicks !== null ? stats.bestClicks : '--';
      document.getElementById('stat-daily-streak').textContent = stats.streak || 0;
      this.openModal(this.modalStats);
    }

    getStats() {
      try {
        const raw = localStorage.getItem('wikirace_stats');
        return raw ? JSON.parse(raw) : { games: 0, wins: 0, bestTimeMs: null, bestClicks: null, streak: 0, lastDaily: null };
      } catch (e) {
        return { games: 0, wins: 0, bestTimeMs: null, bestClicks: null, streak: 0, lastDaily: null };
      }
    }

    recordVictoryStats() {
      const stats = this.getStats();
      stats.games = (stats.games || 0) + 1;
      stats.wins = (stats.wins || 0) + 1;

      if (!stats.bestTimeMs || this.elapsedMs < stats.bestTimeMs) {
        stats.bestTimeMs = this.elapsedMs;
      }
      if (stats.bestClicks === null || this.clicksCount < stats.bestClicks) {
        stats.bestClicks = this.clicksCount;
      }

      if (this.raceMode === 'daily') {
        const today = new Date().toISOString().slice(0, 10);
        if (stats.lastDaily !== today) {
          stats.streak = (stats.streak || 0) + 1;
          stats.lastDaily = today;
        }
      }

      localStorage.setItem('wikirace_stats', JSON.stringify(stats));
    }

    shareResult() {
      const pathText = this.history.map(s => s.title).join(' ➔ ');
      const text = `🏆 WikiRace JerryScript (${this.lang.toUpperCase()})\n` +
        `🏁 ${this.startTitle} ➔ ${this.targetTitle}\n` +
        `⏱️ Tempo: ${this.formatTime(this.elapsedMs)} | 👣 Cliques: ${this.clicksCount}\n` +
        `🛤️ Trajeto: ${pathText}\n` +
        `Jogue em: https://jerryscript.me`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          this.showToast('Resultado copiado para a área de transferência!');
        }).catch(() => {
          this.showToast('Não foi possível copiar automaticamente.');
        });
      } else {
        alert(text);
      }
    }

    openModal(modal) {
      if (modal) modal.hidden = false;
    }

    closeModal(modal) {
      if (modal) modal.hidden = true;
    }

    showToast(message) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }

    // ========================================================================
    // AUTOCOMPLETE PARA DESAFIO PERSONALIZADO
    // ========================================================================
    setupAutocomplete(inputId, listId) {
      const input = document.getElementById(inputId);
      const list = document.getElementById(listId);
      let debounceTimer = null;

      input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        const query = input.value.trim();
        if (query.length < 2) {
          list.hidden = true;
          return;
        }

        debounceTimer = setTimeout(async () => {
          const suggestions = await this.wiki.searchArticles(query, this.lang);
          if (suggestions.length === 0) {
            list.hidden = true;
            return;
          }

          list.innerHTML = '';
          suggestions.forEach(item => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            div.textContent = item;
            div.addEventListener('click', () => {
              input.value = item;
              list.hidden = true;
            });
            list.appendChild(div);
          });
          list.hidden = false;
        }, 220);
      });

      document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !list.contains(e.target)) {
          list.hidden = true;
        }
      });
    }
  }

  // Inicialização no carregamento da página
  document.addEventListener('DOMContentLoaded', () => {
    window.wikiRaceApp = new WikiRaceApp();
  });
})();
