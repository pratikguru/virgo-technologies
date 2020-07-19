import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "../src/Components/MainPage/MainPage.js";
import { motion } from "framer-motion";

import styled from "styled-components";
import "./fonts/Mont.css";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  font-family: Montserrat;
  z-index: -1;
  -webkit-tap-highlight-color: transparent;
`;

const SplashScreen = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 100;
  font-size: 100px;
  color: green;
  flex-direction: column;
`;

const Icon = styled.div`
  display: flex;
  color: green;
  font-size: 100px;
  font-weight: 500;
`;

const SubText = styled.div`
  display: flex;
  color: green;
  font-size: 20px;
  font-weight: 400;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lock: false,
    };
  }

  componentDidMount() {
    if (window.orientation === 90 || window.orientation === -90) {
      this.setState({
        lock: true,
      });
    } else {
      this.setState({
        lock: false,
      });
    }

    window.addEventListener("orientationchange", () => {
      console.log("Orientation change detected.");
      console.log(window.orientation);
      if (window.orientation === 90 || window.orientation === -90) {
        this.setState({
          lock: true,
        });
      } else {
        this.setState({
          lock: false,
        });
      }
    });
  }
  render() {
    return (
      <Wrapper>
        {this.state.lock ? (
          <SplashScreen>
            <Icon>V</Icon>
            <SubText>This site is visible in potrait mode only!</SubText>
          </SplashScreen>
        ) : (
          <MainPage
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 1.1, ease: "linear" }}
          ></MainPage>
        )}
      </Wrapper>
    );
  }
}
