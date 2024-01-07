import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
const Home =()=>
{
    return (
        <div>
            <h1>Home Component</h1>
        </div>
    )
}

const AboutUs =()=>{
    return(
        <div>
            <h1>About us Component</h1>
        </div>
    )}

export const BasicRouting = ()=>{
    return (
        //<Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/aboutus" element={<AboutUs/>}></Route>
            </Routes>
       // </Router>
    )
}