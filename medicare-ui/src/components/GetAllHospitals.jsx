import React, { useState, useEffect } from 'react'
import Hospitals from './Hospitals';
import { getAllHospitalDetails } from '../API/service'
import { toast } from 'react-toastify';
import { myAxios } from "../API/api";
const GetAllHospitals = () => {


  const [hospitals, setHospitals] = useState([

  ]);

  useEffect(() => {
    document.title = "hospitalDetails";
    getdata();
  }, []);

  const getdata = () => {

    myAxios.get('/hospital/v1/get-all-details').then(
      function (response) {
        console.log(response.data);
        setHospitals(response.data.data);
        toast.success("hospitals Featched SuccessFully");
      },
      (error) => {
        console.log("some error occured");
        toast.error("something went wrong !!!")
      }
    );

  };





  return (
    <div
      style={{
        height: "65vh",
        width: "100%",
        borderRadius: "10px",
        position: "relative",
        backgroundColor: "",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >

      {hospitals.length > 0
        ? hospitals.map((i) => <Hospitals key={i.hid} details={i} />)
        : "Empty User"}

    </div>

  );

}

export default GetAllHospitals
