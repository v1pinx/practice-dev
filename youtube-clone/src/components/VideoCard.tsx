    import logo from '../../public/logo.jpg';
    import Image from 'next/image';

    interface VideoCardProps{
        title: string;
        channelTitle: string;
        thumbnail: string;
        views: string;
        timestamp: string;
    }

    export default function VideoCard({title,channelTitle ,thumbnail, views, timestamp}: VideoCardProps) {
        return (
            <div className='max-w-lg rounded-lg shadow-lg p-4'>
                <Image
                    src={thumbnail}
                    alt="Thumbnail Image"
                    className='rounded-lg'
                    width={1920}  
                    height={1080}
                    layout='responsive'
                />
                <div className='flex pt-4'>
                    <div><Image src={logo} alt="Logo" className='rounded-full w-16 sm:w-20'/></div>
                    <div className='pl-4'>
                        <div className='font-bold text-lg sm:text-base md:text-lg lg:text-xl text-gray-300 leading-snug'>{title}</div>
                        <div className='pt-1 text-sm sm:text-xs md:text-sm text-gray-400'>{channelTitle}</div>
                        <div className='pt-1 text-sm sm:text-xs md:text-sm text-gray-400'>{views} - {timestamp}</div>
                    </div>

                </div>
            </div>
        )
    }