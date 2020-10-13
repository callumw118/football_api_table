import React from 'react';

export default function TeamSelector(props){

    function handleSelect(event){
        props.onTeamSelect(event.target.value);
    }

    if(props.teams.length === 0){
        return <p>Loading...</p>
    }

    const options = props.teams.map(team => {
        return <option value={team.id} key={team.id}>{team.name}</option>
    })

    return (
        <select id="competition-selector" defaultValue="default" onChange={handleSelect}>
            <option disabled value="default">Choose a Team</option>
            {options}
        </select>
    )
}   