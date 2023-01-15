import React, { useState, useEffect } from 'react'
import Videos from "./Videos.js"
import { fetchAPI } from "../utils/API.js"
import { useParams } from "react-router-dom"

const SearchFeed = ({ selectedCategory, setSelectedCategory }) => {

    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <div className="search__feed">
            <div className="search__feed__content">
                <h2 className='search__feed__content__title'>You're searching for ; {searchTerm}.</h2>
                <Videos videos={videos}/>
            </div>
        </div>
    )
}

export default SearchFeed