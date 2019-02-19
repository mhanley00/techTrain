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
        this.setState({topic:event.currentTarget.value});
        
       }

    render() {
        return (
            <div>
            <ul className='sidebar-list'>
                <li className='menu-item'><button type='button' onClick={this.handleClick} name='ES6' value='ES6' ><div className='topic'>ES6</div></button></li>
                <li className='menu-item'><button type='button' onClick={this.handleClick} name='ReactJS' value='ReactJS' ><div className='topic'>ReactJS</div></button></li>


                {/* <li className='menu-item'><div className='topic' name='ReactJS'>ReactJS</div></li>
                <li className='menu-item'><div className='topic' name='Redux'>Redux</div></li>
                <li className='menu-item'><div className='topic' name='CSS'>CSS</div></li>
                <li className='menu-item'><div className='topic' name='Esri JS API'>Esri JS API</div></li>
                <li className='menu-item'><div className='topic' name='Node.js'>Node.js</div></li> */}
                
            </ul>
            </div>
        )
    }
}

export default Sidebar;