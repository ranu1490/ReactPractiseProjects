import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFlight } from "../api/flight.api";
import { addFlight, editFlight, fetchFlight } from "../action/flight.action";
import { ErrorMessage } from "@hookform/error-message";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export default function AddEditFlight(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { flightId } = useParams();
    const flight = useSelector(state => state.FlightReducer.flight)
    console.log('here Flight is ', flight);
    
    // let location = useLocation();

    useEffect(() => {
        if (flightId) {
                console.log("fetchFlight(flightId)", fetchFlight(flightId))
                dispatch(fetchFlight(flightId));
        }
    }, []);

    useEffect(() => {
        console.log('Flight is', flight);
        if(flight){
        setValue("from", flight.from);
        setValue("to", flight.to);
        setValue("date", flight.date);
        }
    },[flight])

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    async function onSubmit({ id, from,to,date }) {
        if(flightId){
            dispatch(editFlight(flightId, from,to,date))
            Swal.fire({
                title: "Updated",
                text: "Flight Details Updated",
                icon: "success",
            });
            navigate("/flights");
        }
        else{
            dispatch(addFlight(id, from,to,date))
            Swal.fire({
                title: "Added",
                text: "Flight Delails Added",
                icon: "success",
            });
            navigate("/flights");
        }
    }
    return (
        <div className="container">
            <h2>{flightId ? "Edit Flight Detail" : "Add Flight"}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                {flightId ? <div>
                    <h3>Edit Details for Flight Id: <span className="chip-container">{flightId}</span></h3>
                </div> :
                    <div>
                        <label htmlFor="id" className="inputLabel">Id</label>
                        <input
                            type="number"
                            className="inputTag"
                            {...register("id", {
                                required: "This is required.",
                            })}
                            placeholder="Enter Flight Id"
                        />
                        <ErrorMessage
                            errors={errors}
                            render={({ message }) => <p className="errorMsg">{message}</p>}
                        />
                    </div>
                }
                <label htmlFor="from" className="inputLabel">From</label><input
                    type="text"
                    className="inputTag"
                    {...register("from", {
                        required: "This is required.",
                        minLength: {
                            value: 2,
                            message: "Minimum 2 character is required",
                        },
                    })}
                    placeholder="Enter Flight From"
                />
                <ErrorMessage
                    errors={errors}
                    name="from"
                    render={({ message }) => <p className="errorMsg">{message}</p>}
                />
                <label htmlFor="to" className="inputLabel">To</label><input
                    type="text"
                    className="inputTag"
                    {...register("to", {
                        required: "This is required.",
                        minLength: {
                            value: 2,
                            message: "Minimum 2 character is required",
                        },
                    })}
                    placeholder="Enter Flight To"
                />
                <ErrorMessage
                    errors={errors}
                    name="to"
                    render={({ message }) => <p className="errorMsg">{message}</p>}
                />
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
                <ErrorMessage
                    errors={errors}
                    name="date"
                    render={({ message }) => <p className="errorMsg">{message}</p>}
                />
                <button className="submitBtn" type="submit">
                    {flightId ? "Update" : "Add"} Flight
                </button>
            </form>
        </div>
    );
}