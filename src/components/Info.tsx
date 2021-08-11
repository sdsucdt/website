import React from 'react';
import CDTLink from '../utils/CDTLink';
import { Button } from '../utils/common';

type InfoProps = {
  buttons: Button[];
};

const Info = ({ buttons }: InfoProps): JSX.Element => {
  const buttonStyle: string = [
    'bg-sdsu-red',
    'flex',
    'flex-row',
    'flex-wrap',
    'font-semibold',
    'gap-x-1',
    'hover:bg-sdsu-red-light',
    'hover:text-white',
    'items-center',
    'justify-center',
    'px-6',
    'py-3',
    'rounded-full',
    'text-white',
  ].join(' ');

  return (
    <div className="pt-10 mx-auto max-w-6xl">
      <h1 className="text-left text-7xl font-bold">
        <CDTLink
          className="hover:border-0 hover:text-sdsu-red"
          to="https://www.sdsu.edu/"
        >
          San Diego State University
        </CDTLink>
        {"'s"}
        <br />
        <span className="text-sdsu-red">Premier</span> Cyber Security Club
      </h1>
      <div className="bg-gradient-to-r from-sdsu-red to-black"></div>
      <div
        className="
          text-left text-4xl text-gray-600
          dark:text-gray-300
          font-medium
          pt-5
        "
      >
        <span className="text-gray-800 dark:text-gray-200">Fridays</span> from
        <CDTLink
          className="text-gray-800 dark:text-gray-200"
          to="https://www.timeanddate.com/worldclock/converter.html?iso=20210911T000000&p1=770&p2=75&p3=64&p4=179"
        >
          {' '}
          5:00 PM
        </CDTLink>{' '}
        to
        <CDTLink
          className="text-gray-800 dark:text-gray-200"
          to="https://www.timeanddate.com/worldclock/converter.html?iso=20210911T030000&p1=770&p2=75&p3=64&p4=179"
        >
          {' '}
          8:00 PM
        </CDTLink>{' '}
        @ <span className="text-gray-800 dark:text-gray-200">REDACTED</span>
        <br />
        Join us! No experience needed, non-SDSU students welcome.
      </div>
      <div className="flex flex-row flex-wrap gap-x-2 pt-10">
        {buttons.map((button) => {
          return (
            <CDTLink key={button.text} className={buttonStyle} to={button.link}>
              {button.icon}
              {button.text}
            </CDTLink>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
