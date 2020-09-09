var step = 0
var player = ''

function playersMove(id) {
    if (step<10){
        ++step
        if (step % 2 == 0) {
            player = 'o'
        } else player = 'x'
        cell = document.getElementById(id)
        if (cell.textContent == '') {
            cell.innerHTML = player 
        }
    } 
    if (step == 9) {
        alert ('Game over')
    }
}