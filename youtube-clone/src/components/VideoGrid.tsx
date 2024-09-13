import { use, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const query = 'web development';

interface Video {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        channelTitle: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
        publishedAt: string;
    };
}

interface Channel {
    snippet: {
        title: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
    };
}


export default function VideoGrid() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [channels, setChannels] = useState<{ [key: string]: Channel }>({});

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        q: query,
                        maxResults: 8,
                        type: 'video', 
                        key: YOUTUBE_API_KEY
                    },
                });
                setVideos(response.data.items);

                
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        }

        fetchVideos();
    }, []);

    return (
        <div className='px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
            {videos.map(video => (
                <VideoCard
                    key={video.id.videoId}
                    title={video.snippet.title}
                    channelTitle={video.snippet.channelTitle}
                    thumbnail={video.snippet.thumbnails.medium.url}
                    views='100k'
                    timestamp={video.snippet.publishedAt}
                />
            ))}
        </div>
    )
}