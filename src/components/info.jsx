import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';

const InfoDiv = styled.div`
  text-align: center;
`;

const ClubName = styled.h1`
  color: #a6192e;
  font-family: 'IBM Plex Mono', Consolas;
  font-size: 50px;
`;

const ContactList = styled.ul`
  list-style-type: none;
  display: inline-block;
  text-align: left;
`;

const Info = () => (
  <InfoDiv className="meeting-info">
    <ClubName>
      San Diego State University <br /> Cyber Defense Team
    </ClubName>
    <p>
      Fridays from 5:00 PM to 8:00 PM <br />
      at location
    </p>
    <p>
      JOIN US!!! No experience needed. <br />
      Non-SDSU students are welcome.
    </p>
    <Contact />
  </InfoDiv>
);

const Contact = () => {
  const contactInfo = [
    {
      label: 'board@sdsucyberdefense.org',
      url: 'mailto:board@sdsucyberdefense.org',
      icon: <AiOutlineMail />,
    },
    {
      label: '@sdsu_cdt',
      url: 'https://www.instagram.com/sdsu_cdt',
      icon: <AiOutlineInstagram />,
    },
    {
      label: 'sdsucdt',
      url: 'https://github.com/sdsucdt',
      icon: <AiOutlineGithub />,
    },
    {
      label: '[LinkedIn]',
      url: 'https://example.com',
      icon: <AiOutlineLinkedin />,
    },
  ];

  return (
    <div className="contact-info">
      Contact Us: <br />
      <ContactList>
        {contactInfo.map((contact) => (
          <li key={contact.url}>
            {contact.icon} <a href={contact.url}>{contact.label}</a>
          </li>
        ))}
      </ContactList>
    </div>
  );
};

export default Info;
