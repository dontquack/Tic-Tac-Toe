var stepCount = 1
var player = ''
let players = ['O', 'X']
let isFinished = false
let isCompGame = false

function playersMove(id) {
    if (stepCount < 10) {
        cell = document.getElementById(id)
        if (cell.textContent == '') {
            cell.innerHTML = players[stepCount % 2]
            freeCells.splice(freeCells.lastIndexOf(cell.id), 1)
            
            if (isVictory(stepCount)) { // Victory Check
                if (isCompGame) {
                    document.getElementById('message').innerHTML = 'You is WINNER!'
                } else {
                    document.getElementById('message').innerHTML = 'Winnner is ' + players[stepCount % 2]
                }
            }
            stepCount++
            if (stepCount <= 9 && !isFinished) {
                if (!isCompGame) {
                    document.getElementById('message').innerHTML = 'Player ' + players[stepCount % 2] + ' moves'
                } else compsMove()
            } else if (!isFinished) {
                document.getElementById('message').innerHTML = 'Tie game! Try Again?'
                turnOffBtns()
            }
        }
    }
}

function turnOffBtns() {
    let btns = document.getElementsByClassName('cell__btn')
    for (btn of btns) {
        btn.disabled = true;
    }
}

function turnOnBtns() {
    let btns = document.getElementsByClassName('cell__btn')
    for (btn of btns) {
        btn.disabled = false;
    }
}

function isVictory(stepCount, flag = 0) {
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
        if (
            cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
            cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[0]].innerHTML == players[stepCount % 2]
        ) {
            if (flag == 1){
                cells[comb[0]].style.backgroundColor = '#e05a5a'
                cells[comb[0]].style.backgroundColor = '#e05a5a'
                cells[comb[1]].style.backgroundColor = '#e05a5a'
                cells[comb[2]].style.backgroundColor = '#e05a5a'
            } else{
                cells[comb[0]].style.backgroundColor = '#bfe89e'
                cells[comb[1]].style.backgroundColor = '#bfe89e'
                cells[comb[2]].style.backgroundColor = '#bfe89e'
            }
            
            isFinished = true
            turnOffBtns()
            return true
        }
    }
    return false
}