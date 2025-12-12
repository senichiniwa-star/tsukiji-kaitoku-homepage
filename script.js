document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-typing]");
  if (!target) return;

  const text = (target.dataset.text || target.textContent || "").trim();
  if (!text) return;

  const speed = 46; // base milliseconds per character
  const jitter = 38; // randomness to make typing feel human

  const textNode = document.createTextNode("");
  const caret = document.createElement("span");
  caret.className = "caret";
  caret.setAttribute("aria-hidden", "true");
  caret.textContent = "▋";

  target.textContent = "";
  target.append(textNode, caret);

  let i = 0;
  const typeNext = () => {
    if (i <= text.length) {
      textNode.textContent = text.slice(0, i);
      i += 1;
      const delay = speed + Math.random() * jitter;
      setTimeout(typeNext, delay);
    } else {
      caret.classList.add("caret--done");
    }
  };

  setTimeout(typeNext, 300);
});
