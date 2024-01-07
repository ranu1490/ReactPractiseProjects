import {useForm} from 'react-hook-form'

export default function ReactHookFormBasic()
{
    const {register, handleSubmit} =useForm();
    const onSubmit =(data) =>{
        alert(JSON.stringify(data));
    };

    //class->className for->htmlfor

    return(
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input placeholder="Ranu" {...register('firstName')}/>
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input placeholder="Kumari" {...register('lastName')}/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input placeholder="Ranu@gmail.com" type="email" {...register('email')}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}