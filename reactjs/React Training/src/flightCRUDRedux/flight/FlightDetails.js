import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { deleteFlight } from "../action/flight.action"

export const FlightDetails = ({flight})=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function deleteFlightConfirm(){
        let result = await Swal.fire({
            title: 'Are you sure to Delete?',
            text: "Employee will be deleted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it'
        });

        if(result.isConfirmed){
            dispatch(deleteFlight(flight.id))
            navigate('/');
        }
    }
    return(
        <tr>
            <td><Link to={`/flights/getbyid/${flight.id}`}>{flight.id}</Link></td>
            <td>{flight.from}</td>
            <td>{flight.to}</td>
            <td>{flight.date}</td>
            <td><Link to={`/flights/update/${flight.id}`}>Edit</Link></td>
            <td><button onClick={deleteFlightConfirm}>Delete Flights</button></td>
        </tr>
    )
}
