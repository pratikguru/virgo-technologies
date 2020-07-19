import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../Utils/media.js";

import UniMotorFM from "../../Assets/Industrial Products/unimotor-fm.jpg";

const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled(motion.div)`
  width: 80%;
  min-height: 500px;
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
  width: -webkit-fill-available;
  height: auto;
  padding: 10px;
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

const ContainerSubHeader = styled(ContainerHeader)`
  font-weight: 400;
  color: #2b2929;
  font-size: 16px;
  align-self: flex-start;
`;

const ContainerBody = styled.div`
  width: -webkit-fill-available;
  height: auto;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 450;
`;

const ProductPods = styled(motion.div)`
  width: 450px;

  height: 450px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 12px rgba(170, 226, 156, 0.87),
    -4px -4px 12px rgba(217, 217, 217, 0.1);
  user-select: none;
  cursor: pointer;
  margin: 10px;
  flex-direction: column;
  ${media.phone`
  margin-top: 10px;
`}
`;

const ProductPodHeader = styled.div`
  width: -webkit-fill-available;
  height: auto;
  display: flex;
  align-self: flex-start;
  color: black;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  padding: 10px;
  height: 45px;
  align-items: center;
  justify-content: flex-start;
`;

const ProductPodSubHeader = styled.div`
  width: -webkit-fill-available;
  height: auto;
  display: flex;
  align-self: flex-start;
  color: #cccccc;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  height: auto;
  margin-left: 10px;
  margin-top: -15px;
  align-items: center;
  justify-content: flex-start;
`;

const ProductContainer = styled.div`
  width: -webkit-fill-available;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
`;

const SearchBar = styled.input`
  border-radius: 10px;
  border: 0.1px solid #cccccc;
  font-family: Montserrat;
  padding: 10px;
  font-size: 12px;
`;

const ProductPodFooter = styled.div`
  width: -webkit-fill-available;
  height: auto;
  padding: 15px;
  display: flex;
  margin-top: auto;
`;

const CustomButton = styled(motion.div)`
  width: 120px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  color: black;
  background-color: #98dcb3;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  font-weight: 450;
  user-select: none;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HVACProductImageList = [
  {
    id: "UniMotor FM",
    img: UniMotorFM,
    sub_header: "Performance AC Brushless Servo Motor",
    information:
      "Unimotor FM is a brushless AC servo motor range performance matched for use with Servo drives.",
  },
];

export default class ProductListing extends Component {
  constructor() {
    super();
    this.state = {
      filteredProducts: HVACProductImageList,
    };
  }

  handleSearch = (e) => {
    const filteredClients = HVACProductImageList.filter((client) =>
      client.id.toLowerCase().includes(e.target.value)
    );
    this.setState({
      filteredProducts: filteredClients,
    });
  };

  render() {
    return (
      <ParentContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], delay: 0.4 }}
      >
        <Container>
          <ContainerHeader>
            Industrial Products
            <SearchBar
              type="search"
              placeholder="Search Client..."
              onChange={(e) => this.handleSearch(e)}
            ></SearchBar>
          </ContainerHeader>
          <ContainerSubHeader>
            We trade one of the best products in town.
          </ContainerSubHeader>

          <ProductContainer>
            {this.state.filteredProducts.length > 0 ? (
              this.state.filteredProducts.map((value, index) => (
                <ProductPods
                  key={index}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.1 }}
                >
                  <ProductPodHeader>{value.id}</ProductPodHeader>
                  <ProductPodSubHeader>{value.sub_header}</ProductPodSubHeader>
                  <img
                    src={value.img}
                    alt={index}
                    style={{ transform: "scale(0.8)" }}
                  />
                  <ContainerBody>{value.information}</ContainerBody>
                  <ProductPodFooter>
                    <CustomButton whileTap={{ scale: 0.88 }}>
                      {" "}
                      DOWNLOAD BROCHURE{" "}
                    </CustomButton>
                  </ProductPodFooter>
                </ProductPods>
              ))
            ) : (
              <div>No Products here.</div>
            )}
          </ProductContainer>
        </Container>
      </ParentContainer>
    );
  }
}
