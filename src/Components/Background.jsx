import './Background.css';
import video from '../assets/video.mp4';
import image1 from '../assets/lola.jpeg';
import image2 from '../assets/download.jpeg';
import image3 from '../assets/image.jpeg';
import image4 from '../assets/image1.jpeg';
import image5 from '../assets/images.jpeg';
import PropTypes from 'prop-types'; // Import PropTypes for validation

const Background = ({ PlayStatus, lalaCount }) => {
    if (PlayStatus) {
        return (
            <video className='background' autoPlay loop muted>
                <source src={video} type='video/mp4' /> 
            </video>
        );
    } else {
        switch (lalaCount) {
            case 0:
                return <img src={image1} className='background' alt="background" />;
            case 1:
                return <img src={image2} className='background' alt="background" />;
            case 2:
                return <img src={image3} className='background' alt="background" />;
            case 3:
                return <img src={image4} className='background' alt="background" />;
            case 4:
                return <img src={image5} className='background' alt="background" />;
            default:
                console.warn('Invalid lalaCount:', lalaCount); // Log warning for unexpected value
                return <img src={image1} className='background' alt="background" />; // Fallback image
        }
    }
};

// Add PropTypes for validation
Background.propTypes = {
    PlayStatus: PropTypes.bool.isRequired,
    lalaCount: PropTypes.number.isRequired,
};

export default Background;
