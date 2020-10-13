import React from 'react';

export default function TeamDetail(props){

    const players = props.players.map(player => {
        return (
            <tbody>
                <td>{player.name}</td>
                <td>{player.position}</td>
            </tbody>
        )
    })

    return (
        <table>
            <thead>
                <th>Name:</th>
                <th>Position:</th>
            </thead>
            {players}
        </table>
    )
}