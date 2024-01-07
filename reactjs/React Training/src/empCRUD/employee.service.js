import axios from "axios";
const getEmployees = async () => {
    try{
    let { data } = await axios.get(process.env.REACT_APP_BASEURL)
    console.log('DATA IS ', data);
    return data ;
    }
    catch(error){
        console.log('error is ',error.message);
        return error.message;
    }
}

const addEmployee = async ({ id, name,designation }) => {
    await axios.post(process.env.REACT_APP_BASEURL, { id, name, designation});
}

const getEmployee = async (empid)=>{
    var { data } = await axios.get(process.env.REACT_APP_BASEURL+`/${empid}`)
    return data;          
}
const updateEmployee = async (empid,name,designation)=>{
    await axios.put(process.env.REACT_APP_BASEURL+`/${empid}`, {name, designation});
}
const deleteEmployee = async(empid)=>{
    await axios.delete(process.env.REACT_APP_BASEURL+`/${empid}`)
}
export { getEmployees, addEmployee,getEmployee,updateEmployee,deleteEmployee }
