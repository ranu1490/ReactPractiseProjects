import {call,put,takeLatest} from 'redux-saga/effects';
import { Flights, createFlight, deleteFlightbyID, getFlight, searchFlight, updateFlight } from '../api/flight.api';
import { ADD_FLIGHT, DELETE_FLIGHT, EDIT_FLIGHTS, FETCH_FLIGHT, FETCH_FLIGHTS, SEARCH_FLIGHT, addFlightFailure, addFlightSuccess, deleteFlightFailure, deleteFlightSuccess, editFlightFailure, editFlightSuccess, fectchFlightSuccess, fectchFlightsFailure, fectchFlightsSuccess, fetchFlightFailure, searchFlightFailure, searchFlightSuccess } from '../action/flight.action';

function* getFlights(){
    console.log('get Flights is called');
    try{
        console.log('get Flights is called');
        let data = yield call(Flights);
        yield put(fectchFlightsSuccess(data));
    }
    catch(error){
        console.log('Error is', error);
        yield put(fectchFlightsFailure());
    }
}

function* deleteFlight(action){
    console.log('In deleteFlight saga ',action);
    let {id}=action;
    try{
        let data = yield call(deleteFlightbyID,id)
        yield put(deleteFlightSuccess())
    }
    catch (error){
        yield put(deleteFlightFailure())
    }
}

function* editFlight(action){
    console.log('In editFlight saga',action);
    let {id , from, to,date} = action;
    try{
        let data = yield call(updateFlight, {id , from, to,date})
        yield put(editFlightSuccess())
    }
    catch(error){
        yield put(editFlightFailure())
    }
}

function* addFlight(action) {
    console.log('In addFlight saga',action);
    let {id , from, to,date} = action;
    try{
        let data = yield call(createFlight, {id , from, to,date})
        yield put(addFlightSuccess(data))
    }
    catch(error){
        yield put(addFlightFailure())
    }
}

function* fetchFlight(action){
    console.log('In flight saga',action);
    let {id}=action;
    try{
        let data = yield call(getFlight,id)
        yield put(fectchFlightSuccess(data))
    }
    catch(error)
    {
        yield put(fetchFlightFailure())
    }
}

function* searchedFlights(action){
    console.log("in search saga ",action);
    let {from,to,date} = action.searchCriteria;
    console.log("in search flight saga: ",{from,to,date});
    try{
        let data = yield call(searchFlight,{from,to,date});
        console.log("data in saga",data);
        yield put (searchFlightSuccess(data));
    }
    catch(error)
    {
        yield put(searchFlightFailure());
    }
}

export function* Flightsaga(){
    yield takeLatest(FETCH_FLIGHTS,getFlights);
    yield takeLatest(DELETE_FLIGHT,deleteFlight);
    yield takeLatest(EDIT_FLIGHTS,editFlight);
    yield takeLatest(ADD_FLIGHT,addFlight);
    yield takeLatest(FETCH_FLIGHT,fetchFlight);
    yield takeLatest(SEARCH_FLIGHT,searchedFlights);
}