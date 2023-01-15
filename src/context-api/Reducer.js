// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "LIKE__VIDEO":
            return {
                ...state,
                likedVideos: [action.payload, ...state.likedVideos],
            };

        case "UNLIKE__VIDEO":
            return {
                ...state,
                likedVideos: state.likedVideos.filter((video) => video.id !== action.payload),
            }; 

        

        default:
            return state;
    }
};