import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer.js";

let initialState = {
    likedVideos: [],
    dislikedVideos:[]
};

export const Context = createContext(initialState);

export const StateProvider = (props) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const likeVideo = (video) => {
        dispatch({ type: "LIKE__VIDEO", payload: video});
       
    };
    const unLikeVideo = (videoID) => {
        dispatch({ type: "UNLIKE__VIDEO", payload: videoID });
       
    };

    
   



    return (
        <Context.Provider
            value={{
                likedVideos: state.likedVideos,
                dislikedVideos: state.dislikedVides,
                likeVideo: likeVideo,
                unLikeVideo: unLikeVideo,                
            }}
        >
            {props.children}
        </Context.Provider>
    );
};