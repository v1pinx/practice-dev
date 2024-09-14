import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

interface Video {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        channelId: string;
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
    id: string;
    snippet: {
        title: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
    };
}

interface VideoGridProps {
    query: string;
}

export default function VideoGrid({ query }: VideoGridProps) {
    const [videos, setVideos] = useState<Video[]>([]);
    const [channels, setChannels] = useState<{ [key: string]: Channel }>({});

    useEffect(() => {
        const fetchVideosAndChannels = async () => {
            try {
                const videoResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        q: query,
                        maxResults: 8,
                        type: 'video', 
                        key: YOUTUBE_API_KEY
                    },
                });
                const fetchedVideos = videoResponse.data.items;
                setVideos(fetchedVideos);

                const channelIds = fetchedVideos.map((video: Video) => video.snippet.channelId);

                const channelResponse = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
                    params: {
                        part: 'snippet',
                        id: channelIds.join(','),
                        key: YOUTUBE_API_KEY
                    }
                });

                const fetchedChannels: { [key: string]: Channel } = {};
                channelResponse.data.items.forEach((channel: Channel) => {
                    fetchedChannels[channel.id] = channel;
                });
                setChannels(fetchedChannels);

            } catch (error) {
                console.error("Error fetching videos or channels:", error);
            }
        };

        fetchVideosAndChannels();
    }, [query]);

    return (
        <div className='px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
            {videos.map(video => (
                <a 
                    key={video.id.videoId}
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`} // YouTube video URL
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security measure to prevent security risks
                    className="block" // Ensure the whole card is clickable
                >
                    <VideoCard
                        title={video.snippet.title}
                        channelTitle={video.snippet.channelTitle}
                        thumbnail={video.snippet.thumbnails.medium.url}
                        views='100k'
                        timestamp={video.snippet.publishedAt}
                        channelLogo={channels[video.snippet.channelId]?.snippet.thumbnails.default.url}
                    />
                </a>
            ))}
        </div>
    );
}
