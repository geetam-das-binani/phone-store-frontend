import axios from "axios";
const url = "http://localhost:8000";
export const addphone = async (data) => {
  try {
    return await axios.post(`${url}/add`, data);
  } catch (e) {
    console.log(e.message);
  }
};
export const getPhones = async () => {
  try {
    return await axios.get(`${url}/get`);
  } catch (e) {
    console.log(e.message);
  }
};
export const getEditPhone = async (id) => {
  try {
    return await axios.get(`${url}/edit/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};
export const editphone = async (data,id) => {
    try {
      return await axios.post(`${url}/edited/${id}`,data);
    } catch (e) {
      console.log(e.message);
    }
  };
  export const deletePhone = async (id) => {
    try {
      return await axios.delete(`${url}/delete/${id}`);
    } catch (e) {
      console.log(e.message);
    }
  };
