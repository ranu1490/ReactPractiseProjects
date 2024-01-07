import { createContext, useReducer, useState,useEffect } from "react";

export const PostListContext = createContext(
    {postList:[],
      fetching: false,
    addPost: ()=>{},
    deletePost: ()=>{},
});

const postListReducer=(currPostList,action)=>{
    let newPostList = currPostList;
    if(action.type==='DELETE_POST'){
      newPostList=currPostList.filter((postId)=>postId.id !== action.payload.id);
    }
    else if(action.type==='ADD_POST'){
      newPostList = [action.payload.post, ...currPostList]
    }

    else if(action.type==='ADD_INITIAL_POSTS'){
        newPostList=action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({children})=>{
    const [postList,dispatchPostList] = useReducer(postListReducer,[]);
    const [fetching,setFetch] = useState(false);

    useEffect(()=>{
      const controller = new AbortController();
      const signal = controller.signal;
      setFetch(true);
      fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then((data)=>{
                  addInitialPosts(data.posts);
                  setFetch(false);
                  });
       return ()=>{
          controller.abort();
       }
    },[])

    const addPost = (post)=>{
      // console.log(`${tags},${userId},${title},${body},${reactions}`);
      // console.log(post);
      let newPostList = {
        type: 'ADD_POST',
        payload:{
          post
        }
      }
      dispatchPostList(newPostList);
    };

    const addInitialPosts = (posts)=>{
      let newPostList = {
        type: 'ADD_INITIAL_POSTS',
        payload:{
            posts
        }
      }
      dispatchPostList(newPostList);
    };

    const deletePost =(postId)=>{
      let newPostList = {
        type:'DELETE_POST',
        payload:{
          id: postId
        }
      }
      dispatchPostList(newPostList);
    };

    return(
        <PostListContext.Provider value={{postList,addPost,deletePost,fetching}}>
            {children}
        </PostListContext.Provider>
    )
};


export default PostListProvider;