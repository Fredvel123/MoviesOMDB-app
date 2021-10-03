import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'

function About() {
    const {setcount, count} = useContext(DataContext)
    return (
      <div>
        <h1>About section</h1>
        <button onClick={() => setcount(count + 1)}>more</button>
      </div>
    );
}

export default About
