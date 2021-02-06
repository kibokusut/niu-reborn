import React, { useState } from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaLine,
  FaTelegram,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Facebook from "./contentticket/facebook";
import Line from "./contentticket/line";
import Twitter from "./contentticket/twitter";
import Telegram from "./contentticket/telegram";
import Instagram from "./contentticket/instagram";
import Whatsapp from "./contentticket/whatsapp";

const WrapSocial = styled.div`
  width: 250px;
  box-sizing: border-box;
  border-right: 1px solid #e7e7e7;
  padding-left: 15px;
  padding-right: 15px;
  ul {
    list-style: none;
    padding-inline-start: 0;
    li {
    }
  }
`;

const SocialLink = styled.li`
  background: ${({ active }) =>
    active ? "rgb(162 162 192 / 20%)" : "transparent"};
  border-radius: 4px;
  padding: 7px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background: rgb(162 162 192 / 20%);
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  box-sizing: border-box;
  display: flex;
`;

const Eticket = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <React.Fragment>
      <Container>
        <WrapSocial>
          <ul>
            <SocialLink
              onClick={() => setActiveTab(1)}
              active={activeTab === 1 ? activeTab : false}
            >
              <FaFacebook
                size="21px"
                color="#1877f2"
                style={{ marginRight: 10 }}
              />
              <strong style={{ fontWeight: 400, fontSize: 13 }}>
                Facebook
              </strong>
            </SocialLink>
            <SocialLink
              onClick={() => setActiveTab(2)}
              active={activeTab === 2 ? activeTab : false}
            >
              <FaLine size="21px" color="#0abc0a" style={{ marginRight: 10 }} />
              <strong style={{ fontWeight: 400, fontSize: 13 }}>Line</strong>
            </SocialLink>
            <SocialLink
              onClick={() => setActiveTab(3)}
              active={activeTab === 3 ? activeTab : false}
            >
              <FaTwitterSquare
                size="21px"
                color="#1da1f2"
                style={{ marginRight: 10 }}
              />
              <strong style={{ fontWeight: 400, fontSize: 13 }}>Twitter</strong>
            </SocialLink>
            <SocialLink
              onClick={() => setActiveTab(4)}
              active={activeTab === 4 ? activeTab : false}
            >
              <FaWhatsappSquare
                size="21px"
                color="#00bfa5"
                style={{ marginRight: 10 }}
              />
              <strong style={{ fontWeight: 400, fontSize: 13 }}>
                Whatsapp
              </strong>
            </SocialLink>
            <SocialLink
              onClick={() => setActiveTab(5)}
              active={activeTab === 5 ? activeTab : false}
            >
              <FaTelegram
                size="21px"
                color="#249cfb"
                style={{ marginRight: 10 }}
              />
              <strong style={{ fontWeight: 400, fontSize: 13 }}>
                Telegram
              </strong>
            </SocialLink>
            <SocialLink
              onClick={() => setActiveTab(6)}
              active={activeTab === 6 ? activeTab : false}
            >
              <FaInstagramSquare
                size="21px"
                color="#d9153a"
                style={{ marginRight: 10 }}
              />
              <strong style={{ fontWeight: 400, fontSize: 13 }}>
                Instagram
              </strong>
            </SocialLink>
          </ul>
        </WrapSocial>
        <div
          style={{
            flex: 1,
            padding: 10,
            boxSizing: "border-box",
            height: "100%",
          }}
        >
          <Facebook activeTab={activeTab} />
          <Line activeTab={activeTab} />
          <Twitter activeTab={activeTab} />
          <Telegram activeTab={activeTab} />
          <Instagram activeTab={activeTab} />
          <Whatsapp activeTab={activeTab} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Eticket;
