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
  const emptyTurntable = document.getElementById("empty-turntable");
  const activeRecordGroup = document.getElementById("active-record-group");
  const exhibitControls = document.getElementById("exhibit-controls");
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
  const plaqueSpecs = document.getElementById("plaque-specs");
  const plaqueTracksWrap = document.getElementById("plaque-tracks-wrap");
  const emptyStateCta = document.getElementById("empty-state-cta");

  const artContainer = document.getElementById("sleeve-art-container");
  const backImgEl = document.getElementById("sleeve-back-img");
  const spineText = document.getElementById("spine-text");
  const backTracklist = document.getElementById("back-tracklist");

  const btnToggleVinyl = document.getElementById("btn-toggle-vinyl");
  const btnVinylLabel = document.getElementById("btn-vinyl-label");
  const btnFlipSleeve = document.getElementById("btn-flip-sleeve");
  const btnResetAngle = document.getElementById("btn-reset-angle");
  const btnEjectAlbum = document.getElementById("btn-eject-album");
  const btnPrevAlbum = document.getElementById("btn-prev-album");
  const btnNextAlbum = document.getElementById("btn-next-album");

  // Começa em -1 (Vitrola vazia!)
  let activeIdx = -1;
  let isVinylOut = false;
  let isFlipped = false;
  let isDragging = false;
  let isSwitching = false;
  let rotX = 12;
  let rotY = -14;

  // =========================================================================
  // 0. TELA DE LOADING CÊNICA
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

    setTimeout(finishLoading, 2800);
  }

  // =========================================================================
  // 1. ESTADO DE VITROLA VAZIA E TRANSIÇÃO PARA UM ÁLBUM
  // =========================================================================
  function setEmptyTurntableState() {
    activeIdx = -1;
    html.setAttribute("data-vibe", "gold");
    rig.classList.add("is-empty");
    rig.classList.remove("vinyl-out", "flipped");
    isVinylOut = false;
    isFlipped = false;

    emptyTurntable?.removeAttribute("hidden");
    activeRecordGroup?.setAttribute("hidden", "");
    exhibitControls?.setAttribute("hidden", "");
    plaqueSpecs?.setAttribute("hidden", "");
    plaqueTracksWrap?.setAttribute("hidden", "");
    emptyStateCta?.removeAttribute("hidden");

    const totStr = String(ALBUMS.length).padStart(2, "0");
    if (exhibitIndexEl) exhibitIndexEl.textContent = `— / ${totStr}`;
    eraTagEl.textContent = "EM ESPERA • 33⅓ RPM";
    titleEl.textContent = "Vitrola em Espera";
    artistEl.textContent = "Nenhum disco no prato";
    notesEl.textContent =
      "Escolha um dos discos abaixo para colocá-lo no prato e inspecionar a capa, a contracapa e o vinil em 3D.";

    document.querySelectorAll(".crate-card").forEach((card) => {
      card.classList.remove("active");
    });
  }

  function applyAlbumData(found, idx) {
    rig.classList.remove("is-empty");
    emptyTurntable?.setAttribute("hidden", "");
    activeRecordGroup?.removeAttribute("hidden");
    exhibitControls?.removeAttribute("hidden");
    plaqueSpecs?.removeAttribute("hidden");
    plaqueTracksWrap?.removeAttribute("hidden");
    emptyStateCta?.setAttribute("hidden", "");

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

  function selectAlbumByIndex(idx) {
    const nextIdx = (idx + ALBUMS.length) % ALBUMS.length;
    const found = ALBUMS[nextIdx];

    if (isSwitching || nextIdx === activeIdx) return;
    isSwitching = true;
    activeIdx = nextIdx;

    setVinylOut(false);
    isFlipped = false;
    rig.classList.remove("flipped");
    rigFloatWrapper?.classList.add("is-switching-out");
    plaqueAnim?.classList.add("is-fading-out");

    setTimeout(() => {
      applyAlbumData(found, activeIdx);
      rotX = 5;
      rotY = -14;
      updateRigTransform();
      rigFloatWrapper?.classList.remove("is-switching-out");
      plaqueAnim?.classList.remove("is-fading-out");

      setTimeout(() => {
        setVinylOut(true);
        isSwitching = false;
      }, 220);
    }, 340);
  }

  function ejectToEmptyTurntable() {
    if (isSwitching || activeIdx === -1) return;
    isSwitching = true;
    setVinylOut(false);
    rigFloatWrapper?.classList.add("is-switching-out");
    plaqueAnim?.classList.add("is-fading-out");

    setTimeout(() => {
      setEmptyTurntableState();
      rotX = 12;
      rotY = -14;
      updateRigTransform();
      rigFloatWrapper?.classList.remove("is-switching-out");
      plaqueAnim?.classList.remove("is-fading-out");
      isSwitching = false;
    }, 340);
  }

  function selectAlbum(albumId) {
    const idx = ALBUMS.findIndex((a) => a.id === albumId);
    if (idx !== -1) selectAlbumByIndex(idx);
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
    if (activeIdx === -1) return;
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
  // 2. INTERAÇÃO 3D COM O MOUSE / TOQUE NO PALCO (Suave em Desktop e iPhone)
  // =========================================================================
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartRotX = 12;
  let dragStartRotY = -14;
  let hasDragged = false;

  stage?.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button, a, .tt-power-led, .tt-tonearm-assembly, .tt-spindle-pin, .tt-plinth-badge, #vinyl-center-label, .sleeve-spine")) {
      return;
    }
    isDragging = true;
    hasDragged = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragStartRotX = rotX;
    dragStartRotY = rotY;
    rig.classList.remove("Smooth-transition");
    if (e.pointerType !== "touch") {
      try { stage.setPointerCapture(e.pointerId); } catch (_) {}
    }
  });

  stage?.addEventListener("pointermove", (e) => {
    const baseRotX = activeIdx === -1 ? 12 : 5;

    if (isDragging) {
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
        hasDragged = true;
      }
      const sensitivity = e.pointerType === "touch" ? 0.32 : 0.26;
      rotY = Math.max(-42, Math.min(42, dragStartRotY + dx * sensitivity));
      rotX = Math.max(-24, Math.min(28, dragStartRotX - dy * (sensitivity * 0.75)));
      updateRigTransform();
      return;
    }

    // Hover suave apenas para mouse em desktop
    if (e.pointerType === "mouse") {
      const rect = stage.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      rotY = -12 + normX * 22;
      rotX = baseRotX - normY * 16;
      updateRigTransform();
    }
  });

  function endStageDrag(e) {
    if (!isDragging) return;
    isDragging = false;

    // No celular, um toque rápido no álbum retira ou guarda o vinil suavemente
    if (e && e.pointerType === "touch" && !hasDragged && activeIdx !== -1) {
      if (!e.target.closest("button, a, .tt-power-led, .tt-tonearm-assembly, .tt-spindle-pin, .tt-plinth-badge, #vinyl-center-label, .sleeve-spine")) {
        setVinylOut(!isVinylOut);
      }
    }
  }

  stage?.addEventListener("pointerup", endStageDrag);
  stage?.addEventListener("pointercancel", () => {
    isDragging = false;
  });

  stage?.addEventListener("pointerleave", (e) => {
    if (!isDragging && e.pointerType === "mouse") {
      rig.classList.add("Smooth-transition");
      rotX = activeIdx === -1 ? 12 : 5;
      rotY = -14;
      updateRigTransform();
    }
  });

  stage?.addEventListener("dblclick", (e) => {
    if (e.target.closest("button, a") || activeIdx === -1) return;
    setVinylOut(!isVinylOut);
  });

  btnToggleVinyl?.addEventListener("click", () => setVinylOut(!isVinylOut));
  btnFlipSleeve?.addEventListener("click", toggleFlip);
  btnResetAngle?.addEventListener("click", () => {
    rig.classList.add("Smooth-transition");
    isFlipped = false;
    rig.classList.remove("flipped");
    rotX = activeIdx === -1 ? 12 : 5;
    rotY = -14;
    updateRigTransform();
  });
  btnEjectAlbum?.addEventListener("click", ejectToEmptyTurntable);

  btnPrevAlbum?.addEventListener("click", () => {
    if (activeIdx === -1) selectAlbumByIndex(ALBUMS.length - 1);
    else selectAlbumByIndex(activeIdx - 1);
  });
  btnNextAlbum?.addEventListener("click", () => {
    if (activeIdx === -1) selectAlbumByIndex(0);
    else selectAlbumByIndex(activeIdx + 1);
  });

  // =========================================================================
  // 3. MONTAR A GRADE DE DISCOS COM REVEAL NO SCROLL
  // =========================================================================
  function renderCrate() {
    if (!crateGrid) return;

    crateGrid.innerHTML = ALBUMS.map(
      (album, i) => `
        <article
          class="crate-card"
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

  function showToast(msg, duration = 2600) {
    if (!toast || !toastDesc) return;
    toastDesc.textContent = msg;
    toast.removeAttribute("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.setAttribute("hidden", ""), duration);
  }

  discordRow?.addEventListener("click", (e) => {
    e.preventDefault();
    const user = discordRow.getAttribute("data-copy-discord");
    navigator.clipboard?.writeText(user);
    showToast(`Discord copiado: ${user}`);
  });

  // =========================================================================
  // 4. SINTETIZADOR WEB AUDIO API & EASTER EGGS 100% SILENCIOSOS (SEM TOAST)
  // =========================================================================
  let audioCtx = null;
  let crackleNode = null;
  let crackleGain = null;

  function getAudio() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Efeito sonoro de clique mecânico analógico / botão de vitrola
  function playMechanicalClick(pitch = 160) {
    const ctx = getAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(pitch, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(42, ctx.currentTime + 0.065);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.065);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  }

  // Acorde atmosférico por banda/álbum ou modo secreto
  function playSynthChord(freqs, duration = 1.4, wave = "sine") {
    const ctx = getAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    freqs.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = wave;
      osc.frequency.setValueAtTime(f, now + idx * 0.04);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.08 + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + idx * 0.04);
      osc.stop(now + duration + 0.05);
    });
  }

  // Chiado contínuo de agulha no vinil (Vinyl Crackle)
  function toggleVinylCrackle(forceState) {
    const ctx = getAudio();
    if (!ctx) return false;

    const shouldPlay = typeof forceState === "boolean" ? forceState : !crackleNode;
    if (!shouldPlay) {
      if (crackleNode) {
        try { crackleNode.stop(); } catch (_) {}
        crackleNode.disconnect();
        crackleNode = null;
      }
      return false;
    }

    if (crackleNode) return true;
    const bufferSize = ctx.sampleRate * 3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const r = Math.random();
      data[i] = (Math.random() * 2 - 1) * 0.012 + (r > 0.9985 ? (Math.random() * 2 - 1) * 0.22 : 0);
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1900;
    filter.Q.value = 0.7;

    crackleGain = ctx.createGain();
    crackleGain.gain.value = 0.35;

    source.connect(filter).connect(crackleGain).connect(ctx.destination);
    source.start();
    crackleNode = source;
    return true;
  }

  // --- A. OS 4 PARAFUSOS NOS CANTOS DA TELA ---
  const cornerTL = document.getElementById("egg-corner-tl");
  const cornerTR = document.getElementById("egg-corner-tr");
  const cornerBL = document.getElementById("egg-corner-bl");
  const cornerBR = document.getElementById("egg-corner-br");

  const SPEEDS = [
    { label: "33⅓ RPM", dur: "2.6s", pitch: 220 },
    { label: "45 RPM", dur: "1.65s", pitch: 310 },
    { label: "78 RPM", dur: "0.88s", pitch: 480 }
  ];
  let speedIdx = 0;
  let isReversed = false;

  // Canto Superior Esquerdo: Espectro de Prisma / Luz Negra (Dark Side)
  cornerTL?.addEventListener("click", () => {
    const active = document.body.classList.toggle("egg-prism-mode");
    cornerTL.classList.toggle("is-active", active);
    playSynthChord(active ? [293.66, 369.99, 440, 554.37, 659.25] : [329.63, 246.94], 1.6, "triangle");
  });

  // Canto Superior Direito: Tempestade de Brasas (Wish You Were Here / Iowa)
  cornerTR?.addEventListener("click", () => {
    const active = document.body.classList.toggle("egg-ember-mode");
    cornerTR.classList.toggle("is-active", active);
    playSynthChord(active ? [146.83, 220, 293.66, 349.23] : [220, 146.83], 1.5, "sawtooth");
  });

  // Canto Inferior Esquerdo: Ciclar Rotação do Motor (33⅓ -> 45 -> 78 RPM)
  function cycleTurntableSpeed() {
    speedIdx = (speedIdx + 1) % SPEEDS.length;
    const sp = SPEEDS[speedIdx];
    document.documentElement.style.setProperty("--rpm-duration", sp.dur);
    cornerBL?.classList.toggle("is-active", speedIdx !== 0);
    playMechanicalClick(sp.pitch);

    if (activeIdx === -1) {
      eraTagEl.textContent = `EM ESPERA • ${sp.label}`;
    } else if (activeIdx === 99) {
      eraTagEl.textContent = `ACETATE • ${sp.label}`;
    } else {
      const baseEra = ALBUMS[activeIdx]?.eraTag || "LP";
      eraTagEl.textContent = speedIdx === 0 ? baseEra : `${baseEra} • ${sp.label}`;
    }
  }

  cornerBL?.addEventListener("click", cycleTurntableSpeed);
  eraTagEl?.addEventListener("click", cycleTurntableSpeed);

  // Canto Inferior Direito: Sala Escura / Lanterna (Flashlight Mode)
  cornerBR?.addEventListener("click", () => {
    const active = document.body.classList.toggle("egg-flashlight-mode");
    cornerBR.classList.toggle("is-active", active);
    playMechanicalClick(active ? 95 : 210);
  });

  window.addEventListener("pointermove", (e) => {
    if (document.body.classList.contains("egg-flashlight-mode")) {
      document.documentElement.style.setProperty("--fx-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--fx-y", `${e.clientY}px`);
    }
  });

  // --- B. COMPONENTES FÍSICOS DA VITROLA E DO VINIL ---
  const ttPlatter = document.querySelector(".tt-platter");
  const ttPowerLed = document.querySelector(".tt-power-led");
  const ttTonearm = document.querySelector(".tt-tonearm-assembly");
  const ttSpindle = document.querySelector(".tt-spindle-pin");
  const ttBadge = document.querySelector(".tt-plinth-badge");
  const vinylCenterLabel = document.getElementById("vinyl-center-label");

  // Clicar no LED da vitrola vazia: Liga o motor do prato em alta rotação estroboscópica
  ttPowerLed?.addEventListener("click", (e) => {
    e.stopPropagation();
    const spinning = ttPlatter?.classList.toggle("is-spinning");
    ttPowerLed.classList.toggle("is-overdrive", Boolean(spinning));
    playMechanicalClick(spinning ? 280 : 110);
  });

  // Clicar no braço da agulha (Tonearm): move o braço para o prato e ativa o chiado real de vinil
  ttTonearm?.addEventListener("click", (e) => {
    e.stopPropagation();
    const playing = ttTonearm.classList.toggle("is-playing");
    if (playing && ttPlatter && !ttPlatter.classList.contains("is-spinning")) {
      ttPlatter.classList.add("is-spinning");
      ttPowerLed?.classList.add("is-overdrive");
    }
    toggleVinylCrackle(playing);
    playMechanicalClick(playing ? 240 : 150);
  });

  // Clicar no pino central da vitrola ou no selo central do vinil: Backmasking (Giro Reverso!)
  function toggleBackmasking(e) {
    e.stopPropagation();
    isReversed = !isReversed;
    vinylDisc?.classList.toggle("reverse-spin", isReversed);
    ttPlatter?.classList.toggle("reverse-spin", isReversed);
    playSynthChord(isReversed ? [440, 392, 311.13, 233.08] : [233.08, 311.13, 392, 440], 1.2, "triangle");
  }

  ttSpindle?.addEventListener("click", toggleBackmasking);
  vinylCenterLabel?.addEventListener("click", toggleBackmasking);

  // Clicar na inscrição "JERRYSCRIPT // DIRECT DRIVE" na base da vitrola: Chiado analógico
  ttBadge?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleVinylCrackle();
    playMechanicalClick(320);
  });

  // --- C. CABEÇALHO, PLACA, LOMBADA, FAIXAS E RODAPÉ ---
  const eggCrest = document.getElementById("egg-crest");
  const brandLink = document.getElementById("museum-brand-link");
  const sleeveSpine = document.querySelector(".sleeve-spine");
  const footerTitle = document.querySelector(".footer-title");

  // Clicar no brasão "JS" no topo: gira como moeda e sorteia um disco na vitrola
  brandLink?.addEventListener("click", (e) => {
    e.preventDefault();
    eggCrest?.classList.remove("spin-coin");
    void eggCrest?.offsetWidth;
    eggCrest?.classList.add("spin-coin");

    let rnd = Math.floor(Math.random() * ALBUMS.length);
    if (rnd === activeIdx) rnd = (rnd + 1) % ALBUMS.length;
    playSynthChord([329.63, 440, 554.37, 659.25], 1.1, "sine");
    selectAlbumByIndex(rnd);
  });

  // Clicar no contador "— / 08" ou "01 / 08": Desbloqueia o Disco Fantasma #09 (Test Pressing Dourado)
  exhibitIndexEl?.addEventListener("click", () => {
    isSwitching = false;
    activeIdx = 99;
    rig.classList.remove("is-empty", "flipped");
    emptyTurntable?.setAttribute("hidden", "");
    activeRecordGroup?.removeAttribute("hidden");
    exhibitControls?.removeAttribute("hidden");
    plaqueSpecs?.removeAttribute("hidden");
    plaqueTracksWrap?.removeAttribute("hidden");
    emptyStateCta?.setAttribute("hidden", "");

    html.setAttribute("data-vibe", "gold");
    exhibitIndexEl.textContent = "09 / 08";
    eraTagEl.textContent = "ACETATE • WHITE LABEL TEST PRESSING";
    titleEl.textContent = "Unreleased Acetate #00";
    artistEl.textContent = "JerryScript // Master Dubplate";
    specStudioEl.textContent = "Abbey Road Mastering";
    catNumEl.textContent = "JS-000-TP";
    catNumEl.classList.remove("is-etched");
    notesEl.textContent =
      "Prensagem secreta de teste em acetato dourado translúcido. Corte direto no torno Neumann VMS-70 sem compressão.";
    vinylDisc.setAttribute("data-vinyl-style", "test-pressing-gold");
    backTracklist.innerHTML = [
      "Side A — Midnight Carrier Wave",
      "Side A — Subliminal Static (432 Hz)",
      "Side B — Ghost in the Runout Groove",
      "Side B — Locked Groove (Infinite Loop)"
    ].map((t) => `<li>${t}</li>`).join("");

    setVinylOut(true);
    playSynthChord([220, 277.18, 329.63, 440, 554.37], 1.9, "triangle");
  });

  // Clicar no Código de Catálogo ou na Lombada: Alterna silenciosamente para a inscrição da matriz (Deadwax)
  const DEADWAX_ETCHINGS = {
    "dark-side": "SHVL 804 A-2",
    "wish-you-were-here": "SHVL 814 // SYD",
    "led-zep-iv": "PORKY / PECKO",
    "back-in-black": "MASTERDISK RL",
    "slipknot-1999": "742617000027",
    "slipknot-iowa": "515 // IOWA",
    "slipknot-vol3": "9.0 // MANSION",
    "a7x-nightmare": "foREVer // REV"
  };

  function revealDeadwax() {
    if (!catNumEl) return;
    const current = ALBUMS[activeIdx];
    const normalCat = current ? current.catNum : "JS-000-TP";
    const etchedCat = current ? DEADWAX_ETCHINGS[current.id] : "VMS-70 MASTER";
    const isNowEtched = catNumEl.classList.toggle("is-etched");
    catNumEl.textContent = isNowEtched ? etchedCat : normalCat;
    playMechanicalClick(isNowEtched ? 380 : 210);
  }

  catNumEl?.addEventListener("click", revealDeadwax);
  sleeveSpine?.addEventListener("click", (e) => {
    e.stopPropagation();
    revealDeadwax();
  });

  // Clicar em qualquer faixa da tracklist: toca uma ressonância harmônica + destaca a faixa
  backTracklist?.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    backTracklist.querySelectorAll("li").forEach((el) => el.classList.remove("is-playing-track"));
    li.classList.add("is-playing-track");

    const idx = Array.from(backTracklist.children).indexOf(li);
    const scale = [196, 220, 246.94, 261.63, 293.66, 329.63, 392, 440, 493.88, 523.25];
    const root = scale[idx % scale.length];
    playSynthChord([root, root * 1.25, root * 1.5], 1.25, "triangle");
    if (!isVinylOut) setVinylOut(true);
  });

  // Clicar em "jerryscript.me" no rodapé: Efeito Tape-Stop (desaceleração analógica e retomada)
  footerTitle?.addEventListener("click", () => {
    document.body.classList.add("egg-tape-stop");
    playSynthChord([311.13, 233.08, 155.56, 98], 1.1, "sawtooth");
    setTimeout(() => {
      document.body.classList.remove("egg-tape-stop");
    }, 1150);
  });

  // Inicializar na Vitrola Vazia
  renderCrate();
  setEmptyTurntableState();
  updateRigTransform();
  runPreloader();
})();
