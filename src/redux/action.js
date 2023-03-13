import axios from "axios";
import * as types from "./actionType";

const getStudents = (students) => ({
  type: types.GET_STUDENTS,
  payload: students,
});

const studentDeleted=()=>({
    type:types.DELETE_STUDENT,
})

const studentAdded=()=>({
  type:types.ADD_STUDENT,
})

const studentUpdated=()=>({
  type:types.UPDATE_STUDENT,
})

const getStudent=(student)=>({
  type:types.GET_SINGLE_STUDENT,
  payload:student,
})

export const loadStudents = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getStudents(resp.data));
      })
      .catch((error) => console.log(error));
  };
};


export const deleteStudent = (id) => {
    return function (dispatch) {
      axios
        .delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(studentDeleted());
          dispatch(loadStudents());
        })
        .catch((error) => console.log(error));
    };
  };


  export const addStudent = (student) => {
    return function (dispatch) {
      axios
        .post(`${process.env.REACT_APP_API}`,student)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(studentAdded());
        })
        .catch((error) => console.log(error));
    };
  };
  


  export const getSingleStudent = (id) => {
    return function (dispatch) {
      axios
        .get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(getStudent(resp.data));
        })
        .catch((error) => console.log(error));
    }; 
  };

  export const updateStudent = (student, id) => {
    return function (dispatch) {
      axios
        .put(`${process.env.REACT_APP_API}/${id}`,student)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(studentUpdated(resp.data));
        })
        .catch((error) => console.log(error));
    };
  };