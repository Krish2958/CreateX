import React, { useState } from 'react';
import './ProposalSubmission.scss';
import { Button } from 'react-bootstrap';
import CountdownTimer from '../CountdownTimer';
import { Assets } from '../../assets';
import { IconContext } from "react-icons";
import { BsLink45Deg } from "react-icons/bs";

import { FilloutSliderEmbed
 } from "@fillout/react";
import "@fillout/react/style.css";


const ProposalSubmission = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='about scroll-section'>
      <img className='about__background' src={Assets.CreateX_BG4} alt="" />
      <div className='about__container'>
        <div className='about__content eb-container'>
          <span className='about__content__heading'>
            <h1 className='about__content__heading--orange eb'>Proposal Submissions are Live</h1>
          </span>
            
           
          <div className=''>
          <h1 className='about__content__heading--white for'>Proposal Format here: 
            <p className='about__content__description eb-desc'>
            <a href='https://docs.google.com/document/d/1cZd-Cig5kpQL6x0YuJD2F6su_s0CDw-23u6HR5CBkPk/edit?usp=sharing'><IconContext.Provider value={{ color: "#FF6E1F", className: "global-class-name" }}>
            <BsLink45Deg />Google Doc</IconContext.Provider> 
            </a>
            </p>
            </h1>
          </div>
          <div className='about__content__description--hashtag-container ebh'>
            <h1 className='for2'>If already registered, </h1>
            <Button className='reg-button rules-download' onClick={() => setIsOpen(true)} >Submit Your Propsal Here</Button>
   {isOpen &&        
    <FilloutSliderEmbed
      filloutId="6buVieh4Rzus"
      inheritParameters
      parameters={{
        example: "abc",
      }}
      className="reg-button rules-download"
      sliderDirection="right"
      onClose={() => setIsOpen(false)}
      
    />

}
          <span className='ebo'><h1 className='about__content__heading--white ebh-off'>Proposal Submission Ends In</h1>

</span>
          <CountdownTimer targetDate='2024-11-15T23:59:59' />

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProposalSubmission;


