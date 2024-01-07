import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import {NavLink as Link} from 'react-router-dom';
import { fectchEmployees } from "../action/employee.action";
import { EmployeeDetails } from "./empDetails";

export const EmployeeList = ()=>{
    const dispatch =useDispatch();
    const employees=useSelector(state=>state.EmployeeReducer.employees)
    useEffect(()=>{
        console.log('EmployeeList dispatches an action');
        dispatch(fectchEmployees())
        //dispatch({type: FETCH_EMPLOYEES})
    },[])
    return(
        <>
            <div>
                <Link to='create' style={{display: 'flex', flexDirection: 'row-reverse'}}>
                    Add Employee
                </Link>
                <table border={1}>
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th></th>
                  <th></th>
                </tr>
                {employees && employees.map((emp) => <EmployeeDetails employee={emp} key={emp.id} />)}
              </tbody>
            </table>
            </div>
        </>
    )
}