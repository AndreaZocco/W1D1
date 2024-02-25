document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.scroll-left').forEach(button => {
    button.addEventListener('click', function() {
      this.parentNode.querySelector('.row').scrollBy({
        left: -window.innerWidth / 2,
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('.scroll-right').forEach(button => {
    button.addEventListener('click', function() {
      this.parentNode.querySelector('.row').scrollBy({
        left: window.innerWidth / 2,
        behavior: 'smooth'
      });
    });
  });
});
