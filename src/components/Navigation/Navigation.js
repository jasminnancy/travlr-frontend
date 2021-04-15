import React from "react";
import history from "../Shared/history";

//styling
import { Menu, Header, Icon, Button } from "semantic-ui-react";
import LogInModal from "./LoginModal";

const Navigation = (props) => {
  const { activeTab, activeUser, setActiveTab, setActiveUser } = props;

  const handleLogOut = () => {
    localStorage.clear();
    document.location.reload();
  };

  const handlePageClick = (path) => {
    setActiveTab(path);
    history.push(path);
  };

  return (
    <div className="navigation">
      <Menu pointing secondary size="massive">
        <Menu.Menu>
          <Menu.Item
            onClick={() => handlePageClick("/")}
            className="header-icon"
          >
            <Header as="h2">
              <Icon name="map signs" color="brown" />
              <Header.Content className="icon">
                Urbancy
                <Header.Subheader>
                  <p>Let's go explore</p>
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Item
          name="home"
          onClick={() => handlePageClick("/")}
          active={activeTab === "/"}
        />
        <Menu.Item
          name="trips"
          onClick={() => handlePageClick("/trips")}
          active={activeTab === "/trips"}
        />
        <Menu.Item
          name="luggage"
          onClick={() => handlePageClick("/luggage")}
          active={activeTab === "/luggage"}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            {!activeUser ? (
              <LogInModal
                activeUser={activeUser}
                setActiveUser={setActiveUser}
              />
            ) : (
              <Button onClick={handleLogOut}>Log Out</Button>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navigation;
