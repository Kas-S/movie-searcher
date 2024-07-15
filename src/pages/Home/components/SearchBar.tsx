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
        <form onSubmit={handleSubmit}>
            <input type="search" ref={searchRef}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar