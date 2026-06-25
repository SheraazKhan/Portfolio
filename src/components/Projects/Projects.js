import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ScrollReveal/ScrollReveal';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <ScrollReveal>
      <SectionTitle main>Projects</SectionTitle>
    </ScrollReveal>
    <StaggerContainer staggerDelay={0.15}>
      <GridContainer>
        {projects.map(({id, image, title, description, tags, source, visit}) => (
          <StaggerItem key={id}>
            <BlogCard>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          </StaggerItem>
        ))}
      </GridContainer>
    </StaggerContainer>
  </Section>
);

export default Projects;
