import { useDispatch, useSelector } from "react-redux"
import { fetchColleges } from "../action/college.action";
import {useEffect} from "react";
import {NavLink as Link} from 'react-router-dom';
import CollegeDetails from "./collegeDetails";

export const CollegeList = ()=>{
    const dispatch = useDispatch();
    const colleges = useSelector(state=>state.CollegeReducer.colleges)

    useEffect(()=>{
        console.log('CollegeList dispatches an action ');
        dispatch(fetchColleges())
    },[])

    return (
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
                {colleges && colleges.map((colg)=><CollegeDetails college = {colg} key={colg.id}/>)}
                </tbody>
            </table>
        </div>
    )
}   
