import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFlight } from "../action/flight.action";

export const GetFlightByID = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { flightId } = useParams();
    const flight = useSelector(state => state.FlightReducer.flight)
    console.log('here Flight is ', flight);
    
    useEffect(() => {
        if (flightId) {
                console.log("fetchFlight(flightId)", fetchFlight(flightId))
                dispatch(fetchFlight(flightId));
        }
    }, []);

    async function backbutton (){
        navigate('/');
    }

    return(
        <div>
            <h1>Flight details for flight id <span>{flightId}</span> is: </h1>
            <h3>From: {flight.from}</h3>
            <h3>To: {flight.to}</h3>
            <h3>Date: {flight.date}</h3><br/>
            <button onClick={backbutton}>Back</button>
        </div>
    )
}