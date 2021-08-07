import React from 'react';
import Info from '../components/info';
import Layout from '../components/layout';
import About from '../components/sections/about';
import Details from '../components/sections/details';
import Board from '../components/sections/Board/board';
import Alumni from '../components/sections/alumni';

const IndexPage = () => (
  <Layout title="SDSU Cyber Defense Team">
    <Info />
    <Details />
    <About />
    <Board />
    <Alumni />
  </Layout>
);

export default IndexPage;
