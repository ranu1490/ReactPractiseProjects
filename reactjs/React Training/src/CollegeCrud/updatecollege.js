import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function UpdateCollege(){
    const {register, handleSubmit, formState:{errors}}=useForm();
    async function onSubmit({id,name,est}){
       await axios.put(`http://localhost:5000/college/${id}`,{name,est})
    }

    return(
        <div className="container"> 
            <h2>Update Colleges</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <input 
                    type="number"
                    className="inputTag"
                    name="id"
                    {...register("id",{
                        required:"this is required.",
                    })}
                    placeholder="Enter college id"
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
                    placeholder="Enter College name"
                />
                <input 
                    type="text"
                    className="inputTag"
                    name="est"
                    {...register("est",{
                        required:"this is required.",
                    })}
                    placeholder="Enter College Establishment year"
                />

                <button>Submit</button>
            </form>
        </div>
    )
    
}