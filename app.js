(() => {
  // =========================================================================
  // 📀 CATÁLOGO DE VINIS (Capas, Contracapas e Selos Centrais Reais)
  // =========================================================================
  const ALBUMS = [
    {
      id: "dark-side",
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      year: "1973",
      eraTag: "1973 • PROGRESSIVE ROCK",
      category: "70s-80s",
      catNum: "SHVL 804",
      studio: "Harvest Records",
      vibe: "floyd",
      vinylStyle: "classic-black",
      frontImg: "assets/covers/dark-side-front.jpg",
      backImg: "assets/covers/dark-side-back.jpg",
      labelImg: "assets/covers/dark-side-label.jpg",
      notes: "Obra-prima lançada em março de 1973, gravada no Abbey Road Studios. A arte icônica do estúdio Hipgnosis traz o prisma dispersando a luz na capa frontal e convergindo o espectro na contracapa.",
      tracks: [
        "Speak to Me / Breathe",
        "On the Run",
        "Time",
        "The Great Gig in the Sky",
        "Money",
        "Us and Them",
        "Any Colour You Like",
        "Brain Damage",
        "Eclipse"
      ]
    },
    {
      id: "wish-you-were-here",
      title: "Wish You Were Here",
      artist: "Pink Floyd",
      year: "1975",
      eraTag: "1975 • PROGRESSIVE ROCK",
      category: "70s-80s",
      catNum: "SHVL 814",
      studio: "Harvest Records",
      vibe: "gold",
      vinylStyle: "classic-black",
      frontImg: "assets/covers/wish-you-were-here-front.jpg",
      backImg: "assets/covers/wish-you-were-here-back.jpg",
      labelImg: "assets/covers/wish-you-were-here-label.jpg",
      notes: "Nono álbum de estúdio do Pink Floyd (1975), marcado pelas suítes de 'Shine On You Crazy Diamond' em tributo a Syd Barrett e pela fotografia surrealista de Storm Thorgerson.",
      tracks: [
        "Shine On You Crazy Diamond (I–V)",
        "Welcome to the Machine",
        "Have a Cigar",
        "Wish You Were Here",
        "Shine On You Crazy Diamond (VI–IX)"
      ]
    },
    {
      id: "led-zep-iv",
      title: "Led Zeppelin IV",
      artist: "Led Zeppelin",
      year: "1971",
      eraTag: "1971 • 70s HARD ROCK",
      category: "70s-80s",
      catNum: "SD 7208",
      studio: "Atlantic Records",
      vibe: "zeppelin",
      vinylStyle: "classic-black",
      frontImg: "assets/covers/led-zep-iv-front.jpg",
      backImg: "assets/covers/led-zep-iv-back.jpg",
      labelImg: "assets/covers/led-zep-iv-label.jpg",
      notes: "Lançado em novembro de 1971 sem título impresso na capa, representado pelos quatro símbolos escolhidos por Jimmy Page, Robert Plant, John Paul Jones e John Bonham.",
      tracks: [
        "Black Dog",
        "Rock and Roll",
        "The Battle of Evermore",
        "Stairway to Heaven",
        "Misty Mountain Hop",
        "Four Sticks",
        "Going to California",
        "When the Levee Breaks"
      ]
    },
    {
      id: "back-in-black",
      title: "Back in Black",
      artist: "AC/DC",
      year: "1980",
      eraTag: "1980 • 80s HARD ROCK",
      category: "70s-80s",
      catNum: "SD 16018",
      studio: "Atlantic Records",
      vibe: "gold",
      vinylStyle: "classic-black",
      frontImg: "assets/covers/back-in-black-front.jpg",
      backImg: "assets/covers/back-in-black-back.jpg",
      labelImg: "assets/covers/back-in-black-label.jpg",
      notes: "Um dos maiores marcos da história do rock (1980), concebido com capa totalmente preta em homenagem a Bon Scott e eternizado pelos riffs dos irmãos Young.",
      tracks: [
        "Hells Bells",
        "Shoot to Thrill",
        "What Do You Do for Money Honey",
        "Given the Dog a Bone",
        "Let Me Put My Love Into You",
        "Back in Black",
        "You Shook Me All Night Long",
        "Have a Drink on Me",
        "Rock and Roll Ain't Noise Pollution"
      ]
    },
    {
      id: "slipknot-1999",
      title: "Slipknot (1999)",
      artist: "Slipknot",
      year: "1999",
      eraTag: "1999 • NU / GROOVE METAL",
      category: "metal",
      catNum: "RR 8655-1",
      studio: "Roadrunner Records",
      vibe: "slipknot",
      vinylStyle: "crimson-splatter",
      frontImg: "assets/covers/slipknot-1999-front.jpg",
      backImg: "assets/covers/slipknot-1999-back.jpg",
      labelImg: "assets/covers/slipknot-1999-label.jpg",
      notes: "Álbum de estreia homônimo de 1999 produzido por Ross Robinson, que redefiniu o metal do fim dos anos 90 com percussão brutal, samplers e agressividade crua.",
      tracks: [
        "742617000027",
        "(sic)",
        "Eyeless",
        "Wait and Bleed",
        "Surfacing",
        "Spit It Out",
        "Tattered & Torn",
        "Frail Limb Nursery / Purity",
        "Liberate",
        "Prosthetics"
      ]
    },
    {
      id: "slipknot-iowa",
      title: "Iowa",
      artist: "Slipknot",
      year: "2001",
      eraTag: "2001 • EXTREME METAL",
      category: "metal",
      catNum: "RR 8555-1",
      studio: "Roadrunner Records",
      vibe: "slipknot",
      vinylStyle: "crimson-splatter",
      frontImg: "assets/covers/slipknot-iowa-front.jpg",
      backImg: "assets/covers/slipknot-iowa-back.jpg",
      labelImg: "assets/covers/slipknot-iowa-label.jpg",
      notes: "Segundo álbum de estúdio do Slipknot (2001), amplamente considerado o capítulo mais denso, técnico e feroz da discografia da banda.",
      tracks: [
        "(515)",
        "People = Shit",
        "Disasterpiece",
        "My Plague",
        "Everything Ends",
        "The Heretic Anthem",
        "Gently",
        "Left Behind",
        "The Shape",
        "I Am Hated",
        "Skin Ticket",
        "New Abortion",
        "Metabolic",
        "Iowa"
      ]
    },
    {
      id: "slipknot-vol3",
      title: "Vol. 3: (The Subliminal Verses)",
      artist: "Slipknot",
      year: "2004",
      eraTag: "2004 • ALTERNATIVE METAL",
      category: "metal",
      catNum: "RR 8388-1",
      studio: "Roadrunner Records",
      vibe: "slipknot",
      vinylStyle: "amber-gold",
      frontImg: "assets/covers/slipknot-vol3-front.jpg",
      backImg: "assets/covers/slipknot-vol3-back.jpg",
      labelImg: "assets/covers/slipknot-vol3-label.jpg",
      notes: "Gravado na histórica mansão The Mansion em Los Angeles com Rick Rubin (2004), unindo peso extremo com arranjos melódicos e acústicos.",
      tracks: [
        "Prelude 3.0",
        "The Blister Exists",
        "Three Nil",
        "Duality",
        "Opium of the People",
        "Circle",
        "Welcome",
        "Vermilion",
        "Pulse of the Maggots",
        "Before I Forget",
        "Vermilion Pt. 2",
        "The Nameless"
      ]
    },
    {
      id: "a7x-nightmare",
      title: "Nightmare",
      artist: "Avenged Sevenfold",
      year: "2010",
      eraTag: "2010 • HEAVY METAL",
      category: "metal",
      catNum: "WB 524984",
      studio: "Warner Bros. Records",
      vibe: "a7x",
      vinylStyle: "smoke-silver",
      frontImg: "assets/covers/a7x-nightmare-front.jpg",
      backImg: "assets/covers/a7x-nightmare-back.jpg",
      labelImg: "assets/covers/a7x-nightmare-label.jpg",
      notes: "Quinto álbum de estúdio do Avenged Sevenfold (2010), dedicado à memória do baterista Jimmy 'The Rev' Sullivan e gravado com Mike Portnoy.",
      tracks: [
        "Nightmare",
        "Welcome to the Family",
        "Danger Line",
        "Buried Alive",
        "Natural Born Killer",
        "So Far Away",
        "God Hates Us",
        "Tonight the World Dies",
        "Fiction",
        "Save Me"
      ]
    }
  ];

  // =========================================================================
  // ELEMENTOS DO DOM
  // =========================================================================
  const html = document.documentElement;
  const preloader = document.getElementById("preloader");
  const preloaderFill = document.getElementById("preloader-fill");
  const stage = document.getElementById("stage-3d");
  const rigFloatWrapper = document.getElementById("rig-float-wrapper");
  const rig = document.getElementById("rig-3d");
  const vinylDisc = document.getElementById("vinyl-disc");
  const vinylSheen = document.getElementById("vinyl-sheen");
  const vinylLabelImg = document.getElementById("vinyl-label-img");
  const glare = document.getElementById("sleeve-glare");
  const crateGrid = document.getElementById("crate-grid");
  const plaqueAnim = document.getElementById("plaque-anim");

  const exhibitIndexEl = document.getElementById("exhibit-index");
  const eraTagEl = document.getElementById("active-era-tag");
  const catNumEl = document.getElementById("active-cat-num");
  const specStudioEl = document.getElementById("spec-studio");
  const titleEl = document.getElementById("active-album-title");
  const artistEl = document.getElementById("active-album-artist");
  const notesEl = document.getElementById("active-album-notes");
  const artContainer = document.getElementById("sleeve-art-container");
  const backImgEl = document.getElementById("sleeve-back-img");
  const spineText = document.getElementById("spine-text");
  const backTracklist = document.getElementById("back-tracklist");

  const btnToggleVinyl = document.getElementById("btn-toggle-vinyl");
  const btnVinylLabel = document.getElementById("btn-vinyl-label");
  const btnFlipSleeve = document.getElementById("btn-flip-sleeve");
  const btnResetAngle = document.getElementById("btn-reset-angle");
  const btnPrevAlbum = document.getElementById("btn-prev-album");
  const btnNextAlbum = document.getElementById("btn-next-album");

  let activeIdx = 0;
  let isVinylOut = true;
  let isFlipped = false;
  let isDragging = false;
  let isSwitching = false;
  let rotX = 5;
  let rotY = -14;

  // =========================================================================
  // 0. TELA DE LOADING CÊNICA (PRÉ-CARREGAMENTO DAS ARTES)
  // =========================================================================
  function runPreloader() {
    const urls = [];
    ALBUMS.forEach((a) => {
      urls.push(a.frontImg, a.backImg, a.labelImg);
    });

    let loaded = 0;
    const total = urls.length;
    const minDisplayMs = 850;
    const startTime = performance.now();

    function finishLoading() {
      const elapsed = performance.now() - startTime;
      const wait = Math.max(0, minDisplayMs - elapsed);
      setTimeout(() => {
        preloader?.classList.add("is-hidden");
        document.body.classList.remove("is-loading");
        document.body.classList.add("is-ready");
      }, wait);
    }

    urls.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        const pct = Math.min(100, Math.round((loaded / total) * 100));
        if (preloaderFill) preloaderFill.style.width = `${pct}%`;
        if (loaded >= total) finishLoading();
      };
      img.src = src;
    });

    // Segurança caso alguma imagem demore mais na rede
    setTimeout(finishLoading, 2800);
  }

  // =========================================================================
  // 1. RENDERIZAÇÃO E TRANSIÇÃO COREOGRAFADA ENTRE ÁLBUNS
  // =========================================================================
  function applyAlbumData(found, idx) {
    html.setAttribute("data-vibe", found.vibe || "gold");
    if (exhibitIndexEl) {
      const numStr = String(idx + 1).padStart(2, "0");
      const totStr = String(ALBUMS.length).padStart(2, "0");
      exhibitIndexEl.textContent = `${numStr} / ${totStr}`;
    }

    eraTagEl.textContent = found.eraTag;
    catNumEl.textContent = found.catNum;
    if (specStudioEl) specStudioEl.textContent = found.studio;
    titleEl.textContent = found.title;
    artistEl.textContent = found.artist;
    notesEl.textContent = found.notes;

    artContainer.innerHTML = `<img src="${found.frontImg}" alt="Capa de ${found.title} - ${found.artist}" draggable="false">`;
    if (backImgEl) {
      backImgEl.src = found.backImg;
      backImgEl.alt = `Contracapa de ${found.title} - ${found.artist}`;
    }
    if (vinylLabelImg) {
      vinylLabelImg.src = found.labelImg;
      vinylLabelImg.alt = `Selo central de ${found.title}`;
    }

    spineText.textContent = `${found.artist.toUpperCase()} — ${found.title.toUpperCase()}`;
    backTracklist.innerHTML = found.tracks.map((t) => `<li>${t}</li>`).join("");
    vinylDisc.setAttribute("data-vinyl-style", found.vinylStyle || "classic-black");

    document.querySelectorAll(".crate-card").forEach((card) => {
      card.classList.toggle("active", card.getAttribute("data-album-id") === found.id);
    });
  }

  function selectAlbumByIndex(idx, animateTransition = true) {
    const nextIdx = (idx + ALBUMS.length) % ALBUMS.length;
    const found = ALBUMS[nextIdx];

    if (!animateTransition) {
      activeIdx = nextIdx;
      applyAlbumData(found, activeIdx);
      setVinylOut(true);
      return;
    }

    if (isSwitching || nextIdx === activeIdx) return;
    isSwitching = true;
    activeIdx = nextIdx;

    // 1. Recolhe o vinil e faz fade-out suave do álbum atual e da placa
    setVinylOut(false);
    isFlipped = false;
    rig.classList.remove("flipped");
    rigFloatWrapper?.classList.add("is-switching-out");
    plaqueAnim?.classList.add("is-fading-out");

    // 2. Troca os dados no meio da transição e revela o novo disco deslizando para fora
    setTimeout(() => {
      applyAlbumData(found, activeIdx);
      rigFloatWrapper?.classList.remove("is-switching-out");
      plaqueAnim?.classList.remove("is-fading-out");

      setTimeout(() => {
        setVinylOut(true);
        isSwitching = false;
      }, 220);
    }, 340);
  }

  function selectAlbum(albumId) {
    const idx = ALBUMS.findIndex((a) => a.id === albumId);
    if (idx !== -1) selectAlbumByIndex(idx, true);
  }

  function setVinylOut(outState) {
    isVinylOut = outState;
    rig.classList.toggle("vinyl-out", isVinylOut);
    vinylDisc.classList.toggle("spinning", isVinylOut);
    btnVinylLabel.textContent = isVinylOut
      ? "Guardar Disco"
      : "Retirar Disco";
  }

  function toggleFlip() {
    isFlipped = !isFlipped;
    rig.classList.toggle("flipped", isFlipped);
  }

  function updateRigTransform() {
    rig.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    if (glare) {
      const glarePos = 50 + rotY * 1.4;
      glare.style.background = `linear-gradient(${125 + rotY}deg, rgba(255,255,255,0.2) 0%, transparent ${Math.max(25, Math.min(75, glarePos))}%, rgba(0,0,0,0.4) 100%)`;
    }
    if (vinylSheen) {
      const sheenDeg = Math.round(38 + rotY * 0.65 - rotX * 0.35);
      vinylSheen.style.setProperty("--sheen-angle", `${sheenDeg}deg`);
    }
  }

  // =========================================================================
  // 2. INTERAÇÃO 3D COM O MOUSE / TOQUE NO PALCO
  // =========================================================================
  stage?.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button")) return;
    isDragging = true;
    rig.classList.remove("Smooth-transition");
    stage.setPointerCapture(e.pointerId);
  });

  stage?.addEventListener("pointermove", (e) => {
    const rect = stage.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    if (isDragging) {
      rotY = Math.max(-45, Math.min(45, normX * 85));
      rotX = Math.max(-28, Math.min(28, -normY * 58));
    } else {
      rotY = -12 + normX * 24;
      rotX = 5 - normY * 18;
    }
    updateRigTransform();
  });

  stage?.addEventListener("pointerup", () => {
    isDragging = false;
  });

  stage?.addEventListener("pointerleave", () => {
    if (!isDragging) {
      rig.classList.add("Smooth-transition");
      rotX = 5;
      rotY = -14;
      updateRigTransform();
    }
  });

  stage?.addEventListener("dblclick", (e) => {
    if (e.target.closest("button")) return;
    setVinylOut(!isVinylOut);
  });

  btnToggleVinyl?.addEventListener("click", () => setVinylOut(!isVinylOut));
  btnFlipSleeve?.addEventListener("click", toggleFlip);
  btnResetAngle?.addEventListener("click", () => {
    rig.classList.add("Smooth-transition");
    isFlipped = false;
    rig.classList.remove("flipped");
    rotX = 5;
    rotY = -14;
    updateRigTransform();
  });

  btnPrevAlbum?.addEventListener("click", () => selectAlbumByIndex(activeIdx - 1, true));
  btnNextAlbum?.addEventListener("click", () => selectAlbumByIndex(activeIdx + 1, true));

  // =========================================================================
  // 3. MONTAR A GALERIA COM ANIMAÇÃO DE REVEAL EM CASCATA NO SCROLL
  // =========================================================================
  function renderCrate() {
    if (!crateGrid) return;

    crateGrid.innerHTML = ALBUMS.map(
      (album, i) => `
        <article
          class="crate-card ${album.id === ALBUMS[activeIdx].id ? "active" : ""}"
          data-album-id="${album.id}"
          style="transition-delay: ${(i % 4) * 85}ms"
        >
          <div class="mini-record-wrap">
            <div class="mini-vinyl">
              <div class="mini-vinyl-label">
                <img src="${album.labelImg}" alt="" loading="lazy" draggable="false">
              </div>
            </div>
            <div class="mini-sleeve">
              <img src="${album.frontImg}" alt="${album.title}" loading="lazy" draggable="false">
            </div>
          </div>
          <div class="crate-meta">
            <span class="crate-year">${album.eraTag}</span>
            <h3 class="crate-title">${album.title}</h3>
            <span class="crate-artist">${album.artist}</span>
          </div>
        </article>
      `
    ).join("");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    crateGrid.querySelectorAll(".crate-card").forEach((card) => {
      observer.observe(card);
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-album-id");
        selectAlbum(id);
        document.getElementById("exposicao")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // Copiar usuário do Discord
  const toast = document.getElementById("cheat-toast");
  const toastDesc = document.getElementById("cheat-toast-desc");
  const discordRow = document.querySelector("[data-copy-discord]");
  let toastTimer = null;

  discordRow?.addEventListener("click", (e) => {
    e.preventDefault();
    const user = discordRow.getAttribute("data-copy-discord");
    navigator.clipboard?.writeText(user);
    if (toast && toastDesc) {
      toastDesc.textContent = `Discord copiado: ${user}`;
      toast.removeAttribute("hidden");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.setAttribute("hidden", ""), 2600);
    }
  });

  // Inicializar
  renderCrate();
  selectAlbumByIndex(0, false);
  updateRigTransform();
  runPreloader();
})();
