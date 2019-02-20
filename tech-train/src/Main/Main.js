import React from "react";
import "./Main.css";
import config from "../config/config";

function Main(props) {
  const techTopics = config.subjects;
//   const filtered1 = techTopics.filter(str => {
//       return str.label.includes(props.topic);
    
//     });
    const filtered = techTopics.filter(techTopic => techTopic.label.includes(props.topic));
    console.log(filtered[0].info);
    //.reduce descriptions
  return (
    <div className="main-content">
      <h2>{props.topic}</h2>
      <p>
        Here's everything you need to know about <b>{props.topic}</b>...
      </p>
      <div>{filtered[0].info}</div>
    </div>
  );
}

export default Main;
