import React, {Component} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import { render } from "@testing-library/react";

import {media, mediaTypes} from "../../Utils/media.js";


/* Import logos and images. */

import Kamstrup from "../../Assets/Partners/kamstrup.png";
import Neptronic from "../../Assets/Partners/neptronic.png";
import Nidec from "../../Assets/Partners/nidec.png";
import Produal from "../../Assets/Partners/produal.png";
import Schneider from "../../Assets/Partners/schneider.png";
import Yaskawa from "../../Assets/Partners/yaskawa.png";
const URL ="../../Assets/Partners";

const PartnerListImages = [
    Kamstrup, 
    Neptronic, 
    Nidec, 
    Produal, 
    Schneider, 
    Yaskawa
  ]


const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Container = styled(motion.div)`
    width : 80%;
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
  color: #1E7C43;
  font-size :24px;
  align-self: flex-start;
`;


const ContainerBody = styled(motion.div)`
  width: 80%;
  display: flex;
  align-self: center;
  height: 250px;
  padding: 5px;
  margin-top: 50px;
  font-family: Montserrat;
  border-radius: 17px;
  box-shadow: 20px 20px 60px rgba(179, 244, 237, 0.65), 
  -20px -20px 60px rgba(172, 232, 221, 0.09);
`;

const ContainerFooter = styled.div`
  width: 80%;
  height: auto;
  padding: 5px;
  margin-top: 30px;
  font-size : 16px;
  text-align: center;
  align-self: center;
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

const PartnerListHeader = styled(ContainerHeader)`
`;

const PartnerCubes = styled(motion.div)`

  width : auto;
  height : 45px;
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
  `}

             `;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.02,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default class HomePage extends Component {
    constructor(){
        super();
    }

    render(){
        return (
          <ParentContainer
          initial={{opacity: 0}}
          animate={{opacity: [0,1]}}
          transition={{delay:0.4, ease:"linear"}} 
          >
            <Container 
              initial={{opacity: 0}}
              animate={{opacity: [0,1]}}
              transition={{delay: 0.5}} 
              >
              <ContainerHeader>
                WHAT WE DO?
              </ContainerHeader>
              <ContainerBody></ContainerBody>
              <ContainerFooter>
              Virgo Technologies is a Premier Solutions Provider for BMS products from Schneider Electric, Neptronic VAVs, Kamstrup BTU meters, Nidec (formerly Emerson) and Yasakawa/VFD, & Produal Finland for Field Devices. We partner with M/S. Schneider Electric for the BMS system to provide Advanced technology Building Automation System. Our solutions range from implementing simple field control system to complete vision systems. We provide proven cost-effective, quality- engineered solutions, working in partnership to meet and exceed the expectations of our valued customers.
              </ContainerFooter>
            </Container>
            <PartnerList>
          	  <PartnerListHeader>
                OUR PARTNERS
              </PartnerListHeader>
              <PartnerListBody
                initial={{opacity: 0}}
                animate={{opacity:[0, 1]}}
                transition={{delay: 0.7}}
              >
                {
                  PartnerListImages.map((value, index) => 
                  <PartnerCubes
                    key={index}
                    whileTap={{scale:0.88}}
                    animate={{opacity:[0, 1], delay:0.1}}
                    
                  > 
                    {console.log(value)}
                    <img src={value} alt={index}/>
                  </PartnerCubes>
                  )
                }
              </PartnerListBody>
            </PartnerList>
          </ParentContainer>
        )
    }
}