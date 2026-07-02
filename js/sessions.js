(function () {
  const loadEmbed = (embed) => {
    if (embed.dataset.loaded === "1") return;

    const id = embed.dataset.youtubeId;
    if (!id) return;

    const title = embed.dataset.title || "YouTube video";
    embed.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" title="${title}" allowfullscreen loading="lazy"></iframe>`;
    embed.dataset.loaded = "1";
    embed.classList.add("is-playing");
  };

  document.querySelectorAll(".video-embed[data-youtube-id]").forEach((embed) => {
    const button = embed.querySelector(".video-play");
    if (!button) return;

    button.addEventListener("click", () => loadEmbed(embed));
  });

  document.querySelectorAll(".season-accordion").forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) return;
      accordion.querySelectorAll(".video-embed[data-youtube-id]").forEach(loadEmbed);
    });
  });
})();
