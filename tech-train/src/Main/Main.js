import React from "react";
import "./Main.css";
import {subjects} from "../config/config";



function Main(props) {
    
    // const {subjects} = mainconfig;
    const filtered = subjects.filter(subject => subject.label.includes(props.topic));
    console.log(filtered[0].info);
    console.log(filtered[0].useful);
    const currTopic = filtered[0];
    //.reduce descriptions
  return (
    <div className="main-content">
      <h2>{props.topic}</h2>
      <p>
        Here's everything you need to know about <b>{props.topic}</b>...
      </p>
      <div className="item-info">{currTopic.info}</div>
      <div className="useful-links"> 
      {currTopic.useful 
        ? currTopic.useful.map(usef => (
            <div 
            key={currTopic.usef}
            className="sub-content"
            >
            <h3>
            <a href={usef.url} target="blank">  {usef.name}</a>
            </h3>
            <p>
                {usef.about}
            </p>
               
            </div>
        ))
        : null}</div>
    </div>
  );
}
export default Main;
