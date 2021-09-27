import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CDTLink from '../utils/CDTLink';
import Emphasize from '../utils/Emphasize';

const ContactPage = (): JSX.Element => (
  <>
    <Navbar />
    <body className="pt-10 max-w-6xl mx-auto">
      <h1 className="text-center text-7xl font-bold">Get in touch</h1>
      <p className="py-8 text-4xl text-center">
        We meet on <Emphasize>Fridays</Emphasize> from{' '}
        <Emphasize>5:00 PM</Emphasize> to <Emphasize>8:00 PM</Emphasize> @{' '}
        <CDTLink
          className="text-sdsu-red hover:text-sdsu-red-light"
          to="https://map.concept3d.com/?id=801#!m/403333?ce/16748?ct/50935,40419,40418,20161,15205,48503,54894"
        >
          PG-242
        </CDTLink>
        .
      </p>
      <div id="discord">
        <h1 className="text-3xl font-bold">Chat with us</h1>
        <p>
          If you prefer to chat in real time with us, we are online on{' '}
          <CDTLink to="https://discord.com/invite/Ga4tM3MQN3">Discord</CDTLink>.
        </p>
        <br />
        <iframe
          src="https://discord.com/widget?id=839260355791159306&theme=dark"
          width="350"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
      </div>
      <div id="socials"></div>
      <div id="location">
        <h1>Our meeting location</h1>
        <p>
          PG-242
          <br />
          5500 Campanile Drive
          <br />
          San Diego, CA 92182
        </p>
      </div>
    </body>
    <Footer />
  </>
);

export default ContactPage;
