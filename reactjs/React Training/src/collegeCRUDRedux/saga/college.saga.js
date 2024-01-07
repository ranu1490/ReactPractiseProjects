import { takeLatest,call,put } from "redux-saga/effects";
import { FETCH_COLLEGES, fectchCollegesSuccess, fetchCollegesFailure } from "../action/college.action";
import { Colleges } from "../api/college.api";



function* getColleges(){
    console.log('get colleges is called');
    try{
        console.log('Get colleges is called');
        let data = yield call(Colleges);
        console.log('Calling fetcgProductSuccess from saga');
        yield put(fectchCollegesSuccess(data))
    }
    catch(error){
        console.log('error is: ',error);
        yield put(fetchCollegesFailure());
    }
}

export function* Collegessaga(){
    yield takeLatest(FETCH_COLLEGES,getColleges);
}