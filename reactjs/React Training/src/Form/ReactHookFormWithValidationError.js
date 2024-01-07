import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function ReactHookFormWithValidationError()
{
    const {register, handleSubmit, formState: {errors}}=useForm();
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("singleErrorInput",{
                required: "This is required.", minLength:{
                    value: 3, message: "Minimum 3 character is required"
                }
            })} />

            <ErrorMessage
                errors={errors}
                name = "singleErrorInput"
                render = {({message})=><p>{message}</p>}
            />

            <input type="submit"/>
        </form>
    )
}