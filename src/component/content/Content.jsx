import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Content.css';
import videosData from '../../fakeData/videos.json';
import threeDotsImg from '../../icons/content/threeDots.svg';
import verified from '../../icons/content/verified.svg';

const Content = ({ isShortSidebar }) => {
    const [videoData, setVideoData] = useState(videosData);
    const navigate = useNavigate(); // Use useNavigate for routing

    // Shuffle function for random videos
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const shuffledData = shuffleArray(videoData);

    // Function to handle video click and navigate to /video/:videoId
    const handleVideoClick = (videoId) => {
        navigate(`/${videoId}`); // Navigate to the single video page
    };

    return (
        <div className={`${isShortSidebar ? 'contentShortSidenavChange' : 'contents-parent-container'}`}>
            {shuffledData.map((data, index) => (
                <div className='content-main-container' key={index}>
                    <div
                        className={`${isShortSidebar ? 'content-container-short' : 'content-container'}`}
                        onClick={() => handleVideoClick(data.videoId)} // Navigate to video page
                        style={{ cursor: 'pointer' }}
                    >
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
                                {data.sponsored === "true" ? (
                                    <></>
                                ) : (
                                    <div className="viewsUploadedAgo">
                                        <div className="views">{data.views}</div>•
                                        <div className="uploadedAgo">{data.uploadedAgo}&nbsp;ago</div>
                                    </div>
                                )}
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
    );
};

export default Content;