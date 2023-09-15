let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');
let c7 = document.getElementById('c7');
let c8 = document.getElementById('c8');
let c9 = document.getElementById('c9');
let XTurn = true;
let OTurn = false;
let XWin = false;
let OWin = false;
let draw = false;
let XScore = 0;
let OScore = 0;
let drawScore = 0;
let score = document.querySelector('.score');
document.querySelector('.result').innerHTML = '';
let cellConditions = [false, false, false, false, false, false, false, false, false]
let moves = [false, false, false, false, false, false, false, false, false]
let restartButton = document.querySelector('.restart-button');
c1.addEventListener('click', () => {
    play(c1.id);
});
c2.addEventListener('click', () => {
    play(c2.id);
});
c3.addEventListener('click', () => {
    play(c3.id);
});
c4.addEventListener('click', () => {
    play(c4.id);
});
c5.addEventListener('click', () => {
    play(c5.id);
});
c6.addEventListener('click', () => {
    play(c6.id);
});
c7.addEventListener('click', () => {
    play(c7.id);
});
c8.addEventListener('click', () => {
    play(c8.id);
});
c9.addEventListener('click', () => {
    play(c9.id);
});
function play (cellId) {
    let cellNum = Number(cellId.slice(1));
    
    if(OTurn === false && XTurn === true && cellConditions[cellNum -1] === false){
        document.getElementById(`x${cellNum}`).style.opacity = 100;
        XTurn = false;
        OTurn = true;
        cellConditions[cellNum-1] = true;  
        moves[cellNum - 1] = 1;
    }else if(XTurn === false && OTurn === true && cellConditions[cellNum -1] === false){
        document.getElementById(`o${cellNum}`).style.opacity = 100;  
        OTurn = false;
        XTurn = true;
        cellConditions[cellNum -1] = true;
        moves[cellNum - 1] = 2
    }       
    if(moves[0] === 1 && moves[4] === 1 && moves[8] === 1 ||
        moves[1] === 1  && moves[4] === 1 && moves[7] === 1 ||
        moves[2] === 1 && moves[4] === 1 && moves[6] === 1 ||
        moves[5] === 1 && moves[4] === 1 && moves[3] === 1 ||
        moves[0] === 1 && moves[1] === 1 && moves[2] === 1 ||
        moves[6] === 1 && moves[7] === 1 && moves[8] === 1 ||
        moves[0] === 1 && moves[3] === 1 && moves[6] === 1||
        moves[2] === 1 && moves[5] === 1 && moves[8] === 1){
        XWin = true;
        cellConditions.forEach((value, index, array) => {
            array[index] = true;
        });
        XScore ++;
        endGameAppear('x');
    }else if(moves[0] === 2 && moves[4] === 2 && moves[8] === 2 ||
        moves[1] === 2  && moves[4] === 2 && moves[7] === 2 ||
        moves[2] === 2 && moves[4] === 2 && moves[6] === 2 ||
        moves[5] === 2 && moves[4] === 2 && moves[3] === 2 ||
        moves[0] === 2 && moves[1] === 2 && moves[2] === 2 ||
        moves[6] === 2 && moves[7] === 2 && moves[8] === 2 ||
        moves[0] === 2 && moves[3] === 2 && moves[6] === 2||
        moves[2] === 2 && moves[5] === 2 && moves[8] === 2){
        OWin = true;
        cellConditions.forEach((value, index, array) => {
            array[index] = true;
        });
        OScore ++;
        endGameAppear('o');
    }else if(cellConditions.every(value => value === true) && XWin === false && OWin === false){
        draw = true;
        drawScore ++; 
        endGameAppear('draw');   
    }
    score.innerHTML = `X: ${XScore} <span class="span"> Draws: ${drawScore}</span> O: ${OScore}`
}
function endGameAppear(winner){
    if(winner === 'x'){
        document.querySelector('.result').innerHTML = 'X Wins!'
    }else if(winner === 'o'){
        document.querySelector('.result').innerHTML = 'O Wins!'
    }else if(winner === 'draw'){
        document.querySelector('.result').innerHTML = 'Draw!'
    }
    document.querySelector('.endgame-screen').style.opacity = 100;
    document.querySelector('.endgame-screen').style.pointerEvents = 'auto';
    restartButton.addEventListener('click', () =>{
        restart();
    })
}
function restart (){
    for(let num = 1; num < 10; num++){
        document.getElementById(`x${num}`).style.opacity = 0;
        document.getElementById(`o${num}`).style.opacity = 0;
        
    };
    cellConditions.forEach((array, index, value) => {
        cellConditions[index] = false;
        moves[index] = false;
    })
    document.querySelector('.endgame-screen').style.opacity = 0;
    document.querySelector('.endgame-screen').style.pointerEvents = 'none';
    XWin = false;
    OWin = false;
    draw = false;
    OTurn = false;
    XTurn = true;
}
