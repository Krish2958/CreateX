import React from 'react';
import './RegEnds.scss';
import { Button } from 'react-bootstrap';
import CountdownTimer from '../CountdownTimer';
import { Assets } from '../../assets';

const RegEnds = () => {
  return (
    <div className='about scroll-section'>
      <img className='about__background' src={Assets.CreateX_BG4} alt="" />
      <div className='about__container'>
        <div className='about__content eb-container'>
          <span className='about__content__heading'>
            <h1 className='about__content__heading--orange eb'>TEAM Registrations have Ended.</h1>
          </span>
            {/* <h1 className='about__content__heading--white'>₹100/- per person</h1> */}
           
          <div className='about__content__description--container'>
           
          </div>
          {/* <div className='about__content__description--hashtag-container ebh'>
            
          <span className='ebo'><h1 className='about__content__heading--white ebh-off'>Registrations Ends In</h1>

</span>
          <CountdownTimer targetDate='2024-11-15T23:59:59' />

          </div> */}
        </div>

      </div>
    </div>
  );
};

export default RegEnds;
