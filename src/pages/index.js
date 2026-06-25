import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import LiquidEther from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const EtherBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: auto;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <Layout>
      <EtherBackground>
        <LiquidEther
          colors={['#A855F7', '#06B6D4', '#EC4899']}
          mouseForce={20}
          cursorSize={120}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          autoResumeDelay={1000}
        />
      </EtherBackground>
      <ContentLayer>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Hero />
          <Projects />
          <Technologies />
          <Timeline />
          <Acomplishments />
        </motion.div>
      </ContentLayer>
    </Layout>
  );
};

export default Home;
