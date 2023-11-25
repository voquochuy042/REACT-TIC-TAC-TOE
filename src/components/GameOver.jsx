import React from 'react'

export default function GameOver({ winner, onRestart }) {
    console.log(winner);
    return (
        <div id='game-over'>
            <h2>Game Over</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>Draw!</p>}
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>
        </div>
    )
}
