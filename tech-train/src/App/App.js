import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

class App extends Component {
  //MOVE STATE HERE, GIVE TO COMPONENTS AS PROPS
  render() {
    return (
      <div className="App">
      <Sidebar/>
      <Main/>
      </div>
    );
  }
}

export default App;
