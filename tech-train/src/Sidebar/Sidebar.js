import React from 'react';
import './Sidebar.css';
import config from '../config/config';

function Sidebar (props) {
    console.log(props);
const techTopics = config.subjects;
    return (
            <div className='sidebar'>
            <ul className='sidebar-list'> 
            {techTopics.map(techTopic =>
            <li className={`menu-item ${props.topic === techTopic.label ? 'active' : ''}`}><div id={techTopic.label} onClick={props.changeTopic} >{techTopic.label}</div></li>        
                )}
            </ul>
            </div>

    )};

export default Sidebar;