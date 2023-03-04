import React from 'react'
import { MenuList } from '../components/Menuitems.js';
import MenuSingleItem from '../components/MenuSingleItem.js';
import "../Styles/Menu.css"
function Menu() {
  return (
    <div className='menupage'>
        <h1 className='menutitle'>Our Menu</h1>
        <div className='menulist'>
            {MenuList.map((menuitem,key)=>{
                return (
                <MenuSingleItem 
                Key={key}
                image={menuitem.image} 
                name={menuitem.name} 
                price={menuitem.price}/>
                
                );
            })}
        </div>
    </div>
  )
}

export default Menu
