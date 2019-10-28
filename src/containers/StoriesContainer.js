import React, { useEffect, useState } from 'react';
import { Header } from '../components/header/Header';
import { Story } from '../components/Story';
import { getStoryIds } from '../services/hackerNewsApi';
import { GlobalStyle } from '../styles/GlobalStyles';
import { StoriesWrapper } from '../styles/StoriesWrapper';

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
