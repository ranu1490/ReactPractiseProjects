import axios from 'axios'
const Employees=async()=>{
    console.log('Employees from employeeapi is called');
    let {data}=await axios.get(process.env.REACT_APP_BASEURL);
    console.log('returning data from api to saga',data);
    return data;
}

const createEmployee = async (data1) => {
    console.log('create from employeeapi is called')
    let { data } = await axios.post(process.env.REACT_APP_BASEURL, data1);
    console.log('Returning data from api to saga', data);
    return data;
}

// const createEmployee = async ({id,name,designation}) => {
//     console.log('create from employeeapi is called')
//     let { data } = await axios.post(process.env.REACT_APP_BASEURL, {id,name,designation});
//     console.log('Returning data from api to saga', data);
//     return data;
// }

const updateEmployee=async({id,name,designation})=>{
    await axios.put(process.env.REACT_APP_BASEURL+`/${id}`,{name,designation})
}

const getEmployee = async (empid) => {
    console.log('IN Employee API id',empid);
    try{
        var { data } = await axios.get(process.env.REACT_APP_BASEURL+`/${empid}`)
        console.log('In employee api data BY ID is', data);
        return data;
    }
    catch(error)
    {
        console.log(error.message);
    }
}

const deleteEmployeebyID = async(empid) =>{
    console.log('In delete employee API id ',empid);
    try{
        var {data} = await axios.delete(process.env.REACT_APP_BASEURL+`/${empid}`)
        console.log('In employee api data is ',data);
        return data;
    }
    catch(error)
    {
        console.log(error.message);
    }
}
export {Employees , createEmployee, deleteEmployeebyID, getEmployee,updateEmployee,}