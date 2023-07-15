import React, { useState } from 'react'
import Navbar from './navbar';

export default function About() {
  const text=["text","Hello","kamal"];
  const[text2, setText] = useState("Hello World");
  const handleClick = (event) =>{
    event.preventDefault();
    alert("butoonClicked");
    setText("Hy the value is changed");
  }
  const [color, setColor]= useState("")
  const newfunc = (event) =>{
    event.preventDefault();
    setColor("purple");
  }
  const newfunc2 = (event) =>{
    event.preventDefault();
    setColor("red");
  }
  const newfunc3 = (event) =>{
    event.preventDefault();
    setColor("blue");
  }
  return (
    <div>
    <Navbar/>
    <h1>
    about page</h1>
    {text.map((item,index)=>(
      <h1 style={{color:"white","background-color":`${color}`}}>{item}</h1>
    ))}
    <button className="btn btn-success" onClick={handleClick}>Click me</button><hr/>
    <button className="btn btn-success" onMouseEnter={handleClick}>Click me</button><hr/>
    <p>{text2}</p>
    <div style={{"background-color": `${color}`,color:"white",padding:"20px;"}}>
    <button className="btn btn-secondary" onMouseEnter={newfunc}>Click me</button><hr/>
    <button className="btn btn-danger" onMouseEnter={newfunc2}>Click me</button><hr/>
    <button className="btn btn-primary" onMouseEnter={newfunc3}>Click me</button><hr/>

    </div>
     </div>
  )
}
