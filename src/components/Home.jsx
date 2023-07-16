import React from 'react'
import Navbar from './navbar';
import { SketchPicker } from 'react-color'
import { useState } from 'react'

export default function Home() {
  const[currentColor, setCurrentColor] = useState("#000000");
  const handleOnChange =(color)=>{
    setCurrentColor(color.hex);
  }
  const appStyle ={
    color:"white",
    backgroundColor : currentColor,
    height: "100vh",
    textAlign:"center"

  }
  return (
    <div className=" ">
    <Navbar/>
    <div className='App rounded-6 p-10 m-2' style={appStyle}>
    <h1>Color Picker</h1>
    <div style={{alignItems:"center",display:"flex",justifyContent:"center",padding:"10px"}}>
    <SketchPicker 
      color={currentColor}
      onChangeComplete={handleOnChange}
    />
    </div>
    <h3>Here's your color code : {currentColor}</h3>
  
    </div>
    </div>
  )
}
