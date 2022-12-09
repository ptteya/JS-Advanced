function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  let sentences = input.split('.').filter(x => x.length != 0);

  while (sentences.length > 0) {
    let text = sentences.splice(0, 3).join('. ') + '.';
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    output.appendChild(paragraph);
  }
}