
import {Routes, Route, Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios"
import AddColleges from "./addcollege";
import UpdateCollege from "./updatecollege";

 const ListColleges = () =>{
    const [colleges, setColleges] = useState([])
    const fetchData = async() => {
        try {
            let { data } = await axios.get('http://localhost:5000/college/')
            setColleges(data);
            console.log(data);
        
        }
        catch (error){
            console.log(" Error is " + error);
        }
    }
    useEffect(() =>{
    fetchData();
},[]);

const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/college/${id}`);
      fetchData(); // Fetch data again after deletion
    } catch (error) {
      console.log("Error while deleting: " + error);
    }
  };

return(
    <div>
            <h1>College Data Crud Operation</h1>
            <Link to="/addcollege">Add College</Link>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Established Year</th>
                    </tr>
                </thead>
                <tbody>
                {colleges.map((college, data) =>(
                        <tr key={data}>
                            <td>{college.id}</td>
                            <td>{college.name}</td>
                            <td>{college.est}</td>
                            <td><Link to="/editcollege">Edit</Link></td>
                            <td><button onClick={() => handleDelete(college.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)

}

export const RoutingCollege = ()=>{
    return (
        //<Router>
            <Routes>
                <Route path="/" element={<ListColleges/>}></Route>
                <Route path="/addcollege" element={<AddColleges/>}></Route>
                <Route path="/editcollege" element={<UpdateCollege/>}></Route>
            </Routes>
       // </Router>
    )
}