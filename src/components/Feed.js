import React, { useState, useEffect } from 'react'
import SideBar from "./SideBar.js"
import Videos from "./Videos.js"
import { fetchAPI } from "../utils/API.js"

const Feed = ({changeTheme}) => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])


  return (
    <div className="feed">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} 
        changeTheme = {changeTheme}
        />
      <div className="feed__content">
        <Videos videos={videos} />
      </div>
      <div>

      </div>


    </div>
  )
}

export default Feed