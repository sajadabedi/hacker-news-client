import React, { useEffect, useState } from 'react';
import { Header } from '../components/header/Header';
import { Story } from '../components/Story';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { getStoryIds } from '../services/hackerNewsApi';
import { GlobalStyle } from '../styles/GlobalStyles';
import { StoriesWrapper } from '../styles/StoriesWrapper';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
    console.log('count', count);
    console.log('id', storyIds);
  }, [count]);
  return (
    <React.Fragment>
      <GlobalStyle />
      <StoriesWrapper>
        <Header></Header>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} id={storyId}></Story>
        ))}
      </StoriesWrapper>
    </React.Fragment>
  );
};
