import { useNavigate, useParams } from "react-router-dom";
import { useGetOneStories } from "../../hooks/useStories";
import storiesAPI from "../../api/stories-api";
import "../../css/StoryCreate.css"
import { useForm } from "../../hooks/useForm";
const initialValues = {
    title: "",
    genre: "",
    text: "",
    imageUrl: "",
  };

export default function StoryEdit() {
    const navigate = useNavigate()
    const {storyId} = useParams();
    const [story,setStory] = useGetOneStories(storyId)
    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(story, async (values) => { // might want to { ...initialValues, ...game }
      await  storiesAPI.update(storyId,values)
      navigate(`/stories/${storyId}/details`)
        
    })
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

<label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          name="genre"
          value={values.genre}
          onChange={changeHandler}
        >
          <option value="" disabled>Select genre</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Non-fiction">Non-fiction</option>
          {/* Add more genres as needed */}
        </select>
        <label htmlFor="story-text">Text:</label>
        <textarea
          id="text"
          name="text"
          value={values.text}
          onChange={changeHandler}
          placeholder="Write your story here..."
        ></textarea>

        <label htmlFor="story-img">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={values.imageUrl}
          onChange={changeHandler}
          placeholder="Enter image URL..."
        />

        <input className="btn submit" type="submit" value="Edit Story" />
      </div>
    </form>
  </section>
);
}