import React from "react";
import "./wrapper.css";

const Wrapper = props => <div className="wrapper col-md-12 mx-auto text-center">{props.children}</div>;

export default Wrapper;