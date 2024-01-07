import { useState } from "react"

 

export const FormUsingFC = (props) =>{

    const [name,setName] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();

        alert(`Submitting Name ${name}`)

    }

    return(

        <>

            <h1>Hello: {name}</h1>

            <form onSubmit={handleSubmit}>

                <label>

                    First Name:

                    <input

                        type="text"

                        value={name}

                        onChange={e=> setName(e.target.value)} />

                   

                </label>

                <input type="submit" value="Submit"/>

            </form>

        </>

    )

}