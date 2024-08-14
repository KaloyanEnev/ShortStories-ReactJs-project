import React from 'react';
import { Link } from 'react-router-dom';
function truncateToWords(text, wordLimit = 10) {
    const words = text.split(' '); 
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...'; 
    }
    return text; 
}
export default function StoryListItem({ _id, title, text, imageUrl }) {
  return (
    <div className="story-item">
      <div className="story-info">
        <img src={imageUrl} />
        <h2>{title}</h2>
        <h6>{truncateToWords(text)}</h6>
        <Link to={`/stories/${_id}/details`} className="details-button">Details</Link>
      </div>
    </div>
  );
}