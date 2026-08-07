import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  BookContainer,
  BookOpenContainer,
  BookSpine,
  PageArea,
  NavigationBar,
  NavButton,
  CloseButton,
  PageCounter,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import BookCover from './BookCover';
import FlameEffect from './FlameEffect';
import BookPage from './BookPage';

const pageVariants = {
  enter: (direction) => ({
    rotateY: direction === 'next' ? 90 : -90,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    rotateY: direction === 'next' ? -90 : 90,
    opacity: 0,
    scale: 0.95,
  }),
};

const Projects = () => {
  const [bookState, setBookState] = useState('closed');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageDirection, setPageDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(null);

  const openBook = () => setBookState('opening');

  const onFlameComplete = useCallback(() => {
    setBookState('open');
  }, []);

  const closeBook = () => {
    setBookState('closed');
    setCurrentPage(0);
  };

  const goToNext = useCallback(() => {
    if (currentPage < projects.length - 1) {
      setPageDirection('next');
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage]);

  const goToPrev = useCallback(() => {
    if (currentPage > 0) {
      setPageDirection('prev');
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  useEffect(() => {
    if (bookState !== 'open') return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'ArrowLeft') goToPrev();
      else if (e.key === 'Escape') closeBook();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bookState, goToNext, goToPrev]);

  const onTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    setTouchStart(null);
  };

  return (
    <Section nopadding id="projects" style={{ overflow: 'visible' }}>
      <SectionDivider />
      <ScrollReveal>
        <SectionTitle main>Projects</SectionTitle>
      </ScrollReveal>

      <BookContainer>
        {bookState === 'closed' && (
          <ScrollReveal delay={0.2}>
            <BookCover onClick={openBook} />
          </ScrollReveal>
        )}

        {bookState === 'opening' && (
          <div style={{ position: 'relative' }}>
            <BookCover opening />
            <FlameEffect onComplete={onFlameComplete} />
          </div>
        )}

        {bookState === 'open' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <BookOpenContainer>
              <div
                style={{ position: 'relative' }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <CloseButton onClick={closeBook} aria-label="Close book">
                  ✕
                </CloseButton>
                <BookSpine />
                <PageArea>
                  <AnimatePresence exitBeforeEnter custom={pageDirection}>
                    <motion.div
                      key={currentPage}
                      custom={pageDirection}
                      variants={pageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{
                        transformOrigin: 'left center',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <BookPage project={projects[currentPage]} />
                    </motion.div>
                  </AnimatePresence>
                </PageArea>
              </div>

              <NavigationBar>
                <NavButton
                  onClick={goToPrev}
                  disabled={currentPage === 0}
                  aria-label="Previous page"
                >
                  ← Previous
                </NavButton>
                <PageCounter>
                  {currentPage + 1} / {projects.length}
                </PageCounter>
                <NavButton
                  onClick={goToNext}
                  disabled={currentPage === projects.length - 1}
                  aria-label="Next page"
                >
                  Next →
                </NavButton>
              </NavigationBar>
            </BookOpenContainer>
          </motion.div>
        )}
      </BookContainer>
    </Section>
  );
};

export default Projects;
