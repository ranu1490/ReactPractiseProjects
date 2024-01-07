import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { addEmployee } from "./employee.service";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function AddEmployee()
{
    const {register, handleSubmit, formState:{errors}}=useForm();
    const navigate = useNavigate()
    async function onSubmit({id,name,designation})
    {
        addEmployee({id,name,designation})
        Swal.fire({
            title:"Added",
            text:"Employee Added",
            icon: "Success",
        });  
    navigate('/employees');

    }

    return(
        
        <div className="container"> 
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <input 
                    type="number"
                    className="inputTag"
                    name="id"
                    {...register("id",{
                        // required:"this is required.",
                    })}
                    placeholder="Enter Employee id"
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
                    placeholder="Enter Employee name"
                />
                <input 
                    type="text"
                    className="inputTag"
                    name="designation"
                    {...register("designation",{
                        required:"this is required.",
                    })}
                    placeholder="Enter Employee designation"
                />

                <button>Submit</button>
            </form>
        </div>
    )
}