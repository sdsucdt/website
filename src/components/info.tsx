import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
`;

const InfoHeader = styled.h1`
  color: #a6192e;
  font-size: 4em;
  font-family: 'Roboto', sans-serif;
`;

const Blurb = styled.p`
  padding-top: 20px;
  font-size: 2em;
`;

const ContactList = styled.ul`
  display: inline-block;
  text-align: left;
`;

const Contact = () => {
  const links = [
    {
      icon: <HiOutlineMail />,
      label: 'board@sdsucyberdefense.org',
      url: 'mailto:board@sdsucyberdefense.org',
    },
    {
      icon: <FaInstagram />,
      label: '@sdsu_cdt',
      url: 'https://www.instagram.com/sdsu_cdt',
    },
    {
      icon: <FaLinkedin />,
      label: 'Cyber Defense Team | SDSU',
      url: 'https://www.linkedin.com/company/cyber-defense-team-sdsu',
    },
    {
      icon: <FaGithub />,
      label: 'sdsucdt',
      url: 'https://github.com/sdsucdt',
    },
  ];

  return (
    <div className="contact">
      <p>Contact us:</p>
      <ContactList>
        {links.map((link) => (
          <li key={link.label}>
            {link.icon} <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ContactList>
    </div>
  );
};

const Info = () => {
  const startTime = {
    time: '5:00 PM',
    link: 'https://www.timeanddate.com/worldclock/converter.html?iso=20210911T000000&p1=770&p2=75&p3=64&p4=179',
  };
  const endTime = {
    time: '8:00 PM',
    link: 'https://www.timeanddate.com/worldclock/converter.html?iso=20210911T030000&p1=770&p2=75&p3=64&p4=179',
  };

  return (
    <Section>
      <div className="container">
        <StaticImage
          src="../images/logo.png"
          alt="CDT Logo"
          placeholder="blurred"
          width={600}
          height={600}
        />
        <InfoHeader>
          San Diego State University
          <br />
          Cyber Defense Team
        </InfoHeader>
        <Blurb>
          JOIN US!!! <strong>No experience needed.</strong>
          <br />
          Non-SDSU students are welcome.
        </Blurb>
        <p>
          Fridays from{' '}
          <a href={startTime.link} target="_blank" rel="noreferrer">
            {startTime.time}
          </a>{' '}
          to{' '}
          <a href={endTime.link} target="_blank" rel="noreferrer">
            {endTime.time}
          </a>
          <br />
          Contact us for location!
        </p>
        <Contact />
      </div>
    </Section>
  );
};

export default Info;
