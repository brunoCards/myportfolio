export function handleGoToContact(): void {
  window.scrollTo({
    top: document.getElementById("contact").offsetTop,
    behavior: "smooth",
  });
}
