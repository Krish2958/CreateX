import React, { useRef } from 'react';
import { Assets } from '../../assets';
import './CreateXVideo2.scss';

const CreateXVideo2 = () => {
  const videoRefDesktop = useRef(null);

  // Function to handle play and pause based on cursor position
  const handleMouseEnter = () => {
    if (videoRefDesktop.current) videoRefDesktop.current.play();
    
  };

  const handleMouseLeave = () => {
    if (videoRefDesktop.current) {
      videoRefDesktop.current.pause();
      videoRefDesktop.current.currentTime = 0; // Reset to 0:00
    }
  };

  return (
    <div
      className='video-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRefDesktop}
        muted
        className='video'
      >
        <source src={Assets.SponsorsMp4} type="video/mp4" />
        Oops! The CreateX 2024 logo video couldn&apos;t be loaded. Stay tuned for exciting updates!
      </video>
      <video
      autoPlay
        muted
        className='video-m'
      >
        <source src={Assets.MobileSponsors}  type="video/mp4" />
        Oops! The CreateX 2024 logo video couldn&apos;t be loaded. Stay tuned for exciting updates!
      </video>
    </div>
  );
};

export default CreateXVideo2;
