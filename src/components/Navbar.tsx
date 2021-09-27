import React from 'react';
import { FaGithub } from 'react-icons/fa';
import CDTLink from '../utils/CDTLink';

const Navbar = (): JSX.Element => {
  const navbarItems: JSX.Element[] = [
    <CDTLink internal to="/contact" key="contact">
      Contact
    </CDTLink>,
    // <CDTLink
    //   newTab
    //   to="https://docs.google.com/spreadsheets/d/1y1c3W56nwVyXMn0wymKt-sx_OQq28L8_lpUW7oce-qA"
    //   key="schedule"
    // >
    //   Schedule
    // </CDTLink>,
    <CDTLink
      newTab
      to="https://drive.google.com/drive/folders/1DQmNj-NvNCACusLrem-aWSe90zvrmrPW?usp=sharing"
      key="documents"
    >
      Documents
    </CDTLink>,
    <CDTLink newTab to="https://github.com/sdsucdt/writeups" key="github">
      Writeups
    </CDTLink>,
  ];

  return (
    <nav className="text-gray-200 flex justify-between py-5 align-middle mx-auto max-w-6xl text-xl">
      {/* Logo and title */}
      <CDTLink internal to="/">
        SDSU Cyber Defense Team
      </CDTLink>
      {/* Navigation links */}
      <div className="align-middle flex gap-x-5 ml-4 text-xl">
        {navbarItems.map((item) => {
          return item;
        })}
        <CDTLink newTab to="https://github.com/sdsucdt">
          <FaGithub size="2rem" />
        </CDTLink>
      </div>
    </nav>
  );
};

export default Navbar;
