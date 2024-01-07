import axios from 'axios'

const Flights = async()=>{
    console.log('Flights from flightapi is called');
    let {data} = await axios.get(process.env.REACT_APP_BASEURL);
    console.log('data returning from api to saga');
    return data;
}

const deleteFlightbyID = async(id)=>{
    console.log('In delete flight API id ',id);
    try{
        var {data} = await axios.delete(process.env.REACT_APP_BASEURL+`/${id}`);
        console.log('In flight api data is ',data);
        return data;
    }
    catch(error){
        console.log(error.message);
    }
}

const createFlight = async (data) => {
    console.log('create from flight api  is called')
    try{
        let response = await axios.post(process.env.REACT_APP_BASEURL, data);
        console.log('Returning data from API to saga', response.data);
        return response.data;
    }catch(error){
        console.log(error.message);
    }
}

const updateFlight = async ({id,from,to,date}) => {
    try{
        await axios.put(process.env.REACT_APP_BASEURL + `/${id}`, {from,to,date});
          
    }catch(error){
        console.log(error.message);
    }
}

const getFlight = async (flightId) => {
    console.log ('In flight API id', flightId);
    try{
        var { data } = await axios.get(process.env.REACT_APP_BASEURL + `/${flightId}`);
        console.log('In flight Api data by ID is', data);
        return data;
    }catch(error){
        console.log(error.message);
    }
}

const searchFlight = async({from,to,date})=>{
    try{
        let {data} = await axios.get(process.env.REACT_APP_BASEURL+`?from=${from}&to=${to}&date=${date}`)
        console.log('data in searchflight',data);
        return data;
    }
    catch(error)
    {
        console.log(error.message);
    }
}

export {Flights, deleteFlightbyID, createFlight,updateFlight, getFlight,searchFlight}