import React, { useEffect, useState } from "react";

import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { editphone } from "../api/api";
import { getEditPhone } from "../api/api";

export default function AddPhone() {
  const initialValues = {
    name: "",
    price: "",
    description: "",
    available: "",
    image: "",

  };
  const [phone, setPhone] = useState(initialValues);
  const [value, setValue] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const getPhone = async (id) => {
    const response = await getEditPhone(id);
    setPhone(response.data);
    setValue(response.data.available);
  };
  useEffect(() => {
    getPhone(id);
  }, [id]);
 
  const handleChange = (e) => {
    setPhone((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const editPhoneDetails = async () => {
    const newEdit = { ...phone, available: value };
    await editphone(newEdit, id);
    setPhone(initialValues);
    navigate("/myphones");
  };
  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
        Edit Phone
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
          control={<Checkbox checked={value} style={{ color: "white" }} />}
          onChange={() => setValue(!value)}
          label="Available"
          name="available"
          style={{ color: "white" }}
        />
      </FormControl>

      <Button
        className="btn"
        style={{ color: "black", background: "tomato", marginTop: ".5rem" }}
        onClick={editPhoneDetails}
        variant="contained"
      >
        Edit Phone
      </Button>
    </div>
  );
}
