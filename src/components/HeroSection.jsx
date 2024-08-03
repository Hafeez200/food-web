import React from 'react'
import "./HeroSection.css"

function HeroSection() {
  return (
    <div className='hero-container'> 
       
        <div>
            <input type="text" placeholder='Search for food' />
            <button>Search</button>
        </div>
    </div>
  )
}

export default HeroSection