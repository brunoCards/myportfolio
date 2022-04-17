export function handleGoToBegin(): void {
  window.scrollTo({
    top: document.getElementById("begin").offsetTop,
    behavior: "smooth",
  });
}

export function handleGoToAbout(): void {
  window.scrollTo({
    top: document.getElementById("about").offsetTop,
    behavior: "smooth",
  });
}

export function handleGoToProjects(): void {
  window.scrollTo({
    top: document.getElementById("projects").offsetTop,
    behavior: "smooth",
  });
}

export function handleGoToContact(): void {
  window.scrollTo({
    top: document.getElementById("contact").offsetTop,
    behavior: "smooth",
  });
}
