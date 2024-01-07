export const ParentToChild=()=>
{
    return(
        <div>
            <Child empid={1} name='abc' payroll = {true}/>
        </div>
    )
}

//const Child = ({empid,name,payroll})=>{}
const Child=(props) =>
{
    return(
        <div>
            <h1>Employee ID: {props.empid}</h1>
            <h1>Employee name: {props.name}</h1>
            <h1>Payroll Employee: {props.payroll.toString()}</h1>
            <h1>is Employee on Payroll? {props.payroll ? 'yes' : 'no'}</h1>
        </div>
    )
}