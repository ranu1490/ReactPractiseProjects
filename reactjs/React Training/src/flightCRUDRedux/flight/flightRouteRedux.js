import { Navigate, Route, Routes } from "react-router-dom";
import { FlightList } from "./flightlist";
import AddEditFlight from "./addEditFlight";
import { GetFlightByID } from "./selectFlightByID";
import SearchFlight from "./searchFlight";

export default function FlightCRUDReduxRoutes(){
    return(
        <Routes>
            <Route path="flights" element={<FlightList/>}></Route>
            <Route path="/" element={<Navigate replace to="/flights"/>}></Route>
            <Route path="/flights/getbyid/:flightId" element={<GetFlightByID/>}></Route>
            <Route path="/flights/create" element={<AddEditFlight/>}></Route>
            <Route path="/flights/update/:flightId" element={<AddEditFlight/>}></Route>
            <Route path = "/flights/search/"element={<SearchFlight/>}></Route>
        </Routes>
    )
}