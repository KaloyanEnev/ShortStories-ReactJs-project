import React from 'react';
import { Link } from 'react-router-dom';
// before image was in the div with classNAme = storyInfo if u have problem put it there
export default function StoryListItem({ _id, title,genre, text, imageUrl }) {
  return (
    <div className="story-item">
        <img src={imageUrl} />
      <div className="story-info">
        <h2>Title: {title}</h2>
        <h6>Genre: {genre}</h6>
        <Link to={`/stories/${_id}/details`} className="details-button">Details</Link>
      </div>
    </div>
  );
}