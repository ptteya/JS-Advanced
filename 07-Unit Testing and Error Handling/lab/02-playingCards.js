function createCard(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    if (!validFaces.includes(face) || !validSuits[suit]) {
        throw new Error('Invalid');
    }

    let result = {
        face,
        suit,
        toString() {
            return this.face + validSuits[this.suit];
        }
    }

    return result;
}

console.log(createCard('A', 'S').toString());
console.log(createCard('10', 'H').toString());
console.log(createCard('1', 'C').toString());