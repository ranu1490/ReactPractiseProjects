export const CompSplit =()=>
{
    let employees = [
        {
            id:1,
            name:'Ranu',
            designation:' fe developer'
        },

        {
            id:2,
            name:'abc',
            designation:' be Developer'
        }
    ]
    return (
        <Employee employees = {employees}/>
    )
}
const Employee = (props) => {
    let employees = props.employees;
    return (
        // <table border='1'>
        //     <tr>
        //         <th>Id</th>
        //         <th>name</th>
        //         <th>Designation</th>
        //     </tr>
        <ul>
            {employees.map((emp) =>
                <EmployeeDetails emp={emp} key={emp.id} />)}
        </ul>
        // </table>
    )
}

const EmployeeDetails = ({ emp }) => {
    return (
        <li>{emp.id} {emp.name}{emp.designation}</li>
        // <tr>
        //     <th>{emp.id}</th>
        //     <th>{emp.name}</th>
        //     <th>{emp.designation}</th>
        // </tr>

    )
}
