import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import { StoriesWrapper } from '../styles/StoriesWrapper';
import { Header } from '../components/header/Header';

export const StoriesContainer = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StoriesWrapper>
        <Header></Header>
      </StoriesWrapper>
    </React.Fragment>
  );
};
