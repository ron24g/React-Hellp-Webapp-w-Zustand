import React from "react";
import useStore from "../store/zustand";
import { Link, useParams } from "react-router-dom";
import Debug from "../component/debug";

export const People = () => {
  const store = useStore();
  const params = useParams();
  let person = store.people[params.peopleId - 1];

  return (<div>
    <Debug
      message={person ? person.name : ""}
      object={person}
    />
  </div>);
};
