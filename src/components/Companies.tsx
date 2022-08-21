import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Marquee from 'react-fast-marquee';

const Companies = (): JSX.Element => {
  return (
    <Marquee className="pt-32" speed={45} gradient={false} direction="right">
      <StaticImage
        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/DARPA_Logo_2010.png"
        alt="DARPA"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png"
        alt="Sony"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://www.viasat.com/content/dam/us-site/corporate/images/int_vsat_tm_rgb_grd.png"
        alt="Viasat"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://alamom.com/wp-content/uploads/2016/05/spawar-logo-300x151.png"
        alt="SPAWAR"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://seekvectorlogo.com/wp-content/uploads/2018/02/general-atomics-aeronautical-systems-inc-ga-asi-vector-logo.png"
        alt="General Atomics"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://idtus.com/wp-content/uploads/IDT-Logo-Horizontal.png"
        alt="Innovative Defense Technologies"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Forcepoint_Logo.svg/1200px-Forcepoint_Logo.svg.png"
        alt="Forcepoint"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        alt="Amazon"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Northrop_Grumman_logo_blue-on-clear_2020.svg/1280px-Northrop_Grumman_logo_blue-on-clear_2020.svg.png"
        alt="Northrop Grumman"
        placeholder="blurred"
        height={150}
      />
      <StaticImage
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/SDG%26E_Logo.svg/1200px-SDG%26E_Logo.svg.png"
        alt="San Diego Gas & Electric"
        placeholder="blurred"
        height={150}
      />
      {/*<StaticImage
        src="https://brand.sdsu.edu/primary-logos/SDSUprimary3Crgb.jpg"
        alt="San Diego State University"
        placeholder="blurred"
        height={150}
      />*/}
    </Marquee>
  );
};

export default Companies;
