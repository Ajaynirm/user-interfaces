import React, { useState } from "react";
import "./accordion.css";
import { data } from "./accordata.js";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleClick = (id) => {
    console.log(id);
    setSelected(selected == id ? null : id); 
    console.log(selected);
    
  };
  const ChangeFunction = () => {

  }
  return (
    <>
    <div className="wrapper">
    <div className="head">Accordion</div>
    <button className="btn__change" onClick={"ChangeFunction"}>Multiple select</button>
      <div className="accordion">

        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div className="item" key={index}>    
              <div onClick={() => handleSingleClick(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ? (
                <div className="answer">{item.answer}</div>
              ) : (
                <div></div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
    </>
  );
};

export default Accordion;
