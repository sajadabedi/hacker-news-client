import React from 'react';
import styled from 'styled-components';
import { styles } from './styles';

const LogoStyle = styled.a`
  text-decoration: none;
  color: white;
  width: 50px;
  height: 50px;
  font-size: ${styles.fontSize['20px']};
  text-align: center;
  line-height: 2.5;
  font-weight: ${styles.weights.bold};
  background: ${styles.colors.accent};
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:hover {
    &:before {
      left: 0;
      top: 0;
    }
    &:after {
      left: 0;
      top: 0;
    }
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${styles.colors.accent};
    z-index: -1;
    transition: all 0.2s ease-in-out;
  }
  &:before {
    left: 4px;
    top: 4px;
    opacity: 0.5;
    transition-delay: 0;
  }
  &:after {
    left: 8px;
    top: 8px;
    opacity: 0.2;
    transition-delay: 50ms;
  }
`;

export const Logo = () => {
  return <LogoStyle href="/">HN</LogoStyle>;
};
