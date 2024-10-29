import React from 'react';
import MemberCard from '../MemberCard/MemberCard';
import { members } from '../MemberCard/memberData';

const OrganisingTeam = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {members.map((member, index) => (
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
  );
};

export default OrganisingTeam;
