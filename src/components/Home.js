import React from 'react'
import Slider from './Slider'
import BestMovies from './BestMovies'
import { Link } from 'react-router-dom'
// import PaginationControlled from './Pagination'

function Home() {
    return (
        <>
        {/* <PaginationControlled /> */}
            <Slider />
            <BestMovies />
            <div className='text-center'>
                <Link to="/movies" className='btn btn-primary'>Movies</Link>
            </div>
        </>
    )
}

export default Home