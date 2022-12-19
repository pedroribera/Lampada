var lamp = window.document.getElementById('luz')

function itsbroken (){
    return lamp.src.indexOf('Broken') > -1
}

function broke (){
    lamp.src = 'assets/img/Broken.svg'
}

function ligar(){
    if (!itsbroken()){
        lamp.src = 'assets/img/On.svg'
    }
    
}

function desligar (){
    if (!itsbroken()){
        lamp.src = 'assets/img/Off.svg'
    }
    
}