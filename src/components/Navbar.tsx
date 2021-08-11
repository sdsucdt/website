import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';
import CDTLink from '../utils/CDTLink';

const Navbar = (): JSX.Element => {
  const navbarItems: { link: string; text: string }[] = [
    {
      link: 'https://drive.google.com/drive/folders/1DQmNj-NvNCACusLrem-aWSe90zvrmrPW?usp=sharing',
      text: 'Documents',
    },
    {
      link: 'https://github.com/sdsucdt/writeups',
      text: 'Writeups',
    },
  ];

  return (
    <nav className="dark:text-gray-200 border-b-2 border-gray-200 text-gray-600 flex justify-between py-5 align-middle mx-auto max-w-6xl">
      <Link
        className="bg-clip-text bg-gradient-to-tr dark:hover:text-white dark:text-sdsu-red from-sdsu-red hover:text-black text-2xl text-transparent to-sdsu-red via-black"
        to="/"
      >
        SDSU Cyber Defense Team
      </Link>
      <div className="align-middle flex gap-x-5 ml-4 text-xl">
        {navbarItems.map((item) => {
          return (
            <CDTLink to={item.link} key={item.text}>
              {item.text}
            </CDTLink>
          );
        })}
        <CDTLink to="https://github.com/sdsucdt">
          <FaGithub size="2rem" />
        </CDTLink>
      </div>
    </nav>
  );
};

export default Navbar;
