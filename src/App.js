// eslint-disable-next-line
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PlayerStats from './PlayerStats';
import TeamStats from './TeamStats';
import Home from './home'

class App extends Component {
  

  render() {
    return (
      <>
      
        <Router>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' exact component={Home} />
              <Route path='/PlayerStats' exact component={PlayerStats} />
              <Route path='/TeamStats' exact component={TeamStats} />

            </Switch> 
        </Router>
      </>
    );
  }
  }
  
  export default App;