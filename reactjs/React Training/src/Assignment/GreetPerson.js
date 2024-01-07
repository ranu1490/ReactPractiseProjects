import { useState } from "react"
import {useForm} from 'react-hook-form'

export const GreetPerson = ()=>
{
    const[name,setName] = useState('Anonymous');
    const {register, handleSubmit} =useForm();

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    // }

    const onSubmit =(data) =>{
        alert(JSON.stringify(data));
    };

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}> 
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input {...register('firstName')}
            value={name}
            onChange={e=>setName(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
        </form>

        <div>
            Hello {name}
        </div>
        </div>
        
    );
}