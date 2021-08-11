import React from 'react';

type FooterProps = {
  year: string;
  name: string;
};

const Footer = ({ year, name }: FooterProps): JSX.Element => {
  return (
    <footer className="text-center pt-40 pb-10">
      © {year} {name}
    </footer>
  );
};

export default Footer;
