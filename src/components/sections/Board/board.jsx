import React from 'react';
import PropTypes from 'prop-types';
import './board.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BaseSection from '../base';

const Board = () => {
  const officers = [
    {
      name: 'Nathaniel Shalev',
      job: 'President',
      linkedin: 'https://www.linkedin.com/in/nathaniel-shalev/',
    },
    {
      name: 'Chase Anzalone',
      job: 'Vice President',
      linkedin: 'https://www.linkedin.com/in/anzalone-chase/',
    },
    {
      name: 'Jordan Shands-Sparks',
      job: 'Treasurer',
      linkedin: 'https://www.linkedin.com/in/jordan-shands-sparks-211572207/',
    },
    {
      name: 'Ramon De Dios',
      job: 'System Administrator',
      linkedin: 'https://www.linkedin.com/in/ramon-de-dios-a7b8121ba/',
    },
    {
      name: 'Alexandra Lim',
      job: 'Secretary',
      linkedin: 'https://www.linkedin.com/in/alexandra-lim-a8b65a1b4/',
    },
    {
      name: 'Brandon Nguyen',
      job: 'Jobs and Competition Liaison',
      linkedin: 'https://www.linkedin.com/in/brandonnguyen02/',
    },
  ];

  return (
    <BaseSection title="Executive Board">
      <div className="officer-container">
        {officers.map((officer) => (
          <OfficerCell info={officer} />
        ))}
      </div>
    </BaseSection>
  );
};

const OfficerCell = ({ info }) => (
  <div className="officer-container-cell">
    <OfficerCellImage name={info.name} />
    <OfficerCellText info={info} />
  </div>
);

const OfficerCellImage = ({ name }) => {
  const data = useStaticQuery(graphql`
    query BoardPhotos {
      allFile(filter: { relativeDirectory: { eq: "board" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);
  const images = data.allFile.edges.map((edge) => edge.node);
  const officerFirstName = name.split(' ')[0];
  let imageElement = images.find((image) => image.name === officerFirstName);
  imageElement = getImage(imageElement);

  return (
    <div className="officer-container-cell-image">
      <GatsbyImage image={imageElement} alt={name} />
    </div>
  );
};

const OfficerCellText = ({ info }) => (
  <div className="officer-container-cell-text">
    {info.name} <br />
    {info.job} <br />
    <a href={info.linkedin}>
      <FaLinkedinIn />
    </a>
  </div>
);

OfficerCell.propTypes = {
  info: PropTypes.exact({
    name: PropTypes.string,
    job: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
};

OfficerCellImage.propTypes = {
  name: PropTypes.string.isRequired,
};

OfficerCellText.propTypes = {
  info: PropTypes.exact({
    name: PropTypes.string,
    job: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
};

export default Board;
