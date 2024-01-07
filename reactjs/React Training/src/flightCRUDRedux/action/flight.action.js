import React from 'react'
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS'
export const FETCH_FLIGHTS_SUCCESS = 'FETCH_FLIGHTS_SUCCESS'
export const FETCH_FLIGHTS_FAILURE = 'FETCH_FLIGHTS_FAILURE'
export const ADD_FLIGHT = 'ADD_FLIGHT'
export const ADD_FLIGHT_SUCCESS = 'ADD_FLIGHT_SUCCESS'
export const ADD_FLIGHT_FAILURE = 'ADD_FLIGHT_FAILURE'
export const DELETE_FLIGHT = 'DELETE FLIGHT'
export const DELETE_FLIGHT_SUCCESS = 'DELETE FLIGHT_SUCCESS'
export const DELETE_FLIGHT_FAILURE = 'DELETE FLIGHT_FAILURE'
export const FETCH_FLIGHT = 'FETCH_FLIGHT'
export const FETCH_FLIGHT_SUCCESS = 'FETCH_FLIGHT_SUCCESS'
export const FETCH_FLIGHT_FAILURE = 'FETCH_FLIGHT_FAILURE'
export const EDIT_FLIGHTS = 'EDIT_FLIGHTS'
export const EDIT_FLIGHTS_SUCCESS = 'EDIT_FLIGHTS_SUCCESS'
export const EDIT_FLIGHTS_FAILURE = 'FETCH_FLIGHTS_FAILURE'
export const SEARCH_FLIGHT = 'SEARCH_FLIGHT'
export const SEARCH_FLIGHT_SUCCESS = 'SEARCH_FLIGHT_SUCCESS'
export const SEARCH_FLIGHT_FAILURE = 'SEARCH_FLIGHT_FAILURE'
export const GET_FROM_OPTIONS = 'GET_FROM_OPTIONS'
export const GET_FROM_OPTIONS_FAILURE = 'GET_FROM_OPTIONS_FAILURE'
export const GET_FROM_OPTIONS_SUCCESS = 'GET_FROM_OPTIONS_SUCCESS'
export const GET_TO_OPTIONS = 'GET_TO_OPTIONS'
export const GET_TO_OPTIONS_FAILURE = 'GET_TO_OPTIONS_FAILURE'
export const GET_TO_OPTIONS_SUCCESS = 'GET_TO_OPTIONS_SUCCESS'




export const fectchFlights = () => {
  return {
    type: FETCH_FLIGHTS
  }
}

export const fectchFlightsSuccess = (data) => {
  return {
    type: FETCH_FLIGHTS_SUCCESS, data
  }
}

export const fectchFlightsFailure = () => {
  return {
    type: FETCH_FLIGHTS_FAILURE
  }
}

export const addFlight = (id, from,to,date) => {
  return {
    type: ADD_FLIGHT,
    id, from,to,date
  }
}

export const addFlightSuccess = () => {
  return {
    type: ADD_FLIGHT_SUCCESS
  }
}

export const addFlightFailure = () => {
  return {
    type: ADD_FLIGHT_FAILURE
  }
}

export const deleteFlight = (id) =>{
  console.log('deleteFLIGHT is called DELETE_FLIGHT by id ',id);
  return {
    type:DELETE_FLIGHT,id
  }
}

export const deleteFlightSuccess = ()=>{
  return {
    type:DELETE_FLIGHT_SUCCESS
  }
}

export const deleteFlightFailure = ()=>{
  return {
    type:DELETE_FLIGHT_FAILURE
  }
}

export const editFlight = (id,from,to,date)=>{
  return{
    type:EDIT_FLIGHTS,
    id,from,to,date
  }
}

export const editFlightSuccess = ()=>{
  return{
    type:EDIT_FLIGHTS_SUCCESS
  }
}

export const editFlightFailure = ()=>{
  return{
    type:EDIT_FLIGHTS_FAILURE
  }
}

export const fetchFlight=(id)=>{
  return {
    type:FETCH_FLIGHT,id
  }
}

export const fetchFlightFailure=()=>{
  return{
    type:FETCH_FLIGHT_FAILURE
  }
}

export const fectchFlightSuccess =(data)=>{
  return{
    type:FETCH_FLIGHT_SUCCESS,data
  }
}

export const searchFlight = (searchCriteria)=>{
  console.log("in action ",searchCriteria);
  return{
    type: SEARCH_FLIGHT,searchCriteria 
  }
}

export const searchFlightSuccess = (data)=>{
  return{
    type: SEARCH_FLIGHT_SUCCESS,data
  }
}

export const searchFlightFailure = ()=>{
  return{
    type: SEARCH_FLIGHT_FAILURE
  }
}


export const getFromOptions = () => {
  return {
    type: GET_FROM_OPTIONS,
  };
}

export const getFromSuccess = (from) => {
  return {
    type: GET_FROM_OPTIONS_SUCCESS,
    from
  };
}

export const getFromFailure = () => {
  return {
    type: GET_FROM_OPTIONS_FAILURE,
  };
}

export const getToOptions = () => {
  return {
    type: GET_TO_OPTIONS,
  };
}

export const getToSuccess = (to) => {
  return {
    type: GET_TO_OPTIONS_SUCCESS,
    to
  };
}

export const getToFailure = () => {
  return {
    type: GET_TO_OPTIONS_FAILURE,
  };
}
