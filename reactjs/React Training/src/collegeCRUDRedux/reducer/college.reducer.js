import { FETCH_COLLEGES, FETCH_COLLEGES_FAILURE, FETCH_COLLEGES_SUCCESS } from "../action/college.action";

const initialState = {colleges: []}
export function CollegeReducer(state = initialState,action){
    console.log('College Reducer is called with action is ',action);
    console.log('Here action type is: '+action.type);
    switch(action.type){
        case FETCH_COLLEGES:
            return {...state}
        case FETCH_COLLEGES_SUCCESS:
            return {...state,colleges:action.data}
        case FETCH_COLLEGES_FAILURE:
            return {...state}
        default:
            return state;
    }
}