import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";

import "./modal-styles.css";
import ReadMore from "../../Assets/Logo/read-more.png";

const Wrapper = styled(motion.div)`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rrgba(255, 251, 251, 0.03);
  backdrop-filter: blur(35px);
  justify-content: center;
  align-items: center;
`;

const SplashScreen = styled(motion.div)`
  display: flex;
  background-color: #fefefe;
  margin: auto;
  padding: 10px;
  border: none;
  border-radius: 10px;
  width: 80%;
  box-shadow: 20px 20px 60px rgba(170, 231, 209, 0.25),
    -20px -20px 60px rgba(163, 230, 189, 0.25);
  flex-direction: column;
`;

const SplashScreenHeader = styled.div`
  display: flex;
  width : 100%:
  height: auto;
  
  justify-content: space-between;
  align-items: center;

`;

const Title = styled.div`
  display: flex;
  color: black;
  font-size: 30px;
  font-weight: 600;
  color: #246d27;
`;

const CloseButton = styled(motion.div)`
  display: flex;
  width: auto;
  height: auto;
  padding: 5px;
  color: black;
  cursor: pointer;
  user-select: none;

  font-weight: 600;
  background-color: #e2dbdb;
  border-radius: 3px;
`;

const SplashScreenFooter = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 5px;
  justify-self: flex-end;
  flex-direction: column;
`;

const CustomButton = styled(motion.div)`
  width: 120px;
  height: 35px;
  border-radius: 3px;
  background-color: #b0d799;
  justify-content: center;
  align-items: center;
  padding: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-weight: 400;
  color: black;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

const SplashScreenSubheader = styled.div`
  width: 100%:
  height: auto;
  padding: 2px;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: #878787;
  margin-top: -10px;
`;

const SplashScreenBody = styled.div`
  width: 100%:
  height: 300px;
  overflow-x: auto;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default class CustomModal extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Wrapper
        style={{ display: this.props.showModal ? "flex" : "none" }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.2, ease: "linear" }}
      >
        <SplashScreen
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.3, ease: "linear" }}
        >
          <SplashScreenHeader>
            <Title>{this.props.header}</Title>
            <CloseButton
              whileTap={{ scale: 0.88 }}
              onClick={this.props.onClose}
            >
              X
            </CloseButton>
          </SplashScreenHeader>
          <SplashScreenSubheader>{this.props.subHeader}</SplashScreenSubheader>

          <SplashScreenBody>
            <img
              src={this.props.img}
              alt={""}
              style={{ transform: "scale(0.7)" }}
            />
            {this.props.information}
          </SplashScreenBody>
          <SplashScreenFooter>
            <CustomButton
              whileTap={{ scale: 0.89 }}
              transition={{ duration: 0.2 }}
            >
              READ MORE
              <img src={ReadMore} />
            </CustomButton>
          </SplashScreenFooter>
        </SplashScreen>
      </Wrapper>
    );
  }
}
