import { ADD_FLIGHT, ADD_FLIGHT_FAILURE, ADD_FLIGHT_SUCCESS, DELETE_FLIGHT, DELETE_FLIGHT_FAILURE, DELETE_FLIGHT_SUCCESS, EDIT_FLIGHTS, EDIT_FLIGHTS_FAILURE, EDIT_FLIGHTS_SUCCESS, FETCH_FLIGHT, FETCH_FLIGHTS, FETCH_FLIGHTS_FAILURE, FETCH_FLIGHTS_SUCCESS, FETCH_FLIGHT_FAILURE, FETCH_FLIGHT_SUCCESS, SEARCH_FLIGHT, SEARCH_FLIGHT_FAILURE, SEARCH_FLIGHT_SUCCESS } from "../action/flight.action";

const initialState ={flights:[],flight:{},searchedFlight:[]}
export function FlightReducer(state=initialState,action){
   console.log('FLIGHT Reducer is called with action is',action);
   console.log('here action type is '+action.type);
   switch(action.type){
       case FETCH_FLIGHTS:
           return{...state}
       case FETCH_FLIGHTS_SUCCESS:
           return{
               ...state,flights:action.data
           }
       case FETCH_FLIGHTS_FAILURE:
           return {...state}
       case ADD_FLIGHT:
           return {...state }
       case ADD_FLIGHT_SUCCESS:
           return {...state}
       case ADD_FLIGHT_FAILURE:

       case DELETE_FLIGHT:
           return{...state}
       case DELETE_FLIGHT_SUCCESS:
           return {...state}
       case DELETE_FLIGHT_FAILURE:
           return {...state}
       case EDIT_FLIGHTS:
       case EDIT_FLIGHTS_SUCCESS:
       case EDIT_FLIGHTS_FAILURE:

       case FETCH_FLIGHT:
           return{...state}
       case FETCH_FLIGHT_FAILURE:
           return {...state}
       case FETCH_FLIGHT_SUCCESS:
           return {...state,flight:action.data}

        case SEARCH_FLIGHT:
            return {
                ...state
            };
        case SEARCH_FLIGHT_SUCCESS:
            return{...state,searchedFlight:action.data}
        case SEARCH_FLIGHT_FAILURE:
       default:
           return state;
   }
}