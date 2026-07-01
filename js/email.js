(function () {
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = link.href;
      document.body.appendChild(iframe);
      setTimeout(() => iframe.remove(), 2000);
    });
  });
})();
