let card = document.getElementById("card");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

card.addEventListener("mouseover", (event) => {
    event.target.style.border = "1px solid red";

    setTimeout(() => {
        event.target.style.border = "";
    }, 1500);
}, false);

card1.addEventListener("mouseover", (event) => {
    event.target.style.border = "1px solid red";

    setTimeout(() => {
        event.target.style.border = "";
    }, 1500);
}, false);

card2.addEventListener("mouseover", (event) => {
    event.target.style.border = "1px solid red";

    setTimeout(() => {
        event.target.style.border = "";
    }, 1500);
}, false);

function pop() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

}

function calcular() {
    let soles = document.getElementById('soles');
    let dolares = parseInt(soles.value) / 4;
    let calculo = document.getElementById('dolar').innerHTML = `${dolares}`;
    if (dolares >= 11490 && dolares < 18790) {
        let resultado = document.getElementById('resultado').innerHTML = `Le alcanza para un Kia`;

    } else if (dolares >= 18790 && dolares < 31490) {
        let resultado = document.getElementById('resultado').innerHTML = `Le alcanza para un Suzuki`;

    } else if (dolares >= 31490) {
        let resultado = document.getElementById('resultado').innerHTML = `Le alcanza para un Chevrolet`;

    } else if (dolares < 11490) {
        let resultado = document.getElementById('resultado').innerHTML = `No le alcanza para ningún auto`;

    }

}
