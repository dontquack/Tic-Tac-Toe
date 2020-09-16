let freeCells = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6', 'cell-7', 'cell-8', 'cell-9']

function changeBtns(sign) {
    clearField()
    let btns = document.getElementsByClassName('btn-reload')
    if (sign % 2 == 1) {
        // for (let cell of cells) {
        //     cell.setAttribute('onclick', `usersMove('${cell.id}')`)
        // }
        btns[1].innerHTML = '2 players'
        btns[1].setAttribute('onclick', 'changeBtns(2)')
        isCompGame = true
        freeCells = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6', 'cell-7', 'cell-8', 'cell-9']
        firstMove()

    } else {
        // for (let cell of cells) {
        //     cell.setAttribute('onclick',`playersMove('${cell.id}')`)
        // }
        btns[1].innerHTML = 'vs Computer'
        btns[1].setAttribute('onclick', 'changeBtns(1)')
        isCompGame = false
    }
}

function clearField() {
    stepCount = 1
    let cells = document.getElementsByClassName('cell__btn')
    for (cell of cells) {
        cell.innerHTML = ''
        cell.style.backgroundColor = '#fff'
    }
    turnOnBtns()
    if (isCompGame) {
        freeCells = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6', 'cell-7', 'cell-8', 'cell-9']
        firstMove()
    } else
        document.getElementById('message').innerHTML = 'Player ' + players[stepCount % 2] + ' moves'

}

function firstMove() {
    let isComputer = false
    isComputer = coinToss()
    document.getElementById('message').innerHTML = 'You moves'
    if (isComputer) {
        compsMove()
    }

}

function coinToss() {
    return (Math.floor(Math.random() * 2) === 0)
}

function compsMove() {
    let isBlock = blocking()
    if ((stepCount == 1) || !isBlock) {
        indexOfCell = getRandomCell(freeCells)
        document.getElementById(freeCells[indexOfCell]).innerHTML = players[stepCount % 2]
        freeCells.splice(indexOfCell, 1)
    }
    if (isVictory(stepCount, 1)) { // Victory Check
        document.getElementById('message').innerHTML = 'You is LOSER!'
    }
    stepCount++
    if (stepCount > 9 && !isFinished) {
        document.getElementById('message').innerHTML = 'Tie game! Try Again?'
        turnOffBtns()
    }
}

function blocking(git commit -a -m "Commit message.") {
    let cells = document.getElementsByClassName('cell__btn')
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let comb of combs) {
        if (cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
            cells[comb[2]].innerHTML == '' &&
            cells[comb[0]].innerHTML != '') {
            cells[comb[2]].innerHTML = players[stepCount % 2]
            return true
        } else if (cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[0]].innerHTML == '' &&
            cells[comb[1]].innerHTML != '') {
            cells[comb[0]].innerHTML = players[stepCount % 2]
            return true
        } else if (cells[comb[0]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[1]].innerHTML == '' &&
            cells[comb[0]].innerHTML != '') {
            cells[comb[1]].innerHTML = players[stepCount % 2]
            return true
        }
    }
    return false;
}

function getRandomCell(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return rand;
}