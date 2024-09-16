import { useEffect, useRef, useState } from 'react'

import './Sidenav.css'
import home from '../../icons/sidenav/home.svg'
import shorts from '../../icons/sidenav/shorts.svg'
import subs from '../../icons/sidenav/subscription.svg'
import allSubs from '../../icons/sidenav/subscriptions/allSubs.svg'
import showMoree from '../../icons/sidenav/subscriptions/showMore.svg'
import showLesss from '../../icons/sidenav/subscriptions/showLess.svg'

import trending from '../../icons/sidenav/explore/trending.svg'
import shopping from '../../icons/sidenav/explore/shopping.svg'

import rArrow from '../../icons/sidenav/You/rightArrow.svg'
import history from '../../icons/sidenav/You/history.svg'
import playlists from '../../icons/sidenav/You/playlists.svg'
import yourVideos from '../../icons/sidenav/You/yourVideos.svg'
import watchLater from '../../icons/sidenav/You/watchLater.svg'
import likedVideos from '../../icons/sidenav/You/likedVideos.svg'
import yourClips from '../../icons/sidenav/You/yourClips.svg'

import subsData from '../../fakeData/Subs.json'
import exploreData from '../../fakeData/explore.json'

const Sidenav = () => {
    const sidenavRef = useRef(null);

    const exploreIconsMap = {
        trending: trending,
        shopping: shopping,
    }

    const [showMore, setShowMore] = useState(false)

    const handleToggle = () => {
        setShowMore(!showMore)
    }

    const subscriptionsToShow = showMore ? subsData : subsData.slice(0, 10)

    useEffect(() => {
        const sidenav = sidenavRef.current;

        const handleScroll = (event) => {
            const isAtTop = sidenav.scrollTop === 0;
            const isAtBottom =
                sidenav.scrollTop + sidenav.clientHeight >= sidenav.scrollHeight;

            if (
                (!isAtTop && event.deltaY < 0) || // Scrolling up when not at the top
                (!isAtBottom && event.deltaY > 0) // Scrolling down when not at the bottom
            ) {
                event.stopPropagation();
            } else if (isAtTop && event.deltaY < 0) {
                // Prevent body scroll when at the top and trying to scroll up
                event.preventDefault();
            } else if (isAtBottom && event.deltaY > 0) {
                // Prevent body scroll when at the bottom and trying to scroll down
                event.preventDefault();
            }
        };

        const handleMouseEnter = () => {
            sidenav.addEventListener('wheel', handleScroll, { passive: false });
        };

        const handleMouseLeave = () => {
            sidenav.removeEventListener('wheel', handleScroll);
        };

        sidenav.addEventListener('mouseenter', handleMouseEnter);
        sidenav.addEventListener('mouseleave', handleMouseLeave);

        // Clean up the event listeners on component unmount
        return () => {
            sidenav.removeEventListener('mouseenter', handleMouseEnter);
            sidenav.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="sidenav-parent-container" ref={sidenavRef}>
            <div className='sidenav-first-child-container'>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={home}
                        alt='home'
                    />
                    <span>Home</span>
                </div>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={shorts}
                        alt='shorts'
                    />
                    <span>Shorts</span>
                </div>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={subs}
                        alt='subs'
                    />
                    <span>Subscriptions</span>
                </div>
            </div>
            {/* YOU section */}
            <div className='sidenav-second-child-container'>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <span style={{ fontSize: '1.1em', fontWeight: '500' }}>You</span>
                    <img
                        src={rArrow}
                        alt='home'
                        style={{ position: 'relative', top: '2px', left: '5px' }}
                    />
                </div>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={history}
                        alt='shorts'
                    />
                    <span>History</span>
                </div>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={playlists}
                        alt='subs'
                    />
                    <span>Playlists</span>
                </div>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={yourVideos}
                        alt='subs'
                    />
                    <span>Your videos</span>
                </div>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={watchLater}
                        alt='subs'
                    />
                    <span>Watch later</span>
                </div>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={likedVideos}
                        alt='subs'
                    />
                    <span>Liked videos</span>
                </div>
                <div className='sidenav-first-child-items' tabIndex="0">
                    <img
                        src={yourClips}
                        alt='subs'
                    />
                    <span>Your clips</span>
                </div>
            </div>
            {/* subscriptions */}
            <div className='sidenav-second-child-container'>
                <div className='sidenav-third-child-itemss' tabIndex="0">
                    <span>Subscriptions</span>
                </div>
                {subscriptionsToShow.map((data, index) => (
                    <div title={data.name} key={index} className='sidenav-third-child-items' tabIndex="0">
                        <img src={data.img} alt={data.name} />
                        <span className='truncate'>{data.name}</span>
                    </div>
                ))}

                {showMore &&
                    <div className='sidenav-third-child-items' tabIndex="0">
                        <img
                            src={allSubs}
                            alt="All Subscriptions"
                        />
                        <span>All Subscriptions</span>
                    </div>
                }
                {/* Show More / Show Less Button */}
                {subsData.length > 10 && (
                    <div onClick={handleToggle} className='sidenav-third-child-items' tabIndex="0">
                        {showMore ? (
                            <>
                                <img
                                    src={showLesss}
                                    alt="Show less"
                                />
                                <span>Show less</span>
                            </>
                        ) : (
                            <>
                                <img
                                    src={showMoree}
                                    alt="Show more"
                                />
                                <span>Show more</span>
                            </>
                        )}
                    </div>
                )}
            </div>
            {/* Explore */}
            <div className='sidenav-second-child-container'>
                <div className='sidenav-fourth-child-itemss' tabIndex="0">
                    <span>Explore</span>
                </div>
                {exploreData.map((data, index) => (
                    <div className='sidenav-fourth-child-items' tabIndex="0">
                        <img
                            src={exploreIconsMap[data.icon]}
                            alt={data.name}
                        />
                        <span>{data.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidenav