import React, { useState } from "react";
import "./accordion.css";
import { data } from "./accordata.js";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti,setEnableMulti] = useState(false);
  const [multiSelected,setMultiSelected]=useState([]);
  const handleSingleClick = (id) => {
    console.log(id);
    setSelected(selected == id ? null : id); 
    console.log(selected);
    setMultiSelected([]);
    
  };
  const handleMultiClick = (id) => {
    let copy =[...multiSelected];
    const findOccur =copy.indexOf(id);
    if(findOccur === -1){
      copy.push(id);
    }else{
      copy.splice(findOccur,1);
    }
    setMultiSelected(copy);
  } 
  console.log(multiSelected,enableMulti);
  

  return (
    <>
    <div className="wrapper ">
    <div className="head">Accordion</div>
    <button className="btn__change" onClick={() => setEnableMulti(!enableMulti)}>Toggle Multi-select</button>
      <div className="accordion">

        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div className="item " key={index}>    
              <div onClick={() => (enableMulti ? handleMultiClick(item.id) : handleSingleClick(item.id))} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {(selected === item.id && !enableMulti)  || (multiSelected.includes(item.id) && enableMulti) ? (
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
