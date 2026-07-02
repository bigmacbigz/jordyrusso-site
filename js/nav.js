(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.querySelectorAll(".nav-item.is-expanded").forEach((item) => {
          item.classList.remove("is-expanded");
        });
      });
    });
  }

  document.querySelectorAll(".nav-item--panel").forEach((item) => {
    const trigger = item.querySelector(".nav-panel-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", (event) => {
      if (window.matchMedia("(min-width: 769px)").matches) return;

      event.preventDefault();
      const isExpanded = item.classList.toggle("is-expanded");
      trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    });
  });

  const guide = document.getElementById("home-guide");
  const guideDismiss = document.querySelector(".home-guide-dismiss");
  const config = window.SITE_CONFIG || {};
  const guideEnabled = config.homeGuideEnabled !== false;
  const guideIdleMs = (config.homeGuideIdleSeconds ?? 30) * 1000;

  if (guide && guideDismiss) {
    const dismissGuide = () => {
      guide.hidden = true;
      guide.classList.remove("is-visible");
      sessionStorage.setItem("home-guide-dismissed", "1");
    };

    guideDismiss.addEventListener("click", dismissGuide);

    const dismissed = sessionStorage.getItem("home-guide-dismissed") === "1";
    if (!guideEnabled || dismissed) {
      guide.hidden = true;
    } else {
      let idleTimer = null;
      let shown = false;
      const activityEvents = ["mousemove", "mousedown", "keydown", "scroll", "touchstart", "click"];

      const stopWatching = () => {
        clearTimeout(idleTimer);
        activityEvents.forEach((event) => {
          window.removeEventListener(event, resetIdleTimer);
        });
      };

      const showGuide = () => {
        if (shown) return;
        shown = true;
        guide.hidden = false;
        requestAnimationFrame(() => guide.classList.add("is-visible"));
        stopWatching();
      };

      const resetIdleTimer = () => {
        if (shown) return;
        clearTimeout(idleTimer);
        idleTimer = setTimeout(showGuide, guideIdleMs);
      };

      activityEvents.forEach((event) => {
        window.addEventListener(event, resetIdleTimer, { passive: true });
      });
      resetIdleTimer();
    }
  }

  const progress = document.querySelector(".scroll-progress");
  if (progress) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progress.style.height = `${percent}%`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }
})();
