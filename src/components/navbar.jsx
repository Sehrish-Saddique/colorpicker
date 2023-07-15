 import React from 'react'
 import {Link} from 'react-router-dom'
 export default function Navbar() {
   return (
     <div> 
     
<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </Link>
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link to="/Home" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/About" class="text-gray-900 dark:text-white hover:underline">About Us</Link>
                </li>
                <li>
                    <Link to="/Contact" class="text-gray-900 dark:text-white hover:underline">Contact</Link>
                </li>
                <li>
                    <Link to="/Signin" class="text-gray-900 dark:text-white hover:underline">Sign in</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
 
 
     </div>
   )
 }
 