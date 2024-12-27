import React from 'react'
import MenuData from './MenuData'
import Menucon from './Menucon'

function PropsMenu(){
  return (
    <div className='menu-container'>
    <h1 className='menu-heading'>Menu Andalan</h1>
    <div className='project-container'>
      {MenuData.map((val,ind)=>{
        return(
          <Menucon 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          view={val.view}
          menu={val.menu}
          />
        )
      })}
        </div>   
    </div>
  )
}

export default PropsMenu
