import React, {useEffect, useContext} from 'react'
import { DataContext } from '../context/DataProvider'

function Movie() {
    const { setOpen} = useContext(DataContext);
    useEffect(() => {
        setOpen(false);
    }, [])
    return (
        <div>
            this will be the movie.
        </div>
    )
}

export default Movie
