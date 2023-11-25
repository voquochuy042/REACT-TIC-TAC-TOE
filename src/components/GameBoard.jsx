
import React, { useState } from 'react'

export default function GameBoard({ onSelectedSquare, board }) {
    // let gameBoard = initialGameBoard
    // console.log(turns);
    // for (const turn of turns) {
    // console.log(turn);
    // const { square, player } = turn
    // console.log(player);
    // const { row, col } = square
    // console.log(gameBoard[row][col]);
    // gameBoard[row][col] = player
    // }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)
    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = prevGameBoard.map((innerArray) => [...innerArray]); // Create a copy of the 2D array
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // Update the specific element
    //         return updatedBoard;
    //     });
    //     onSelectedSquare()
    // }
    return (
        <ol id='game-board'>
            {
                board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button
                                        disabled={playerSymbol !== null}
                                        onClick={() => onSelectedSquare(rowIndex, colIndex)}>
                                        {playerSymbol}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))
            }
        </ol>
    )
}
