const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

let contador = 0;

function isLampBroken() {
    return lamp.src.includes('quebrada');
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
    setTimeout(() => {
        alert('Você quebrou a lâmpada!!!');
    }, 1000);
    setTimeout(() => {
        alert('Conserte a lâmpada!');
    }, 4000);
}

function repairLamp() {
    lamp.addEventListener('mouseenter', () => {
        if (isLampBroken()) {
            contador++;
            console.log("Passagem sobre lâmpada quebrada:", contador);

            if (contador === 5) {
                lamp.src = './img/desligada.jpg';
                setTimeout(() => {
                    alert('Parabéns! Você consertou a lâmpada!');
                }, 1000);
                contador = 0;
            }
        }
    });
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("dblclick", lampBroken);

repairLamp();