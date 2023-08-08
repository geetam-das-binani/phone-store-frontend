import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import '../styles/home.css'
export default function Home() {
  const NavLink = styled(Link)({
    textDecoration: "none",
  });

  return (
    <div
      className="home"
      style={{
        backgroundImage:
          "url(https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Android_Blog_speed_comp.gif)",

        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "88.7vh",
      }}
    >
      <div className="center_div">
        <h2>Phone Store</h2>
        <h3>Click below to add</h3>
        <NavLink to="/add">
       
          <Button style={{background:'blue',color:'white'}}  variant="contained">Add</Button>
        </NavLink>
      </div>
    </div>
  );
}
