import React from 'react';
import { Link } from 'react-router-dom';

export default function StoryListItem({ _id, title, category, imageUrl }) {
  return (
    <div className="story-item">
      <div className="story-info">
        <img src={imageUrl} alt={title} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <Link to={`/stories/${_id}/details`} className="details-button">Details</Link>
      </div>
    </div>
  );
}