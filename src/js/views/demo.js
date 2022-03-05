import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import useStore from "../store/zustand";

import "../../styles/demo.css";
import Debug from "../component/debug";

export const Demo = () => {
  const store = useStore((state) => state);

  return (
    <div className="container">
      {store.people.map((item, index) => {
        return <Debug id={index} message={item.name} object={item} />;
      })}
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
