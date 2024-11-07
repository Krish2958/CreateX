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

      {/* Tier 1 */}
      <div className="flex flex-col items-center mt-8 md:mt-16">
        <h2 className="w-full max-w-[1280px] text-left font-[Kagitingan] text-[28px] md:text-[96px] text-white mb-8">
          TIER 1
        </h2>
        <div className="flex flex-wrap justify-center max-w-[1280px] gap-8">
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
      </div>

      {/* Tier 2 */}
      <div className="flex flex-col items-center mt-16 md:mt-28">
        <h2 className="w-full max-w-[1280px] text-left font-[Kagitingan] text-[28px] md:text-[96px] text-primary mb-8">
          TIER 2
        </h2>
        <div className="flex flex-wrap justify-center max-w-[1280px] gap-8">
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
      </div>

      {/* Tier 3 */}
      <div className="flex flex-col items-center mt-16 md:mt-28">
        <h2 className="w-full max-w-[1280px] text-left font-[Kagitingan] text-[28px] md:text-[96px] text-white mb-8">
          TIER 3
        </h2>
        <div className="flex flex-wrap justify-center max-w-[1280px] gap-8">
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
    </div>
  );
};

export default OrganizingTeam;
