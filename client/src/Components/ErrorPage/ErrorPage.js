import React from "react";
import './ErrorPage.css'
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="th">
      <h1 className="lp text-dark">404</h1>
      <br />
      <h2 className="lp1 text-dark">Page Not Found</h2>
      <br/>
      <NavLink className="lp2 text-dark" to="/"> Back to Home Page</NavLink>
    </div>
  );
};

export default Errorpage;