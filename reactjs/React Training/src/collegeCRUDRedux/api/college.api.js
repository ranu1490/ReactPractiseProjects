import axios from 'axios'

const Colleges = async()=>{
    console.log('Colleges list from college api is called');
    let {data} = await axios.get(process.env.REACT_APP_BASEURL);
    console.log('returning data from api to saga ', data);
    return data;
}

export {Colleges}