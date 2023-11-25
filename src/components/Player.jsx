import React, { useState } from 'react'

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function edit() {
        setIsEditing((editing) => !editing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }
    let editablePlayerName = <span className='player-name'>{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input
            onChange={(e) => { setPlayerName(e.target.value) }}
            className='player-name' required defaultValue={playerName} />
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={edit}>{!isEditing ? 'edit' : 'save'}</button>
        </li>
    )
}
