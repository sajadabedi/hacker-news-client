import styled from 'styled-components';
import { styles } from '../../../styles/styles';

export const NavigationStyle = styled.nav`
  display: block;
`;

export const List = styled.ul`
  margin: 0;

  li {
    display: inline-block;
    margin-left: 16px;
    list-style: none;
    font-weight: ${styles.weights.medium};
  }
`;
