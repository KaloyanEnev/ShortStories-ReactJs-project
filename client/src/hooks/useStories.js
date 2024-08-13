import { useEffect, useState } from "react";
import storiesAPI from "../api/stories-api";

export function useGetAllStories(){
    const [stories,setStories] = useState([]);
    useEffect(() => {
       storiesAPI.getAll()
       .then(result=> setStories(result))
    },[])
    return [stories,setStories]
}
export function useGetOneStories(storyId){
    const [story, setStory] = useState({
      title : '',
      genre : '',
      text : '',
      imageUrl : ''
     
  });
  
      useEffect(() => {
          (async () => {
            const result = await storiesAPI.getOne(storyId);
            //  console.log(Object.values(result.comments));
      
            setStory(result);
          })();
        }, [storyId]);
        return[story,setStory]
  }
  export function useCreateStory(){
    const storyCreateHandler = async (storyData) => await storiesAPI.create(storyData)
    
    
    
    
    
    return storyCreateHandler
    }