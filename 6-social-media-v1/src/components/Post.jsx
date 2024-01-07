import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostListContext } from '../store/Post-list-store';
const Post = ({post}) => {
 const {deletePost}= useContext(PostListContext);
  return (
    <div className="card post-card" style={{width: "30rem"}}>
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={()=>deletePost(post.id)}>
              <MdDelete />
              <span className="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">{post.body}</p>
            {post.tags.map(data=> <span className="badge bg-primary tags" key={data}>{data}</span>)}
            <div className="alert alert-success reaction" role="alert">
              This post is reacted by {post.reactions} people.
            </div>
        </div>
    </div>
  )
}

export default Post