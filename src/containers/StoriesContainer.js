import React, { useEffect, useState } from 'react';
import { Header } from '../components/header/Header';
import { Spinning } from '../components/loading/Spinning';
import { Story } from '../components/Story';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { getStoryIds } from '../services/hackerNewsApi';
import { GlobalStyle } from '../styles/GlobalStyles';
import { StoriesWrapper } from '../styles/StoriesWrapper';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getStoryIds().then(data => {
      setStoryIds(data);
      setLoading(false);
    });
  }, [count]);
  return (
    <React.Fragment>
      <GlobalStyle />
      <StoriesWrapper>
        <Header></Header>
        {loading ? (
          <Spinning />
        ) : (
          storyIds
            .slice(0, count)
            .map(storyId => <Story key={storyId} id={storyId}></Story>)
        )}
      </StoriesWrapper>
    </React.Fragment>
  );
};
