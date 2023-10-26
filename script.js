let toptext = document.getElementById('toptext')
let restart = document.getElementById('restart')
let cells = Array.from(document.getElementsByClassName('cell'))
const O = "O"
const X = "X"
let starttext = X
let grid = Array(9).fill(null)
let t = 0;

const startgame = () => {
    cells.forEach(cell => cell.addEventListener('click', cellactive))
}

function cellactive(e) {
    const id = e.target.id
    

    if(!grid[id] & t < 9){;
        grid[id] = starttext
        e.target.innerText = starttext

        if(win() !==false){
            toptext.innerHTML = `${starttext} has won!`
            let wc = win()
            t = 10
            wc.map(cell => cells[cell].style.backgroundColor="#264653")
            return
        }
        t++
        starttext = starttext == X ? O : X
    }

    if(t === 9){
        toptext.innerHTML = `Draw Game!`
        cells.forEach(cell => cell.style.backgroundColor="#264653")
    }
}

const w = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function win(){
    for(const i of w){
        let [a,b,c] = i

        if(grid[a] && (grid[a] == grid[b] && grid[a] == grid[c])){
            return [a,b,c]
        }
    }
    return false
}

restart.addEventListener('click',rst)

function rst(){
    grid.fill(null)

    cells.forEach( cell =>{
        cell.innerText = ''
        cell.style.backgroundColor=''
    })
    toptext.innerHTML = 'Tic Tac Toe!'
    t = 0
    starttext = X
}

startgame()