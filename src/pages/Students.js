import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, loadStudents } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Students = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { students } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadStudents());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you really wanted to delete the student")) {
      dispatch(deleteStudent(id));
      dispatch(loadStudents());
    }
  };

  return (
    <>
      <Header />


      <div className="container-fluid student-title">
        <h1 className="text-center  rounded-pill text-light py-5">
          Data of enrolled students
        </h1>
      </div>

      <div className="container mt-5">
        <div className="row">
      {students &&
        students.map((student) => (
              <div className="col-lg-4 col-md-6 mt-4" key={student.id}>
                <div className="card">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center bg-dark text-light">
                      <h4>Student {student.id}</h4>
                    </li>
                    <li className="list-group-item">
                      <strong>Name: </strong> {student.name}
                    </li>
                    <li className="list-group-item">
                      <strong>Email:</strong> {student.email}
                    </li>
                    <li className="list-group-item">
                      <strong>Contact:</strong> {student.contact}
                    </li>
                    <li className="list-group-item">
                      <strong>Address:</strong> {student.address}
                    </li>
                  </ul>
                </div>

                <div className="mt-3 action-button d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => navigate(`/editStudent/${student.id}`)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </div>

              </div>
        ))}
        </div>
        </div>

      <Footer />
    </>
  );
};
