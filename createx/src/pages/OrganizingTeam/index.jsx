import React from "react";
import MemberCard from "../../components/OrganisingTeamCard/index";
import { members } from "../../components/OrganisingTeamCard/MemberData";

const OrganizingTeam = () => {
  const tier1Members = members.filter(member => member.tier === 1);
  const tier2Members = members.filter(member => member.tier === 2);
  const tier3Members = members.filter(member => member.tier === 3);

  return (
    <div className="bg-black p-8 pt-20 pb-20 md:pb-40">
      <h1 className="text-center font-[Kagitingan] text-[32px] mt-4 md:text-[108px] md:mt-16 text-white">
        ORGANIZING <span className="text-primary">TEAM</span>
      </h1>

      <h2 className="pl-4 font-[Kagitingan] text-[28px] md:text-[96px] md:pl-32 text-white mt-8">
        TIER 1
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {tier1Members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            year={member.year}
            imageUrl={member.imageUrl}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>

      <h2 className="pl-4 font-[Kagitingan] text-[28px] mt-16 md:text-[96px] md:pl-32 text-primary md:mt-28">
        TIER 2
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {tier2Members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            year={member.year}
            imageUrl={member.imageUrl}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>

      <h2 className="pl-4 font-[Kagitingan] text-[28px] mt-16 md:text-[96px] md:pl-32 text-white md:mt-28">
        TIER 3
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {tier3Members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            year={member.year}
            imageUrl={member.imageUrl}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizingTeam;
