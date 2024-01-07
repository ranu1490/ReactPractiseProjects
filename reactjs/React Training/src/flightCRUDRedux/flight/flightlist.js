import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink as Link } from "react-router-dom";
import { FlightDetails } from "./FlightDetails";
import { fectchFlights } from "../action/flight.action";

export const FlightList = ()=>{
    const dispatch = useDispatch();
    const flights = useSelector(state=>state.FlightReducer.flights);
    useEffect(()=>{
        console.log('FlightList dispatches an action');
        dispatch(fectchFlights())
    },[])
    return(
        <>
            <div>
                <Link to='create' >Add Flight</Link>
                <table border={1}>
                    <tbody>
                        <tr>
                        <th>ID</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                        </tr>
                        {flights && flights.map((flight) => <FlightDetails flight={flight} key={flight.id} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}