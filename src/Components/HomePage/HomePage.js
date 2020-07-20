import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { render } from "@testing-library/react";

import { media, mediaTypes } from "../../Utils/media.js";
import CustomModal from "../Modal/Modal.js";

import "./styles.scss";

/* Import logos and images. */

import Kamstrup from "../../Assets/Partners/kamstrup.png";
import Neptronic from "../../Assets/Partners/neptronic.png";
import Nidec from "../../Assets/Partners/nidec.png";
import Produal from "../../Assets/Partners/produal.png";
import Schneider from "../../Assets/Partners/schneider.png";
import Yaskawa from "../../Assets/Partners/yaskawa.png";

import BTUMeter from "../../Assets/BMSImages/btu-meter.svg";
import HVACControl from "../../Assets/BMSImages/hvac-control-system.svg";
import Sensors from "../../Assets/BMSImages/sensors.svg";
import VAV from "../../Assets/BMSImages/vav.svg";
import vfd from "../../Assets/BMSImages/vfd.svg";
import WaterMeter from "../../Assets/BMSImages/water-meter.svg";

/* Product Images. */
import KamstrupBTUMeter from "../../Assets/HVACProducts/kamstrup-btu-meter.png";
import EFCFanCoilUnitController from "../../Assets/HVACProducts/efc-fan-coil-unit-controller.png";
import EVCVAVUnitController from "../../Assets/HVACProducts/evc-vav-unit-controller.png";
import SchneiderBMS from "../../Assets/HVACProducts/schneider-bms.png";
import VFDDrivers from "../../Assets/HVACProducts/vfd-drivers.png";
import YaskawaLowHarmonicVFD from "../../Assets/HVACProducts/yaskawa-low-harmonic-vfd.png";
import SensorsImage from "../../Assets/HVACProducts/sensors.jpg";

const PartnerListImages = [
  Kamstrup,
  Neptronic,
  Nidec,
  Produal,
  Schneider,
  Yaskawa,
];

const HexaGrid = [
  [
    {
      text: "VFD",
      icon: vfd,
      img: VFDDrivers,
      type: 1,
      information: "",
      header: "VFD Drivers",
      sub_header: "Nidec (Emerson) drives",
    },
    {
      text: "BTU Meter",
      icon: BTUMeter,
      type: 1,
      img: KamstrupBTUMeter,
      information: "",
      header: "Kamstrup BTU Meter",
      sub_header: "Heat metering with ULTRAFLOW",
    },
  ],
  [
    {
      text: "Sensors",
      icon: Sensors,
      type: 1,
      img: SensorsImage,
      information: "",
      header: "Produal Sensors",
      sub_header: "Efficient solutions for high quality OEM products.",
    },
    {
      text: "Building Management System",
      icon: "",
      type: 0,
    },
    {
      text: "Water Meter",
      icon: WaterMeter,
      type: 1,
      img: KamstrupBTUMeter,
      information: "",
      header: "BTU water meters.",
      sub_header: "Heat metering with ULTRAFLOW.",
    },
  ],
  [
    {
      text: "VAV",
      icon: VAV,
      type: 1,
      information: "",
      header: "EVC VAV Unit controller.",
      img: EVCVAVUnitController,
      sub_header: "Unit controller with TFL Thermostat.",
    },
    {
      text: "HVAC",
      icon: HVACControl,
      type: 1,
      information: "",
      img: YaskawaLowHarmonicVFD,
      header: "Yaskawa Low Harmonic VFD.",
      sub_header: "Z1000 series fan & pump drives.",
    },
  ],
];

const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;
`;

const Container = styled(motion.div)`
  width: 80%;
  height: auto;
  display: flex;
  background-color: white;
  box-shadow: 20px 20px 60px rgba(170, 226, 156, 0.87),
    -20px -20px 60px rgba(217, 217, 217, 0.19);
  border-radius: 17px;
  padding: 10px;
  flex-direction: column;

  ${media.phone`
      width : 90%;
      height: 90%;
    `};
`;

const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 5px;
  font-family: Montserrat;
  font-weight: 500;
  color: #1e7c43;
  font-size: 24px;
  align-self: flex-start;
  ${media.phone`
    justify-content: center;
  
  `}
`;

