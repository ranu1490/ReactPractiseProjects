import { ADD_EMPLOYEE, ADD_EMPLOYEE_FAILURE, ADD_EMPLOYEE_SUCCESS,
     FETCH_EMPLOYEES, FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_SUCCESS, 
     DELETE_EMPLOYEE,DELETE_EMPLOYEE_FAILURE,DELETE_EMPLOYEE_SUCCESS, EDIT_EMPLOYEES, EDIT_EMPLOYEES_SUCCESS, EDIT_EMPLOYEES_FAILURE, FETCH_EMPLOYEE, FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_SUCCESS } from "../action/employee.action";

const initialState ={employees:[],employee:{}}
export function EmployeeReducer(state=initialState,action){
    console.log('Employee Reducer is called with action is',action);
    console.log('here action type is '+action.type);
    switch(action.type){
        case FETCH_EMPLOYEES:
            return{...state}
        case FETCH_EMPLOYEES_SUCCESS:
            return{
                ...state,employees:action.data
            }
        case FETCH_EMPLOYEES_FAILURE:
            return {...state}
        case ADD_EMPLOYEE:
            return {...state }
        case ADD_EMPLOYEE_SUCCESS:
            return {...state}
        case ADD_EMPLOYEE_FAILURE:

        case DELETE_EMPLOYEE:
            return{...state}
        case DELETE_EMPLOYEE_FAILURE:
            return {...state}
        case DELETE_EMPLOYEE_SUCCESS:
            return {...state}
        case EDIT_EMPLOYEES:
        case EDIT_EMPLOYEES_SUCCESS:
        case EDIT_EMPLOYEES_FAILURE:

        case FETCH_EMPLOYEE:
            return{...state}
        case FETCH_EMPLOYEE_FAILURE:
            return {...state}
        case FETCH_EMPLOYEE_SUCCESS:
            return {...state,employee:action.data}
        default:
            return state;
    }
}