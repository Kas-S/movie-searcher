import {useMovieSearch} from "../../movie-api"
import {SearchBar, SearchResults} from "./components"

export default function Home() {
    const {result, setQuery} = useMovieSearch()
    return (
        <main>
            <SearchBar setQuery={setQuery}/>
            {result && <SearchResults results={result.results}/>}
        </main>
    )
}
