import { Route,Routes,Navigate } from "react-router-dom";
import AddEmpRedux from "./addEmployee";
import { EmployeeList } from "./emplist";
import AddEditEmployee from "./addEditEmployee";
export default function EmpCRUDReduxRoutes() {
    return(

        <Routes>
            <Route path="employees" element={<EmployeeList/>}/>
            <Route path="/" element={<Navigate replace to="/employees"/>}/>
            <Route path="/employees/create" element={<AddEditEmployee/>}/>
            <Route path='/employees/update/:empid' element={<AddEditEmployee/>}></Route>

        </Routes>
    )
}