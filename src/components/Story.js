import React, { useEffect, useState } from 'react';
import { mapTime } from '../mappers/mapTime';
import { getStory } from '../services/hackerNewsApi';
import {
  Headline,
  NewsArticle,
  StoryMeta,
  StoryMetaElement
} from './Story.Style';

export const Story = ({ id }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(id).then(data => data && data.url && setStory(data));
  }, [id]);
  return story && story.url ? (
    <NewsArticle>
      <Headline>
        <a href={story.url}>{story.title}</a>
      </Headline>
      <StoryMeta>
        <StoryMetaElement>by: {story.by}</StoryMetaElement>
        <StoryMetaElement>{mapTime(story.time)} ago</StoryMetaElement>
      </StoryMeta>
    </NewsArticle>
  ) : null;
};