const ContainerBody = styled(motion.div)`
  width: 80%;
  height: auto;
  display: flex;
  align-self: center;

  padding: 5px;
  margin-top: 50px;
  font-family: Montserrat;
  border-radius: 17px;
  box-shadow: 20px 20px 60px rgba(179, 244, 237, 0.65),
    -20px -20px 60px rgba(172, 232, 221, 0.09);
  justify-content: center;
  align-items: center;
  padding: 10px;
  ${media.phone`
    width : 90%;
  `}
`;

const ContainerFooter = styled.div`
  width: 80%;
  height: auto;
  padding: 5px;
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
  align-self: center;
  margin-bottom: 30px;
`;

const PartnerList = styled(Container)`
  margin-top: 50px;
`;

const PartnerListBody = styled(motion.div)`
  display: flex;
  width: -webkit-fill-available;
  height: 100%;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  ${media.phone`
    flex-direction: column;
  `}
`;

const PartnerListHeader = styled(ContainerHeader)``;

const PartnerCubes = styled(motion.div)`
  width: auto;
  height: 45px;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 15px 15px 60px rgba(221, 148, 148, 0.25),
    -10px -10px 60px rgba(0, 0, 0, 0.25);

  ${media.phone`
  
    margin-top: 10px;
    width : 90%;
    box-shadow: 5px 5px 10px rgba(221, 148, 148, 0.25),
                -5px -5px 10px rgba(0, 0, 0, 0.25);
    `}
`;

const Hexagon = styled(motion.div)``;
const HexContainer = styled.div``;
const Row = styled.div``;

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedInformation: "",
      selectedHeader: "",
      selectedImage: "",
      selectedSubheader: "",
    };
  }

  handlePopup = (index, index2) => {
    console.log(index, index2);
    console.log(HexaGrid[index][index2]);

    this.setState({
      showModal: true,
      selectedInformation: HexaGrid[index][index2].information,
      selectedHeader: HexaGrid[index][index2].header,
      selectedImage: HexaGrid[index][index2].img,
      selectedSubheader: HexaGrid[index][index2].sub_header,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <ParentContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.1 }}
      >
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.1 }}
        >
          <ContainerHeader>WHAT WE DO?</ContainerHeader>
          <ContainerBody>
            <HexContainer className="container">
              {HexaGrid.map((value, index) => (
                <Row className="row" key={index}>
                  {value.map((value2, index2) =>
                    value2.type ? (
                      <Hexagon
                        onClick={() => this.handlePopup(index, index2)}
                        key={index2}
                        whileTap={{ scale: 0.89 }}
                        className="hexagon"
                      >
                        {value2.text}
                        <img src={value2.icon} />
                      </Hexagon>
                    ) : (
                      <Hexagon key={index2} className="hexagon-center">
                        {value2.text}
                      </Hexagon>
                    )
                  )}
                </Row>
              ))}
            </HexContainer>
          </ContainerBody>
          <ContainerFooter>
            Virgo Technologies is a Premier Solutions Provider for BMS products
            from Schneider Electric, Neptronic VAVs, Kamstrup BTU meters, Nidec
            (formerly Emerson) and Yasakawa/VFD, & Produal Finland for Field
            Devices. We partner with M/S. Schneider Electric for the BMS system
            to provide Advanced technology Building Automation System. Our
            solutions range from implementing simple field control system to
            complete vision systems. We provide proven cost-effective, quality-
            engineered solutions, working in partnership to meet and exceed the
            expectations of our valued customers. Also.
          </ContainerFooter>
        </Container>
        <PartnerList>
          <PartnerListHeader>OUR PARTNERS</PartnerListHeader>
          <PartnerListBody
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.3 }}
          >
            {PartnerListImages.map((value, index) => (
              <PartnerCubes
                key={index}
                whileTap={{ scale: 0.88 }}
                animate={{ opacity: [0, 1], delay: 0.1 }}
              >
                <img src={value} alt={index} />
              </PartnerCubes>
            ))}
          </PartnerListBody>
        </PartnerList>
        <CustomModal
          showModal={this.state.showModal}
          onClose={this.handleClose}
          img={this.state.selectedImage}
          information={this.state.selectedInformation}
          subHeader={this.state.selectedSubheader}
          header={this.state.selectedHeader}
        ></CustomModal>
      </ParentContainer>
    );
  }
}
