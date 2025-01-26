import React from 'react'
import './ExploerMenu.css'
import {menu_list} from '../../assets/assets'

export const ExploerMenu = ({category,setCategory}) => {

  return (
    <div className='exploer-menu' id='exploer-menu'>
      <h1>Exploer our menu</h1>
      <p className='exploer-menu-text'>Discover a wide variety of delicious dishes in our food delivery app. From appetizers to desserts, our menu is crafted to satisfy every craving. Browse through different cuisines, special combos, and seasonal offerings—all just a tap away.</p>
    <div className="exploer-menu-list">
      {menu_list.map((item,index) =>{
        return(
         <div onClick={()=> setCategory(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className='exploer-menu-list-item'>
          <img className={ category===item.menu_name?"active" :""} src={item.menu_image} alt="" />
          <p>{item.menu_name}</p>

         </div>
        )
      })}
        
    </div>
    <hr></hr>
    </div>
  )
}

export default ExploerMenu;
