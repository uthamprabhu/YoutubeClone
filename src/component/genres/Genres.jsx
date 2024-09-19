import { useState } from 'react'
import './Genres.css'

import genresData from '../../fakeData/genres.json'

const Genres = ({ isShortSidebar }) => {

    const [genreData, setGenreData] = useState(genresData)

    return (
        <div className={`${isShortSidebar ? 'genresShortSidenavChange' : 'genres-parent-container'}`}>
            <div className={`${isShortSidebar ? 'genreSubContainerShort' : 'genreSubContainer'}`}>
                {genreData.map((data, index) => (
                    <div className='genreItem' key={index}>
                        <div>{data.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Genres