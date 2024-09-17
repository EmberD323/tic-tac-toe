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
        
        console.log("Gameboard after adding an x");
        console.log(gameboard);
        return gameboard;
    }
    return {createEmptyBoard,addMarker};
})();



let oneGame = (function playGame(){
    console.log("to start the game I must first create an empty gameboard");
    console.log(Gameboard.createEmptyBoard);
    let gameboard = Gameboard.createEmptyBoard;
    let userMarker = 1;//x
    let computerMarker = 0;//o
    let userChoice; //this will be gotten from a click but for now ill set it
  
    //exmaple game flow for builidng game
    Gameboard.addMarker(gameboard,userMarker,3,0);//user choice
    Gameboard.addMarker(gameboard,computerMarker,3,2);//computer choice
    Gameboard.addMarker(gameboard,userMarker,1,2);//user choice
    Gameboard.addMarker(gameboard,computerMarker,2,1);//computer choice
    Gameboard.addMarker(gameboard,userMarker,1,0);//user choice
    Gameboard.addMarker(gameboard,computerMarker,1,1);//computer choice
    Gameboard.addMarker(gameboard,userMarker,2,0);//user choice


    return{};
})();
