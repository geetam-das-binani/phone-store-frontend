import React, { useEffect, useState } from "react";
import { getPhones } from "../api/api";
import Phones from "./Phones";
import "../styles/myphones.css";
export default function Myphone() {
  const [phones, setPhones] = useState([]);

  const getAllPhones = async () => {
    const response = await getPhones();
    console.log(response);

    setPhones(response.data);
  };
  useEffect(() => {
    getAllPhones();
  }, []);

  return (
   
      <div className="phone_grid">
        {phones.length !== 0 ? (
          phones.map((data, index) => {
            return <Phones key={index} {...data} func={getAllPhones} />;
          })
        ) : (
          <div className="not_Found_Div">Add Some Phones to Preview them !</div>
        )}
      </div>
   
  );
}
