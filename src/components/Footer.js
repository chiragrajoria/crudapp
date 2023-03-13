import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer mt-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 ">
                <h2 className="mt-4">
                  {" "}
                  <i className="fa-solid fa-book-open-reader me-2 logo"></i>
                  Learner
                </h2>

                <p>Follow us on social media</p>

                <div className="footer-media">
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-skype"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/chirag-85b478202/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  footer-link">
              <h3>Useful Links</h3>
              <ul >
                <li>
                  <i className="fa-solid fa-chevron-right"></i><Link to="/">Home</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i
                  ><a href="">About us</a>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i
                  ><Link to="/students">Students</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i
                  ><Link to="/login">Login</Link>
                </li>
                
              </ul>
              </div>
              <div className="col-lg-3 col-md-6  footer-link">
              <h3>Information</h3>
              <ul className="ps-2">
                <li>
                  <i className="fa-solid fa-chevron-right"></i><a href="">Privacy Policy</a>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i
                  ><a href="">Membership</a>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i
                  ><a href="">Purchase Guide</a>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i
                  ><a href="">Term of service</a>
                </li>
                
              </ul>
              </div>
              <div className="col-lg-3 col-md-6 ">
              <h6 className="fw-bold mb-4 mt-4">Get in Touch</h6> 

                <p>Address: Leela bhawan</p>
                <p> Phone: +91 7973797247 </p>
                <p>Email: learner@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
