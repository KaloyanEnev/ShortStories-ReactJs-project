import React, { useState } from 'react';
import '../../css/StoryDetails.css'; // Import the CSS file for styling
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetOneStories } from '../../hooks/useStories';
import { useCreateComment, useGetAllComments } from '../../hooks/useComments';
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';
import storiesAPI from '../../api/stories-api';
const initialValues = {
  comment: "",
};

export default function StoryDetails() {
  const {userId,email:authEmail} = useAuthContext();
  const {storyId} = useParams();
  const [story,setStory] = useGetOneStories(storyId);
  const ownerId = story._ownerId;
  const navigate = useNavigate();
  
  const [comments,setComments] = useGetAllComments(storyId);
  const createComment = useCreateComment();
  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
   async ({ comment }) => {
    try{
    const newComment =  await createComment(storyId, comment);
    setComments(oldComments => [ ...oldComments,newComment])

    }
    catch(err){
      console.log(err.message);
      
    }
    }
  );
  const storyDeleteHandler =async () =>{
    try{

      await storiesAPI.remove(storyId)
      navigate('/stories')
    }catch(err){
      console.log(err);
      
    }
  }

  
    
    return (
      <section className="story-details">
      <div className="info-section">
        <div className="story-header">
          <img className="story-img" src={story.imageUrl} alt={story.title} />
          <div className="story-info">
            <h1>{story.title}</h1>
            <h2 className="genre">Genre: {story.genre}</h2>
          </div>
        </div>
        <p className="summary">{story.text}</p>
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment._id} className="comment">
                <p>
                  <strong>{comment.author ? comment.author.email : authEmail}:</strong> {comment.text}
                </p>
              </li>
            ))}
          </ul>
          {comments.length === 0 && <p className="no-comment">No comments.</p>}
        </div>
        {userId === ownerId && (
          <div className="buttons">
            <Link to={`/stories/${storyId}/edit`} className="button">Edit</Link>
            <a href="#" onClick={storyDeleteHandler} className="button">Delete</a>
          </div>
        )}
        {userId && (
          <div className="add-comment">
            <h2>Add a Comment:</h2>
            <form onSubmit={submitHandler}>
              <textarea
                name='comment'
                onChange={changeHandler}
                value={values.comment}
                placeholder="Write your comment here..."
              />
              <input type="submit" className="btn submit" value="Add Comment" />
            </form>
          </div>
        )}
      </div>
    </section>
  );
  }