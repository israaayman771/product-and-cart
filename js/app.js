window.addEventListener('DOMContentLoaded', () => {
  handleHeaderBackground();
  window.addEventListener('scroll', handleHeaderBackground);

  function handleHeaderBackground() {
    const header = document.querySelector("header");
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});
