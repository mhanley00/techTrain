import React, { Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeTopic: 'dogs', //this will control sidebar css + what shows in main container
            collapsed: true, //this will control entire sidebar (css) width OR x index

        }
    }
    // let className = 'topic';
    // console.log(topic);
    handleClick = event => {
        const topic = event.target.id;
        //add className active to clicked item
        this.setState({activeTopic:topic});

       }

    render() {
        return (
            <div> {/*will add 'hidden' class to close on hover*/}
            <ul className='sidebar-list'> 
                <li className='menu-item'><div className={this.className} id='ES6' onClick={this.handleClick}>ES6</div></li>
                {/* <li className='menu-item'><div className={className} id='ReactJS' onClick={this.handleClick}>ReactJS</div></li>
                <li className='menu-item'><div className={className} id='Redux' onClick={this.handleClick}>Redux</div></li>
                <li className='menu-item'><div className={className} id='CSS' onClick={this.handleClick}>CSS</div></li>
                <li className='menu-item'><div className={className} id='Esri JS API' onClick={this.handleClick}>Esri JS API</div></li>
                <li className='menu-item'><div className={className} id='Node.js' onClick={this.handleClick}>Node.js</div></li> */}
                
            </ul>
            </div>
        )
    }
}

export default Sidebar;