import { useParams } from 'react-router-dom'; // Import useParams to get the videoId
import videosData from '../../../fakeData/videos.json'; // Import video data
import verified from '../../../icons/content/verified.svg';
import Header from '../../header/Header';
import './SingleVideoPage.css'

const SingleVideoPage = () => {
    const { videoId } = useParams(); // Get the videoId from the URL
    const video = videosData.find((vid) => vid.videoId === videoId); // Find the video by ID

    if (!video) {
        return <div>Video not found!</div>; // Handle if videoId is not found
    }

    return (
        <>
            <Header />
            <div className="single-video-page">
                <div className="video-player">
                    {/* Example video player using videoId */}
                    <iframe
                        width="100%"
                        height="500px"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.videoHeadline}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="video-details">
                    <h1>{video.videoHeadline}</h1>
                    <p>{video.views} views • {video.uploadedAgo} ago</p>
                    <p>Channel: {video.channelName}</p>
                    {video.isVerified === "true" && <img src={verified} alt="Verified" width={14} />}
                    <p>{video.description}</p>
                    <p><strong>Likes:</strong> {video.likes}</p> {/* Display likes */}
                </div>
                <div className="comments-section">
                    <h2>Comments</h2>
                    {video.comments.map((comment, index) => (
                        <div key={index} className="comment">
                            {Object.keys(comment).map((user) => (
                                <p key={user}><strong>{user}:</strong> {comment[user]}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SingleVideoPage;
