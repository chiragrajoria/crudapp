import React, { useState } from "react";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/action";
import { Footer } from "../components/Footer";

export const AddUser = () => {
  const navigate=useNavigate();
  let dispatch=useDispatch();

  const [state, setState]=useState({
    name:"",
    email:"",
    contact:"",
    address:"",
  });
  const [error,setError]=useState("")
  const {name,email,contact,address}=state;


  const handleInputChnage=(e)=>{
    let{name,value}=e.target;
    setState({...state,[name]:value});
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(!name || !address || !email || !contact){
      setError("Please fill all the input field.")
      return false
    }
    if(name.length <= 2 || name.length > 10){
      alert("Invalid name")
      return false;
    }
    if (contact.length != 10) {
      alert("Phone number should be 10 digi");
      return false;
    }
    else{ 
      dispatch(addStudent(state));
      navigate("/");
     setTimeout(() => {
      alert("Congratulation, Now you are the part of Learner");
     }, 100);
      setError("");
    }
  }

  return (
    <>
      <Header />

    <div className="container mt-3">
      <button type="submit" className="btn btn-warning mt-4 fs-5 goback " onClick={()=>navigate("/")}>
      <i className="fa-solid fa-left-long me-1"></i>Go Back
      </button>

      <h2 className="mt-5">Welcome to the Learner platform !!!</h2>

    
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-5">
          {error && <h4 className="text-danger">{error}</h4>}
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                value={name}
                onChange={handleInputChnage}
                name="name"
                
              />
            </div>
            <div className="col-lg-12">
              <input type="email" placeholder="Email" className="form-control" 
              value={email}
              name="email"
              onChange={handleInputChnage}
              />
            </div>
            <div className="col-lg-12">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={contact}
                name="contact"
                onChange={handleInputChnage}
              />
            </div>
            <div className="col-lg-12">
              <input type="text" className="form-control" placeholder="Address" 
              value={address}
              name="address"
              onChange={handleInputChnage}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-4" onChange={handleInputChnage}>
            Submit
          </button>
        </form>
        </div>
        <div className="col-lg-6 map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          frameBorder="0"
        ></iframe>
        </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};
