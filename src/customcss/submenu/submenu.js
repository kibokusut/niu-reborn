import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const WrapSubmenu = styled.header`
  box-sizing: border-box;
  background: white;
  color: black;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

export const Links = styled(NavLink)`
  background: rgba(209, 209, 240, 0.2);
  /* background: ${({ active }) =>
    active ? "red " : "rgba(209,209,240,0.2)"}; */
  font-size: 12.5px;
  border-radius: 3px;
  text-decoration: none;
  display: flex;
  padding: 6px 12px;
  box-sizing: border-box;
  align-items: center;
  color: black;

  &:hover {
    background: #292961;
    color: white;
    font-size: 12.5px;
    border-radius: 3px;
    text-decoration: none;
    display: flex;
    padding: 6px 12px;
  }
`;
