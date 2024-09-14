import Image from 'next/image';
import logoPlaceholder from '../../public/logo.jpg'; // Fallback if no logo

interface VideoCardProps {
    title: string;
    channelTitle: string;
    thumbnail: string;
    views: string;
    timestamp: string;
    channelLogo?: string; // Add channelLogo as optional prop
}

export default function VideoCard({ title, channelTitle, thumbnail, views, timestamp, channelLogo }: VideoCardProps) {
    const maxTitleLength = 50;
    const truncatedTitle = title.length > maxTitleLength ? title.substring(0, maxTitleLength) + '...' : title;

    return (
        <div className='max-w-lg rounded-lg shadow-lg p-4'>
            <div className="relative w-full h-52">
                <Image
                    src={thumbnail}
                    alt="Thumbnail Image"
                    className='rounded-lg'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='flex pt-4'>
                <div>
                    <Image 
                        src={channelLogo || logoPlaceholder} // Fallback to placeholder if no logo
                        alt="Channel Logo"
                        className='rounded-full w-16 sm:w-20' 
                        width={64}
                        height={64}
                    />
                </div>
                <div className='pl-4'>
                    <div className='font-bold text-lg sm:text-base md:text-lg lg:text-xl text-gray-300 leading-snug'>
                        {truncatedTitle}
                    </div>
                    <div className='pt-1 text-sm sm:text-xs md:text-sm text-gray-400'>{channelTitle}</div>
                    <div className='pt-1 text-sm sm:text-xs md:text-sm text-gray-400'>{views} - {timestamp}</div>
                </div>
            </div>
        </div>
    );
}
