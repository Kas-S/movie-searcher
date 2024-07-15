import {useMovieSearch} from "../movie-api"

function Home() {
    const {result, setQuery} = useMovieSearch()
    console.log(result)
    return <button onClick={() => setQuery("Batman")}>Press Me</button>
}

export default Home