import {
  Wrap,
  WrapLogo,
  WrapSection,
  WrapUl,
  WrapUl2,
} from "../../customcss/header/header";
import { WrapSubmenu, Links } from "../../customcss/submenu/submenu";
import React from "react";
import Menu from "./menu";
import Logo from "./../../images/Picture1.png";
import {
  MenuCollapse,
  MenuCollapseright,
} from "./../../customcss/menucollapse/menucollapse";
import { listMenu } from "./../../data/listmenu";
import { MdColorLens } from "react-icons/md";

const Header = () => {
  return (
    <React.Fragment>
      <Wrap>
        <WrapSection>
          <WrapUl>
            <ul>
              <WrapLogo>
                <img src={Logo} alt="logo" />
              </WrapLogo>
              <strong style={{ fontWeight: 500 }}>
                Customer Relationship Management
              </strong>
              {/* <Menu title="Project">
                <MenuCollapse>
                  <a
                    style={{
                      textDecoration: "none",
                      background: "#eee",
                      width: "100%",
                      display: "flex",
                      padding: "8px 12px",
                      boxSizing: "border-box",
                    }}
                    href="/"
                  >
                    tete
                  </a>
                </MenuCollapse>
              </Menu> */}
            </ul>
          </WrapUl>
          <WrapUl2>
            <ul>
              <Menu
                title={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: 60,
                    }}
                  >
                    <MdColorLens size="18px" />
                    Theme
                  </div>
                }
              >
                <MenuCollapseright>sdsd</MenuCollapseright>
              </Menu>
              <Menu title="Notifikasi">
                <MenuCollapseright>sdsd</MenuCollapseright>
              </Menu>
              <Menu title="profil">
                <MenuCollapseright>sdsd</MenuCollapseright>
              </Menu>
            </ul>
          </WrapUl2>
        </WrapSection>
        <WrapSubmenu>
          {listMenu.map(({ nama, icon, link, active }) => {
            return (
              <div key={nama} style={{ marginRight: 5 }}>
                <Links
                  to={`${link}`}
                  activeStyle={{
                    background: "#292961",
                    color: "white",
                  }}
                >
                  {icon}
                  {nama}
                </Links>
              </div>
            );
          })}
        </WrapSubmenu>
      </Wrap>
    </React.Fragment>
  );
};

export default Header;
