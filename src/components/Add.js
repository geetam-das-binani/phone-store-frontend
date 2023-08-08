import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/add.css";
import { useNavigate } from "react-router-dom";
import { addphone } from "../api/api";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
export default function Add() {
  const initialValues = {
    name: "",
    price: "",
    description: "",
    available: "",
    image: "",
    available: "",
  };

  const [phone, setPhone] = useState(initialValues);
  const [value, setValue] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setPhone((prev) => {
      return { ...prev, [e.target.name]: e.target.value, available: value };
    });
  };
  const addPhoneDetails = async () => {
    await addphone(phone);
    setPhone(initialValues);
    navigate("/myphones");
  };

  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
        Add Phone
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="name" value={phone.name} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <InputLabel>Price</InputLabel>
        <Input name="price" value={phone.price} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <InputLabel>Description</InputLabel>
        <Input
          name="description"
          value={phone.description}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Image Link</InputLabel>
        <Input name="image" value={phone.image} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <FormControlLabel
          control={<Checkbox checked={value}  style={{ color: "white" }} />}
          onChange={() => setValue(!value)}
          label="Available"
          style={{ color: "white" }}
        />
      </FormControl>

      <Button
        className="btn"
        style={{ color: "black", background: "aqua", marginTop: ".5rem" }}
        onClick={addPhoneDetails}
        variant="contained"
      >
        Add Phone
      </Button>
    </div>
  );
}
