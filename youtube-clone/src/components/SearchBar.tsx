import { useState } from 'react';
interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar( {onSearch}: SearchBarProps) {    
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <div className="flex items-center justify-center my-4 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-xs sm:max-w-md lg:max-w-lg w-full">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="w-full py-2 pl-10 pr-12 text-lg border rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                />
                <button onClick={handleSearch}>
                <svg
                    className="absolute right-4 top-3 w-6 h-6 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        clipRule="evenodd"
                        d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                        fill-rule="evenodd"
                    />
                </svg> 
                </button>
            </div>
        </div>
    );
}
