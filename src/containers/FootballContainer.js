import React, { Component } from 'react';
import {key} from '../token';
import TeamSelector from '../components/TeamSelector';
import TeamDetail from '../components/TeamDetail';

export default class FootballContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            teamPlayers:[]
        };
        this.handleTeamSelect = this.handleTeamSelect.bind(this);
    }

    componentDidMount() {
        const url = 'http://api.football-data.org/v2/teams';
        fetch(url, {
            headers: {
                'X-Auth-Token': key
            }
        })
            .then(response => response.json())
            .then(data => this.setState({teams: data.teams}))
            .catch(err => console.error(err))
    }
    
    handleTeamSelect(id){
        const teamsUrl = `http://api.football-data.org/v2/teams/${id}`;
        fetch(teamsUrl, {
            headers: {
                'X-Auth-Token': key
            }
        })
            .then(response => response.json())
            .then(data => this.setState({teamPlayers: data.squad}))
            .catch(err => console.error(err))
    }

    render(){
        return (
            <div>
                <h2>Football Container</h2>
                <TeamSelector teams={this.state.teams} onTeamSelect={this.handleTeamSelect}/>
                <TeamDetail players={this.state.teamPlayers} />
            </div>
        )
    }
}