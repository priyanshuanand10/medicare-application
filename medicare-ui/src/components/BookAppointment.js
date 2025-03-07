import React, { useState } from 'react'
import { bookApointment } from '../API/service'
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const BookAppointment = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const hospital = location.state;

  const [data, setData] = useState(
    {
      "personName": "priyam",
      "personAge": 24,
      "personContact": "1212121212",
      "personDesc": "pet dard",
      "status": "P"
    }
  )
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()

    console.log(data);

    setFormStatus('Submitting...')
    // const { name, email, message } = e.target.elements
    // let conFom = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // }
    // console.log(conFom)
    

    bookApointment(hospital.hid,data).then((msg) => {

      //  console.log(msg)
      setData(
        {
          "personName": "",
          "personAge": 0,
          "personContact": "",
          "personDesc": "",
          "status": ""
        }

      );
      setFormStatus('send')
     
        // navigate("/userloginpass",{state:{id:1,accountnumber:[data.accountnumber]}});
        toast.success("User Added Successsfully ", { position: 'top-center' });
        setFormStatus('send')
      
    

    }).catch(error => {
      
    {
        toast.error("Something went wrong");
      }

    });



  }

  const onChangeHandler = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  }

  return (
    <div className="container mt-5" style={{
      height: "60vh",
      width: "70%",
      borderRadius: "10px",
      position: "relative",
      backgroundColor: "",
      overflow: "scroll",
      overflowX: "hidden",
      color: "white",
      float: "right",
      paddingRight: "500px",
      // paddingBottom:"50px"

    }}>
  
      <h2 className="mb-3">Add User</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="personName">
            Patient Name
          </label>
          <input className="form-control" type="text" id="personName" required autoComplete='off' onChange={(e) => { onChangeHandler(e, 'personName') }} value={data.personName} />
        </div>
  
        <div className="mb-3">
          <label className="form-label" htmlFor="personAge">
          Patient Age
          </label>
          <input className="form-control" type="number" id="personAge" required autoComplete='off' onChange={(e) => { onChangeHandler(e, 'personAge') }}value={data.personAge} />
        </div>




        <div className="mb-3">
          <label className="form-label" htmlFor="personContact">
            Patient contact Number
          </label>
          <input className="form-control" type="text" id="personContact" required autoComplete='off' onChange={(e) => { onChangeHandler(e, 'personContact') }} value={data.personContact} />
        </div>





        <div className="mb-3">
          <label className="form-label" htmlFor="personDesc">
            Patient Desc
          </label>
          <input className="form-control" type="text" id="personDesc" required autoComplete='off' onChange={(e) => { onChangeHandler(e, 'personDesc') }} value={data.personDesc} />
        </div>



        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default BookAppointment