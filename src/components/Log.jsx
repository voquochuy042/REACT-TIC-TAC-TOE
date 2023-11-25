import React from 'react'

export default function Log({ turns }) {
    // console.log(turns);
    return (
        <ol id='log'>
            {
                turns.map((item) => <li key={`${item.square.row}${item.square.col}`}>
                    {item.player} selected {item.square.row}:{item.square.col}
                </li>)
            }
        </ol>
    )
}
