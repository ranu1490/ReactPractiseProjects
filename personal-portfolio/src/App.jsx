import './App.css'
import Navbar from './components/navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Works from './components/Works'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Skills/>
      <Works/>
      <Experience/>
      <Contact/>
    <div className="curve"></div>
    <Footer/>

    </>
  )
}

export default App
