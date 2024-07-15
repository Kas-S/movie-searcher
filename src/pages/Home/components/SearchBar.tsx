import {Dispatch, SetStateAction, useRef, FormEvent} from 'react'

interface SearchBarProps {
    setQuery: Dispatch<SetStateAction<string>>
}

function SearchBar({setQuery}: SearchBarProps) {
    const searchRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (searchRef.current) {
            setQuery(searchRef.current.value)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="pl-14 my-5 flex gap-3">
            <input type="search" ref={searchRef} className="border-2 border-solid p-2 rounded-lg w-1/3" placeholder="Search query"/>
            <button type="submit" className="p-3 rounded-md bg-amber-400 font-bold font-mono">Search</button>
        </form>
    )
}

export default SearchBar