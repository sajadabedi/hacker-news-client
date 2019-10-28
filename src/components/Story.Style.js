import styled from 'styled-components';
import { styles } from '../styles/styles';

export const NewsArticle = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 24px;
`;
export const Headline = styled.h1`
  color: ${styles.colors.dark};
  font-size:${styles.fontSize['20px']}
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StoryMetaElement = styled.div`
  margin-right: 16px;
  font-size: ${styles.fontSize['14px']};
  color: ${styles.colors.gray30};
`;
