import React from 'react'
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getHospitalImage } from '../Image/Images';
const Hospitals = ({details}) => {
  const navigate = useNavigate();
    return (
        <div>
          <Card
            className="container my-2"
            style={{
              width: "23rem",
              height: "25rem",
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
                Hospital Name: {details.name}
              </CardSubtitle>
              <CardText>Contact Info : {details.contactInfo}</CardText>
              <CardText>Address :{details.address} </CardText>
              <Container>
              {/* <button type="button" className="btn btn-success ">
                  Show All
                </button> */}
                <button type="button" className="btn btn-warning mx-3" onClick={()=>{navigate("/book-appointment",{state:{hid:[details.hid]}})}}  >
                  Book Appointment
                </button>
                {/* <button type="button" className="btn btn-danger ">
                  Delete
                </button> */}

              </Container>
            </CardBody>
          </Card>
        </div>
      );
}

export default Hospitals
