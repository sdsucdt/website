import React from 'react';
import styled from 'styled-components';
import BaseSection from './base';

const Body = styled.p`
  margin: auto;
  width: 20%;
`;

const About = () => (
  <BaseSection title="About Us">
    <Body>
      The SDSU Cyber Defense Team was founded in Spring 2015. President and
      Founder Alex Salerno was voluntold by Cal Poly Pomona Professor, Dr. Dan
      Manson, and SDSU lecturer, Peter Bartoli, to create a Computer Security
      Team to represent San Diego State University.
      <br />
      <br />
      For seven generations, we have been a powerhouse in all things computer
      security. We use techniques such as Social Engineering, Spoofing, Fuzzing,
      Exploitations, Steganography, Injections, Cryptography, and more to secure
      and exploit vulnerable systems.
    </Body>
  </BaseSection>
);

export default About;
