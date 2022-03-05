import React from "react";
import useStore from "../store/zustand";

export const People = () => {
  const store = useStore();

  return <div>{store.people.length}</div>;
};
