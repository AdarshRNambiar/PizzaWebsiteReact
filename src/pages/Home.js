import React from 'react'
import "../Styles/Home.css"
import { Link } from 'react-router-dom'
import bgImage from '../assets/pizzawallpaper.jpg'
function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${bgImage})`,opacity: 0.8}}>
      <div className='headerContainer'>
        <h1>Crave Pizza</h1>
        <h4>Satisfy your cravings with every slice - Order delicious pizza online now!</h4>
        <div className='order'>
        <Link to="/menu">
          <button >ORDER NOW</button>
        </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Home
