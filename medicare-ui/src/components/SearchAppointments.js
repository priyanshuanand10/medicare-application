import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchAppointments() {
  const navigate = useNavigate();

  const [accNumber, setAccNumber] = useState("");


  // refresh

  const onSubmit = (e) => {

    e.preventDefault();
    console.log("button clicked with ph no : "+accNumber)
    navigate("/getAllAppointmentsNew",{state:{
        isFirstCall:false,
        phNo:`${accNumber}`
    }})

    setAccNumber("")
    navigate(0)
  };

  return (
    <>
      <form 
        className="container form-inline text-center"
        style={{ paddingLeft: "360px" }}
        onSubmit={onSubmit}
      >
        <input
          className="form-control"
          type="text"
          id="accnumber"
          required
          autoComplete="off"
          placeholder="enter account number to search ..."
          style={{ borderRadius: "2%", width: "25rem" }}
          onChange={(e) => {
            setAccNumber(e.target.value);
          }}
          value={accNumber}
        />

        <button
          className="btn btn-success mx-3"
          type="submit"
          style={{
            textAlign: "center",
            alignContent: "center",
            borderRadius: "50px",
          }}
        >
          submit
        </button>
      </form>

      {/* <div
        style={{
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
          // paddingBottom: "50px",
        }}
      >
        <br />
        <Card
          className="container my-2"
          style={{
            width: "25rem",
          }}
        >
          <img
            className="container"
            style={{
              width: "10rem",
              height: "9rem",
            }}
            alt="user img"
            src="user.png"
          />

          <CardBody className="">
            <CardTitle tag="h5" style={{ color: "black" }}>
              Account Number : {data.accountnumber}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Full Name: {data.userdetails.fullnname}
            </CardSubtitle>
            <CardText>Age : {data.userdetails.age}</CardText>
            <CardText>DOB : {data.userdetails.dob} </CardText>
            <CardText>Balance : {data.userdetails.balance}</CardText>
            <CardText>Email : {data.userdetails.email} </CardText>
            <CardText>localtion : {data.address.location} </CardText>
            <CardText>city : {data.address.city} </CardText>
            <CardText>state : {data.address.state} </CardText>
            <CardText>pin : {data.address.pin} </CardText>
            <CardText>transiction history : </CardText>
         
            <ol style={{color:"black",fontSize:"14px" }}>
              {data.history.map((item, index) => (
                <li key={index}>
                  <span>type: {item.type}</span>
                  <br />
                  <span>amount: {item.amount}</span>
                  <br />
                  <span>
                    time: {item.transictiontime}
                    <br />
                    <br />
                  </span>
                </li>
              ))}
            </ol>
          </CardBody>
        </Card>
      </div> */}
    </>
  );
}
