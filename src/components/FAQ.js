import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import './Style.css'
import Navbar from './Navbar';


export default function FAQ() {
    const blurTextStyle = {
        textShadow: '0 0 2px rgba(0, 0, 0, 0.5)', // Adjust the blur strength here by changing the "5px" value
        color: 'transparent',
      };

      
  return (
    <div>
    <Navbar></Navbar>
    <div className="pp">
    <MDBContainer className="faq">
        
      <section>
        <MDBTypography tag="h3" className="text-center mb-4 pb-2 fw-bold" style={blurTextStyle}>
          FAQ
        </MDBTypography>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon far icon="paper-plane text-primary pe-2" /> <strong>How do I enroll in a course?</strong>
            </MDBTypography>
            <p>
              To enroll in a course, simply click on the "Enroll Now" button on the course page. You'll be prompted to create an account or log in if you already have one. After completing the enrollment process and making the payment, you'll gain access to the course.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="pen-alt text-primary pe-2" /><strong> What payment methods are accepted?</strong>
            </MDBTypography>
            <p>
              We accept payments through major credit cards, debit cards, PayPal, and other secure online payment gateways. You can choose the method that suits you best during the checkout process.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="user text-primary pe-2" /> <strong>Is there a refund policy?</strong>
            </MDBTypography>
            <p>
            Yes, we have a 30-day money-back guarantee. If you are unsatisfied with the course within 30 days of purchase, you can request a full refund, no questions asked.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="rocket text-primary pe-2" /><strong> How do I contact the course instructor or support team?</strong>
            </MDBTypography>
            <p>
            You can reach out to the course instructor through the course discussion forum.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="home text-primary pe-2" />  <strong>What happens if I miss a live session in an instructor-led course?</strong>
            </MDBTypography>
            <p>
              If you miss a live session, don't worry! Recordings of the live sessions will be made available for you to access at your convenience.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="book-open text-primary pe-2" className="laq"/> <strong>How can I track my progress in a course?</strong>
            </MDBTypography>
            <p>
            Your progress will be automatically tracked as you complete lectures and quizzes.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
    </div>
    </div>
  );
}