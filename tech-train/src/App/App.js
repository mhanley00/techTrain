import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import apiCall from "../api/apiCall";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTopic: "ES6",
      measurements: {
        min: 0,
        max: 100
      },
      features: undefined
    };
  }

  componentDidMount() {
    // let features;
    apiCall
      .search()
      .then(res => {
        this.setState({ features: res.data.features });
      })
      .catch(err => console.log(err));
  }
  //this.setState({ features: [...this.state.features, res.data.features] })

  handleClick = event => {
    const topic = event.target.id;
    this.setState({ activeTopic: topic });
  };

  //spread (...)
  updateMax = () =>
    this.setState({ measurements: { ...this.state.measurements, max: 500 } });
  // updateMax =()=> this.setState({measurements:{max: 500}});
  //don't do this, this will override all nested state

  updateMax = () => {
    let newMeasurements = { ...this.state.measurements };
    //making a copy of current state, update only pieces we want to update
    newMeasurements.max = 500;
    this.setState({ measurements: newMeasurements });
  };

  render() {
    console.log(this.handleClick);
    return (
      <div className="App">
        <Sidebar
          topic={this.state.activeTopic}
          changeTopic={this.handleClick}
        />
        <Main topic={this.state.activeTopic} />
        {this.state.features && (
          <div className="data">
            {this.state.features.map(feature => (
              <p key={feature.attributes.OBJECTID}>{feature.attributes.Name}</p>
            ))}
          </div>
        )}
        <div className="max-min">
          <button onClick={this.updateMax}>Update Max</button>
          <p>{this.state.measurements.min}</p>
          <p>{this.state.measurements.max}</p>
        </div>
      </div>
    );
  }
}

export default App;
