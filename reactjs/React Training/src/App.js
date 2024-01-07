import './App.css';
import Helloworldcls from './basic/Helloworldcls';
//import Helloworldfn from './basic/Helloworldfn'; //export default
import {Helloworldfn} from './basic/Helloworldfn'; //named export
import ToggleMessage from './basic/ToggleMessagecls';
import { ToggleMessagefn } from './basic/ToggleMessagefn';
import Conrenderingcls from './basic/conrenderingcls';
import { Conrenderingfn } from './basic/conrenderingfn';
import Handleclickcls from './basic/handleclickscls';
import { Handleclickfn } from './basic/handleclicksfn';
import ToggleMsgcls from './basic/StateToggleMessagecls';
import { ToggleCountStatefn } from './basic/ToggleCountStatefn';
import { ParentToChild } from './ComponentCommunication/ParentToChildCommun';
import { CompSplit } from './ComponentCommunication/ComponentSplit';
import ChildToParent from './ComponentCommunication/ChildToParent'
import { ChildrenProps } from './ComponentCommunication/Childrenprop'
import MountPhase from './LifecycleMethodClassComponent/MountPhase';
import UpdatePhase from './LifecycleMethodClassComponent/UpdatePhase';
import UnmountPhase from './LifecycleMethodClassComponent/UnmountPhase';
import { MountPhaseFC } from './LifecycleMethodFunctionalComp/mount';
import { UpdatePhaseFC } from './LifecycleMethodFunctionalComp/update';
import { UseEffectcountdependency } from './LifecycleMethodFunctionalComp/dependencyarray';
import { CleanUp } from './LifecycleMethodFunctionalComp/cleanup';
import { DepMountUpdate } from './LifecycleMethodFunctionalComp/dependencyMountUpdate';
import { FormUsingFC } from './FormHandling/FormUsingFC';
import { FormUsingClass } from './FormHandling/FormUsingClass';
import ReactHookFormBasic from './Form/ReactHookFormBasic';
import ReactHookFormWithValidationError from './Form/ReactHookFormWithValidationError';
import GreetingForm from './Assignment/Form1';
import { GreetPerson } from './Assignment/GreetPerson';
import { ContextDemo } from './Hooks/useContext';
import { MyHOC } from './HOC/HOCBasics';
import ParentToChildMessage from './Assignment/ChildParentAssign/ParentToChildMessage';
import { UseContext } from './Hooks/ContextEx2';
import { FunctionalPureComponent } from './HOC/PureComponent/memo';
import { UseMemo } from './Hooks/UseMemo';
import UseCallbackDemo from './Hooks/UseCallback';
import { BasicRouting } from './Routing/basicrouting';
//import { Router } from 'react-router-dom';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { RoutingWithLink } from './Routing/basicrouting1';
import { NestedRouting } from './Routing/nestedRouting';
import { ListTrainees } from './fetchdata/listtrainees';
import AddTrainee from './fetchdata/addTrainee';
import UpdateTrainee from './fetchdata/updateTrainee';
import DeleteTrainee from './fetchdata/deleteTrainee';
import { ListColleges, RoutingCollege } from './CollegeCrud/listcolleges';
import ListEmployees from './empCRUD/listemp';
import AddEmployee from './empCRUD/addEmployee';
import EmpCRUDRoutes from './empCRUD/empCRUDRoutes';
import UseReducerhook from './Hooks/useReducerhook';
import { EmployeeReducer } from './empCRUDRedux/reducer/employee.reducer';
// import UseRefCountHooks from './Hooks/UseRefHooks';
import {Provider} from 'react-redux';
// import store from './empCRUDRedux/store/store'
import { EmployeeList } from './empCRUDRedux/employee/emplist';
import EmpCRUDReduxRoutes from './empCRUDRedux/employee/EmpCRUDReduxRoutes';
// import store from './collegeCRUDRedux/store/store';
import { CollegeList } from './collegeCRUDRedux/college/listCollege';
import { store } from './flightCRUDRedux/store/store';
import { FlightList } from './flightCRUDRedux/flight/flightlist';
import FlightCRUDReduxRoutes from './flightCRUDRedux/flight/flightRouteRedux';

function App() {
  return (
    <div className="App">
        {/* <h1>Hello React</h1> */}
        {/* <Helloworldcls/>
        <Helloworldfn/>
        <Handleclickcls/>
        <Handleclickfn/>
        <Conrenderingcls/>
        <Conrenderingfn/> 
        <ToggleMessage/> 
        <ToggleMessagefn/>
        <ToggleMsgcls/> 
        <ToggleCountStatefn/>
        <ParentToChild/>
        <CompSplit/>
        <ChildToParent/>
        <ChildrenProps/>
        <MountPhase/>
        <UpdatePhase/>
        <UnmountPhase/>
        <MountPhaseFC/>
        <UpdatePhaseFC/>
        <UseEffectcountdependency/>
        <CleanUp/>
        <DepMountUpdate/>
        <FormUsingFC/>
        <FormUsingClass/>
        <ReactHookFormBasic/>
        <ReactHookFormWithValidationError/>
        <ReactHookFormBasicValidation/>
        <UseRefCountHooks/>
        <GreetingForm/>
        <GreetPerson/>
        <ContextDemo/>
        <ParentToChildMessage/> 
        <UseContext/> 
        <MyHOC/>
       <FunctionalPureComponent/>
       <UseMemo/>
       <UseCallbackDemo/>*/}
       
       {/* <Router> */}
        {/* <BasicRouting/> */}
        {/* <RoutingWithLink/> */}
        {/* <NestedRouting/> */}
        {/* <ListTrainees/>
        <AddTrainee/>
        <UpdateTrainee/>
        <DeleteTrainee/> */}

        {/* <RoutingCollege/> */}
        {/* <EmpCRUDRoutes/> */}
   
       {/* </Router> */}
       {/* <UseReducerhook/> */}
        {/* <Provider store={store}>
            <Router> */}
          {/* <EmployeeList/> */}
          {/* <EmpCRUDReduxRoutes/>
            
            </Router>
        </Provider> */}

        {/* <Provider store={store}>
            <Router>
                <CollegeList/>
            </Router>
        </Provider> */}
        
        <Provider store = {store}>
          <Router>
            <FlightCRUDReduxRoutes/>
          </Router>

        </Provider>

    </div>
  );
}

export default App;
