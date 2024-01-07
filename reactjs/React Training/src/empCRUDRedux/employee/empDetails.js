import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { deleteEmployeebyID } from '../api/employee.api';
import { deleteEmployee } from '../action/employee.action';
import { useDispatch } from 'react-redux';
// import { deleteEmployee } from './employee.service';
export const EmployeeDetails = ({ employee }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function deleteEmployeeConfirmation() {
        let result = await Swal.fire({
            title: 'Are you sure to Delete?',
            text: "Employee will be deleted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
        if (result.isConfirmed) {
            dispatch(deleteEmployee(employee.id))
            navigate('/');
        }
    }
   return (
        < tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.designation}</td>
            <td><Link to={`/employees/update/${employee.id}`}  >Edit Employee </Link></td>
            <td><button className="btn btn-sm btn-danger" onClick={deleteEmployeeConfirmation}>
                Delete Employee</button></td>
        </tr >
    )
}
