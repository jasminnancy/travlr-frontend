import React from "react";

//components
import Home from "../components/Home/Home";
import BasicPage from "../components/Shared/BasicPage";

const HomeView = (props) => {
  const { activeUser } = props;

  if (!activeUser) {
    return <BasicPage />;
  }

  return <Home activeUser={activeUser} />;
};

export default HomeView;
