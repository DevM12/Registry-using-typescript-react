import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";




export default function SearchInput() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search?term=${term}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative">
                <div className="absolute inset-y-0 flex items-center px-3">
                    <FaSearch className='h-5 w-5 text-gray-500' />
                </div>

                <input
                    type="text"
                    className="pl-10 py-2 w-full border-0 shadow-none"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    placeholder="Search Packages"
                />
            </div>
        </form>
    )
}