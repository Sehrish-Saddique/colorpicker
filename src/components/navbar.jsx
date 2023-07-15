 import React from 'react'
 import {Link} from 'react-router-dom'
 import myLogo from '../images/color-picker.png';

 export default function Navbar() {
   return (
     <div> 
     
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="" className="flex items-center">
            <img src={myLogo} className="h-9 mr-2" alt="Color picker Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Color Picker</span>
        </Link>
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link to="/Home" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/About" className="text-gray-900 dark:text-white hover:underline">About Us</Link>
                </li>
                <li>
                    <Link to="/Contact" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
                </li>
                <li>
                    <Link to="/Signin" className="text-gray-900 dark:text-white hover:underline">Sign in</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
 
 
     </div>
   )
 }
 