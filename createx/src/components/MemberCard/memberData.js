import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import devImage from '../../../public/assets/TeamImages/Dev.jpg';

export const members = [
  {
    name: 'Devendra Singh Shekhawat',
    role: 'Social Media',
    year: 'IV, CSE',
    imageUrl: devImage,
    socialLinks: [
      { icon: FaEnvelope, href: 'mailto:someone@example.com' },
      { icon: FaInstagram, href: 'https://instagram.com' },
      { icon: FaLinkedin, href: 'https://linkedin.com' },
      { icon: FaGithub, href: 'https://github.com' },
    ],
  },
];
