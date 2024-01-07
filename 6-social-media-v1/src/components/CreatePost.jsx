import React, { useRef } from 'react'
import { useContext } from 'react';
import { PostListContext } from '../store/Post-list-store';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {

  const {addPost} = useContext(PostListContext)
  const navigate  = useNavigate();

  const tagsElement = useRef();
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const tags= tagsElement.current.value.split(" ");
    const userId=userIdElement.current.value;
    const title=titleElement.current.value;
    const body=bodyElement.current.value;
    const reactions=reactionsElement.current.value;
    
    
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        userId: userId,
        tags:tags,
        body:body,
        reactions:reactions
        /* other post data */
      })
    })
    .then(res => res.json())
    .then((post)=>{
        addPost(post);
        navigate("/");
      });

    // addPost(userId,title,body,reactions,tags);
    tagsElement.current.value="";
    userIdElement.current.value="";
    titleElement.current.value="";
    bodyElement.current.value="";
    reactionsElement.current.value="";
  }

  return (
    <form className='create-post' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter User ID</label>
    <input type="text" className="form-control" id="userId" placeholder='Enter your user id' ref={userIdElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" placeholder='Enter post title' ref={titleElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Description</label>
    <textarea type="text" className="form-control" id="body" placeholder='Enter post description' ref={bodyElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Post Tags</label>
    <input type="text" className="form-control" id="tags" placeholder='Enter post tags with space between them' ref={tagsElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Public Reactions</label>
    <input type="number" className="form-control" id="reactions" placeholder='Enter total number of public reactions' ref={reactionsElement}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost