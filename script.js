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
        for (const row in gameboard) {
            gameboard.row1[1]=1; //just temp for checking this loop
            let cell1 = `${gameboard[row][0]}`;
            let cell2 = `${gameboard[row][1]}`;
            let cell3 = `${gameboard[row][2]}`;
            if(cell1==cell2&&cell1==cell3&&cell2==cell3){
                console.log("we have a winner");
            }
            else{
                console.log("this row contains "+cell1+cell2+cell3);
            }
            
            //`${gameboard[row][2]}`
            //`${gameboard[row][3]}`
          }
        //for
        //check for win
        //if any row is all 1s or 0s

        //if any column is all 1s or 0s
        //if diagonals are all 1s or 0s

        //check if board is full and no win i.e tie

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
    Gameboard.addMarker(gameboard,computerMarker,3,2);//user2 choice
    Gameboard.addMarker(gameboard,userMarker,1,2);//user1 choice
    Gameboard.addMarker(gameboard,computerMarker,2,1);//user2 choice
    Gameboard.addMarker(gameboard,userMarker,1,0);//user1 choice
    Gameboard.addMarker(gameboard,computerMarker,1,1);//user2 choice
    Gameboard.addMarker(gameboard,userMarker,2,0);//user1 choice
    //check for win
    Gameboard.checkForWinOrTie(gameboard);
    //when 3 in a row or tie console log user1 won/user2 won/tie
    


    return{};
})();
