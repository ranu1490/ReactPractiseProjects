import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";


export default function AddCollegeRedux(){
    const {register, handleSubmit, formState: {errors}}=useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
}