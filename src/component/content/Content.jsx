import { useState } from 'react'
import './Content.css'
import videosData from '../../fakeData/videos.json'
import threeDotsImg from '../../icons/content/threeDots.svg'
import verified from '../../icons/content/verified.svg'

const Content = ({ isShortSidebar }) => {
    const [videoData, setVideoData] = useState(videosData)

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const shuffledData = shuffleArray(videoData);

    return (
        <div className={`${isShortSidebar ? 'contentShortSidenavChange' : 'contents-parent-container'}`}>
            {shuffledData.map((data, index) => (
                <div className='content-main-container'>
                    <div key={index} className={`${isShortSidebar ? 'content-container-short' : 'content-container'}`}>
                        <div className='thumbnail-container'>
                            <div className="thumbnail">
                                <img
                                    src={data.thumbnail}
                                    alt={data.videoHeadline}
                                    width={isShortSidebar ? 336 : 397}
                                    height={isShortSidebar ? 189 : 223}
                                />
                                <div className="videoLength">{data.videoLength}</div>
                            </div>
                        </div>
                        <div className="body-container">
                            <div className="profileImage">
                                <img
                                    src={data.profileImage}
                                    alt={data.profileImage}
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="videoTextInfos">
                                <div className="videoHeadline">{data.videoHeadline}</div>
                                <div className="channelName">
                                    <div>{data.channelName}</div>
                                    {data.isVerified === "true" &&
                                        <img src={verified} alt='verified' width={14} height={14} />
                                    }
                                </div>
                                {data.sponsored === "true" ?
                                    <></> :
                                    <div className="viewsUploadedAgo">
                                        <div className="views">{data.views}</div>•
                                        <div className="uploadedAgo">{data.uploadedAgo}&nbsp;ago</div>
                                    </div>
                                }
                            </div>
                            <div className="threeDots">
                                <img
                                    src={threeDotsImg}
                                    alt="threeDotsImg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Content