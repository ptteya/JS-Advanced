function tickets(arr, str) {
    let allTickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let el of arr) {
        let [destination, price, status] = el.split('|');
        let currTicket = new Ticket(destination, Number(price), status);
        allTickets.push(currTicket);
    }

    if (str == 'price') {
        return allTickets.sort((a, b) => a[str] - b[str]);
    }

    return allTickets.sort((a, b) => a[str].localeCompare(b[str]));
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')
);

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price')
);