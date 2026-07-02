(function () {
  function openMailClient(mailtoUrl) {
    const temp = document.createElement("a");
    temp.href = mailtoUrl;
    document.body.appendChild(temp);
    temp.click();
    document.body.removeChild(temp);
  }

  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openMailClient(link.getAttribute("href"));
    });
  });
})();
