import {BrowserRouter as Router, NavLink as Link, Routes, Route} from "react-router-dom"

const Home = () =>{
    return (
        <h1>Home Component</h1>
    )
}

const ContactUs = ()=>{
    return (<h1>ContactUs Component</h1>)
}

const PageNotFound =()=>{
    return(<h1>Page not found</h1>)
}

export const RoutingWithLink =()=>{
    return(
        <div>
            <Link to ='/'>Home</Link>&nbsp;
            <Link to ='/contact'>Contact</Link>
            <div>
                {/* <Router> */}
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/contact" element={<ContactUs/>}></Route>
                        <Route path="*" element={<PageNotFound/>}></Route>
                    </Routes>
                {/* </Router> */}
            </div>
        </div>
    )
}