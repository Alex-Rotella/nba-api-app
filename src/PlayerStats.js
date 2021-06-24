// eslint-disable-next-line
import React, {Component} from 'react';
import axios from "axios";


class PlayerStats extends Component {
  constructor(props){
    super(props)
    this.state={
      playerName: null,
      playerStats: {},
      fullname: null,
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
  this.getPlayerId()
}

handleChange = (event) => {
  const replace = event.target.value.split(" ").join("_");
  if(replace.length > 0){
    this.setState({playerName: replace})
  }
}

  getPlayerId = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      if(res.data.data[0] === undefined){
        alert("This player hasn't played yet!")
      } else if(res.data.data.length > 1){
        alert("Pleases specify the name more!")
      } else{
        var fullname = res.data.data[0].first_name + ' ' + res.data.data[0].last_name;
        this.setState({ fullname: fullname})
        await this.getPlayerStats(res.data.data[0].id)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?&player_ids[]=${playerId}`)
    .then(async res => {
      this.setState({ playerStats: res.data.data[0]})
    }).catch(err => {
      console.log(err)
    })
  }

  


  render(){
  return (
    
    <div className="App">

              <h3>Enter a players name to see their stats this season!</h3>
     <br/>
     <form onSubmit={this.handleSubmit}>
       <label>
         Enter Player's Name &nbsp;&nbsp;
    
         <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Players Name"
         />
       </label>

       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button type="submit" class="btn btn-primary">Submit</button>
     </form>
     <br/>
     <ul>
       Players Name: {this.state.fullname}
     <br/>
     Games played: {this.state.playerStats["games_played"]}
     <br />
     Points averaged: {this.state.playerStats["pts"]}
     <br />
     Assists averaged: {this.state.playerStats["ast"]}
     <br />
     Rebounds averaged: {this.state.playerStats["reb"]}
     <br />
     Minutes averaged: {this.state.playerStats["min"]}
     <br/>
     Field Goal % : {this.state.playerStats["fg_pct"]}
     </ul>

    </div>
  );
}
}
export default PlayerStats;
