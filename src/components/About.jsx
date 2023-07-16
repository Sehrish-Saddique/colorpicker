import React, { useState } from 'react'
import Navbar from './navbar';

export default function About() {
  const text = "At ColorPicker, we believe that colors are an essential part of our lives. Whether you are an artist, designer, developer, or simply someone who appreciates the beauty of colors, our app is designed to make your color selection process effortless and enjoyable";
  // const text=["text","Hello","kamal"];
  // const[text2, setText] = useState("Hello World");
  // const handleClick = (event) =>{
  //   event.preventDefault();
  //   alert("buttonClicked");
  //   setText("Hy the value is changed");
  // }
  const [color, setColor]= useState("")
  const newfunc = (event) =>{
    event.preventDefault();
    setColor("purple");
  }
  const newfunc2 = (event) =>{
    event.preventDefault();
    setColor("green");
  }
  const newfunc3 = (event) =>{
    event.preventDefault();
    setColor("blue");
  }
  return (
    <div>
    <Navbar/>
    
    {/* {text.map((item,index)=>(
      <h1 style={{color:"white","background-color":`${color}`}}>{item}</h1>
    ))} */}
    {/* <button className="btn btn-success" onClick={handleClick}>Click me</button><hr/>
    <button className="btn btn-success" onMouseEnter={handleClick}>Click me</button><hr/> */}
    {/* <p>{text2}</p> */}
    <div style={{"background-color": `${color}`,color:"white",padding:"20px;"}} className="mb-4 mx-2 p-6 rounded-4">
    <p>{text}</p>
    <button className="btn btn-secondary" onMouseEnter={newfunc}>Hover me</button><hr/>
    <button className="btn btn-success" onMouseEnter={newfunc2}>Hover me</button><hr/>
    <button className="btn btn-primary" onMouseEnter={newfunc3}>Hover me</button><hr/>

    </div>
     </div>
  )
}
