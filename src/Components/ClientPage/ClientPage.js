import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media, mediaTypes } from "../../Utils/media.js";
import ReactDOM from "react-dom";

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
import Prestige from "../../Assets/Clients/presitge.png";
import Raheja from "../../Assets/Clients/raheja.png";
import RMZ from "../../Assets/Clients/rmz.png";
import Salarpuria from "../../Assets/Clients/salarpuria.png";
import Embassy from "../../Assets/Clients/embassy.png";
import Kalyani from "../../Assets/Clients/kalyani.jpg";
import Bhartiya from "../../Assets/Clients/bhartiya.jpg";
import Total from "../../Assets/Clients/total.png";

const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Container = styled(motion.div)`
  width: 80%;
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

const ClientPods = styled(motion.div)`
  width: auto;
  min-width: 300px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 12px rgba(170, 226, 156, 0.87),
    -4px -4px 12px rgba(217, 217, 217, 0.1);
  user-select: none;
  cursor: pointer;
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
  color: #1e7c43;
  font-size: 24px;
  align-self: flex-start;
  justify-content: space-between;
  ${media.phone`
    justify-content: space-between;
  `}
`;

const ClientsList = [
  {
    id: "All State",
    logo: AllState,
  },
  {
    id: "Arista",
    logo: Arista,
  },
  {
    id: "Arris",
    logo: Arris,
  },
  {
    id: "Beckman Coulter",
    logo: BeckmanCoulter,
  },
  {
    id: "Diegeo",
    logo: Diageo,
  },
  {
    id: "Exxon Mobil",
    logo: ExxonMobil,
  },
  {
    id: "Google",
    logo: Google,
  },
  {
    id: "HP",
    logo: HP,
  },
  {
    id: "Juniper",
    logo: Juniper,
  },
  {
    id: "Misys",
    logo: Misys,
  },
  {
    id: "NTT Data",
    logo: NTTData,
  },
  {
    id: "SAP",
    logo: Sap,
  },
  {
    id: "Shell",
    logo: Shell,
  },
  {
    id: "Star",
    logo: Start,
  },
  {
    id: "Tech Mahindra",
    logo: TechMahindra,
  },
  {
    id: "Tesco",
    logo: Tesco,
  },
  {
    id: "UST Global",
    logo: USTGlobal,
  },
  {
    id: "Wells Fargo",
    logo: WellsFargo,
  },
  {
    id: "Prestige",
    logo: Prestige,
  },
  {
    id: "Raheja",
    logo: Raheja,
  },
  {
    id: "RMZ",
    logo: RMZ,
  },
  {
    id: "Salarpuria",
    logo: Salarpuria,
  },
  {
    id: "Embassy",
    logo: Embassy,
  },
  {
    id: "Kalyani",
    logo: Kalyani,
  },
  {
    id: "Bhartiya",
    logo: Bhartiya,
  },
  {
    id: "Total",
    logo: Total,
  },
];

const SearchBar = styled.input`
  border-radius: 10px;
  border: 0.1px solid #cccccc;
  font-family: Montserrat;
  padding: 10px;
  font-size: 12px;
`;
export default class ClientPage extends Component {
  constructor() {
    super();
    this.state = {
      filteredClients: ClientsList,
    };
  }

  handleSearch = (e) => {
    const filteredClients = ClientsList.filter((client) =>
      client.id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      filteredClients: filteredClients,
    });
  };
  render() {
    return (
      <ParentContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], delay: 0.4 }}
      >
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], delay: 0.5 }}
        >
          <ContainerHeader>
            OUR CLIENTS
            <SearchBar
              type="search"
              placeholder="Search Client..."
              onChange={(e) => this.handleSearch(e)}
            ></SearchBar>
          </ContainerHeader>
          {this.state.filteredClients.length > 0 ? (
            this.state.filteredClients.map((value, index) => (
              <ClientPods
                key={index}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.1 }}
                whileTap={{ scale: 0.88 }}
              >
                <img
                  src={value.logo}
                  alt={index.logo}
                  style={{ transform: "scale(0.7)" }}
                />
              </ClientPods>
            ))
          ) : (
            <div>No Clients</div>
          )}
        </Container>
      </ParentContainer>
    );
  }
}
