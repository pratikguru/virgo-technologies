import React, {Component} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {media, mediaTypes} from "../../Utils/media.js";


/* Client images. */



const ParentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Container = styled(motion.div)`
    width : 80%;
    min-height: 500px;
    height: auto;
    display: flex;
    background-color: white;
    box-shadow: 20px 20px 60px rgba(170, 226, 156, 0.87), 
    -20px -20px 60px rgba(217, 217, 217, 0.1);
    border-radius: 17px;
    padding: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;

    ${media.phone`
      width : 90%;
      height: 90%;
    `};
`;

const ClientPods = styled.div`
  width : 200px;
  height: 200px;
  border-radius : 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin: 10px;
  ${media.phone`
    margin-top: 10px;
  `}
`;


export default class ClientPage extends Component {

    constructor(){
        super();
    }


    render(){
        return(
          <ParentContainer>
            <Container
              initial={{opacity:0}}
              animate={{opacity: [0, 1], delay:0.4}}
            >
              {
                [...Array(10)].map((value, index) => 
                  <ClientPods
                    animate={{opacity:[0, 1], delay:0.5 * index}}
                  
                  />
                
                )
              }


            </Container>
          </ParentContainer>
      )
    }
  }