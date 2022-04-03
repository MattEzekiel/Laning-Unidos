window.addEventListener('scroll', () => {
   const menu = document.querySelector('header');
   if (window.scrollY > 10) {
      menu.setAttribute('id','scroll');
   } else {
      menu.setAttribute('id','no-scroll');
   }
});