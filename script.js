let initialGameboard = (function createGameboard(){//module for creating initial empty gameboard
    let cell1, cell2, cell3;
    const gameboard = {row1:[cell1,cell2,cell3]
        ,row2:[cell1,cell2,cell3]
        ,row3:[cell1,cell2,cell3]}
    console.log("Initial gameboard" );
    console.log(gameboard);
    return gameboard;
})();

