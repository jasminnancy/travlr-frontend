import React from "react";
import Sidebar from "../Shared/Sidebar";
import BagsContainer from "./BagsContainer";
import { Grid } from "semantic-ui-react";
import BasicPage from "./BasicPage";
import history from "../Shared/history";

const BAG_URL = "http://localhost:3000/luggages";

const Luggage = (props) => {
  const { activeUser, handleAddedBag } = props;

  const addNewBag = (user) => {
    fetch(BAG_URL, {
      method: "POST",
      body: JSON.stringify({
        user_id: user.id,
        miles_travelled: 0,
        name: "Untitled",
        luggage_type: "suitcase",
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => handleAddedBag(data));
  };

  const handleBagClick = (bag) => {
    history.push(`/luggage/${bag.id}`);
  };

  if (!activeUser) return <BasicPage />;

  return (
    <div className="main-body double-centered">
      <Grid>
        <Grid.Column width={4}>
          <Sidebar activeUser={activeUser} />
        </Grid.Column>
        <Grid.Column width={12}>
          <BagsContainer
            activeUser={activeUser}
            addNewBag={addNewBag}
            handleBagClick={handleBagClick}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Luggage;
