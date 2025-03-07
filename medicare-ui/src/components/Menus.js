import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
export default function Menus() {
  return (
    <div
      style={{
      
        height: "100%",
        width: "100%",
        background: "",
        borderRadius: "10",
        paddingLeft: 100,
        paddingBottom:10,
        fontWeight:"bold"
        
      }}
      className="text-center"
    >
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          to="/"
          tag="a"
        >
          Home
        </Link>
        {/* <Link
          className="list-group-item list-group-item-action"
          to="/users"
          tag="a"
        >
         Show Details of Users
        </Link> */}
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/show-hospitals"
          tag="a"
        >
       Show Hospital
        </Link>
        {/* <Link className="list-group-item list-group-item-action" to="/adduser" tag="a">
        Book Appointment
        </Link> */}
        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/userloginpass"
          tag="a"
        >
        Create User Password
        </Link> */}
        <Link
          className="list-group-item list-group-item-action"
          to="/getAllAppointments"
          tag="a"
        >
         My Booking
        </Link>
        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/deleteoneuser"
          tag="a"
        >
        Emergency
        </Link> */}
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/about"
          tag="a"
        >
        About Us
        </Link>
        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/updateuser"
          tag="a"
        >
          Update User
        </Link> */}
        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to="#"
          tag="a"
        >
        Delete All User
        </Link> */}

      
    
 
        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/alluseralldetails"
          tag="a"
        >
        All User's Info
        </Link> */}
        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to=""
          tag="a"
        >
        All Info Of User
        </Link> */}

        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to=""
          tag="a"
        >
         Contact Us
        </Link> */}
     
        {/* <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/techinicalproblem"
          tag="a"
        >
         Technical Isuue ?
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/about"
          tag="a"
        >
         About Us
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          disabled
          to="/"
          tag="a"
        >
          Sign Out
        </Link> */}
      </ListGroup>
      <p />
    </div>
  );
}
