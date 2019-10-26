import axios from 'axios';
import { newStoriesURL, storyURL } from '../constants/urlApi';

export const getStoryIds = async () => {
  const result = axios.get(newStoriesURL).then(({ data }) => data);
  return result;
};

export const getStory = async () => {
  const result = axios.get(storyURL).then(({ data }) => data);
  return result;
};
