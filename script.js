//using query selector only once, defining DOM elements to be used throughout code
let allDomElements =document.querySelector("body").childNodes;
let announceDOM = allDomElements[5];
let restartButtonDOM = allDomElements[9].childNodes[1];
let nameDOM =allDomElements[1].childNodes;
console.log(nameDOM);
let allGameboardCellsDOM = allDomElements[3].childNodes;
let formDOM = allDomElements[7].childNodes;
let submitButtonDOM = formDOM[5];
let player1InputDOM = formDOM[1].childNodes[3];
let player2InputDOM = formDOM[3].childNodes[3];



//console.log(allCellsDOM);
let Gameboard = (
    function createGameboard(){//module for creating initial empty gameboard
    function createEmptyBoard(){
        let cell1, cell2, cell3;
        const createEmptyBoard = {row1:[cell1,cell2,cell3]
        ,row2:[cell1,cell2,cell3]
        ,row3:[cell1,cell2,cell3]}
        return createEmptyBoard;

    }
    function addMarker(gameboard,marker,rownumber,cell){
        if(marker=="x"){
            if(rownumber==1){
                gameboard.row1[cell] = "x";
            }
            else if(rownumber==2){
                gameboard.row2[cell] = "x";
            }
            else if(rownumber==3){
                gameboard.row3[cell] = "x";
            }
        }
        else{
            if(rownumber==1){
                gameboard.row1[cell] = "o";
            }
            else if(rownumber==2){
                gameboard.row2[cell] = "o";
            }
            else if(rownumber==3){
                gameboard.row3[cell] = "o";
            }
        }
        console.log(gameboard);

        return gameboard;
    }
    function checkForWinOrTie(gameboard){
        //define winnernames
        let names = getNames();
        console.log(names);
        playerOneName = names[0];
        playerTwoName = names[1];

        //check for win in rows
        for (const row in gameboard) {
            let cell1 = `${gameboard[row][0]}`;
            let cell1undefined =gameboard[row][0];
            let cell2 = `${gameboard[row][1]}`;
            let cell3 = `${gameboard[row][2]}`;
            if(typeof cell1undefined !== 'undefined'){
                if(cell1==cell2&&cell1==cell3&&cell2==cell3){
                    if(cell1 == "x"){
                        console.log(cell1);
                        let winner = playerOneName;
                        console.log("oh hey x")
                        announceDOM.textContent = "We have a winner. " +winner+" wins."
                    }else{
                        console.log("oh hey o")
                        let winner = playerTwoName;
                        announceDOM.textContent = "We have a winner." +winner+" wins."
                    }
                    return;
                }
            }
          }
        //check for win in columns
        for(i=0;i<3;i++){
            let row1i = gameboard.row1[i];
            let row1undefined =gameboard.row1[i];
            let row2i = gameboard.row2[i];
            let row3i = gameboard.row3[i];
            if(typeof row1undefined !== 'undefined'){
                if(row1i==row2i&&row1i==row3i&&row2i==row3i){
                    if(row1i == "x"){
                        let winner = playerOneName;
                        announceDOM.textContent = "We have a winner. " +winner+" wins."
                    }else{
                        let winner = playerTwoName;
                        announceDOM.textContent = "We have a winner." +winner+" wins."
                    }
                    return;
                }
            }
        }
        //check for win in diagonal
        
        const diagonalOne = [gameboard.row1[0],gameboard.row2[1],gameboard.row3[2]];
        const diagonalTwo = [gameboard.row1[2],gameboard.row2[1],gameboard.row3[0]];
        //check if undefined in diagonals
        console.log(typeof(diagonalOne[0]))
        if(typeof diagonalOne[0] !== 'undefined'){
            if(diagonalOne[0]==diagonalOne[1]&&diagonalOne[0]==diagonalOne[2]&&diagonalOne[1]==diagonalOne[2]){
                if(diagonalOne[0] == "x"){
                    let winner = playerOneName;
                    announceDOM.textContent = "We have a winner. " +winner+" wins."
                }else{
                    let winner = playerTwoName;
                    announceDOM.textContent = "We have a winner." +winner+" wins."
                }
             }
            
        }
        if(typeof diagonalTwo[0] !== 'undefined'){
            if(diagonalTwo[0]==diagonalTwo[1]&&diagonalTwo[0]==diagonalTwo[2]&&diagonalTwo[1]==diagonalTwo[2]){
                if(diagonalTwo[0] == "x"){
                    let winner = playerOneName;
                    announceDOM.textContent = "We have a winner by diagonal. " +winner+" wins."
                }else{
                    let winner = playerTwoName;
                    announceDOM.textContent = "We have a winner by diagonal." +winner+" wins."
                }
                    return;
            }
            
        }

        //check if board has space,else tie
        for (const row in gameboard){
            let cell1 = gameboard[row][0];
            let cell2 = gameboard[row][1];
            let cell3 = gameboard[row][2];
            if(typeof cell1 == 'undefined'||typeof cell2 == 'undefined'||typeof cell3 == 'undefined'){
                console.log("Please continue game");
                return;
            }
        }
        announceDOM.textContent = "An even match, it's a tie!";
        return;
    }
    function addGameboardToDisplay(gameboard){
        let cellNumber=0;
        let counter=1;
        allGameboardCellsDOM.forEach((cell)=>{
            //cell row 1 display
            if(counter<=3){
                cell.textContent = gameboard.row1[cellNumber];
                counter++;
                cellNumber++;
                
            }
            //cell row 2 display
            else if(counter>3&&counter<=6){
                if(counter==4){
                    cellNumber=0;
                }
                else{
                    cellNumber++;
                }
                cell.textContent =gameboard.row2[cellNumber];
                counter++
            }
             //cell 7-9
            else if(counter>6&&counter<=9){
                if(counter==7){
                    cellNumber=0;
                }
                else{
                    cellNumber++;
                }
                cell.textContent = gameboard.row3[cellNumber];
                counter++
            }
            else{
                console.log("do nothing");
            }         
        })
    }
    function AddNames(nameOne,nameTwo){
        nameDOM[0].textContent = nameOne;
        nameDOM[1].textContent = " vs ";
        nameDOM[2].textContent = nameTwo;
        return{nameOne,nameTwo}
    }
    function getNames(){
        let playerOneName = nameDOM[0].textContent;
        let playerTwoName = nameDOM[2].textContent;
        return[playerOneName,playerTwoName];
        
    }
    function refreshGameboard(gameboard){
        console.log(gameboard);
        let cell1, cell2, cell3;
        gameboard = {row1:[cell1,cell2,cell3]
        ,row2:[cell1,cell2,cell3]
        ,row3:[cell1,cell2,cell3]}
        console.log(gameboard);
        addGameboardToDisplay(gameboard);
        announceDOM.textContent = "";
        return gameboard;
        
    }
    return {createEmptyBoard,addMarker,checkForWinOrTie,addGameboardToDisplay,AddNames,getNames,refreshGameboard};
})();

