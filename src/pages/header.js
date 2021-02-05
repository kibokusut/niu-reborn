import { Wrap } from "./headerstyles";
import React from "react";
import Menu from "./menu";
import styled from "styled-components";
import Logo from "./../images/Picture1.png";

const WrapSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 0;
  align-items: center;
  height: 100%;
`;

const WrapUl = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  ul {
    margin: 0;
    list-style: none;
    padding-inline-start: 0;
    position: relative;
    display: flex;
  }
`;

const Header = () => {
  return (
    <React.Fragment>
      <Wrap>
        <WrapSection>
          <WrapUl>
            <ul>
              <div
                style={{
                  minWidth: 60,
                  width: 60,
                  height: 27,
                  background: "white",
                  padding: 4,
                  borderRadius: 3,
                  boxSizing: "border-box",
                  marginRight: 10,
                }}
              >
                <img
                  style={{ width: "100%", objectFit: "cover", height: "100%" }}
                  src={Logo}
                  alt="logo"
                />
              </div>
              <Menu title="Project" />
              <Menu title="Group" />
              <Menu title="More" />
            </ul>
          </WrapUl>
          {/* <div style={{ background: "transparent", flex: 1, height: "100%" }}>
            dua
          </div> */}
        </WrapSection>
      </Wrap>
    </React.Fragment>
  );
};

export default Header;
