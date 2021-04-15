import React from "react";

//styling
import { Menu, Header, Icon, Button } from "semantic-ui-react";
import LogInModal from "./LoginModal";

const Navigation = (props) => {
  const { activeTab, activeUser, setActiveUser } = props;

  const handleLogOut = () => {
    localStorage.clear();
    document.location.reload();
  };

  return (
    <div className="navigation">
      <Menu pointing secondary size="massive">
        <Menu.Menu>
          <Menu.Item href="/" className="header-icon">
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
        <Menu.Item name="home" href="/" active={activeTab === "/"} />
        <Menu.Item name="trips" href="/trips" active={activeTab === "/trips"} />
        <Menu.Item
          name="luggage"
          href="/luggage"
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
