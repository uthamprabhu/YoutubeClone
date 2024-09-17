import { useState } from 'react'

import home from '../../icons/sidenav/home.svg'
import shorts from '../../icons/sidenav/shorts.svg'
import subs from '../../icons/sidenav/subscription.svg'
import allSubs from '../../icons/sidenav/subscriptions/allSubs.svg'
import showMoree from '../../icons/sidenav/subscriptions/showMore.svg'
import showLesss from '../../icons/sidenav/subscriptions/showLess.svg'

import trending from '../../icons/sidenav/explore/trending.svg'
import shopping from '../../icons/sidenav/explore/shopping.svg'
import music from '../../icons/sidenav/explore/music.svg'
import movies from '../../icons/sidenav/explore/movies.svg'
import live from '../../icons/sidenav/explore/live.svg'
import gaming from '../../icons/sidenav/explore/gaming.svg'
import news from '../../icons/sidenav/explore/news.svg'
import sports from '../../icons/sidenav/explore/sports.svg'
import courses from '../../icons/sidenav/explore/courses.svg'
import fashionBeauty from '../../icons/sidenav/explore/fashionBeauty.svg'
import podcasts from '../../icons/sidenav/explore/podcasts.svg'

import uTubePremium from '../../icons/sidenav/moreFromUTube/uTubePremium.svg'
import uTubeStudio from '../../icons/sidenav/moreFromUTube/uTubeStudio.svg'
import uTubeMusic from '../../icons/sidenav/moreFromUTube/uTubeMusic.svg'
import uTubeKids from '../../icons/sidenav/moreFromUTube/uTubeKids.svg'

import settings from '../../icons/sidenav/settingsAndOthers/settings.svg'
import reportHistory from '../../icons/sidenav/settingsAndOthers/reportHistory.svg'
import help from '../../icons/sidenav/settingsAndOthers/help.svg'
import sendFeedback from '../../icons/sidenav/settingsAndOthers/sendFeedback.svg'

import rArrow from '../../icons/sidenav/You/rightArrow.svg'
import history from '../../icons/sidenav/You/history.svg'
import playlists from '../../icons/sidenav/You/playlists.svg'
import yourVideos from '../../icons/sidenav/You/yourVideos.svg'
import watchLater from '../../icons/sidenav/You/watchLater.svg'
import likedVideos from '../../icons/sidenav/You/likedVideos.svg'
import yourClips from '../../icons/sidenav/You/yourClips.svg'

import subsData from '../../fakeData/Subs.json'
import exploreData from '../../fakeData/explore.json'
import moreFromUTube from '../../fakeData/moreFromUTube.json'
import settingsAndOthers from '../../fakeData/settingsAndOthers.json'

const MainSidebar = () => {

    const exploreIconsMap = {
        trending: trending,
        shopping: shopping,
        music: music,
        movies: movies,
        live: live,
        gaming: gaming,
        news: news,
        sports: sports,
        courses: courses,
        fashionBeauty: fashionBeauty,
        podcasts: podcasts,
    }

    const moreFromUTubeIconsMap = {
        uTubePremium: uTubePremium,
        uTubeStudio: uTubeStudio,
        uTubeMusic: uTubeMusic,
        uTubeKids: uTubeKids
    }

    const settingsAndOthersIconsMap = {
        settings: settings,
        reportHistory: reportHistory,
        help: help,
        sendFeedback: sendFeedback
    }

    const [showMore, setShowMore] = useState(false)

    const handleToggle = () => {
        setShowMore(!showMore)
    }

    const subscriptionsToShow = showMore ? subsData : subsData.slice(0, 10)

    return (
        <>

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

            {/* more from YouTube */}
            <div className='sidenav-second-child-container'>
                <div className='sidenav-fourth-child-itemss' tabIndex="0">
                    <span>More from YouTube</span>
                </div>
                {moreFromUTube.map((data, index) => (
                    <div className='sidenav-fourth-child-items' tabIndex="0">
                        <img
                            src={moreFromUTubeIconsMap[data.icon]}
                            alt={data.name}
                        />
                        <span>{data.name}</span>
                    </div>
                ))}
            </div>

            {/* settings And Others */}
            <div className='sidenav-second-child-container'>
                {settingsAndOthers.map((data, index) => (
                    <div className='sidenav-fourth-child-items' tabIndex="0">
                        <img
                            src={settingsAndOthersIconsMap[data.icon]}
                            alt={data.name}
                        />
                        <span>{data.name}</span>
                    </div>
                ))}
            </div>

            {/* last in the Sidebar */}
            <div className='sidenav-last-child-container'>
                <div className='sidenav-last-child-items1'>
                    <span>About</span>
                    <span>Press</span>
                    <span>Copyright</span>
                    <span>Contact us</span>
                    <span>Creators</span>
                    <span>Advertise</span>
                    <span>Developers</span>
                </div>
                <div className='sidenav-last-child-items2'>
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span>Policy & Safety</span>
                    <span>How YouTube works</span>
                    <span>Test new features</span>
                </div>
                <div className='sidenav-last-child-items3'>
                    © 2024 Google LLC
                </div>
            </div>
        </>
    )
}

export default MainSidebar