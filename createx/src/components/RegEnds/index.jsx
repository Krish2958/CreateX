import React from 'react';
import './RegEnds.scss';
import { Button } from 'react-bootstrap';
import CountdownTimer from '../CountdownTimer';
import { Assets } from '../../assets';
import { BsInstagram } from 'react-icons/bs';

const RegEnds = () => {
  return (
    <div className='about scroll-section'>
      <img className='about__background' src={Assets.CreateX_BG1} alt="" />
      <div className='about__container'>
        <div className='about__content eb-container'>
          <span className='about__content__heading'>
            <h1 className='about__content__heading--orange eb'>TEAM Registrations</h1>
          </span>
            <h1 className='about__content__heading--white'>₹100/- per person</h1>
           
          <div className='about__content__description--container'>
           
          </div>
          <div className='about__content__description--hashtag-container ebh'>
            <Button className='reg-button rules-download' target='_blank' href='https://unstop.com/o/LYmv96q?lb=5a4Bv1YG'>Register Now</Button>
          <span className='ebo'><h1 className='about__content__heading--white ebh-off'>Registrations Ends In</h1>

</span>
          <CountdownTimer targetDate='2024-11-10T23:59:59' />

          </div>
        </div>

      </div>
    </div>
  );
};

export default RegEnds;
