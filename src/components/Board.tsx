import React from 'react';
import { Person } from '../utils/common';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CDTLink from '../utils/CDTLink';
import CDTSection from '../utils/CDTSection';

type BoardProps = {
  boardMembers: Person[];
};

const Board = ({ boardMembers }: BoardProps): JSX.Element => {
  return (
    <CDTSection header="Executive Board">
      <div className="md:mx-48 mx-96 gap-y-10 grid grid-cols-2 grid-rows-3 font-semibold text-2xl">
        {boardMembers.map((member) => {
          return <PersonHolder key={member.name} person={member} />;
        })}
      </div>
    </CDTSection>
  );
};

type PersonHolderProps = {
  person: Person;
};

const PersonHolder = ({ person }: PersonHolderProps): JSX.Element => {
  return (
    <div className="items-center flex gap-5">
      {person.image}
      <div className="leading-7">
        {person.name}
        <br />
        {person.job}
        <br />
        <span className="font-normal">Computer Science (B.S.)</span>
        <br />
        <br />
        <div className="flex gap-x-2">
          {person.linkedin && (
            <CDTLink to={person.linkedin}>
              <FaLinkedin />
            </CDTLink>
          )}
          {person.github && (
            <CDTLink to={person.github}>
              <FaGithub />
            </CDTLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
