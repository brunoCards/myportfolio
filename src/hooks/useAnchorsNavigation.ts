export function useAnchorsNavigation() {
  function handleGoToBegin(): void {
    window.scrollTo({
      top: document.getElementById("begin").offsetTop,
      behavior: "smooth",
    });
  }

  function handleGoToAbout(): void {
    window.scrollTo({
      top: document.getElementById("about").offsetTop,
      behavior: "smooth",
    });
  }

  function handleGoToProjects(): void {
    window.scrollTo({
      top: document.getElementById("projects").offsetTop,
      behavior: "smooth",
    });
  }

  function handleGoToContact(): void {
    window.scrollTo({
      top: document.getElementById("contact").offsetTop,
      behavior: "smooth",
    });
  }

  return {
    handleGoToBegin,
    handleGoToAbout,
    handleGoToProjects,
    handleGoToContact,
  };
}
