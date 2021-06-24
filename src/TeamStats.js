// eslint-disable-next-line
import React, {Component} from 'react';
import axios from "axios";

class PlayerStats extends Component {
  constructor(props){
    super(props)
    this.state={
    teamName: null,
    teams: [],
    abbreviation: null,
    conference: null,
    division: null,
    full_name: null,
    id: null,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getTeams()
  }

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if(replace.length > 0){
      this.setState({teamName: replace})
    } 
  }

  getTeams = () => {
    axios.get(`https://www.balldontlie.io/api/v1/teams/`)
    .then(async res => {
      const result = res.data.data;
      this.setState({teams: result})
      await this.getTeamInfo()
    }).catch(err => {
      console.log(err)
    })
  }

  getTeamInfo = () => {
      var found = false
      for(let i = 0; i < this.state.teams.length; i++)
      {
        if(this.state.teams[i].full_name.toUpperCase().includes(this.state.teamName.toUpperCase()) )
        {
            found = true;
            const abrv = this.state.teams[i].abbreviation
            this.setState({abbreviation: abrv})
            const conf = this.state.teams[i].conference
            this.setState({conference: conf})
            const name = this.state.teams[i].full_name
            this.setState({full_name: name})
            const div = this.state.teams[i].division
            this.setState({division: div})
            const ID = this.state.teams[i].id
            this.setState({id: ID})
         }
    }
    if(!found)
    {
        alert("Be sure to check your spelling!")
    }
  }
  
  render(){
  return (
    <div className="App">
    <h3>Enter a Team's name to see their info!</h3>
    <br/>
    <form onSubmit={this.handleSubmit}>
                <label>Enter Team Name&nbsp;&nbsp;</label>
    
                <input 
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Team Name"
                />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" class="btn btn-primary">Submit</button>
     </form>
      <ul>
        <br />
        Full Name: {this.state.full_name}
        <br />
        Abbreviation: {this.state.abbreviation}
        <br />
        Conference: {this.state.conference}
        <br />
        Division: {this.state.division}
        <br />
        API Team ID: {this.state.id}
      </ul>
    </div>
  );
}
}

export default PlayerStats;
