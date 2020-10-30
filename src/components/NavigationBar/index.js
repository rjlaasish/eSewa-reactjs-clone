import { Image } from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import eSewalogo from "../../assets/images/esewa_logo.png";
import React from "react";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from '@material-ui/icons/Lock';
import { Button, Input, InputAdornment, TextField, Typography } from "@material-ui/core";

export default function NavigationBar() {
  return (
    <>
      <AppBar className="appbar">
        <div className=" row flex algnitm jcc ">
          <img src={eSewalogo} alt="" className="esewa-logo" style={{marginTop:"15px"}} />
          <div className="form-field " style={{marginTop:"15px"}}>
            <input
              type="text"
              className="search-field"
              placeholder="Search services/merchant by tags (e.g. adsl)"
            />
            <div className="search-box app-color flex jcc algnitm">
              <SearchIcon style={{ width: "60px" }} />
            </div>
          </div>
          <div className="login-field" style={{marginTop:"22px"}}>
           
              <PersonIcon />
            <input
              type="text"
              // className="login-search-field"
              placeholder="eSewa ID"
            />
          </div>
          <div className="login-field" style={{marginTop:"22px"}}>
        
              <LockIcon />
            <input
              type="text"
              placeholder="Password"
            />
          </div>
          <Button variant="contained"  className="login-btn " disableElevation>
        Login
      </Button>
          <Button variant="outlined"  className="signup-btn " disableElevation>
        SignUp
      </Button>
        </div>
      </AppBar>
    </>
  );
}
