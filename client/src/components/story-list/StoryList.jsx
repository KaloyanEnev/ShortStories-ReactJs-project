import React from 'react';
import StoryListItem from './story-list-item/StoryListItem';
import '../../css/StoryList.css'
const dummyStories = [
    {
        _id: '1',
        title: 'The Lost City',
        category: 'Adventure',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        _id: '2',
        title: 'Into the Stars',
        category: 'Sci-Fi',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        _id: '3',
        title: 'The Secret Door',
        category: 'Mystery',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
          _id: '4',
          title: 'The Secret Door',
          category: 'Mystery',
          imageUrl: 'https://via.placeholder.com/150'
        },
        {
            _id: '5',
            title: 'The Secret Door',
            category: 'Mystery',
            imageUrl: 'https://via.placeholder.com/150'
          },
          {
            _id: '6',
            title: 'The Secret Door',
            category: 'Mystery',
            imageUrl: 'https://via.placeholder.com/150'
          },
            
      
  ];
  

export default function StoryList() {
  // Using dummy data for the example
  const stories = dummyStories;

  return (
    <section id="catalog-page">
      <div className="story-container">
        <h1>All Stories</h1>
        <div className="story-grid">
          {stories.length > 0 ? (
            stories.map(story => <StoryListItem key={story._id} {...story} />)
          ) : (
            <h3 className="no-articles">No stories available</h3>
          )}
        </div>
      </div>
    </section>
  );
}