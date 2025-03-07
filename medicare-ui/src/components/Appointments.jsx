import React from 'react'
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";
import { getHospitalImage } from '../Image/Images';
const Appointments = ({details}) => {

    return (
        <div>
          <Card
            className="container my-2"
            style={{
              width: "23rem",
              height: "30rem",
            }}
          >
            <img
              className="container"
              style={{
                width: "10rem",
                height: "10rem",
                paddingTop:"1rem"
              }}
              alt="user img"
              src={getHospitalImage()}
            />
            <CardBody >
              <CardTitle tag="h5">Hospital Details</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Hospital Name: {details.hospital.name}
              </CardSubtitle>
              <CardText>Contact Info : {details.hospital.contactInfo}</CardText>
              <CardText>Address :{details.hospital.address} </CardText>
              
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Patient Info
              </CardSubtitle>
              <CardText>Patiente Name : {details.personName}</CardText>
              <CardText>Patiente age : {details.personAge}</CardText>
              <CardText>Patiente contact number : {details.personContact}</CardText>
              <CardText>Patiente desc : {details.personDesc}</CardText>
              <CardText>Patiente status : {details.status}</CardText>

              <Container>
              {/* <button type="button" className="btn btn-success ">
                  Show All
                </button> */}
                {/* <button type="button" className="btn btn-warning mx-3" onClick={()=>{navigate("/book-appointment",{state:{hid:[details.hid]}})}}  >
                  Book Appointment
                </button> */}
                {/* <button type="button" className="btn btn-danger ">
                  Delete
                </button> */}

              </Container>
            </CardBody>
          </Card>
        </div>
      );
}



export default Appointments
