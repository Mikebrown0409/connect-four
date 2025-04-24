  /*----- constants -----*/

  //look-up data structure
  const COLORS = {
    '1': 'purple',
    '-1': 'orange',
    'null': 'white',
  };

  /*----- state variables -----*/

  let board; 
  let winner;
  let turn;

  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/
  

  function init () {
    // to visualize the mapping (connection) between
    // the board array and the "cells"/divs in the DOM
    // "rotate" the board 90 degress counter - clockwise.
    board = [
        [null, null, null, null, null, null], // col 0
        [null, null, null, null, null, null], // col 1
        [null, null, null, null, null, null], // col 2
        [null, null, null, null, null, null], // col 3
        [null, null, null, null, null, null], // col 4
        [null, null, null, null, null, null], // col 5
        [null, null, null, null, null, null], // col 6

    ];
    winner = null; 
    turn = 1;
    render();
  };

  // The purpose of the render() is to 
  // "transfer"/visualize ALL state to the DOM. 

  function render () {
    renderBoard();
    // renderMessage();
    // renderControls();
  }

  function renderBoard() {
    board.forEach((colArr, colIdx) => {
        colArr.forEach((cellVal, rowIdx) => {
            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.backgroundColor = COLORS[cellVal];
        });
    });
  }

  init();