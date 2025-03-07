import React from 'react'
import BookAppointment from './BookAppointment'


import NavBarCom from './NavBarCom'
import Footer from './Footer'
import { Row, Col } from "reactstrap";
import {ToastContainer} from 'react-toastify';
import Menus from './Menus';
const BookAppointmentManager = () => {
    return (
        <div style={{ background: "linear-gradient(90deg, rgba(228,161,161,1) 0%, rgba(232,98,98,1) 19%, rgba(139,23,23,1) 62%, rgba(128,3,3,1) 100%)" ,height:"95vh" } }  className="text-center">
        <ToastContainer />
            <NavBarCom/>
        
        
        
            <Row className="my-5">
              <Col md={3}>
               <Menus/>
              </Col>
        
              <Col md={9}>
             <BookAppointment/>
              </Col>
            </Row>
        
            <Footer />
            </div>
        
        
            
          )
}

export default BookAppointmentManager
