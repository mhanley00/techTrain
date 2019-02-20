
import React from 'react';
import './Main.css';

function Main(props){

return (
            <div className='main-content'>
                {/* {props.topic === 'ES6' &&  */}
                {/* <div className='ES6-container'> */}
                <h2>{props.topic}</h2>
                <p>Here's everything you need to know about <b>{props.topic}</b>...
                </p>
                {/* </div> */}
            
                
            </div>
)};

export default Main;
