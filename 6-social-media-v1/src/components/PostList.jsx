import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostListContext } from '../store/Post-list-store'
import { WelcomeMessage } from './WelcomeMessage';
import { LoadingSpinners } from './LoadingSpinners';

const PostList = () => {
  const {postList, fetching}=useContext(PostListContext);

  
  return (
    <>  
        {fetching && <LoadingSpinners/>}
        {!fetching && postList.length===0 && <WelcomeMessage/>}
        {!fetching && postList.map((post)=><Post key={post.id} post={post}/>)}
    </>
  )
}

export default PostList