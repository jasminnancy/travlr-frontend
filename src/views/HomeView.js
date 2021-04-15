import React from "react";

//components
import Home from "../components/Home/Home";
import BasicPage from "../components/Home/BasicPage";

//styling
import { Loader } from "semantic-ui-react";

const HomeView = (props) => {
  const { activeUser, loading } = props;

  if (!activeUser) {
    return loading ? <Loader active /> : <BasicPage />;
  }

  return <Home activeUser={activeUser} />;
};

export default HomeView;
