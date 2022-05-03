const menu = document.querySelector('header');
document.addEventListener('DOMContentLoaded',scroll);
window.addEventListener('resize',scroll);

function scroll() {
   if (window.matchMedia('(min-width: 992px)').matches) {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 10) {
            menu.setAttribute('id', 'scroll');
         } else {
            menu.setAttribute('id', 'no-scroll');
         }
      });
   } else {
      menu.setAttribute('id', 'scroll');
   }
}