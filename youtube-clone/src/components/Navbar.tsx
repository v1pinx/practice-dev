import Image from 'next/image';
import youtubeIcon from '../../public/youtubelogo.svg';
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
        <div className="flex items-center shadow-md px-14">
            <div className="flex items-center">
                <Image src={youtubeIcon} alt="YouTube Logo" width={120} height={40} />
            </div>
            <div className="flex-grow">
                <SearchBar />
            </div>
            <button
                className="text-l px-4 py-2 rounded-full border-2 border-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Sign in
            </button>


        </div>
    );
}
