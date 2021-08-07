import React from 'react';
import { FiGithub, FiShield, FiSlack } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import styled from 'styled-components';
import BaseSection from './base';

const Details = () => (
  <BaseSection title="Club Details">
    <Columns />
  </BaseSection>
);

const Column = styled.div`
  display: flex;
  justify-content: center;
`;

const ColumnDiv = styled.div`
  text-align: center;
  padding: 1em;
  width: 10%;
`;

const ColumnLabel = styled.p`
  font-size: 40px;
  font-family: sans-serif;
  font-weight: bold;
`;

const Columns = () => {
  const iconColor = '#20c20e';
  const iconSize = 100;
  const columns = [
    {
      label: 'Labs',
      body: 'We develop, deploy, and instruct about our own labs for each team meeting. We focus on having fun, feeling like a hacker, and imparting industry-ready skills. Our exercises utilize both attack and defense perspectives, along with Capture the Flag exercises.',
      icon: <FiGithub color={iconColor} size={iconSize} />,
    },
    {
      label: 'Competitions',
      body: 'We compete in a number of hacking competitions, such as CCDC, NCL, Penetration Testing Competition, Social Engineering Competition, and more! Besides the cash prizes and job opportunities, hacking competitions are fun and valuable learning experiences.',
      icon: <FiShield color={iconColor} size={iconSize} />,
    },
    {
      label: 'Field Trips',
      body: 'We visit industry leaders in the San Diego area to receive tours and guidance. Past trips have included AT&T and FBI Headquarters. Stay tuned for more opportunities!',
      icon: <FiSlack color={iconColor} size={iconSize} />,
    },
    {
      label: 'Speakers',
      body: 'When the opportunity arises, cyber security industry leaders enlighten our members with their invaluable wisdom. Whether it’s about job interviews, resumes, or what they do at their job, their knowledge runs deep!',
      icon: <BsPeople color={iconColor} size={iconSize} />,
    },
  ];

  return (
    <Column>
      {columns.map((column) => (
        <ColumnDiv>
          {column.icon}
          <ColumnLabel>{column.label}</ColumnLabel>
          {column.body} <br />
        </ColumnDiv>
      ))}
    </Column>
  );
};

export default Details;
