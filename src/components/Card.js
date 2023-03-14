import React from "react";

export const Card = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6 mt-4">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center bg-dark text-light">
              <h4>Student 1</h4>
            </li>
            <li className="list-group-item">
              <strong>Name: </strong> Chirag
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> chiragrajoria05@gmail.com
            </li>
            <li className="list-group-item">
              <strong>Contact:</strong> 7973797247
            </li>
            <li className="list-group-item">
              <strong>Address:</strong> #37 Bank colony
            </li>
          </ul>
        </div>

        <div className="mt-3 action-button d-flex justify-content-center">
          <button type="button" className="btn btn-primary">
            Update
          </button>
          <button type="button" className="btn btn-danger ms-2">
            Delete
          </button>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mt-4">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center bg-dark text-light">
              <h4>Student 2</h4>
            </li>
            <li className="list-group-item">
              <strong>Name: </strong> Anurag
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> anuragmukho05@gmail.com
            </li>
            <li className="list-group-item">
              <strong>Contact:</strong> 9856321475
            </li>
            <li className="list-group-item">
              <strong>Address:</strong> Hira nagar
            </li>
          </ul>
        </div>

        <div className="mt-3 action-button d-flex justify-content-center">
          <button type="button" className="btn btn-primary">
            Update
          </button>
          <button type="button" className="btn btn-danger ms-2">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
