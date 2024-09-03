let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)

let currentPlayer = "X"

let winningcombinations = [
    [0,1,2,],
    [3,4,5,],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
[2,4,6,],
]

function checkforwinner(){
    winningcombinations.forEach(function(combination){
let check = combination.every(idx => cells[idx])
if(check){
    highlightcells(combination)
}
 })
}

function highlightcells(combination){
    combination.forEach(function)

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.inenerText)
        cell.inenerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})