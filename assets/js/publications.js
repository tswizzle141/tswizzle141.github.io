document.addEventListener("DOMContentLoaded", () => {
  const absButtons = document.querySelectorAll(".pub-abs");

  function closeOthers(exceptBtn) {
    absButtons.forEach(btn => {
      if (btn === exceptBtn) return;
      btn.setAttribute("aria-expanded", "false");
      const abs = btn.closest("article")?.querySelector(".pub-abstract");
      if (abs) abs.setAttribute("hidden", "");
    });
  }

  absButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const article = btn.closest("article");
      const abs = article?.querySelector(".pub-abstract");
      if (!abs) return;

      const expanded = btn.getAttribute("aria-expanded") === "true";

      if (!expanded) closeOthers(btn);

      btn.setAttribute("aria-expanded", String(!expanded));
      if (expanded) abs.setAttribute("hidden", "");
      else abs.removeAttribute("hidden");
    });
  });
});
