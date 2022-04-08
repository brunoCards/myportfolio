export function handleGoToBegin(): void {
  window.scrollTo({
    top: document.getElementById("begin").offsetTop,
    behavior: "smooth",
  });
}
