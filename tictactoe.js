let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');
let c7 = document.getElementById('c7');
let c8 = document.getElementById('c8');
let c9 = document.getElementById('c9');
let compPlayO = false;
let oIndex = 0;
let compPlayReset = false;
const defaultCompPlayHTML = '<button class="comp-play-button">Play with computer</button>'
let randomNum = 0;
let cellRandomNum = 0;
let compPlay = false;
let compPlayAssist = false;
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
let compPlayButton = document.querySelector('.comp-play-button');
compPlayButton.addEventListener('click', () => {playComp()})
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
    
    if(OTurn === false && XTurn === true && cellConditions[cellNum -1] === false && compPlayAssist === false){
        document.getElementById(`x${cellNum}`).style.opacity = 100;
        document.getElementById(`c${cellNum}`).style.cursor = "default";
        XTurn = false;
        OTurn = true;
        cellConditions[cellNum-1] = true;  
        moves[cellNum - 1] = 1; 
        if(moves[0] === 1 && moves[4] === 1 && moves[8] === 1 ||
            moves[1] === 1  && moves[4] === 1 && moves[7] === 1 ||
            moves[2] === 1 && moves[4] === 1 && moves[6] === 1 ||
            moves[5] === 1 && moves[4] === 1 && moves[3] === 1 ||
            moves[0] === 1 && moves[1] === 1 && moves[2] === 1 ||
            moves[6] === 1 && moves[7] === 1 && moves[8] === 1 ||
            moves[0] === 1 && moves[3] === 1 && moves[6] === 1||
            moves[2] === 1 && moves[5] === 1 && moves[8] === 1){
            XWin = true;
            XScore++;
            cellConditions.forEach((value, index, array) => {
                array[index] = true;
            });
            endGameAppear('x');
        }else if(cellConditions.every(value => value === true) && XWin === false && OWin === false){
            draw = true;
            drawScore ++; 
            endGameAppear('draw');   
        }
        
        if(compPlay===true && XWin === false && draw === false){
            compPlayAssist = true;
                createRandomNum();
                cellRandomNum = randomNum + 1;
                setTimeout(()=>{document.getElementById(`o${cellRandomNum}`).style.opacity = 100;
                cellConditions[randomNum] = true;
                document.getElementById(`c${cellRandomNum}`).style.cursor = "default";
                moves[randomNum] = 2;
                if(moves[0] === 2 && moves[4] === 2 && moves[8] === 2 ||
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
                }
                compPlayAssist = false;
                }, 400);
            XTurn = true;
            OTurn = false;     
        }
    }else if(XTurn === false && OTurn === true && cellConditions[cellNum -1] === false && compPlayAssist === false){
        document.getElementById(`o${cellNum}`).style.opacity = 100; 
        document.getElementById(`c${cellNum}`).style.cursor = "default"; 
        OTurn = false;
        XTurn = true;
        cellConditions[cellNum -1] = true;
        moves[cellNum - 1] = 2;
        if(moves[0] === 2 && moves[4] === 2 && moves[8] === 2 ||
            moves[1] === 2  && moves[4] === 2 && moves[7] === 2 ||
            moves[2] === 2 && moves[4] === 2 && moves[6] === 2 ||
            moves[5] === 2 && moves[4] === 2 && moves[3] === 2 ||
            moves[0] === 2 && moves[1] === 2 && moves[2] === 2 ||
            moves[6] === 2 && moves[7] === 2 && moves[8] === 2 ||
            moves[0] === 2 && moves[3] === 2 && moves[6] === 2||
            moves[2] === 2 && moves[5] === 2 && moves[8] === 2){
            OWin = true;
            OScore++;
            cellConditions.forEach((value, index, array) => {
                array[index] = true;
            });
            console.log(OScore)
            endGameAppear('o');
        }else if(cellConditions.every(value => value === true) && XWin === false && OWin === false){
            draw = true;
            drawScore ++; 
            endGameAppear('draw');   
        }
        if(compPlay===true && OWin === false && draw === false){
            compPlayAssist = true;
                createRandomNum();
                cellRandomNum = randomNum + 1;
                setTimeout(()=>{document.getElementById(`x${cellRandomNum}`).style.opacity = 100;
                cellConditions[randomNum] = true;
                document.getElementById(`c${cellRandomNum}`).style.cursor = "default";
                moves[randomNum] = 1;
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
                }else if(cellConditions.every(value => value === true) && XWin === false && OWin === false){
                    draw = true;
                    drawScore ++; 
                    endGameAppear('draw');   
                }
                compPlayAssist = false;
                }, 400);
            XTurn = false;
            OTurn = true;     
        }
    }       
}
function endGameAppear(winner){
    score.innerHTML = `X: ${XScore} <span class="span"> Draws: ${drawScore}</span> O: ${OScore}`
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
        if (compPlayO){
            compPlaying('o')
        }
    })
}
function restart(){
    for(let num = 1; num < 10; num++){
        document.getElementById(`x${num}`).style.opacity = 0;
        document.getElementById(`o${num}`).style.opacity = 0;
        document.getElementById(`c${num}`).style.cursor = "pointer";
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
    if(compPlay === false){
        document.querySelector('.comp-play-container').innerHTML = defaultCompPlayHTML;
        document.querySelector('.comp-play-button').addEventListener('click', ()=>{playComp()})
    }
}

function playComp(){
    document.querySelector('.comp-play-container').innerHTML = 
    `<div>
        <button class="comp-play-button choosex">X</button>
        <span class="choose">Choose:</span>
        <button class="comp-play-button chooseo">O</button>
    </div>
    <button class="js-comp-play-cancel comp-play-cancel comp-play-button">Cancel</button>`
    document.querySelector('.choosex').addEventListener('click', ()=>{compPlaying('x')});
    document.querySelector('.chooseo').addEventListener('click', ()=>{compPlaying('o')});
    if(compPlay === false){
    document.querySelector('.js-comp-play-cancel').addEventListener('click', ()=>{
        document.querySelector('.comp-play-container').innerHTML = defaultCompPlayHTML;
        document.querySelector('.comp-play-button').addEventListener('click', ()=>{playComp()})
    }
    )
    }else{
        document.querySelector('.js-comp-play-cancel').addEventListener('click', ()=>{
        document.querySelector('.comp-play-container').innerHTML = 
        `<button class="comp-play-button js-change-player">Change player</button>
        <button class="comp-play-button comp-play-cancel">Play local</button>`
        document.querySelector('.js-change-player').addEventListener('click', ()=>{
        playComp();
        })})
    }
}
function compPlaying(player){
    if(player === 'x'){
        compPlayO = false;
        compPlay = true;
        scoreReset();
        restart();
        document.querySelector('.comp-play-container').innerHTML = 
        `<button class="comp-play-button js-change-player">Change player</button>
        <button class="comp-play-button comp-play-cancel play-local">Play local</button>`
        document.querySelector('.js-change-player').addEventListener('click', ()=>{
            playComp();
        })
        document.querySelector('.play-local').addEventListener('click', ()=>{
            compPlay = false;
            compPlayO = false;
            scoreReset();
            restart();
        })
    }else if(player==='o'){
        compPlayO = true;
        compPlay = true;
        if(oIndex === 0){
            scoreReset();
            oIndex++;
        }
        restart();
        document.querySelector('.comp-play-container').innerHTML = 
        `<button class="comp-play-button js-change-player">Change player</button>
        <button class="comp-play-button comp-play-cancel play-local">Play local</button>`
        document.querySelector('.js-change-player').addEventListener('click', ()=>{
            playComp();
        })
        document.querySelector('.play-local').addEventListener('click', ()=>{
            compPlay = false;
            compPlayO = false;
            scoreReset();
            restart();
            oIndex = 0;
        })
        XTurn = true;
        compPlayAssist  =true; 
        createRandomNum();
        cellRandomNum = randomNum + 1;
        cellConditions[randomNum] = true;
        moves[randomNum] = 1;
        document.getElementById(`x${cellRandomNum}`).style.opacity = 100; 
        document.getElementById(`c${cellRandomNum}`).style.cursor = "default"; 
        moves[randomNum] = 1;
        XTurn = false;
        OTurn = true;
        compPlayAssist = false;            
    }
}
function createRandomNum(){
    randomNum = Math.floor(Math.random()*(9));
    if(cellConditions[randomNum]===true){
        createRandomNum();
        
    }
}
function scoreReset(){
    XScore = 0;
    OScore = 0;
    drawScore = 0;
}
