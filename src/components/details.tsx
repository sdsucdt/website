import React from 'react';
import { BsShield } from 'react-icons/bs';
import { FiSlack } from 'react-icons/fi';
import { IoPeopleOutline } from 'react-icons/io5';
import { VscGithubAlt } from 'react-icons/vsc';
import styled from 'styled-components';
import { Section } from './layout';

const ColumnHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-between;
  gap: 50px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const ColumnHeader = styled.h1`
  font-size: 2em;
  font-weight: bold;
`;

const Details = () => {
  const iconStyle = { color: '#a6192e', fontSize: '9em' };
  const columns = [
    {
      icon: <VscGithubAlt style={iconStyle} />,
      header: 'Labs',
      content:
        'We develop, deploy, and instruct about our own labs for each team meeting. We focus on having fun, feeling like a hacker, and imparting industry-ready skills. Our exercises utilize both attack and defense perspectives, along with Capture the Flag exercises.',
    },
    {
      icon: <BsShield style={iconStyle} />,
      header: 'Competitions',
      content:
        'We compete in a number of hacking competitions, such as CCDC, NCL, Penetration Testing Competition, Social Engineering Competition, and more! Besides the cash prizes and job opportunities, hacking competitions are fun and valuable learning experiences.',
    },
    {
      icon: <FiSlack style={iconStyle} />,
      header: 'Field Trips',
      content:
        'We visit industry leaders in the San Diego area to receive tours and guidance. Past trips have included AT&T and FBI Headquarters. Stay tuned for more opportunities!',
    },
    {
      icon: <IoPeopleOutline style={iconStyle} />,
      header: 'Speakers',
      content:
        'When the opportunity arises, cyber security industry leaders enlighten our members with their invaluable wisdom. Whether it’s about job interviews, resumes, or what they do at their job, their knowledge runs deep!',
    },
  ];

  return (
    <Section title="Club Details">
      <ColumnHolder>
        {columns.map((column) => (
          <Column>
            {column.icon}
            <ColumnHeader>{column.header}</ColumnHeader>
            <p>{column.content}</p>
          </Column>
        ))}
      </ColumnHolder>
    </Section>
  );
};

export default Details;
