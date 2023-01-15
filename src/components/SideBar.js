import React from 'react'
import { categories } from "../utils/constants.js"
import { settings } from "../utils/constants.js"


const SideBar = ({ selectedCategory, setSelectedCategory, changeTheme }) => {


  return (
    <div className="sidebar">
      <button className="change__theme" onClick={changeTheme}>Change Theme</button>
      <div className="sidebar__categories">
        <span className='title'>Categories</span>
        {categories.map((category) => <button onClick={() => setSelectedCategory(category.name)}>
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>)}
      </div>
      <br />
      <div className="sidebar__settings">
        <span className='title'>More on Youtube</span>
        {settings.map((setting) => 
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <button >
              <span>{setting.icon}</span>
              <span>{setting.name}</span>
            </button>
        </a>
      )}
      </div>
    </div>
  )
}

export default SideBar