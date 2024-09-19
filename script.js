
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
        //check for win in rows
        const annouceElement = document.querySelector(".announce");
        for (const row in gameboard) {
            let cell1 = `${gameboard[row][0]}`;
            let cell1undefined =gameboard[row][0];
            let cell2 = `${gameboard[row][1]}`;
            let cell3 = `${gameboard[row][2]}`;
            if(typeof cell1undefined !== 'undefined'){
                if(cell1==cell2&&cell1==cell3&&cell2==cell3){
                    annouceElement.textContent = "We have a winner by rows.The " +cell1+" marker wins."
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
                    annouceElement.textContent = "We have a winner by columns.The " +row1i+" marker wins.";
                    return;
                }
            }
        }
        //check for win in diagonal
        const diagonalOne = [gameboard.row1[0],gameboard.row2[1],gameboard.row3[2]];
        const diagonalTwo = [gameboard.row1[2],gameboard.row2[1],gameboard.row3[0]];
        //check if undefined in diagonals
        diagonalOneCheck = diagonalOne.filter((cell)=>typeof cell == 'undefined');
        diagonalTwoCheck = diagonalTwo.filter((cell)=>typeof cell == 'undefined');
        if(diagonalOneCheck.length >=1||diagonalTwoCheck.length >=1){
        }
        else if(diagonalOne[0]==diagonalOne[1]&&diagonalOne[0]==diagonalOne[2]&&diagonalOne[1]==diagonalOne[2]){
           annouceElement.textContent = "We have a winner by diagonal1.The " +diagonalOne[0]+" marker wins.";
                return;
        }
        else if(diagonalTwo[0]==diagonalTwo[1]&&diagonalTwo[0]==diagonalTwo[2]&&diagonalTwo[1]==diagonalTwo[2]){
            annouceElement.textContent = "We have a winner by diagonal2.The " +diagonalTwo[0]+" marker wins.";
                return;
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
        annouceElement.textContent = "It's a tie!";
        return;
    }
    function addGameboardToDisplay(gameboard){
        let cellsElements = document.querySelectorAll(".gameContainer>*");
        let cellNumber=0;
        let counter=1;
        cellsElements.forEach((cell)=>{
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
    function addNames(nameOne,nameTwo){
        let nameElements = document.querySelectorAll(".names>div");
        nameElements[0].textContent = nameOne;
        nameElements[1].textContent = " vs ";
        nameElements[2].textContent = nameTwo;
    }
    function refreshGameboard(gameboard){
        console.log(gameboard);
        let cell1, cell2, cell3;
        gameboard = {row1:[cell1,cell2,cell3]
        ,row2:[cell1,cell2,cell3]
        ,row3:[cell1,cell2,cell3]}
        console.log(gameboard);
        addGameboardToDisplay(gameboard);
        let nameElements = document.querySelectorAll(".names>div");
        nameElements[0].textContent = "";
        nameElements[1].textContent = "";
        nameElements[2].textContent = "";
        return gameboard;
        
    }
    return {createEmptyBoard,addMarker,checkForWinOrTie,addGameboardToDisplay,addNames,refreshGameboard};
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
    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click",(e)=>{
        e.preventDefault();
        playerOneName = document.querySelector(".player1").value;
        playerTwoName = document.querySelector(".player2").value;
        Gameboard.addNames(playerOneName,playerTwoName);
    });

    //tictactoe cells input
    let goCounter = 0;
    let cellElements = document.querySelectorAll(".gameContainer>*");
    cellElements.forEach((cell)=>{
        //read user click
        cell.addEventListener("click",()=>{   
            rowNumberSelected = (cell.classList.value).slice(3,4);
            cellNumberSelected = (cell.id).slice(4,5)-1;
            if(cell.textContent !=="x" && cell.textContent !=="o"){
                goCounter++;
                Gameplay.playRound(gameboard,rowNumberSelected,cellNumberSelected,goCounter);
                console.log("go counter is" + goCounter);
            }   
        })
    });

    //restart input
    const restartButton = document.querySelector(".restart");
    restartButton.addEventListener("click",(e)=>{
        gameboard = Gameboard.refreshGameboard(gameboard);
        goCounter = 0;
    });
})();

 let gameboard = Gameboard.createEmptyBoard();




