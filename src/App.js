import React, { useState } from 'react';

import {useEffect} from 'react';

import './App.css'
import SearchIcon from './Search.svg'
import MovieCard from './MovieCard';

const API_Key = "http://www.omdbapi.com/?apikey=47bae035&"

const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchTerm , setSeacrhTerm] = useState('');
    const searchMovie = async (title) => {
        const response = await fetch(`${API_Key}s=${title}`)

        const data = await response.json();
        setMovies(data.Search);
    }

///^(?=[\S\s]{10,8000})[\S\s]*$/
    useEffect(() => {
        searchMovie('')
    }, [])

    return(
        <div className='app'>
            <h1>Movies.DB</h1>
            <div className='search'>
                <input placeholder='Search for movies'
                value={searchTerm}
                onChange={(e) => setSeacrhTerm(e.target.value)}>
                </input>
                <img src={SearchIcon}
                alt='search'
                onClick={() => searchMovie(searchTerm)}></img>
            </div>

            {
                movies?.length > 0 ?
                (
                    <div className='container'>
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))
                        }
                    </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No Movies Found!!</h2>
                    </div>
                )
            }


        </div>
    );
}

export default App;