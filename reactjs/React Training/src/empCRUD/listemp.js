import { useEffect, useState } from "react";
import { NavLink as Link, Route, Routes } from "react-router-dom";
//import getEmployees from "./employee.service";
 import { getEmployees } from "./employee.service";
import { EmployeeDetails } from "./empDetails";
import AddEmployee from "./addEmployee";
const ListEmployees = () => {
  let [response, setResp] = useState([]);
 useEffect(  () => {

    getEmployees().then((employees) => setResp(employees))
  }, []);
  console.log('Reponse',response);
 return (
    <>
        {/* <Routes>
            <Route path="/employees/create" element={<AddEmployee/>}></Route>
      </Routes> */}
      <div className="container">
      <Link to='/employees/create' 
            style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            Add Employee</Link>
        {response.length > 0 ? (
          <div>
            <h1>The Data is</h1>
            <table border={1}>
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Designation</th>
                </tr>
                {response.map(emp => <EmployeeDetails employee={emp} key={emp.id} />)}
              </tbody>
            </table>
          </div>
        ) : (
            <h3>Error in retrieving data</h3>
        )}
      </div>
      
    </>
  );
};
export default ListEmployees;
