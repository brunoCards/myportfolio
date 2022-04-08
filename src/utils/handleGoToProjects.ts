export function handleGoToProjects(): void {
  window.scrollTo({
    top: document.getElementById("projects").offsetTop,
    behavior: "smooth",
  });
}
