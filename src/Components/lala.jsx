import './lala.css';
import arrow_btn from '../../assets/arrow_icon.jpg';
import search_icon from '../../assets/search_icon.png';
import bell_icon from '../../assets/bell_icon.jpeg';
import play_icon from '../../assets/play_icon.jpeg';
import pause_icon from '../../assets/pause_icon.jpeg';
import PropTypes from 'prop-types'; // Import PropTypes

const Lala = ({ lalaData, setPlayStatus, lalaCount, setLalaCount, PlayStatus }) => {
  
  const handlePlayPause = () => {
    setPlayStatus(prevStatus => !prevStatus);
  };

  return (
    <div className='lala'>
      <div className="lala-header-icons">
        <img src={search_icon} alt="Search icon" className="lala-icon" />
        <img src={bell_icon} alt="Bell icon" className="lala-icon" />
      </div>
      
      <div className="lala-text">
        <p>{lalaData[lalaCount].text1}</p>
        <p>{lalaData[lalaCount].text2}</p>
      </div>
      
      <div className='lala-about'>
        <p>Explore the features</p>
        <img src={arrow_btn} alt="Arrow icon"/>
      </div>
      
      <div className='lala-dot-play'>
        <ul className='lala-dots'>
          <li onClick={() => setLalaCount(0)} className={lalaCount === 0 ? "lala-dot orange" : "lala-dot"}></li>
          <li onClick={() => setLalaCount(1)} className={lalaCount === 1 ? "lala-dot orange" : "lala-dot"}></li>
          <li onClick={() => setLalaCount(2)} className={lalaCount === 2 ? "lala-dot orange" : "lala-dot"}></li>
        </ul>
        
        <div className='lala-play'>
          <img 
            onClick={handlePlayPause} 
            src={PlayStatus ? pause_icon : play_icon} 
            alt={PlayStatus ? "Pause icon" : "Play icon"} 
          />
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
Lala.propTypes = {
  lalaData: PropTypes.arrayOf(PropTypes.shape({
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
  })).isRequired,
  setPlayStatus: PropTypes.func.isRequired,
  lalaCount: PropTypes.number.isRequired,
  setLalaCount: PropTypes.func.isRequired,
  PlayStatus: PropTypes.bool.isRequired,
};

export default Lala;
