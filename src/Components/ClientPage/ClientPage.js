import React, {Component} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {media, mediaTypes} from "../../Utils/media.js";


/* Client images. */

import AllState from "../../Assets/Clients/all-state.png";
import Arista from "../../Assets/Clients/arista.png";
import Arris from "../../Assets/Clients/arris.png";
import BeckmanCoulter from "../../Assets/Clients/beckman-coulter.png";
import Boeing from "../../Assets/Clients/boeing.png";
import Diageo from "../../Assets/Clients/diageo.png";
import ExxonMobil from "../../Assets/Clients/exxon-mobil.jpg";
import Google from "../../Assets/Clients/google.png";
import HP from "../../Assets/Clients/hp.png";
import Juniper from "../../Assets/Clients/juniper.png";
import Misys from "../../Assets/Clients/misys.png";
import NTTData from "../../Assets/Clients/ntt-data.png";
import Sap from "../../Assets/Clients/sap.png";
import Shell from "../../Assets/Clients/shell.png";
import Start from "../../Assets/Clients/start.png";
import TechMahindra from "../../Assets/Clients/tech-mahindra.png";
import Tesco from "../../Assets/Clients/tesco.png";
import USTGlobal from "../../Assets/Clients/ust-global.png";
import WellsFargo from "../../Assets/Clients/wells-fargo.png";


const ParentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`

const Container = styled(motion.div)`
    width : 80%;
    min-height: 500px;
    height: auto;
    display: flex;
    background-color: white;
    box-shadow: 3px 3px 20px rgba(170, 226, 156, 0.87), 
    -3px -3px 20px rgba(217, 217, 217, 0.1);
    border-radius: 17px;
    padding: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin: 10px;

    ${media.phone`
      width : 90%;
      height: 90%;
    `};
`;

const ClientPods = styled.div`
  width : auto;
  min-width : 300px;
  height: 200px;
  border-radius : 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 12px rgba(170, 226, 156, 0.87), 
  -4px -4px 12px rgba(217, 217, 217, 0.1);

  margin: 10px;
  ${media.phone`
    margin-top: 10px;
  `}
`;

const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 5px;
  font-family: Montserrat;
  font-weight: 500;
  color: #1E7C43;
  font-size :24px;
  align-self: flex-start;

  ${media.phone`
    justify-content: center;
  `}
`;

const ClientsList = [
  AllState,
  Arista,
  Arris,
  BeckmanCoulter,
  Boeing,
  Diageo,
  ExxonMobil,
  Google,
  HP,
  Juniper,
  Misys,
  NTTData,
  Sap,
  Shell,
  Start,
  TechMahindra,
  Tesco,
  USTGlobal,
  WellsFargo
]


export default class ClientPage extends Component {

    constructor(){
        super();
    }

    render(){
        return(
          <ParentContainer
            initial={{opacity:0}}
            animate={{opacity: [0, 1], delay:0.4}}
          >
            <Container
              initial={{opacity:0}}
              animate={{opacity: [0, 1], delay:0.5}}
            >
              <ContainerHeader>
                OUR CLIENTS
              </ContainerHeader>
              {
               ClientsList.map((value, index) => 
                  <ClientPods
                    key={index}
                    animate={{opacity:[0, 1]}}
                    transition={{delay: 0.5}}
                  >
                  <img src={value} alt={index} style={{transform:"scale(0.7)"}}/>
                  </ClientPods>
                )
              }
            </Container>
          </ParentContainer>
      )
    }
  }