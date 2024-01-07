import {ErrorMessage} from "@hookform/error-message";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom'
import { addEmployee } from "../action/employee.action";
import { useDispatch } from "react-redux";
export default function AddEmpRedux(){
    const {register, handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch();
     async function onSubmit({id,name,designation}){
          dispatch(addEmployee(id,name,designation))
        Swal.fire({
            title:"Added",
            text:"Employee added",
            icon:"success",
        });
        navigate('/');
    }
    return(
<div className="container">
<h2>Add Employee</h2>
<form onSubmit = {handleSubmit(onSubmit)} className = "form-container">
    <input type="number" className="inputTag" name="id"{...register("id",{
        required: "This is required.",
    })}
    placeholder="Enter Emp Id"/>
    <ErrorMessage errors={errors}
    name="id"
    render={({message})=> <p className="errorMsg">{message} </p>}/>
    <input type="text"
    className="inputTag"
    name="name"
    {...register("name",{
        required:"This is required.",
        minLength:{
            value:2,
            message:"Minimum 2 character is required",

        },
    })}
    placeholder="Enter Emp Name"/>
    <input type="text"
    className="inputTag"
    name="designation"
    {...register("designation",{
        required:"This is required.",
    })}
    placeholder="Enter Emp designation"/>
    <input type="submit" value="Submit"/>
</form>
</div>

    )

}
