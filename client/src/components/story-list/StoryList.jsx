import React from 'react';
import StoryListItem from './story-list-item/StoryListItem';
import '../../css/StoryList.css'
import { useGetAllStories } from '../../hooks/useStories';
import storiesAPI from '../../api/stories-api';

  

export default function StoryList() {
    
   
    const [stories,setStories] = useGetAllStories();
    
  

  return (
    <section id="catalog-page">
      <div className="story-container">
        <h1>All Stories</h1>
        <div className="story-grid">
          {stories.length > 0 ? 
            stories.map(story => <StoryListItem key={story._id} {...story} />)
           : 
            <h3 className="no-articles">No stories available</h3>
          }
        </div>
      </div>
    </section>
  );
}