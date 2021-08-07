import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseLayer = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

const Layout = ({ title, children }) => (
  <BaseLayer className="global-wrapper">
    <title>{title}</title>
    {children}
  </BaseLayer>
);

Layout.defaultProps = {
  title: '',
  children: [],
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
