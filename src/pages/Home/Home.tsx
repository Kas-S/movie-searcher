import {useMovieSearch} from "../../movie-api"
import {SearchBar, SearchResults} from "./components"

function Home() {
    const {result, setQuery} = useMovieSearch()
    return (
        <main>
            <SearchBar setQuery={setQuery}/>
            {result && <SearchResults results={result.results}/>}
        </main>
    )
}

export default Home