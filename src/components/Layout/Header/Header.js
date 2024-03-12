import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../../../Style/Style.css";
import Logo from "../../../images/logo.svg";
const Header = () => {
  const [mobileopen, setmobileopen] = useState(false);
  //hand menu click
  const handleDrowerToggle = () => {
    setmobileopen(!mobileopen);
  };
  // menu drawer

  const drower = (
    <Box onClick={handleDrowerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }} //flexbox  space betwwen
      >
        <img src={Logo} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />

      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}> Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}> About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}> Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drower"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrowerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }} //flexbox  space betwwen
            >
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li>
                  <NavLink to={"/"} activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}> Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}> About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary "
            open={mobileopen}
            onClose={handleDrowerToggle}
            sx={{
              display: { xs: "black", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drower}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
