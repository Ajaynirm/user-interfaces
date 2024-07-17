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
  return (
    <>
    <div className="wrapper">
      <div className="accordion">
        <h1 className="head">Accordion</h1>
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
