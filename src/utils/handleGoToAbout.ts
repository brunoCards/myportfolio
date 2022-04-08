export function handleGoToAbout(): void {
  window.scrollTo({
    top: document.getElementById("about").offsetTop,
    behavior: "smooth",
  });
}
