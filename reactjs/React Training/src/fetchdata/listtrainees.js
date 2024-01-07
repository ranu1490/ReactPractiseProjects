import { useEffect, useState } from "react";

import axios from "axios"

export const ListTrainees = () =>{
    const [trainees, setTrainees] = useState([])
    const fetchData = async() => {
        try {
            let { data } = await axios.get('http://localhost:5000/trainees/')
            setTrainees(data);
            console.log(data);
        
        }
        catch (error){
            console.log(" Error is " + error);
        }
    }
    useEffect(() =>{
    fetchData();
},[]);

return(
    <div>
            <h1>Trainees Data</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                {trainees.map((trainee, data) =>(
                        <tr key={data}>
                            <td>{trainee.id}</td>
                            <td>{trainee.name}</td>
                            <td>{trainee.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)

}