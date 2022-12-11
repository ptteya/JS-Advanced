function solve() {
   Array.from(document.querySelectorAll('.add-product')).forEach(b => b.addEventListener('click', onAdd));
   document.querySelector('.checkout').addEventListener('click', onCheckOut);

   let textArea = document.querySelector('textarea');

   let totalMoney = 0;
   let productList = new Set();

   function onAdd(ev) {
      let currProduct = ev.target.parentElement.parentElement;

      let name = currProduct.querySelector('.product-title').innerText;
      let price = currProduct.querySelector('.product-line-price').innerText;

      textArea.textContent += `Added ${name} for ${(Number(price)).toFixed(2)} to the cart.\n`;

      totalMoney += Number(price);
      productList.add(name);
   }

   function onCheckOut() {
      let keys = Array.from(productList.keys());
      textArea.textContent += `You bought ${keys.join(', ')} for ${totalMoney.toFixed(2)}.`
      Array.from(document.querySelectorAll('button')).forEach(b => b.disabled = true);
   }
}