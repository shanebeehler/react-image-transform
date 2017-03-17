import React, { Component } from 'react';
import ImageContainer       from './image_container';
import List                 from './list';
import                           '../styles/App.css';

const initialState = { "rotate(40deg)"     : false,
                       "translateX(-40px)" : false,
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
    var items = ["rotate(40deg)", "translate(-40px)", "opacity(.5)", "scale(.5)"];
    return (
      <div className="App">

        <ImageContainer transformations={this.state}/>

        <div className="lists-container">
          <List title="Available Actions"
                items={items}
                onClick={ (item) => { this.transformImage(item, true) } }
                state={ this.state }/>

          <List title="Applied Actions"
                items={items}
                onClick={ (item) => { this.transformImage(item, false) } }
                state={ this.state }
                reset={ this.reset.bind(this) }/>
        </div>

      </div>
    );
  }
}

export default App;
