import styled from "styled-components";

export const Wrap = styled.header`
  z-index: 2;
  background-color: #292961;
  min-height: 45px;
  height: 45px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 0;
`;

export const WrapSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 15px;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
`;

export const WrapUl = styled.div`
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
    align-items: center;
  }
`;

export const WrapUl2 = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  ul {
    height: 32px;
    margin: 0;
    list-style: none;
    padding-inline-start: 0;
    position: relative;
    display: flex;
  }
`;

export const WrapLogo = styled.div`
  min-width: 70px;
  width: 70px;
  height: 32px;
  background: white;
  padding: 4px;
  border-radius: 3px;
  box-sizing: border-box;
  margin-right: 10px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;
