import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import { StoriesWrapper } from '../styles/StoriesWrapper';
import { Header } from '../components/header/Header';
import { getStoryIds } from '../services/hackerNewsApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);
  return (
    <React.Fragment>
      <GlobalStyle />
      <StoriesWrapper>
        <Header></Header>
        {storyIds.slice(0, 5).map(storyId => (
          <Story key={storyId} id={storyId}></Story>
        ))}
      </StoriesWrapper>
    </React.Fragment>
  );
};
