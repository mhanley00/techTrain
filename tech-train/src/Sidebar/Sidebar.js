import React, { Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component {

    constructor(props){
        super(props)
        this.state = {
            topic: 'dogs',
            collapsed: false
        }
    
        // this.selectTopic = this.selectTopic.bind(this);
    }
    handleClick = event => {
        const topic = event.target.id;
        console.log(topic);

        this.setState({topic:topic});

       }

    render() {
        return (
            <div>
            <ul className='sidebar-list'>
                <li className='menu-item'><div className='topic' id='ES6' onClick={this.handleClick}>ES6</div></li>
                <li className='menu-item'><div className='topic' id='ReactJS' onClick={this.handleClick}>ReactJS</div></li>
                <li className='menu-item'><div className='topic' id='Redux' onClick={this.handleClick}>Redux</div></li>
                <li className='menu-item'><div className='topic' id='CSS' onClick={this.handleClick}>CSS</div></li>
                <li className='menu-item'><div className='topic' id='Esri JS API' onClick={this.handleClick}>Esri JS API</div></li>
                <li className='menu-item'><div className='topic' id='Node.js' onClick={this.handleClick}>Node.js</div></li>
                
            </ul>
            </div>
        )
    }
}

export default Sidebar;