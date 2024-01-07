import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fectchFlights, searchFlight } from '../action/flight.action';
import { FlightOptions } from './optionFlight';
import { useForm } from 'react-hook-form';
// import { searchFlight } from '../api/flight.api';

const SearchFlight = () => {

    const dispatch = useDispatch();
    const [flag,setFlag]=useState(0);
    const [toFlight,setToFlight]=useState([]);
    const [fromFlight,setFromFlight]=useState([]);
    const [flightData,setFlightData] = useState([]);
    const flights = useSelector(state=>state.FlightReducer.flights);
    const searchedFlight = useSelector(state=>state.FlightReducer.searchedFlight)
    console.log('flight',searchedFlight);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        setToFlight([...new Set(flights.map(flight => flight.to))]);
        setFromFlight([...new Set(flights.map(flight => flight.from))]);
    }, [flights]);
    

    useEffect(()=>{
        console.log('FlightList dispatches an action');
        dispatch(fectchFlights())
    },[])

  async function onSubmit(from,to,date)
    {
        console.log("onsubmit called",from,to,date);
        dispatch(searchFlight(from,to,date));
        setFlag(1);
    }

  return (
    <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">

        <select defaultValue={"default"} {...register("from")}>
        <option value={"default"} disabled>Select from</option>
        {fromFlight.map((flight,key) => (
            <option value={flight} key={key}>{flight}</option>
        ))}
        </select>

        <select defaultValue={"default"} {...register("to")}>
        <option disabled value={"default"}>Select To</option>
        {toFlight.map((flight,key) => (
            <option value={flight} key={key} >{flight}</option>
    
        ))}
        </select>

        <label htmlFor="date" className="inputLabel">Date</label><input
                    type="date"
                    className="inputTag"
                    {...register("date", {
                        required: "This is required.",
                        minLength: {
                            value: 2,
                            message: "Minimum 2 character is required",
                        },
                    })}
                    placeholder="Enter Flight date"
        />
       
    
      <button type='submit'>Search</button><br/><br/><br/><br/>
      </form>
    {searchedFlight.length>0?
      <table border={1}>
      <thead>
            <tr>
                <th>ID</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
            </tr>
            </thead>
            {(flag)?
            <tbody>    
                {searchedFlight && searchedFlight.map((flight) => <FlightOptions flight={flight} key={flight.id} />)}
            </tbody>:""}
      </table>:"No Flights Availabale"
    }   
    </div>
  )
}

export default SearchFlight
