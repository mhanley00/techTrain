import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        activeTopic: 'ES6', 
    }
}

handleClick = event => {
    const topic = event.target.id;
    this.setState({activeTopic:topic});
   }

  render() {
    console.log(this.handleClick);
    return (
      <div className="App">
      <Sidebar
      topic= {this.state.activeTopic}
      changeTopic={this.handleClick}
      />
      <Main
      topic= {this.state.activeTopic}
      />
      </div>
    );
  }
}

export default App;
