import { useState, useRef } from 'react'
import './Genres.css'

import genresData from '../../fakeData/genres.json'

const Genres = ({ isShortSidebar }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const genreContainerRef = useRef(null)

    const cardWidth = 120; // Width of each genreItem + margin
    const maxVisibleItems = 6; // Number of visible genreItems at a time
    const maxIndex = Math.max(0, genresData.length - maxVisibleItems); // Max index for the slider

    const scrollLeft = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    }

    const scrollRight = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
    }

    const getScrollStyle = () => {
        return {
            transform: `translateX(-${currentIndex * cardWidth}px)`
        }
    }

    return (
        <div className={`${isShortSidebar ? 'genresShortSidenavChange' : 'genres-parent-container'}`}>
            <button
                className="arrow-button"
                onClick={scrollLeft}
                disabled={currentIndex === 0}
            >
                &lt;
            </button>

            <div className={`${isShortSidebar ? 'genreSubContainerShort' : 'genreSubContainer'}`} ref={genreContainerRef}>
                <div className="genre-scroll-container" style={getScrollStyle()}>
                    {genresData.map((data, index) => (
                        <div className='genreItem' key={index}>
                            <div>{data.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="arrow-button"
                onClick={scrollRight}
                disabled={currentIndex === maxIndex}
            >
                &gt;
            </button>
        </div>
    )
}

export default Genres
