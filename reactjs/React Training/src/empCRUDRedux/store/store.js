import { EmployeeReducer } from "../reducer/employee.reducer";
import createSagaMiddleware from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import { Employeesaga } from "../saga/employee.saga";
const sagaMiddleware= createSagaMiddleware();
const reducer = combineReducers({
    //here we will be adding reducers
    EmployeeReducer
})

const store = configureStore({
    reducer,middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),sagaMiddleware]
})

sagaMiddleware.run(Employeesaga)
export default store;
