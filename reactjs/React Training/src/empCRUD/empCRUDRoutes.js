import React from 'react'

import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom"
import AddEmployee from './addEmployee'
import ListEmployees from './listemp'
import AddEditEmployee from './addeditEmployee'


const EmpCRUDRoutes = () => {
  return (
    <Routes>
    <Route path='/employees' element={<ListEmployees/>}></Route>
    <Route path="/" element={<Navigate replace to="/employees"/>}></Route>
    <Route path='/employees/create' element={<AddEditEmployee/>}></Route>
    <Route path='/employees/update/:empid' element={<AddEditEmployee/>}></Route>
  </Routes>
  )
}

export default EmpCRUDRoutes
