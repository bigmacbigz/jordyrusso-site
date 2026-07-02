(function () {
  const content = window.SITE_CONTENT;
  if (!content) return;

  const renderCredits = (container, credits) => {
    if (!container || !credits?.length) return;

    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.textContent = "selected credits";

    const list = document.createElement("ul");
    list.className = "credits-list";

    credits.forEach((entry) => {
      const item = document.createElement("li");

      const project = document.createElement("span");
      project.className = "credit-project";
      project.textContent = entry.project;

      const year = document.createElement("span");
      year.className = "credit-year";
      year.textContent = entry.year;

      item.append(project, document.createTextNode(` · ${entry.role} · `), year);
      list.appendChild(item);
    });

    container.append(heading, list);
  };

  const renderShowreel = (container, data) => {
    if (!container || !data?.showreelYoutubeId) return;

    const block = document.createElement("section");
    block.className = "showreel";
    block.setAttribute("aria-label", "Showreel");

    if (data.showreelIntro) {
      const intro = document.createElement("p");
      intro.className = "showreel-intro";
      intro.textContent = data.showreelIntro;
      block.appendChild(intro);
    }

    const embed = document.createElement("div");
    embed.className = "video-embed video-embed--featured";
    embed.innerHTML = `<iframe src="https://www.youtube.com/embed/${data.showreelYoutubeId}" title="Performance showreel" allowfullscreen loading="lazy"></iframe>`;
    block.appendChild(embed);
    container.appendChild(block);
  };

  const renderTestimonials = (container, testimonials) => {
    if (!container || !testimonials?.length) return;

    const section = document.createElement("section");
    section.className = "testimonials";
    section.setAttribute("aria-label", "Testimonials");

    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.textContent = "kind words";
    section.appendChild(heading);

    testimonials.forEach((entry) => {
      const figure = document.createElement("figure");
      figure.className = "testimonial";

      const quote = document.createElement("blockquote");
      quote.textContent = entry.quote;

      const caption = document.createElement("figcaption");
      caption.textContent = `— ${entry.attribution}`;

      figure.append(quote, caption);
      section.appendChild(figure);
    });

    container.appendChild(section);
  };

  const showreelSlot = document.getElementById("showreel-slot");
  if (showreelSlot) {
    renderShowreel(showreelSlot, content.performance);
  }

  const performanceCredits = document.getElementById("performance-credits");
  if (performanceCredits) {
    renderCredits(performanceCredits, content.performance?.credits);
  }

  const creativeCredits = document.getElementById("creative-credits");
  if (creativeCredits) {
    renderCredits(creativeCredits, content.creative?.credits);
  }

  const testimonialsSlot = document.getElementById("testimonials-slot");
  const config = window.SITE_CONFIG || {};
  if (testimonialsSlot && config.testimonialsEnabled !== false) {
    renderTestimonials(testimonialsSlot, content.testimonials);
  }
})();
