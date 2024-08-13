import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";
export  function useCreateComment(){
    const createHandler = (storyId,comment) => commentsAPI.create(storyId,comment)

    
return createHandler
}
export function useGetAllComments(storyId){
    const [comments,setComments] =  useState([]);
useEffect(() =>{
(async ()=>{
const result = await commentsAPI.getAll(storyId);
//console.log(result);

setComments(result)
})()
},[storyId])

    return [comments,setComments]
}