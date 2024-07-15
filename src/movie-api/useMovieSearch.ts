import {useEffect, useState} from "react"
import {Movie} from "../types";

type QueryResult = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}

function useMovieSearch() {
    const [query, setQuery] = useState(""),
          [result, setResult] = useState<QueryResult | undefined>(undefined)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=89afb4ada1fb6e8592502acb0d5befba`, {method: 'GET', headers: {accept: 'application/json'}})
        .then(res => res.json()).then(data => {
            setResult(data as QueryResult)
        })
    }, [query])
    return {result, setQuery}
}

export default useMovieSearch