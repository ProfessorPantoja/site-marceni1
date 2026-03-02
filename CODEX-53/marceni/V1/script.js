(() => {
  const waNumber = "5522998946111";
  const waDefaultText =
    "Oi, Marceni! Vim pelo seu site e quero saber como funciona o atendimento.";

  const nav = document.getElementById("nav");
  const navBtn = document.querySelector(".navbtn");

  const openNav = () => {
    if (!nav || !navBtn) return;
    nav.classList.add("is-open");
    navBtn.setAttribute("aria-expanded", "true");
  };

  const closeNav = () => {
    if (!nav || !navBtn) return;
    nav.classList.remove("is-open");
    navBtn.setAttribute("aria-expanded", "false");
  };

  if (navBtn && nav) {
    navBtn.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      if (isOpen) closeNav();
      else openNav();
    });

    nav.addEventListener("click", (ev) => {
      const target = ev.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.tagName === "A") closeNav();
      if (target === nav) closeNav();
    });

    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") closeNav();
    });
  }

  const buildWaUrl = (text) => {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${waNumber}?text=${encoded}`;
  };

  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", buildWaUrl(waDefaultText));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noreferrer noopener");
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const stage = document.querySelector("[data-slideshow]");
  if (stage) {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const slides = [
      "radial-gradient(1000px 760px at 20% 10%, rgba(195, 107, 78, 0.38), transparent 60%), radial-gradient(900px 720px at 90% 30%, rgba(124, 140, 122, 0.45), transparent 58%), linear-gradient(180deg, #241d16, #18120d)",
      "radial-gradient(980px 720px at 20% 20%, rgba(124, 140, 122, 0.46), transparent 60%), radial-gradient(900px 720px at 90% 40%, rgba(195, 107, 78, 0.36), transparent 58%), linear-gradient(180deg, #221b14, #16100b)",
      "radial-gradient(1100px 860px at 35% 10%, rgba(195, 107, 78, 0.34), transparent 62%), radial-gradient(780px 680px at 80% 60%, rgba(255, 250, 242, 0.12), transparent 55%), linear-gradient(180deg, #231c15, #140f0a)",
    ];

    let idx = 0;
    stage.style.transition = "background 1200ms ease";
    stage.style.background = slides[idx];

    if (!prefersReduced) {
      window.setInterval(() => {
        idx = (idx + 1) % slides.length;
        stage.style.background = slides[idx];
      }, 5200);
    }
  }

  const form = document.getElementById("form-contato");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const fd = new FormData(form);
      const nome = String(fd.get("nome") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const mensagem = String(fd.get("mensagem") || "").trim();

      const full = [
        waDefaultText,
        "",
        `Nome: ${nome}`,
        `Email: ${email}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n");

      window.open(buildWaUrl(full), "_blank", "noopener,noreferrer");
    });
  }
})();
