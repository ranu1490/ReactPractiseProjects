import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
 import App from "./routes/App.jsx"
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/create-post", element: <CreatePost/>
      },
      {
        path: "/", element: <PostList/>,
      },
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
