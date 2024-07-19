import React, { useState } from 'react'
import "./randomcolor.css"

const RandomColor = () => {
    const [colorType, setColorType] = useState("rgb");
    const generateColor = () => {}
    console.log(colorType);
  return (
   <>
   <div>
    <button onClick={() => setColorType("hex")}>Hex color</button>
    <button onClick={() => setColorType("rgb")}>Rgb color</button>
    <button onClick={() =>generateColor}>Generate Random Color</button>
   </div>
   </>
  )
}

export default RandomColor