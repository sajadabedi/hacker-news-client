import React from 'react';
import { Logo } from '../../styles/Logo';
import { HeaderStyle } from './Header.Style';

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo></Logo>
      {/* <Navigation></Navigation> */}
    </HeaderStyle>
  );
};
