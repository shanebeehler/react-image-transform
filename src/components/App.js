import React, { Component } from 'react';
import ImageContainer       from './image_container';
import List                 from './list';
import                           '../styles/App.css';

const initialState = { "rotate(40deg)"     : false,
                       "translate(-40px)"  : false,
                       "opacity(.5)"       : false,
                       "scale(.5)"         : false
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = initialState;
  }

  transformImage(transformation, boolean) {
    var newState = {};
    newState[transformation] = boolean;
    this.setState(newState);
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    return (
      <div className="App">

        <ImageContainer transformations={this.state}/>

        <div className="lists-container">
          <List title="Available Actions"
                onClick={ (item) => { this.transformImage(item, true) } }
                transformations={ this.state }/>

          <List title="Applied Actions"
                onClick={ (item) => { this.transformImage(item, false) } }
                transformations={ this.state }
                reset={ this.reset.bind(this) }/>
        </div>

      </div>
    );
  }
}

export default App;
