import {call,put,takeLatest} from 'redux-saga/effects';
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEES, FETCH_EMPLOYEE, FETCH_EMPLOYEES, addEmployeeFailure, addEmployeeSuccess, deleteEmployeeFailure, deleteEmployeeSuccess, editEmployeeFailure, editEmployeeSuccess, fectchEmployeeSuccess, fectchEmployeesFailure, fectchEmployeesSuccess, fetchEmployeeFailure } from "../action/employee.action";
import { Employees, createEmployee, deleteEmployeebyID, getEmployee, updateEmployee } from "../api/employee.api";

function* getEmployees(){
    console.log('get employees is called');
    try{
        console.log('get employees is called');
        let data = yield call(Employees);
        console.log('Calling fetcgProductSuccess from saga');
        yield put(fectchEmployeesSuccess(data))
        //dispatch an action {type: FETCH_EMPLOYEES_SUCCESS, data}
    }
    catch(error){
        console.log('Error is', error);
        yield put(fectchEmployeesFailure());
    }
}   

function* addEmployee(action) {
    console.log('In addEmployee saga',action);
    let {id , name, designation} = action;
    try{
        let data = yield call(createEmployee, {id,name, designation})
        // alert('Employee added');
        yield put(addEmployeeSuccess())
    }
    catch(error){
        yield put(addEmployeeFailure())
    }
}

function* editEmployee(action){
    console.log('In editEmployee saga',action);
    let {id , name, designation} = action;
    try{
        let data = yield call(updateEmployee, {id,name, designation})
        yield put(editEmployeeSuccess())
    }
    catch(error){
        yield put(editEmployeeFailure())
    }
}

function* deleteEmployee(action){
    console.log('In getEmployee saga ',action);
    let {id}=action;
    try{
        let data = yield call(deleteEmployeebyID,id)
        yield put(deleteEmployeeSuccess())
    }
    catch (error){
        yield put(deleteEmployeeFailure())
    }
}

function* fetchEmployee(action){
    console.log('In employee saga',action);
    let {id}=action;
    try{
        let data = yield call(getEmployee,id)
        yield put(fectchEmployeeSuccess())
    }
    catch(error)
    {
        yield put(fetchEmployeeFailure())
    }
}

export function* Employeesaga() {
    yield takeLatest(FETCH_EMPLOYEES,getEmployees);
    yield takeLatest(ADD_EMPLOYEE,addEmployee);
    yield takeLatest(DELETE_EMPLOYEE,deleteEmployee)
    yield takeLatest(FETCH_EMPLOYEE,fetchEmployee);
    yield takeLatest(EDIT_EMPLOYEES,editEmployee);

}