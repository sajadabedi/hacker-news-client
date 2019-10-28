import React, { memo, useEffect, useState } from 'react';
import { getStory } from '../services/hackerNewsApi';
import { Headline, NewsArticle, StoryElement, StoryMeta } from './Story.Style';

export const Story = memo(function Story({ id }) {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(id).then(data => data && data.url && setStory(data));
  }, []);
  return (
    <NewsArticle>
      <Headline>
        <a href="#">Machine learning and ketosis</a>
      </Headline>
      <StoryMeta>
        <StoryElement>by: Sajad</StoryElement>
        <StoryElement>posted: 2 days ago</StoryElement>
      </StoryMeta>
    </NewsArticle>
  );
});
