const turnOnOff = document.getElementById ('turnOnOff');
const lamp = document.getElementById ('lamp');
const textBroken = document.getElementById ('textBroken');


function lampOnOff () {
    if ( turnOnOff.textContent == 'LIGAR') {
        lampOn ();
        turnOnOff.textContent = 'DESLIGAR';
    } else {
        lampOff ();
        turnOnOff.textContent = 'LIGAR';
    }
}

function lampOn() {
    if (!isLampBroken ()) {
        lamp.src = '/imgs/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken ()) {
        lamp.src = '/imgs/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = '/imgs/quebrada.jpg';
    activeTextBroken ();
    turnOnOff.style.display = 'none';
}

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1;
}

function activeTextBroken () {
    textBroken.style.display = 'flex';
}

turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);