import Image from 'next/image';

interface VideoCardProps{
    title: string;
    channelTitle: string;
    thumbnail: string;
    views: string;
    timestamp: string;
}

export default function VideoCard() {
    return (
        <div className='max-w-lg rounded-lg shadow-lg p-4'>
            <Image src={thumbnail} alt="Thumbnail Image" className='rounded-lg w-full' />
            <div className='flex pt-4'>
                <div><Image src={logo} alt="Logo" className='rounded-full w-16 sm:w-20'/></div>
                <div className='pl-4'>
                    <div className='font-bold text-lg sm:text-base md:text-lg lg:text-xl text-gray-300 leading-snug'>XOR Queries of a Subarray | Simple Question | LeetCode Daily Question</div>
                    <div className='pt-1 text-sm sm:text-xs md:text-sm text-gray-400'>FireShip</div>
                    <div className='pt-1 text-sm sm:text-xs md:text-sm text-gray-400'>1.8K views - 8 hours ago</div>
                </div>

            </div>
        </div>
    )
}