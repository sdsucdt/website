import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CDTLink from '../utils/CDTLink';
import CDTSection from '../utils/CDTSection';
import boardData from '../content/board.json';

const Board = (): JSX.Element => {
  return (
    <CDTSection header="Executive Board">
      <div className="max-w-6xl mx-auto gap-y-10 grid grid-cols-2 grid-rows-3 font-semibold text-2xl">
        {boardData.members.map((member) => (
          <div className="items-center flex gap-5 sm:gap-3" key={member.name}>
            {/* {member.image} */}
            <div className="leading-7">
              {member.name}
              <br />
              {member.job}
              <br />
              <span className="font-normal">{member.major}</span>
              <br />
              <br />
              <div className="flex gap-x-2">
                {member.linkedin && (
                  <CDTLink to={member.linkedin}>
                    <FaLinkedin />
                  </CDTLink>
                )}
                {member.github && (
                  <CDTLink to={member.github}>
                    <FaGithub />
                  </CDTLink>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CDTSection>
  );
};

export default Board;
