import { Link } from 'gatsby';
import React from 'react';
import CDTLink from '../utils/CDTLink';
import Emphasize from '../utils/Emphasize';

const Info = (): JSX.Element => (
  <div className="pt-10 mx-auto max-w-6xl">
    <h1 className="text-left text-7xl font-bold">
      <CDTLink
        className="text-sdsu-red hover:text-sdsu-red-light"
        newTab
        to="https://www.sdsu.edu/"
      >
        San Diego State University
      </CDTLink>
      {"'s"}
      <br />
      <span className="text-sdsu-red">Premier</span> Cyber Security Club
    </h1>
    <div className="bg-gradient-to-r from-sdsu-red to-black"></div>
    <div className="text-left text-4xl font-medium pt-5">
      <Emphasize>Fridays</Emphasize> from <Emphasize>5:00 PM</Emphasize> to{' '}
      <Emphasize>8:00 PM</Emphasize> @{' '}
      <CDTLink
        className="text-sdsu-red hover:text-sdsu-red-light"
        to="https://map.concept3d.com/?id=801#!m/403333?ce/16748?ct/50935,40419,40418,20161,15205,48503,54894"
      >
        PG-242
      </CDTLink>
      .
      <br />
    </div>
    <div className="flex text-2xl items-center gap-5 pt-6">
      Join us! No experience needed, non-SDSU students and alumni welcome.
      <Link
        className="rounded-full px-4 py-2 bg-black border border-sdsu-red hover:border-sdsu-red-light hover:bg-sdsu-red-light hover:text-black"
        to="/contact"
      >
        Get in touch →
      </Link>
    </div>
  </div>
);

export default Info;
