import { useAuthContext } from "../../contexts/AuthContext";
import { useGetAllStories } from "../../hooks/useStories";
import StoryListItem from "../story-list/story-list-item/StoryListItem";
import "../../css/StoryList.css"

export default function MyStories() {
    
   
    const [stories,setStories] = useGetAllStories();
    const {userId } =useAuthContext()
    const myStories = stories.filter(story => story._ownerId === userId);
    
  // Using dummy data for the example

  return (
    <section id="catalog-page">
      <div className="story-container">
        <h1>All Stories</h1>
        <div className="story-grid">
          {myStories.length > 0 ? 
            myStories.map(story => <StoryListItem key={story._id} {...story} />)
           : 
            <h3 className="no-articles">No stories available</h3>
          }
        </div>
      </div>
    </section>
  );
}