let Gameplay= function play(){
    function playRound(gameboard,row,cell,counter){
        let user1Marker = "x";//x
        let user2Marker = "o";//o
        if (counter%2 !== 0){//if odd,usermarker1,if even2. need a counter
            Gameboard.addMarker(gameboard,user1Marker,row,cell);
        }
        else{
            Gameboard.addMarker(gameboard,user2Marker,row,cell);
        }
        Gameboard.addGameboardToDisplay(gameboard);
        Gameboard.checkForWinOrTie(gameboard);
    }
    return{playRound};
}();//add () to run

let userInputs = (function(){
    //player names input
    submitButtonDOM.addEventListener("click",(e)=>{
        e.preventDefault();
        playerOneName = player1InputDOM.value;
        playerTwoName = player2InputDOM.value;
        Gameboard.AddNames(playerOneName,playerTwoName);
        
    });

    //tictactoe cells input
    let goCounter = 0;
    allGameboardCellsDOM.forEach((cell)=>{
        //read user click
        cell.addEventListener("click",()=>{   
            let annouceText = announceDOM.textContent;
            if (annouceText==""){
                rowNumberSelected = (cell.classList.value).slice(3,4);
                cellNumberSelected = (cell.id).slice(4,5)-1;
                if(cell.textContent !=="x" && cell.textContent !=="o"){
                    goCounter++;
                    Gameplay.playRound(gameboard,rowNumberSelected,cellNumberSelected,goCounter);
                }
            }   
        })
        
    });

    //restart input
    restartButtonDOM.addEventListener("click",(e)=>{
        gameboard = Gameboard.refreshGameboard(gameboard);
        goCounter = 0;
    });
})();

 let gameboard = Gameboard.createEmptyBoard();




