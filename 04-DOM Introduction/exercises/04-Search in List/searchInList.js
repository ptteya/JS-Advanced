function search() {
   let searchElement = document.getElementById('searchText');
   let searchValue = searchElement.value;
   let townElements = Array.from(document.querySelectorAll('ul li'));
   let resultElement = document.getElementById('result');

   let matchCounter = 0;

   for (let town of townElements) {
      if (town.textContent.includes(searchValue)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matchCounter++;
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   }

   resultElement.textContent = `${matchCounter} matches found`;
}

