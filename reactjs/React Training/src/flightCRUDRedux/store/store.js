import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { FlightReducer } from '../reducer/flight.reducer';
import {combineReducers} from 'redux'
import { Flightsaga } from '../saga/flight.saga';


const sagaMiddleware= createSagaMiddleware();
const reducer = combineReducers({
    FlightReducer
})

export const store = configureStore({
    reducer,middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),sagaMiddleware]
})

sagaMiddleware.run(Flightsaga)