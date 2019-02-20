import React, { Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeTopic: 'ES6', //this will control sidebar css + what shows in main container
            collapsed: true, //this will control entire sidebar (css) width OR x index

        } //WILL BE PROPS
    }
    
    handleClick = event => {
        const topic = event.target.id;
        //add className active to clicked item
        this.setState({activeTopic:topic});
        //THIS.STATE.ACTIVE TOPIC === ,<> id is 


       }
//HARD CODE FOR NOW, FUTURE CAN MAP TO CONFIG
// className={`analysis-instructions ${this.state.dndActive ? 'active' : ''}`}
    render() {

        return (
            <div className='sidebar'>
            <ul className='sidebar-list'> 
                <li className={`menu-item ${this.state.activeTopic === 'ES6' ? 'active' : ''}`}><div id='ES6' onClick={this.handleClick}>ES6</div></li>
                <li className={`menu-item ${this.state.activeTopic === 'ReactJS' ? 'active' : ''}`}><div id='ReactJS' onClick={this.handleClick}>ReactJS</div></li>
                <li className={`menu-item ${this.state.activeTopic === 'Redux' ? 'active' : ''}`}><div id='Redux' onClick={this.handleClick}>Redux</div></li>
                <li className={`menu-item ${this.state.activeTopic === 'CSS' ? 'active' : ''}`}><div id='CSS' onClick={this.handleClick}>CSS</div></li>
                <li className={`menu-item ${this.state.activeTopic === 'EsriJSAPI' ? 'active' : ''}`}><div id='EsriJSAPI' onClick={this.handleClick}>Esri JS API</div></li>
                <li className={`menu-item ${this.state.activeTopic === 'Node.js' ? 'active' : ''}`}><div id='Node.js' onClick={this.handleClick}>Node.js</div></li>
                
            </ul>
            </div>
        )
    }
}

export default Sidebar;