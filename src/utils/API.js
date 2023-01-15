import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com' 

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': "26f045d35bmshb58839c26d9888ep10b4b6jsn7d78ea2af4a6",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}

/*
baseUrl/getVideos etc.
*/