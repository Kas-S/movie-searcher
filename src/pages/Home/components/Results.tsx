import {Movie} from "../../../types"

interface Props {
    results: Movie[]
}

function SearchResults({results}: Props) {
    return (
        <ul>
            {results.map((result: Movie) => (
                <li key={result.id}>{result.original_title} ({result.release_date})</li>
            ))}
        </ul>
    )
}

export default SearchResults