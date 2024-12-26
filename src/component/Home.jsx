import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import img2 from '../assets/dress.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SignUp() {
  return (
    <div>
      <section className="text-center text-lg-start">
        <style>{`
          .cascading-right {
            margin-right: -50px;
          }

          @media (max-width: 991.98px) {
            .cascading-right {
              margin-right: 0;
            }
          }

          .bg-amber-600 {
            background-color: #d97706 !important;
          }

          .amber-border-focus input:focus {
            border-color: #d97706 !important; /* Amber-500 */
            box-shadow: 0 0 0 0.2rem rgba(217, 119, 6, 0.25); /* Optional glow effect */
          }
        `}</style>

        <MDBContainer className="py-4">
          <MDBRow className="g-0 align-items-center">
            <MDBCol lg="6" className="mb-5 mb-lg-0 ">
              <MDBCard
                className="cascading-right bg-body-tertiary"
                style={{ backdropFilter: 'blur(30px)' }}
              >
                <MDBCardBody className="p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5 text-amber-500">Sign up now</h2>
                  <form>
                    <MDBRow>
                      <MDBCol md="6" className="mb-4">
                        <MDBInput 
                          label="First name"
                          id="form3Example1"
                          type="text"
                          className="amber-border-focus "
                        />
                      </MDBCol>
                      <MDBCol md="6" className="mb-4">
                        <MDBInput
                          label="Last name"
                          id="form3Example2"
                          type="text"
                          className="amber-border-focus"
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      label="Email address"
                      id="form3Example3"
                      type="email"
                      className="mb-4 amber-border-focus "
                    />
                    <MDBInput
                      label="Password"
                      id="form3Example4"
                      type="password"
                      className="mb-4 amber-border-focus"
                    />

                    <MDBBtn className=" btn-block mb-4 bg-amber-600">Sign Up</MDBBtn>

                    <div className="text-center">
                      <p>or sign up with:</p>

                      <MDBBtn tag="a" color="none" className="btn-floating mx-1 text-amber-500">
                        <MDBIcon fab icon="facebook-f" />
                      </MDBBtn>

                      <MDBBtn tag="a" color="none" className="btn-floating mx-1 text-amber-500">
                        <MDBIcon fab icon="google" />
                      </MDBBtn>

                      <MDBBtn tag="a" color="none" className="btn-floating mx-1 text-amber-500">
                        <MDBIcon fab icon="twitter" />
                      </MDBBtn>

                      <MDBBtn tag="a" color="none" className="btn-floating mx-1 text-amber-500">
                        <MDBIcon fab icon="github" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="6" className="mb-5 mb-lg-0">
              <img
                src={img2}
                className="w-100 rounded-4 shadow-4"
                alt="Sample Image"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default SignUp;
