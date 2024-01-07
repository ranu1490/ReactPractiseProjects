import React from 'react'
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS'
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS'
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE'
export const DELETE_EMPLOYEE = 'DELETE EMPLOYEE'
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE EMPLOYEE_SUCCESS'
export const DELETE_EMPLOYEE_FAILURE = 'DELETE EMPLOYEE_FAILURE'
export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE'
export const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS'
export const FETCH_EMPLOYEE_FAILURE = 'FETCH_EMPLOYEE_FAILURE'
export const EDIT_EMPLOYEES = 'EDIT_EMPLOYEES'
export const EDIT_EMPLOYEES_SUCCESS = 'EDIT_EMPLOYEES_SUCCESS'
export const EDIT_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE'


export const fectchEmployees = () => {
  return {
    type: FETCH_EMPLOYEES
  }
}

export const fectchEmployeesSuccess = (data) => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS, data
  }
}

export const fectchEmployeesFailure = () => {
  return {
    type: FETCH_EMPLOYEES_FAILURE
  }
}

export const addEmployee = (id, name, designation) => {
  return {
    type: ADD_EMPLOYEE,
    id, name, designation
  }
}

export const addEmployeeSuccess = () => {
  return {
    type: ADD_EMPLOYEE_SUCCESS
  }
}

export const addEmployeeFailure = () => {
  return {
    type: ADD_EMPLOYEE_FAILURE
  }
}

export const deleteEmployee = (id) =>{
  console.log('deleteEmployee is called DELETE_EMPLOYEE by id ',id);
  return {
    type:DELETE_EMPLOYEE,id
  }
}

export const deleteEmployeeSuccess = ()=>{
  return {
    type:DELETE_EMPLOYEE_SUCCESS
  }
}

export const deleteEmployeeFailure = ()=>{
  return {
    type:DELETE_EMPLOYEE_FAILURE
  }
}

export const editEmployee = (id,name,designation)=>{
  return{
    type:EDIT_EMPLOYEES,
    id, name, designation
  }
}

export const editEmployeeSuccess = ()=>{
  return{
    type:EDIT_EMPLOYEES_SUCCESS
  }
}

export const editEmployeeFailure = ()=>{
  return{
    type:EDIT_EMPLOYEES_FAILURE
  }
}

export const fetchEmployee=(id)=>{
  return {
    type:FETCH_EMPLOYEE,id
  }
}

export const fetchEmployeeFailure=()=>{
  return{
    type:FETCH_EMPLOYEE_FAILURE
  }
}

export const fectchEmployeeSuccess =()=>{
  return{
    type:FETCH_EMPLOYEE_SUCCESS
  }
}