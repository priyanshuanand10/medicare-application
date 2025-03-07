import { myAxios } from "./api";

export const addHospital=(hospital)=>{
    return myAxios.post('/hospital/v1/add-hospital',hospital).then((response)=>response.data)
}

export const bookApointment=(hospitalId,data)=>{

    return myAxios.post(`/appointment/v1/book-appointment/${hospitalId}`,data).then((response)=>response.data)
}

export const getSheduled=(details)=>{

    return myAxios.post('/appointment/v1/get-scheduled',details).then((response)=>response.data)
}


export const getAllHospitalDetails=()=>{

    return myAxios.get(`/hospital/v1/get-all-details`).then((response)=>response.data)
}





