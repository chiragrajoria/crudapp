import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import google from "../assets/images/google.png"

export const Login = () => {
  const navigate = useNavigate();

  const checkValidation = (e) => {
    e.preventDefault();
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  

    if (name == "") {
      alert("Fill the name");
      return false;
    }
    if (name.length <= 2 || name.length > 10) {
      alert("Name is Invalid");
      return false;
    }
    if (password == "") {
      alert("Please fill the Password field");
      return false;
    }

    if (password.length <= 5 || password.length > 20) {
      alert("Password length must be between 5 and 20 ");
      return false;
    }

    localStorage.setItem("login", true);
    navigate("/students");
  };

  

  return (
    <>
      <Header />

      <div className="container mt-3">
        <div className="login">
          <h1 className="text-center bg-dark text-light rounded p-4">
            Login
          </h1>
          <div className="d-flex justify-content-center  mt-4 rounded">
            <form id="myForm" onSubmit={checkValidation}>
              <div className="input-field mt-4 ">
                <input
                  type="text"
                  placeholder="Username"
                  className="input form-control"
                  id="username"
                />
              </div>
              <div className="input-field mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="input form-control"
                  id="email"
                />
              </div>
              <div className="input-field mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="input form-control"
                  id="password"
                />
              </div>
              <div className="form-check mt-3 d-flex justify-content-center">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  required
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Term & Conditions
                </label>
              </div>

              <a href="#" className="btn btn-primary btn-block mt-3 input-field">
              <i className="fa-brands fa-facebook  float-start mt-1"></i> Login with Facebook
              </a>
              <br/>
              <a href="#" className="btn btn-light border btn-block mt-3 input-field">
              <img src={google} alt="" className="google-img float-start"/>
               Login with Google
              </a>


              <div className="d-flex justify-content-center mt-3 pb-4">
                <button className="btn btn-dark">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
