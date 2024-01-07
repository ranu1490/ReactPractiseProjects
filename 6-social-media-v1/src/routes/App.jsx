import './App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CreatePost from '../components/CreatePost'
import Sidebar from '../components/Sidebar'
import PostList from '../components/PostList'
import { useState } from 'react'
import PostListProvider from '../store/Post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <PostListProvider>

    <div className='app-container'>
        <Sidebar/>
        <div className='content'>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    </div>
    </PostListProvider>
  )
}

export default App
