
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCsBjURrPoezykLs9EqgamOA';


export default function VideoGrid() {
    const [videos, setVideos] = useState([]);
    useEffect(() =>{
        const fetchVideos = async () =>{
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    channelId: CHANNEL_ID,
                    maxResults: 6,
                    key: YOUTUBE_API_KEY
                },
            });
            setVideos(response.data.items);
        }

        fetchVideos();
    },[]);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
            
        </div>
    )
}