import React from 'react'
import course1 from "../assets/images/course1.jpg"
import course2 from "../assets/images/course2.jpg"
import course3 from "../assets/images/course3.jpg"
import { useNavigate } from 'react-router-dom'

export const Courses = () => {
    let navigate=useNavigate();
  return (
    <>
     <section className="popular-courses pt-5 mt-3 pb-5">
      <div className="container">
        <div className="course-heading">
          <h4 className="fs-2">COURSES</h4>
          <p className='fs-5'>POPULAR COURSES......</p>
        </div>
        <div className="course-card pt-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src={course1}
                  className="card-img-top"
                  alt="Website Design"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="fs-5">Web Development</h5>
                    <p className="fs-5">$169</p>
                  </div>
                  <h5 className="card-title course-card-title pt-3">
                    <a href="" className="text-decoration-none card-title">Design</a>
                  </h5>
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer bg-light py-3">
                  <div className="course-footer">
                    <div className="footer-mentor d-flex mt-2">
                     
                    <button type="button" className="btn  rounded-pill enroll" onClick={()=>navigate("/addStudent")}>
              Get this..
             </button>
                      <div className="mentor-popularity ms-auto mt-2">
                        <i className="fa-regular fa-user"></i><span className='pe-2'>45</span>
                        <i className="fa-regular fa-heart"></i><span>101</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={course2}
                  className="card-img-top"
                  alt="Search Engine Optimization"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="fs-5 ">Marketing</h5>
                    <p className="fs-5">$250</p>
                  </div>
                  <h5 className="card-title course-card-title pt-3">
                    <a href="" className="text-decoration-none card-title"
                      >Search Engine Optimization</a
                    >
                  </h5>
                  <p>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer bg-light py-3">
                  <div className="footer-mentor d-flex mt-2">
                    
                  <button type="button" className="btn  rounded-pill enroll" onClick={()=>navigate("/addStudent")}>
              Get this..
             </button>
                    <div className="mentor-popularity ms-auto mt-2">
                      <i className="fa-regular fa-user"></i><span className='me-2'>100</span>
                      <i className="fa-regular fa-heart"></i><span>201</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={course3}
                  className="card-img-top"
                  alt="Copy Writing"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="fs-5">Content</h5>
                    <p className="fs-5">$69</p>
                  </div>
                  <h5 className="card-title course-card-title pt-3">
                    <a href="" className="text-decoration-none card-title">Content Writing</a>
                  </h5>
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer bg-light py-3">
                  <div className="footer-mentor d-flex mt-2">
                    
                  <button type="button" className="btn  rounded-pill enroll" onClick={()=>navigate("/addStudent")}>
              Get this..
             </button>
                    <div className="mentor-popularity ms-auto mt-2">
                      <i className="fa-regular fa-user"></i><span className='me-2'>90</span>
                      <i className="fa-regular fa-heart"></i><span>17</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
