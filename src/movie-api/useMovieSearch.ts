import {useEffect, useState} from "react"

function useMovieSearch() {
    const [query, setQuery] = useState(""),
          [result, setResult] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=89afb4ada1fb6e8592502acb0d5befba`, {method: 'GET', headers: {accept: 'application/json'}})
        .then(res => res.json()).then(data => {
            setResult(data)
        })
    }, [query])
    return {result, setQuery}
}

export default useMovieSearch