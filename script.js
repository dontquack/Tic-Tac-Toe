var stepCount = 1
var player = ''
let players = ['O', 'X']
let isFinished = false

function playersMove(id) {
    if (stepCount < 10) {
        cell = document.getElementById(id)
        if (cell.textContent == '') {
            cell.innerHTML = players[stepCount % 2]
            
            if (isVictory(stepCount)){
                document.getElementById('message').innerHTML = 'Win is ' + players[stepCount % 2]
                isFinished = true
                turnOffBtns()
            }
            stepCount++
            if (stepCount <= 9 && !isFinished) {
                document.getElementById('message').innerHTML = 'Player ' + players[stepCount % 2] + ' moves'
            } else if (!isFinished){
                document.getElementById('message').innerHTML = 'Tie game! Try Again?'
                turnOffBtns()
            }
        }
    }
}

function reload(){
    window.location.reload();
}

function turnOffBtns(){
    let btns = document.getElementsByClassName('cell__btn')
    for (btn of btns){
        btn.disabled = true; 
    }
}

function isVictory(stepCount){
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
            cells[comb[0]].style.backgroundColor = '#bfe89e'
            cells[comb[1]].style.backgroundColor = '#bfe89e'
            cells[comb[2]].style.backgroundColor = '#bfe89e'
			return true;
		}
	}
	return false;
}