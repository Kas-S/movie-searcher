import {Movie} from "../../../types"

interface Props {
    results: Movie[]
}

function SearchResults({results}: Props) {
    return (
        <ul className="flex flex-row flex-wrap gap-3 justify-center items-center">
            {results.map((result: Movie) => (
                <li key={result.id} className="w-[30%]">
                    <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt=""/>
                    {result.original_title} ({result.release_date.slice(0, 4)})</li>
            ))}
        </ul>
    )
}

export default SearchResults