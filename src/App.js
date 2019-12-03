import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Show from './components/Show';
import Edit from './components/Edit';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar,Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';


class App extends Component {
  render(){
    return(
        <div>
          <Router>
            <AppBar position="static" >
              <Toolbar>
              <Button component={ Link } to="/" color="inherit">
                Home
              </Button>
              <Button component={ Link } to="/create" color="inherit">
                Create
              </Button>
              </Toolbar>
            </AppBar>
            <Switch>
              <Container>
              <Route exact path="/" component={Home}/>
              <Route path="/create" component={Create}/>
              <Route path="/show/:id" component={Show}/>
              <Route path="/edit/:id" component={Edit}/>
              </Container>
            </Switch>
          </Router>
        </div>
    )
  }
}

export default App;
