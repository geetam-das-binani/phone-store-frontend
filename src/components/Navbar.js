import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)({
  background: "black",
  padding: 8,
  position: "static",
});

export default function Navbar() {
  const [value, setValue] = useState(0);
  return (
    <Header>
      <Toolbar>
        <Avatar
          style={{ margin: "0 1rem" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-e_9fmjIjj-5oW3mdP-ydxzOv8XNw3RchA&usqp=CAU"
        />
        <Tabs
          indicatorColor="primary"
          value={value}
          textColor="inherit"
          onChange={(e, val) => setValue(() => val)}
        >
          <Tab label="Home" LinkComponent={NavLink} to="/" />
          <Tab label="Add Phone" LinkComponent={NavLink} to="/add" />
          <Tab label="My Phones" LinkComponent={NavLink} to="/myphones" />
        </Tabs>
      </Toolbar>
    </Header>
  );
}
