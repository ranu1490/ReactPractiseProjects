import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { CollegeReducer } from '../reducer/college.reducer';
import { Collegessaga } from '../saga/college.saga';


const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    CollegeReducer
})

const store = configureStore({
    reducer,middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),sagaMiddleware]
})

sagaMiddleware.run(Collegessaga);
export default store;