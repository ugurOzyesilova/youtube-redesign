import React, { useState, useContext, useEffect } from 'react'
import { Context } from "../context-api/Context";
import logo from "../images/logo.png"
import { HiOutlineMicrophone } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import ReactPlayer from "react-player"
import Modal from 'react-modal';
import {AiOutlineLike} from "react-icons/ai"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const { likedVideos } = useContext(Context);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm("")
    }
  }

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }


  return (
    <div className="navbar">
    
        <div className="navbar__logo">
        
          <img className="" src={logo} alt="" />
        <Link to = "/">
          <h1>YouTube</h1>
         </Link> 
        </div>
  
     
      
      <form className="navbar__search" onSubmit={handleSubmit}>
        <HiOutlineMicrophone className="navbar__search__icon" />
        <input
        value = {searchTerm}
        onChange = {(e) => {setSearchTerm(e.target.value)}} 
        type="text" 
        placeholder='Search anything you want...'/>
      </form>
      <button onClick= {openModal} className="navbar__liked__videos">
        {size <= 768 ? (<><AiOutlineLike /> <span>{likedVideos.length}</span></>) : (<><p>Liked Videos</p><span>{likedVideos.length}</span></>)}
       
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className='modal'>
          <button onClick={closeModal}>X</button>
          <div className="video">
            {likedVideos.map((video, idx) => (
              <>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video?.id}`}
                  className="modal-react-player"
                  height="80vh"
                  width="75vw"
                  controls />
                
              </>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Navbar