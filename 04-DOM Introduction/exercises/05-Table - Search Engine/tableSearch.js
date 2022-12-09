function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchElement = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of rows) {
         row.classList.remove('select');
         if (searchElement.value !== '' && row.innerHTML.includes(searchElement.value)) {
            row.className = 'select';
         }
      }
      searchElement.value = '';
   }
}