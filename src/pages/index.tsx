import React from 'react';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import Board from '../components/Board';
import Details from '../components/Details';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Quotes from '../components/Quotes';
import { Button, Card, Person, Quote } from '../utils/common';
import Companies from '../components/Companies';

const IndexPage = (): JSX.Element => {
  const infoButtons: Button[] = [
    {
      link: 'https://discord.com/invite/ssVez2kUna',
      text: 'SDSU Cyber Defense Team',
      icon: <FaDiscord />,
    },
    {
      link: 'mailto:board@sdsucyberdefense.org',
      text: 'board@sdsucyberdefense.org',
      icon: <FaEnvelope />,
    },
    {
      link: 'https://www.instagram.com/sdsu_cdt',
      text: '@sdsu_cdt',
      icon: <FaInstagram />,
    },
    {
      link: 'https://github.com/sdsucdt',
      text: 'sdsucdt',
      icon: <FaGithub />,
    },
    {
      link: 'https://www.linkedin.com/company/cyber-defense-team-sdsu',
      text: 'Cyber Defense Team | SDSU',
      icon: <FaLinkedin />,
    },
  ];

  const cards: Card[] = [
    {
      image: (
        <StaticImage
          className="w-full"
          src="../images/details/labs.jpg"
          alt="Labs"
        />
      ),
      header: 'Labs',
      text: 'We develop, deploy, and instruct about our own labs for each team meeting. We focus on having fun, feeling like a hacker, and imparting industry-ready skills. Our exercises utilize both attack and defense perspectives, along with Capture the Flag exercises.',
    },
    {
      image: (
        <StaticImage
          className="w-full"
          src="../images/details/competitions.jpg"
          alt="Competitions"
        />
      ),
      header: 'Competitions',
      text: 'We compete in a number of hacking competitions, such as CCDC, NCL, Penetration Testing Competition, Social Engineering Competition, and more! Besides the cash prizes and job opportunities, hacking competitions are fun and valuable learning experiences.',
    },
    {
      image: (
        <StaticImage
          className="w-full"
          src="../images/details/field_trips.jpg"
          alt="Field Trips"
        />
      ),
      header: 'Field Trips',
      text: 'We visit industry leaders in the San Diego area to receive tours and guidance. Past trips have included AT&T and FBI Headquarters. Stay tuned for more opportunities!',
    },
    {
      image: (
        <StaticImage
          className="w-full"
          src="../images/details/speakers.jpg"
          alt="Speakers"
        />
      ),
      header: 'Speakers',
      text: 'When the opportunity arises, cyber security industry leaders enlighten our members with their invaluable wisdom. Whether it’s about job interviews, resumes, or what they do at their job, their knowledge runs deep!',
    },
  ];

  const members: Person[] = [
    {
      image: (
        <StaticImage
          className="rounded-full h-52 w-52"
          src="../images/board/nate.jpeg"
          alt="Nathaniel Shalev"
          placeholder="blurred"
        />
      ),
      name: 'Nathaniel Shalev',
      job: 'President',
      linkedin: 'https://www.linkedin.com/in/nathaniel-shalev/',
      github: 'https://github.com/KaiTheSpy',
    },
    {
      image: (
        <StaticImage
          className="rounded-full h-52 w-52"
          src="../images/board/chase.jpeg"
          alt="Chase Anzalone"
          placeholder="blurred"
        />
      ),
      name: 'Chase Anzalone',
      job: 'Vice President',
      linkedin: 'https://www.linkedin.com/in/anzalone-chase/',
      github: 'https://github.com/anzalonechase',
    },
    {
      image: (
        <StaticImage
          className="rounded-full h-52 w-52"
          src="../images/board/jordan.jpeg"
          alt="Jordan Shands-Sparks"
          placeholder="blurred"
        />
      ),
      name: 'Jordan Shands-Sparks',
      job: 'Treasurer',
      linkedin: 'https://www.linkedin.com/in/jordan-shands-sparks-211572207/',
    },
    {
      image: (
        <StaticImage
          className="rounded-full h-52 w-52"
          src="../images/board/ramon.jpeg"
          alt="Ramon De Dios"
          placeholder="blurred"
        />
      ),
      name: 'Ramon De Dios',
      job: 'System Administrator',
      linkedin: 'https://www.linkedin.com/in/ramon-de-dios-a7b8121ba/',
      github: 'https://github.com/Rvmxn',
    },
    {
      image: (
        <StaticImage
          className="rounded-full h-52 w-52"
          src="../images/board/alex.jpeg"
          alt="Alexandra Lim"
          placeholder="blurred"
        />
      ),
      name: 'Alexandra Lim',
      job: 'Secretary',
      linkedin: 'https://www.linkedin.com/in/alexandra-lim-a8b65a1b4/',
      github: 'https://github.com/AlexandraLim',
    },
    {
      image: (
        <StaticImage
          className="rounded-full h-52 w-52"
          src="../images/board/brandon.jpeg"
          alt="Brandon Nguyen"
          placeholder="blurred"
        />
      ),
      name: 'Brandon Nguyen',
      job: 'Jobs and Competition Liaison',
      linkedin: 'https://www.linkedin.com/in/brandonnguyen02/',
      github: 'https://github.com/gnuyent',
    },
  ];

  const quotes: Quote[] = [
    {
      quote:
        'I gained leadership experience, background with cybersecurity tools and new friends.',
      name: 'Aidan Brown',
      graduationYear: '21',
    },
    {
      quote:
        'I’ve learned so much and made connections with folks as a member, an officer and an alum. In other words, I gained an amazing community.',
      name: 'Redgy Canos',
      graduationYear: '18',
      job: 'Security Software Engineer @ Viasat',
    },
    {
      quote:
        'I obtained experience in learning a lot of new things, but most importantly, learning how to lead a team in accomplishing and delegating tasks to other groups.',
      name: 'Mohamed Mohamed',
      graduationYear: '21',
      job: 'IT Software Engineer @ Viasat',
    },
    {
      quote:
        'I picked up the ability to network, appreciation for security principles, system administration basics, and the ability to work in groups.',
      name: 'Antigone Brickman',
      graduationYear: '19',
      job: 'Programmer Analyst @ Southwestern Community College',
    },
    {
      quote:
        'I attained the skills to get a Cyber Security job out of University.',
      name: 'Thomas Hinton',
      graduationYear: '21',
      job: 'Cyber Security Engineer @ Viasat',
    },
    {
      quote:
        'I gained Linux knowledge as well as insights of web application attacking methods.',
      name: 'Greg Dresing',
      graduationYear: '21',
      job: 'Application Security Intern @ Palo Alto Networks',
    },
    {
      quote:
        'I received the exposure and experience in the cybersecurity field, as well as a connection network to aid in finding jobs.',
      name: 'John Robinson',
      graduationYear: '21',
    },
  ];

  return (
    <>
      <title>SDSU Cyber Defense Team</title>
      <Navbar />
      <Info buttons={infoButtons} />
      <Details cards={cards} />
      <Board boardMembers={members} />
      <Quotes quotes={quotes} />
      <Companies />
      <Footer year="2021" name="SDSU Cyber Defense Team" />
    </>
  );
};

export default IndexPage;
