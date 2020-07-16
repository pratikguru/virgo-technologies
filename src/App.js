import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "../src/Components/MainPage/MainPage.js";
import {motion} from "framer-motion";

import styled from "styled-components";
import "./fonts/Mont.css";
const Wrapper = styled.div`
  width : 100vw;
  height : 100vh;
  display: flex;
  overflow-x : hidden;
  font-family: Montserrat;
  z-index: -1;
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
`;

{/* <SplashScreen
animate={{opacity:[1, 0], zIndex:-10}}
transition={{delay:1, ease:"linear"}}
>
V
</SplashScreen> */}

function App() {
  return (
    <Wrapper>

      <MainPage 
        animate={{opacity:[0, 1]}}
        transition={{delay:1.1, ease:"linear"}}
      ></MainPage>
    </Wrapper>
  );
}

export default App;
