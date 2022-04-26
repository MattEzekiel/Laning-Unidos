document.addEventListener('DOMContentLoaded', () => {
   let initialState = parseInt(document.querySelector('#numero').textContent);
   let local = JSON.parse(localStorage.getItem('contador'));

   if (local > 735) {
      document.querySelector('#numero').textContent = local;
   }

   setInterval(() => {
      initialState++;
      localStorage.setItem('contador',JSON.stringify(initialState));
      document.querySelector('#numero').textContent = initialState.toString();
   },Math.floor(Math.random() * 50000) + 10000);
});