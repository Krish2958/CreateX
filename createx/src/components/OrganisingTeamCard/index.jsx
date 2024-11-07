import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MemberCard.scss';

const MemberCard = ({ name, role, year, imageUrl, socialLinks }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="member-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        boxShadow: hover ? '2px 2px 20px 0px #FF6E1F' : 'none',
      }}
    >
      <div className="member-image">
        <img src={imageUrl} alt={`${name}'s profile`} />
      </div>
      <div className="member-details">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-year">{year}</p>
        <div className={`social-icons ${hover ? 'visible' : ''}`}>
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a key={index} href={link.href}>
                <IconComponent />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MemberCard;
