import React, { useRef, useEffect } from 'react';
import { BsArrowBarDown } from "react-icons/bs";
import { Assets } from '../../assets';
import './CreateXVideo2.scss';

const CreateXVideo2 = () => {
  



  return (
    <div className='video-container'>
        <video
        autoPlay
        loop={true}
        muted
        className='video'
        >
        <source src={Assets.SponsorsMp4} type="video/mp4" />
        Oops! The CreateX 2024 logo video couldn&apos;t be loaded. Stay tuned for exciting updates!
        </video>
        <div className='video-text-container'>
            <h1 className='video-text'> Swipe Down</h1>
            <BsArrowBarDown className='video-icon' />
        </div>
    </div>
  );
};

export default CreateXVideo2;