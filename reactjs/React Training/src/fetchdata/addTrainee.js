import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddTrainee(){
    const {register, handleSubmit, formState:{errors}}=useForm();
    async function onSubmit({id,name,salary}){
       await axios.post('http://localhost:5000/trainees/',{id,name,salary})
    }

    return(
        <div className="container"> 
            <h2>Add Trainees</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <input 
                    type="number"
                    className="inputTag"
                    name="id"
                    {...register("id",{
                        required:"this is required.",
                    })}
                    placeholder="Enter Trainee id"
                />
                <ErrorMessage
                    errors={errors}
                    name="id"
                    render={({message})=><p className="errorMsg">{message}</p>}
                />
                <input 
                    type="text"
                    className="inputTag"
                    name="name"
                    {...register("name",{
                        required:"this is required.",
                    })}
                    placeholder="Enter Trainee name"
                />
                <input 
                    type="text"
                    className="inputTag"
                    name="salary"
                    {...register("salary",{
                        required:"this is required.",
                    })}
                    placeholder="Enter Trainee Salary"
                />

                <button>Submit</button>
            </form>
        </div>
    )
    
}