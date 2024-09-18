let Gameboard = (function createGameboard(){//module for creating initial empty gameboard
    let cell1, cell2, cell3;
    const createEmptyBoard = {row1:[cell1,cell2,cell3]
        ,row2:[cell1,cell2,cell3]
        ,row3:[cell1,cell2,cell3]}
    function addMarker(gameboard,marker,rownumber,cell){
        if(marker==1){
            if(rownumber==1){
                gameboard.row1[cell] = 1;
            }
            else if(rownumber==2){
                gameboard.row2[cell] = 1;
            }
            else if(rownumber==3){
                gameboard.row3[cell] = 1;
            }
        }
        else{
            if(rownumber==1){
                gameboard.row1[cell] = 0;
            }
            else if(rownumber==2){
                gameboard.row2[cell] = 0;
            }
            else if(rownumber==3){
                gameboard.row3[cell] = 0;
            }
        }

        return gameboard;
    }
    function checkForWinOrTie(gameboard){
        //check for win in rows
        for (const row in gameboard) {
            let cell1 = `${gameboard[row][0]}`;
            let cell1undefined =gameboard[row][0];
            let cell2 = `${gameboard[row][1]}`;
            let cell3 = `${gameboard[row][2]}`;
            if(typeof cell1undefined !== 'undefined'){
                if(cell1==cell2&&cell1==cell3&&cell2==cell3){
                    console.log("We have a winner by rows.The " +cell1+" marker wins.");
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
                    console.log("We have a winner by columns.The " +row1i+" marker wins.");
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
        if(diagonalOneCheck.length >0||diagonalTwoCheck.length >0){
        }
        else if(diagonalOne[0]==diagonalOne[1]&&diagonalOne[0]==diagonalOne[2]&&diagonalOne[1]==diagonalOne[2]){
            console.log("We have a winner by diagonal1.The " +diagonalOne[0]+" marker wins.");
                return;
        }
        else if(diagonalTwo[0]==diagonalTwo[1]&&diagonalTwo[0]==diagonalTwo[2]&&diagonalTwo[1]==diagonalTwo[2]){
            console.log("We have a winner by diagonal2.The " +diagonalTwo[0]+" marker wins.");
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
        console.log("It's a tie!")
        return;
    }
    return {createEmptyBoard,addMarker,checkForWinOrTie};
})();



let oneGame = (function playGame(){
    console.log("to start the game I must first create an empty gameboard");
    console.log(Gameboard.createEmptyBoard);
    let gameboard = Gameboard.createEmptyBoard;
    let userMarker = 1;//x
    let computerMarker = 0;//o
    let userOneChoice,userTwoChoice; //this will be gotten from a click but for now ill set it
  
    //example game flow for builidng game - user 1 wins
    Gameboard.addMarker(gameboard,userMarker,3,0);//user1 choice
    Gameboard.checkForWinOrTie(gameboard);
    Gameboard.addMarker(gameboard,computerMarker,3,2);//user2 choice
    Gameboard.checkForWinOrTie(gameboard);
    Gameboard.addMarker(gameboard,userMarker,1,2);//user1 choice
    Gameboard.checkForWinOrTie(gameboard);
    Gameboard.addMarker(gameboard,computerMarker,2,1);//user2 choice
    Gameboard.checkForWinOrTie(gameboard);
    Gameboard.addMarker(gameboard,userMarker,1,0);//user1 choice
    Gameboard.checkForWinOrTie(gameboard);
    Gameboard.addMarker(gameboard,computerMarker,1,1);//user2 choice
    Gameboard.checkForWinOrTie(gameboard);
    Gameboard.addMarker(gameboard,userMarker,2,0);//user1 choice
    Gameboard.checkForWinOrTie(gameboard);
    //check for win
    
    //when 3 in a row or tie console log user1 won/user2 won/tie
    


    return{};
})();
