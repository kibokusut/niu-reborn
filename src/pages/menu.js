import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

const Li = styled.li`
  background: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? "black" : "white")};
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  /* height: 100%; */

  &:hover {
    background: ${(props) =>
      props.active ? "white" : "rgba(209, 209, 240, 0.2)"};
    /* background-color: rgba(209, 209, 240, 0.2); */
  }
`;

const MenuCollapse = styled.div`
  position: absolute;
  left: 0;
  background: white;
  min-width: 100px;
  margin-top: 6px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  color: black;
`;

const Menu = (props) => {
  const node = useRef();
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShow(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <React.Fragment>
      <div ref={node} style={{ position: "relative", marginRight: 5 }}>
        <Li active={show} onClick={() => setShow(!show)}>
          {props.title}
          <FaChevronDown style={{ marginLeft: 5 }} />
        </Li>
        {show && <MenuCollapse>menu</MenuCollapse>}
      </div>
    </React.Fragment>
  );
};

export default Menu;
