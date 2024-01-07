import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

export const FlightOptions = ({flight})=>{
    
    return(
    <tr>
        <td>{flight.id}</td>
        <td>{flight.from}</td>
        <td>{flight.to}</td>
        <td>{flight.date}</td>
    </tr>
    )
}
