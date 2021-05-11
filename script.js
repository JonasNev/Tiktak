document.addEventListener('click', function(event) {
    var target = event.target
    
    markX(target);
});

function markX(element){
    if (element.classList.contains("cell") && element.innerText == ""){
        element.innerText = "X";
        opponentMove();
    }
    else {
        // Nieko nedarys
    }
}

function opponentMove(){
    //Oponento judesys

    //Gauti visus galimus veiksmus
    let elements = Array.from(document.querySelectorAll(".cell"));
    elements = elements.filter(function(el){
        return el.innerText == ""
    });
    
    let randomNo = randomInteger(0, elements.length);

    let selectedElement = elements[randomNo];

    selectedElement.innerText = "O";

    //Issirinkti viena is galimu variantu
    //PAzymeti elementa, kaip 0
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getRandomMove(){
    // Analizuoja ir nuskaito koki judesi padaryt
}

function whoWon(){
    //Isanalizuoja lenta ir nusprendzia kas laimejo, jeigu laimejo. 
}

function isGameFinished(){

}

function resetGame(){

}

