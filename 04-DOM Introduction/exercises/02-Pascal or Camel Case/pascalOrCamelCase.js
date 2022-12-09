function solve() {
  let text = document.getElementById('text');
  let convention = document.getElementById('naming-convention');

  let textValue = text.value;
  let conventionValue = convention.value;

  let textToLower = textValue.toLowerCase();
  let wordsArr = textToLower.split(' ');
  let result = '';

  if (conventionValue !== "Camel Case" && conventionValue !== 'Pascal Case') {
    result = 'Error!';
  } else {
    if (conventionValue === 'Camel Case') {
      result = wordsArr.shift();
    }

    for (let word of wordsArr) {
      let firstChr = word[0].toUpperCase();
      let otherChars = word.substring(1);
      result += firstChr.concat(otherChars);
    }
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}
