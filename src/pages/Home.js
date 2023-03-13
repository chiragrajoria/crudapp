import React from "react";
import { Header } from "../components/Header";
import { useNavigate} from "react-router-dom";
import heroImage from "../assets/images/hero2.png"
import { Footer } from "../components/Footer";
import { Courses } from "../components/Courses";

export const Home = () => {
  let navigate=useNavigate();
  return (
    <>
      <Header />
      
      {/* About us  */}
      <section className="about-us mt-3">
      <div className="container about">
        <div className="row d-flex">
          <div className=" col-lg-6 order-lg-1">
            <img src={heroImage} alt="" className="img-fluid w-100" />
          </div>
          <div className="col-lg-6 order-0 pt-md-3 ">
            <h4 className="mt-5 pt-4">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h4>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate
            </p>
            <br/>
            <h5>For boosting your career Join Us!!!!!</h5>
            <br/>
            <button type="button" className="btn p-2 px-4 rounded-pill enroll" onClick={()=>navigate("/addStudent")}>
              Enroll here!!
             </button>
          </div>
        </div>
      </div>
    </section>

<Courses/>

<Footer/>








     
      
    </>
  );
};
