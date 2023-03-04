import React from 'react'
import aboutpizza from '../assets/aboutpizza.jpg'
import "../Styles/About.css"
function About() {
  return (
    <div className='aboutpage'>
        <div className='topabout' style={{backgroundImage:`url(${aboutpizza})`}}></div>
      
        <div className="aboutBottom">
            <h1>About Us</h1>
            <p>
                
        The pizza originated in Italy and it is one of the favorite foods for adults and children.
            It was originally dough with topping of any ingredients as meat or vegetables that baked in the oven.
            Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of
         olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly usually, 
        in a commercial setting, using a wood-fired oven heated to a very high temperature and served hot.
            Pizza developed to become more organized as Italians added sauce, cheese mozzarella and many other types of cheese.
            </p>
        </div>   
    </div>
  )
}

export default About
