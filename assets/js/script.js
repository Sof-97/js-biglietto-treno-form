const rate = 0.21;
let click = document.getElementById(`createTicket`);
let clickCancel = document.getElementById(`cancel`);

const createdTicket = document.getElementById(`output`);

console.log(createdTicket)

//NOTE Function che gestisce i click e il biglietto
function display(x) {
    if (x == `show`) {
        createdTicket.classList.remove(`d-none`);
    } else {
        createdTicket.classList.add(`d-none`);
    }
};

//NOTE Function calcolo costo e stampa
function ticket() {

    // NOTE Dichiarazione variabili di lavoro
    let name = document.getElementById(`getUser`).value;
    let km = document.getElementById(`distance`).value;
    let age = document.getElementById(`age`).value;
    let discount
    let offer

    console.log(`${name} ${km} ${age} dodici`);

    switch (age) {
        case `under`:
            discount = 20;
            offer = `Sconto bambini`;
            break;
        case `over`:
            discount = 40;
            offer = `Sconto anziani`;
            break;
        default:
            discount = 0;
            offer = `Nessuno sconto`;
            break;
    }

    //NOTE Calcolo e decimali
    let priceTotal = (km * rate);
    priceTotal -= (((priceTotal) / 100) * discount);
    priceTotal = priceTotal.toFixed(2);

    //NOTE Bonus carrozza e biglietto randomico

    wagon = Math.floor(Math.random() * 10) + 1
    code = Math.floor(Math.random() * 1000) + 9000

    //NOTE Print biglietto e informazioni
    document.getElementById(`user`).innerHTML = `${name}`;
    document.getElementById(`ticketType`).innerHTML = `${offer}`;
    document.getElementById(`wagon`).innerHTML = `${wagon}`;
    document.getElementById(`code`).innerHTML = `${code}`;
    document.getElementById(`price`).innerHTML = `${priceTotal}€`;

};

//NOTE Click su annulla
clickCancel.addEventListener(`click`,

    function () {
        display(`hide`)
    }
);

//NOTE Click su genera biglietto
click.addEventListener(`click`,

    function () {
        display(`show`),
            ticket()
    }
);

