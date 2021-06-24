// eslint-disable-next-line
import React, {Component} from 'react';

class Home extends Component {
  render(){
  return (
    
    <div className="App">
        <br/>
        <h2>&nbsp;Hello! Welcome to my NBA search app! </h2>
        <br/>
        <p>&nbsp;&nbsp;This app utilizes the REST Api <a href="https://www.balldontlie.io/#introduction"></a>balldontlie.io. Using this app you can either search a players stats for the current season, or </p>  
        <p>&nbsp;&nbsp;search for information about any team in the NBA. </p>    
        <br/><br/>
        <h4 color="h-primary">&nbsp;&nbsp;Future Updates</h4>  
        <p>
            <ul>
                <li>Player vs Player comparison</li>
                <li>Player vs Team statistics</li>
                <li>Match up statistics</li>
            </ul>
        </p>

    </div>
    );
    }
}
export default Home;
