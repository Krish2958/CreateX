import React from "react";
import SponsorCard from "./SponsorCard/SponsorCard";
import { SponsorsData } from './constants';
import './Sponsors.scss';
import { Assets } from "../../assets";

const PartnerCard = ({ title, description, companyName, imageUrl, socials = {} }) => {
  return (
    <div className="w-[20rem] sm:w-[30rem] md:w-[50rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem] h-[20rem] md:h-[33.33rem] rounded-[3.125rem] border-[5px] border-primary bg-black p-8">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-[#E8E8E8] rounded-[7.40625rem] w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30.875rem] h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[14.625rem] flex-shrink-0 flex items-center justify-center p-6">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-[var(--light-gray)] font-kagitingan text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.33rem] font-bold pt-[2rem]">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Sponsors = () => {
  const partners = [
    {
      title: "Media Partner",
      companyName: "Unstop",
      imageUrl: Assets.Unstop,
      socials: {
        website: "https://unstop.com"
      }
    }
  ];
  
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-full bg-black md:hidden" />
      <img
        src={Assets.CreateX_BG1}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-white overflow-y-auto pb-[15rem]">
        <div className="sponsor-title font-kagitingan md:ml-10 text-4xl pt-10 md:pt-20 sm:text-7xl text-2xl w-full md:w-[1300px] max-w-[90%] text-center md:text-left"
          style={{ marginTop: "4rem" }}>
          Sponsors
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-2 md:mt-[5rem] gap-20">
          {SponsorsData.map((sponsor, index) => (
            <SponsorCard 
              key={index}
              {...sponsor}
            />
          ))}
        </div>

        <div className="sponsor-title font-kagitingan md:ml-10 text-4xl pt-10 md:pt-20 sm:text-7xl text-2xl w-full md:w-[1300px] max-w-[90%] text-center md:text-left mt-20">
          Partners
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-2 md:mt-[5rem] mb-20">
          {partners.map((partner, index) => (
            <PartnerCard 
              key={index}
              {...partner}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
