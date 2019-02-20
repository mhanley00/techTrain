import React from 'react';
import './Sidebar.css';
//import config from 'config';

function Sidebar (props) {
    console.log(props);
//HOIST TO CONFIG, .map ACROSS
    return (
            <div className='sidebar'>
            <ul className='sidebar-list'> 
                <li className={`menu-item ${props.topic === 'ES6' ? 'active' : ''}`}><div id='ES6' onClick={props.changeTopic} >ES6</div></li>
                <li className={`menu-item ${props.topic === 'ReactJS' ? 'active' : ''}`}><div id='ReactJS' onClick={props.changeTopic} >ReactJS</div></li>
                <li className={`menu-item ${props.topic === 'Redux' ? 'active' : ''}`}><div id='Redux' onClick={props.changeTopic} >Redux</div></li>
                <li className={`menu-item ${props.topic === 'CSS' ? 'active' : ''}`}><div id='CSS' onClick={props.changeTopic} >CSS</div></li>
                <li className={`menu-item ${props.topic === 'EsriJSAPI' ? 'active' : ''}`}><div id='EsriJSAPI' onClick={props.changeTopic} >EsriJSAPI</div></li>
                <li className={`menu-item ${props.topic === 'Node.js' ? 'active' : ''}`}><div id='Node.js' onClick={props.changeTopic} >Node.js</div></li>
                
            </ul>
            </div>

    )};

export default Sidebar;