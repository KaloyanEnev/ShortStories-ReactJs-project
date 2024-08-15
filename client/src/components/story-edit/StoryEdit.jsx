import { useNavigate, useParams } from "react-router-dom";
import { useGetOneStories } from "../../hooks/useStories";
import storiesAPI from "../../api/stories-api";
import "../../css/StoryCreate.css";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
const initialValues = {
  title: "",
  genre: "",
  text: "",
  imageUrl: "",
};
const validateStoryForm = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Title is required!";
  if (!values.genre) errors.genre = "Please select a genre!";
  if (!values.text) errors.text = "Story text cannot be empty!";
  const urlPattern = /^https?:\/\//i;
  if (!values.imageUrl || !urlPattern.test(values.imageUrl)) {
    errors.imageUrl = "Please enter a valid URL!";
  }
  return errors;
};

export default function StoryEdit() {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const [story, setStory] = useGetOneStories(storyId);
  const { changeHandler, submitHandler, values, errors } = useForm(
    story,
    async (values) => {
      // might want to { ...initialValues, ...game }
      await storiesAPI.update(storyId, values);
      navigate(`/stories/${storyId}/details`);
    },
    validateStoryForm
  );

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={submitHandler}>
        <div className="container">
          <h1>Edit Story</h1>

          <label htmlFor="story-title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={changeHandler}
            placeholder="Enter story title..."
          />
          {errors.title && <p className="error">{errors.title}</p>}

          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            name="genre"
            value={values.genre}
            onChange={changeHandler}
          >
            <option value="" disabled>
              Select genre
            </option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Non-fiction">Non-fiction</option>
          </select>
          {errors.genre && <p className="error">{errors.genre}</p>}
          <label htmlFor="story-text">Text:</label>
          <textarea
            id="text"
            name="text"
            value={values.text}
            onChange={changeHandler}
            placeholder="Write your story here..."
          ></textarea>
          {errors.text && <p className="error">{errors.text}</p>}
          <label htmlFor="story-img">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
            placeholder="Enter image URL..."
          />
          {errors.imageUrl && <p className="error">{errors.imageUrl}</p>}
          <input className="btn submit" type="submit" value="Edit Story" />
        </div>
      </form>
    </section>
  );
}
