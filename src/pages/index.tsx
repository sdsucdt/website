import React from 'react';
import Details from '../components/About';
// import Board, { pageQuery } from '../components/Board';
import Companies from '../components/Companies';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Navbar from '../components/Navbar';

const IndexPage = (): JSX.Element => (
  <>
    <title>SDSU Cyber Defense Team</title>
    <Navbar />
    <Info />
    <Details />
    {/* <Board data={pageQuery} /> */}
    {/* <Testimonials /> */}
    <Companies />
    <Footer />
  </>
);

export default IndexPage;
