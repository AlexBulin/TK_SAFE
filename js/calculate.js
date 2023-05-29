const distance = document.querySelector('#distance');
const typeCar = document.querySelector('#type-car');
const weight = document.querySelector('#weight-cargo');
const volume = document.querySelector('#volume-cargo');
const inputs = document.querySelectorAll('input');
const totalPriceElement = document.querySelector('#total-price');

const radioTypeCar= document.querySelectorAll('input[name="typeCar"]');
const radioWeight = document.querySelectorAll('input[name="weight"]');

const baseTarrif = 80;
const minPrice = 8000;

const Format = new Intl.NumberFormat('ru');
totalPriceElement.innerText = Format.format(minPrice)


const totalPrice = baseTarrif * parseInt(distance.value);

function calculate() {
    let totalPrice = baseTarrif * parseInt(distance.value);
    let multiplier = 1;

    let dateNow = new Date();
    let month = dateNow.getMonth();

    switch (month) {
        case 0:
            multiplier = 1.0005;
            break;
        case 1:
            multiplier = 1.05;
            break;
        case 2:
            multiplier = 1.08;
            break;
        case 3:
            multiplier = 1.01;
            break;
        case 4:
            multiplier = 1;
            break;
        case 5:
            multiplier = 1;
            break;
        case 6:
            multiplier = 1.004;
            break;
        case 7:
            multiplier = 1.032;
            break;
        case 8:
            multiplier = 1.001;
            break;
        case 9:
            multiplier = 1.032;
            break;
        case 10:
            multiplier = 1.06;
            break;
        case 11:
            multiplier = 1.1;
            break;
    }   

    totalPrice = totalPrice * multiplier;

    for (const radio of radioTypeCar) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const radio of radioWeight) {
        if (radio.checked) {
            totalPrice = Math.max(minPrice, totalPrice * parseFloat(radio.value));
        }
    }

    
    
    const Formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = Formatter.format(totalPrice);
}


for (const item of inputs) {
    item.addEventListener('input', function () {
        calculate();
    })
}