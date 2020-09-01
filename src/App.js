import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
          <h6 style={{
            color: 'whitesmoke',
            textAlign: 'center'
          }}>Buil with <span style={{ color: 'blue' }}>♥</span> by Saadeddine LOUATI</h6>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
