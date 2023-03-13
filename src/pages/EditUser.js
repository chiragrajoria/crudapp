import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleStudent, updateStudent } from "../redux/action";
import { Footer } from "../components/Footer";


export const Edituser = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();
  let { student } = useSelector((state) => state.data);

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  const { name, email, contact, address } = state;

  useEffect(() => {
    dispatch(getSingleStudent(id));
  }, []);

  useEffect(() => {
    if (student) {
      setState({ ...student });
    }
  }, [student]);

  const handleInputChnage = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please fill all the input filed.");
    } else {
      dispatch(updateStudent(state, id));
      navigate("/students");
      setTimeout(() => {
        alert("Student Updated");
      }, 100);
      setError("");
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-3">
        <button
          type="submit"
          className="btn btn-warning mt-4 fs-5 goback "
          onClick={() => navigate("/students")}
        >
          <i className="fa-solid fa-left-long me-1"></i>Go Back
        </button>

        <h1 className="mt-5 ms-2 text-primary text-center">Edit Student</h1>

        {error && <h4 className="text-danger">{error}</h4>}
        <div className="container">
          
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      value={name || ""}
                      onChange={handleInputChnage}
                      name="name"
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      value={email || ""}
                      name="email"
                      onChange={handleInputChnage}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="form-control"
                      value={contact || ""}
                      name="contact"
                      onChange={handleInputChnage}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      value={address || ""}
                      name="address"
                      onChange={handleInputChnage}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-4 update"
                  onChange={handleInputChnage}
                >
                  Update
                </button>
              </form>
            </div>
          
          </div>
          <Footer/>
        
    </>
  );
};
