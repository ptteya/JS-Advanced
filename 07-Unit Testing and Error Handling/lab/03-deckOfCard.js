function deckOfCard(cards) {
    let result = [];

    for (let cardString of cards) {
        const face = cardString.slice(0, - 1);
        const suit = cardString.slice(-1);

        let card;
        try {
            card = createCard(face, suit);
            result.push(card);
        } catch (ex) {
            result = ['Invalid card: ' + cardString]
        }
    }

    console.log(result.join(' '));

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
}

deckOfCard(['AS', '10D', 'KH', '2C']);
deckOfCard(['5S', '3D', 'QD', '1C']);