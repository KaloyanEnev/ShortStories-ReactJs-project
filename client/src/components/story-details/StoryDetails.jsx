import React, { useState } from 'react';
import '../../css/StoryDetails.css'; // Import the CSS file for styling

export default function StoryDetails() {
    const [comments, setComments] = useState([
      
    ]);
    const [newComment, setNewComment] = useState('');
  
    const handleCommentChange = (e) => {
      setNewComment(e.target.value);
    };
  
    const handleCommentSubmit = (e) => {
      e.preventDefault();
      if (newComment.trim()) {
        const newCommentObj = {
          id: comments.length + 1, // Simple ID generation
          author: { email: 'newuser@example.com' }, // Placeholder email
          text: newComment
        };
        setComments([...comments, newCommentObj]);
        setNewComment('');
      }
    };
  
    const story = {
      title: 'Story Title',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image
      summary: 'This is a brief summary of the story. It provides an overview of the plot, main characters, and the setting.',
      content: 'This is the main content of the story. It includes all the chapters or sections.'
    };
  
    return (
      <section className="story-details">
        <div className="info-section">
          <div className="story-header">
            <img className="story-img" src={story.imageUrl} alt={story.title} />
            <h1>{story.title}</h1>
          </div>
  
          <p className="summary">{story.summary}</p>
  
          <div className="story-content">
            <h2>Content:</h2>
            <p>{story.content}</p>
          </div>
  
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {comments.map(comment => (
                <li key={comment.id} className="comment">
                  <p><strong>{comment.author.email}:</strong> {comment.text}</p>
                </li>
              ))}
            </ul>
            {comments.length === 0 && <p className="no-comment">No comments.</p>}
          </div>
  
          <div className="add-comment">
            <h2>Add a Comment:</h2>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Write your comment here..."
              />
              <button type="submit" className="btn submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
  }