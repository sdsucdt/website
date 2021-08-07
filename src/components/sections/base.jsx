import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionHeader = styled.h1`
  font-family: 'IBM Plex Mono', Consolas;
  font-size: 45px;
  text-align: center;
`;

const BaseSection = ({ title, children }) => (
  <div className={title}>
    <SectionHeader>{title}</SectionHeader>
    {children}
  </div>
);

BaseSection.defaultProps = {
  children: [],
};

BaseSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BaseSection;
