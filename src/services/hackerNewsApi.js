import axios from 'axios';
import { newStoriesURL, storyURL } from '../constants/urlApi';
import { selectFields } from '../selectors/selectFields';

export const getStory = async id => {
  const result = await axios
    .get(`${storyURL + id}.json`)
    .then(({ data }) => data && selectFields(data));
  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesURL).then(({ data }) => data);
  return result;
};
