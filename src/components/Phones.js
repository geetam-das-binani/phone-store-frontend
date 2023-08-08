import React from "react";
import Button from "@mui/material/Button";
import "../styles/phones.css";
import { useNavigate } from "react-router-dom";
import { deletePhone } from "../api/api";
export default function Phones({
  name,
  image,
  description,
  price,
  available,
  _id,
  func,
}) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    await deletePhone(id);
    func();
  };
  return (
    <div className="phones">
      <img src={image} alt="phone" />
      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <p className="card-text">{description}</p>
        <p> {price}</p>
        <p>{available ? "In Stock-Yes" : "In Stock-No"} </p>
      </div>
      <div className="actions_btns">
        <Button className="glow-on-hover"
          onClick={() => navigate(`/${_id}`)}
         
          variant="contained"
        >
          Edit
        </Button>
        <Button className="glow-on-hover"
          onClick={() => handleDelete(_id)}
         
          variant="contained"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
