import React, { useEffect, useState } from 'react'
import Appointments from './Appointments';
import { getSheduled } from '../API/service';
import { toast } from 'react-toastify';

const GetAllAppointments = (data) => {
    const [appointments, setAppointments] = useState([   {
        "personName": "priyam",
        "personAge": 24,
        "personContact": "1212121212",
        "personDesc": "pet dard",
        "status": "P",
        "hospital": {
            "name": "ABC HOSPITAL",
            "contactInfo": "9009090909",
            "address": "NIE CAMPUS MYSORE",
            "hid": 1
        },
        "aid": 1
    }
    ]);
  
    useEffect(() => {
      document.title = "getAllAppointments";
      console.log(data)
      getdata();
    }, []);

    const getdata = () => {
        console.log("phone number found : ")
        console.log(data)
       getSheduled(data)
      .then(
        function (response) {
          console.log(response);
          setAppointments(response.data);
          toast.success("appointments Featched SuccessFully");
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
  
        {appointments.length > 0
          ? appointments.map((i) => <Appointments key={i.aid} details={i} />)
          : "Empty appointments"}
  
      </div>
  
    );
  
}

export default GetAllAppointments
