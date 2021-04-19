import React from "react";

const LatestsContent = (props) => {
  return (
    <section>
      <div>
        <h3>{props.title}</h3>
        <video src={props.link}></video>
        <div className="flex">{props.desc}</div>
      </div>
    </section>
  );
};

export default LatestsContent;
