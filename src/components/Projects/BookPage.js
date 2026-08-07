import React from 'react';
import {
  PageContainer,
  PageImage,
  PageContent,
  PageTitle,
  PageDivider,
  PageDescription,
  PageTagList,
  PageTag,
  PageLinks,
  PageLink,
} from './BookPageStyles';

const BookPage = ({ project }) => {
  if (!project) return null;

  return (
    <PageContainer>
      <PageImage src={project.image} alt={project.title} />
      <PageContent>
        <PageTitle>{project.title}</PageTitle>
        <PageDivider />
        <PageDescription>{project.description}</PageDescription>
        <PageTagList>
          {project.tags.map((tag, i) => (
            <PageTag key={i}>{tag}</PageTag>
          ))}
        </PageTagList>
        <PageLinks>
          <PageLink href={project.visit} target="_blank" rel="noopener noreferrer">
            View Project
          </PageLink>
          <PageLink href={project.source} target="_blank" rel="noopener noreferrer">
            Source Code
          </PageLink>
        </PageLinks>
      </PageContent>
    </PageContainer>
  );
};

export default BookPage;
