export const FETCH_COLLEGES = 'FETCH_COLLEGES'
export const FETCH_COLLEGES_SUCCESS = 'FETCH_COLLEGES_SUCCESS'
export const FETCH_COLLEGES_FAILURE = 'FETCH_COLLEGES_FAILURE'

export const fetchColleges =()=>{
    return{
        type: FETCH_COLLEGES
    }
}

export const fectchCollegesSuccess = (data)=>{
    return{
        type: FETCH_COLLEGES_SUCCESS, data
    }
}

export const fetchCollegesFailure = (data)=>{
    return{
        type:FETCH_COLLEGES_FAILURE
    }
}

