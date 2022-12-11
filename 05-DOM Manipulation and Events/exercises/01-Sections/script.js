function create(words) {
   let content = document.getElementById('content');

   for (let word of words) {
      let newDiv = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      newDiv.appendChild(p);

      newDiv.addEventListener('click', (event) => {
         event.currentTarget.children[0].style.display = '';
      });

      content.appendChild(newDiv);
   }
}