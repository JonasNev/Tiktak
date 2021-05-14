document.addEventListener('click', function (event) {
    var target = event.target;
    markX(target);
});

function resetGame() {
    //All board cells should be empty
    var cells = Array.from(document.getElementsByClassName("cell"));
    cells.forEach(x => x.innerText = "");
    var gameStatusElement = document.querySelector(".game--status");
    gameStatusElement.innerText = ``;
    }
    //Game status should be empty



function markX(element) {
    if (element.classList.contains("cell") && element.innerText == "" && !isGameFinished()) {
        element.innerText = "X";

        let finished = isGameFinished();

        if (finished == false) {
            opponentMove();
            isGameFinished();
        }
    }
    else {
        // Do nothing
    }
}


function opponentMove() {

    // Get all elements with class name
    var cells = Array.from(document.getElementsByClassName("cell"));
    // Filter the elements by just selecting empty ones.
    cells = cells.filter(cell => cell.innerText == "");
    // Get random number
    let randomNumber = getRandomNumber(0, cells.length);
    // Select random element 
    let randomCell = cells[randomNumber];
    //and modify its innertext to O
    randomCell.innerText = '0'
}


function getRandomNumber(max) {
    return Math.floor(Math.random() * (max))
}

function isGameFinished() {
    return isWinnerDetermined() || noMovesLeft();
}

function noMovesLeft() {
    var cells = Array.from(document.getElementsByClassName("cell"));
    cells = cells.filter(cell => cell.innerText == "");
    if (cells.length == 0) {
        //modify .game--status to be draw
        var gameStatusElement = document.querySelector(".game--status");
        gameStatusElement.innerText = "DRAW";
        return true; //the game is finished
    }

    return false; // the game continues
}


function isWinnerDetermined() {
    let winningCellCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let iswinnerdetermined = false;
    //Go  through there winning combinations
    winningCellCombinations.forEach(combination => {
        elementValue1 = getDataCellTextValueByIndex(combination[0]);
        elementValue2 = getDataCellTextValueByIndex(combination[1]);
        elementValue3 = getDataCellTextValueByIndex(combination[2]);

        if (elementValue1 == elementValue2 && elementValue2 == elementValue3 && elementValue1 != "") {
            var gameStatusElement = document.querySelector(".game--status");
            gameStatusElement.innerText = `${elementValue1} has won the game`
            iswinnerdetermined = true;
        }
    });
    return iswinnerdetermined;
}

function getDataCellTextValueByIndex(index) {
    return document.querySelector(`[data-cell-index="${index}"]`).innerText;
}

