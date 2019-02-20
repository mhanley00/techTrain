import React from 'react';
import './Sidebar.css';
import config from 'config';

function Sidebar (props) {
    console.log(props);
//HOIST TO CONFIG, .map ACROSS
    return (
            <div className='sidebar'>
            <ul className='sidebar-list'> 
            <li className={`menu-item ${props.topic === 'ES6' ? 'active' : ''}`}><div id='ES6' onClick={props.changeTopic} >ES6</div></li>        
            </ul>
            </div>

    )};

export default Sidebar;