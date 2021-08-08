import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../css/style.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => <body>{children}</body>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const StyledSection = styled.section`
  text-align: center;
`;

const Header = styled.h1`
  font-family: 'IBM Plex Mono', sans-serif;
  font-size: 3em;
  padding-top: 200px;
`;

export const Section = ({ title, children }: SectionProps) => (
  <StyledSection>
    <Header>{title}</Header>
    {children}
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
