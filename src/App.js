import "./App.css"
import React, { useState} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar.js"
import Feed from "./components/Feed.js"
import VideoDetail from "./components/VideoDetail.js"

import SearchFeed from "./components/SearchFeed.js"
import { StateProvider } from "./context-api/Context";
import Background from "./images/waveybg.jpg"

const App = () => {

  const [theme, setTheme] = useState("dark__theme__app");
  const changeTheme = () => {
    setTheme(theme === "dark__theme__app" ? "light__theme__app" : "dark__theme__app")
  }



  return (
    <StateProvider>
      <BrowserRouter>
        <div className="background" style={{ backgroundImage: `url(${Background})` }}>
          <div className={theme}>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Feed changeTheme={changeTheme} />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </StateProvider>


  )
}

export default App
