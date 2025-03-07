import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Row, Column } from "./HeaderStyles";


export default function NavBarCom(props) {

  // const accNumber=0;

  // const happyFace=()=>{
  //   toast.success(`Welcome ${accNumber}`,{
  //     position: toast.POSITION.TOP_CENTER
  // })
  // }
  return (
    <Box className="text-center">
      <Container>
        <Row>
          {/* <Column>
            <h4 style={{ color: "lightgray", fontSize: 18 ,cursor:"pointer"  , alignSelf: 'auto', alignItems:"center" ,paddingTop:16 , }} onClick={happyFace}> {accNumber}</h4>
          </Column> */}
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 15 , backgroundColor:"black" }}
              to="/"
            >
              Home
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 15 , backgroundColor:"black"}}
              to="/show-hospitals"
            >
              Show Hospitals
            </Link>
          </Column>
          {/* <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 15 , backgroundColor:"black"}}
              to="/withdraw"
            >
             Book Appointment
            </Link>
          </Column> */}
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 15 , backgroundColor:"black"}}
              to="/getAllAppointments"
            >
              My Booking
            </Link>
          </Column>
          {/* <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 15, backgroundColor:"black" }}
              to="/transfer"
            >
              Emergency
            </Link>
          </Column> */}
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 15, backgroundColor:"black" }}
              to="/about"
            >
              About Us
            </Link>
          </Column>
          {/* <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 15, backgroundColor:"black" }}
              to="/"
            >
              Sign Out
            </Link>
          </Column> */}
        </Row>
      </Container>
      <Column
        style={{ paddingLeft: 1524, float: "right", position: "absolute" }}
      >
      
        <Link to="/home">
          <img
            src={require("../Image/logo.png")}
            alt="logo"
            style={{ height: "70px", top: 11, position: "fixed" }}
          />
        </Link>
      </Column>
    </Box>
  );
}
