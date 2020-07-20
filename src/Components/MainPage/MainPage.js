import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media, mediaType } from "../../Utils/media.js";

/* Images and logo import */
import MainLogo from "../../Assets/Logo/image 1.svg";

/* Main content components import. */
import HomePage from "../HomePage/HomePage.js";
import ClientPage from "../ClientPage/ClientPage.js";
import ProductListing from "../HVAC Products/HVACProducts.js";
import IndustrialProducts from "../Industrial Products/IndustrialProducts.js";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const TopHeader = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 5px;

  justify-content: space-between;

  ${media.phone`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 1px;
  margin-left: 10px;
  margin-top: 10px;
`;
const NavigationButtonContainer = styled(motion.div)`
  display: flex;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 5px;

  ${media.phone`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: -webkit-fill-available;
    padding: 10px;
  `}
`;

const NavigationButtons = styled(motion.div)`
  width: auto;
  min-width: 180px;
  height: 30px;
  display: flex;
  background-color: white;
  border-radius: 3px;
  color: black;
  margin: 5px;
  justify-content: center;
  align-items: center;
  padding: 2px;

  user-select: none;
  cursor: pointer;
  ${media.phone`
    height: 50px;
    background-color: "#005C45";
    border-radius: 3px;
    width: 100%;
    border-bottom: 1px solid #CCCCCC;
`}
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${media.phone`
    height: auto;
    padding-bottom: 35px;
  
  `}
`;

const NavigationLinks = [
  "Home",
  "Clients",
  "Industrial Products",
  "HVAC Products",
  "Services",
];
const CurrentPage = {
  Home: <HomePage />,
  "Industrial Products": <IndustrialProducts />,
  Clients: <ClientPage />,
  "HVAC Products": <ProductListing />,
};

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedPage: "Home",
    };
  }

  handleSelectedLink = (route) => {
    this.setState({
      selectedPage: route,
    });
  };
  render() {
    return (
      <MainContainer>
        <TopHeader>
          <LogoContainer>
            <img src={MainLogo} alt="logo" />
          </LogoContainer>
          <NavigationButtonContainer
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
          >
            {NavigationLinks.map((value, index) => (
              <NavigationButtons
                key={index}
                onClick={() => this.handleSelectedLink(value)}
                whileHover={{
                  backgroundColor: "#005C45",
                  color: "rgba(255, 255, 255, 1)",
                }}
                transition={{ duration: 0.1, ease: "linear" }}
                whileTap={{
                  scale: 0.91,
                  backgroundColor: "#005C45",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                {NavigationLinks[index]}
              </NavigationButtons>
            ))}
          </NavigationButtonContainer>
        </TopHeader>
        <Body>
          {NavigationLinks.map((value, index) =>
            value === this.state.selectedPage ? (
              CurrentPage[value]
            ) : (
              <div key={index}></div>
            )
          )}
        </Body>
      </MainContainer>
    );
  }
}
