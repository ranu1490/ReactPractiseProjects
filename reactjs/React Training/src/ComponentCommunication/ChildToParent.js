import { useState } from 'react'

const ChildToParent = () => {
    const employees = [
        {
            id: 1,
            name: 'amit',
            desg: 'trainee'
        },
        {
            id: 2,
            name: 'ami',
            desg: 'developer'
        }]
    const [empList, setEmplist] = useState(employees)

    const removeEmp = (id) => {
        const list = empList.filter(item => item.id !== id);
        setEmplist(list);
    }
    return (
        <div>
            <Employee details={empList} removeEmp={removeEmp} />
        </div>
    )
}
const Employee = props => {
    const details = props.details;// an array of objects of trainees
    return (
        <div>

            <ul>
                {details.map((detail, index) => (
                    <EmployeeDetails detail={detail} removeEmp={props.removeEmp} key={index} />
                ))}
            </ul>
        </div>
    );
};
const EmployeeDetails = props => {
    console.log('Props in empdetails', props)
    const { name, desg, id } = props.detail;// single object of trainee
    return (
        <li key={id}>
            <div>
                <p>Name : {name}</p>
                <p>Designation : {desg}</p>
                <button onClick={() => props.removeEmp(id)}>Remove from the
                    list</button>
            </div>
        </li >
    );
};
export default ChildToParent;