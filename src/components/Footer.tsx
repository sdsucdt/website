import React from 'react';
import CDTLink from '../utils/CDTLink';

const footerCols: FooterColumnProps[] = [
  {
    header: 'Information',
    items: [
      <CDTLink internal to="/about" key="about">
        About
      </CDTLink>,
      <CDTLink
        newTab
        to="https://docs.google.com/spreadsheets/d/1y1c3W56nwVyXMn0wymKt-sx_OQq28L8_lpUW7oce-qA"
        key="schedule"
      >
        Schedule
      </CDTLink>,
    ],
  },
  {
    header: 'Find Us',
    items: [
      <CDTLink newTab to="https://discord.com/invite/ssVez2kUna" key="discord">
        Discord
      </CDTLink>,
      <CDTLink newTab to="https://github.com/sdsucdt" key="github">
        GitHub
      </CDTLink>,
      <CDTLink newTab to="https://www.instagram.com/sdsu_cdt" key="instagram">
        Instagram
      </CDTLink>,
      <CDTLink
        newTab
        to="https://www.linkedin.com/company/cyber-defense-team-sdsu"
        key="linkedin"
      >
        LinkedIn
      </CDTLink>,
    ],
  },
  {
    header: 'Contact',
    items: [
      <CDTLink to="mailto:board@sdsucyberdefense.org" key="email">
        board@sdsucyberdefense.org
      </CDTLink>,
    ],
  },
];

const Footer = (): JSX.Element => {
  return (
    <footer className="pt-40 pb-10 text-gray-500">
      <hr className="bg-gray-700 h-px border-0" />
      <div className="max-w-4xl mx-auto">
        <div className="py-10 flex gap-x-10">
          {footerCols.map((col) => (
            <FooterColumn
              header={col.header}
              items={col.items}
              key={col.header}
            />
          ))}
        </div>
        Copyright © 2021 SDSU Cyber Defense Team
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  header: string;
  items: JSX.Element[];
};

const FooterColumn = ({ header, items }: FooterColumnProps): JSX.Element => (
  <div>
    <h1 className="pb-3 font-semibold">{header}</h1>
    <ul>
      {items.map((item) => (
        <li key={item.key}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
