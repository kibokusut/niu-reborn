import React, { useState } from "react";
import { Dummy } from "../../../data/listmenu";
import styled from "styled-components";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaEllipsisV,
  FaInfoCircle,
  FaTicketAlt,
  FaEye,
} from "react-icons/fa";

const TabTicket = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 0 15px 0 15px;
  margin-right: 8px;
  background: ${({ active }) => (active ? "#0572e7" : "transparent")};
  color: ${({ active }) => (active ? "white" : "blak")};
  font-weight: 400;
  font-size: 13px;

  &:hover {
    background: #0572e7;
    color: white;
    border: 1px solid #0572e7;
  }
`;

const WrapComment = styled.div`
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  padding: 3px 7px;
  box-sizing: border-box;
  &:hover {
    background: rgb(240 242 245);
    border-radius: 3px;
    padding: 3px 7px;
    box-sizing: border-box;
  }
`;

const WrapInfoSocialDetail = styled.div`
  visibility: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* background: #d9d9d9; */
  background: #f0f2f5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapInfoSocial = styled.div`
  background: #f0f2f5;
  padding: 5px 10px;
  border-radius: 5px;
  position: relative;
  transition: all 0.3s;

  &:hover {
    ${WrapInfoSocialDetail} {
      visibility: visible;
    }
  }
`;

const Wrapcheck = styled.div`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  position: absolute;
  left: 0;
  /* right: 0; */
  width: 100px;
  top: 0;
  bottom: 0;
  background: #fbfbfb;
`;

const CartTicket = styled.div`
  background: #fbfbfb;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 6px;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    ${Wrapcheck} {
      visibility: visible;
    }
  }
`;

const Facebook = ({ activeTab }) => {
  const [cardActive, setCardactive] = useState(1);
  if (activeTab !== 1) {
    return null;
  }

  return (
    <React.Fragment>
      <section
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <nav
          style={{
            paddingLeft: 10,
            background: "#ececf2",
            boxSizing: "border-box",
            borderRadius: 4,
            marginTop: 5,
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          <ul
            style={{
              display: "flex",
              width: "100%",
              height: 30,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <TabTicket
              onClick={() => setCardactive(1)}
              active={cardActive === 1 ? cardActive : false}
            >
              New
            </TabTicket>
            <TabTicket
              onClick={() => setCardactive(2)}
              active={cardActive === 2 ? cardActive : false}
            >
              Open
            </TabTicket>
            <TabTicket
              onClick={() => setCardactive(3)}
              active={cardActive === 3 ? cardActive : false}
            >
              Progress
            </TabTicket>
            <TabTicket
              onClick={() => setCardactive(4)}
              active={cardActive === 4 ? cardActive : false}
            >
              Closed
            </TabTicket>
            <TabTicket
              onClick={() => setCardactive(5)}
              active={cardActive === 5 ? cardActive : false}
            >
              Pending
            </TabTicket>
            <TabTicket
              onClick={() => setCardactive(6)}
              active={cardActive === 6 ? cardActive : false}
            >
              All
            </TabTicket>
          </ul>
        </nav>

        <div
          style={{
            flex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <ListCardNew activeCard={cardActive} />
          <ListCardOpen activeCard={cardActive} />
          <ListCardProgress activeCard={cardActive} />
          <ListCardClosed activeCard={cardActive} />
          <ListCardPending activeCard={cardActive} />
          <ListCardAll activeCard={cardActive} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Facebook;

const ListCardNew = ({ activeCard }) => {
  const [checkCards, setCheckCards] = useState(false);
  const [count, setCount] = useState(0);
  // const [checkCards, setCheckCards] = useState("");
  if (activeCard !== 1) {
    return null;
  }
  return (
    <React.Fragment>
      <div style={{ padding: "0 10px", boxSizing: "border-box" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 4,
            paddingLeft: 5,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              marginRight: 15,
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              style={{ height: 16, width: 16, cursor: "pointer" }}
              type="checkbox"
              id="all"
            />
            <label htmlFor="all">1 / 100 ticket dipilih</label>
          </div>
          <div style={{ marginRight: 15 }}>
            <span style={{ marginRight: 5 }}>Akun</span>
            <select
              style={{
                outline: "none",
                borderRadius: 3,
                border: "1px solid #e7e7e7",
                padding: "5px 10px",
                minWidth: 100,
                cursor: "pointer",
              }}
              name=""
              id=""
            >
              <option value="">sss</option>
            </select>
          </div>
          <div style={{ marginRight: 15 }}>
            <span style={{ marginRight: 5 }}>Categori</span>
            <select
              style={{
                outline: "none",
                borderRadius: 3,
                border: "1px solid #e7e7e7",
                padding: "5px 10px",
                minWidth: 100,
                cursor: "pointer",
              }}
              name=""
              id=""
            >
              <option value="">sss</option>
            </select>
          </div>
          <button
            style={{
              outline: "none",
              borderRadius: 3,
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              background: "#292961",
              color: "white",
            }}
          >
            Distibute Ticket
          </button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {Dummy.map((nama, index) => {
          return (
            <div
              key={index}
              style={{
                width: "33.3%",
                padding: 10,
                boxSizing: "border-box",
                position: "relative",
              }}
            >
              <CartTicket>
                <section
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                    position: "relative",
                  }}
                >
                  <Wrapcheck show={checkCards}>
                    <input
                      name="list"
                      onChange={(e) => {
                        const { checked, type } = e.target;

                        if (type === "checkbox" && checked === true) {
                          setCount(count + 1);
                        } else {
                          setCount(count - 1);
                        }

                        console.log(count);
                      }}
                      style={{ height: 16, width: 16 }}
                      type="checkbox"
                    />
                  </Wrapcheck>
                  <div
                    style={{
                      fontSize: 10,
                    }}
                  >
                    23 februari 2020
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        fontSize: 10,
                        background: "#fceceb",
                        color: "#e85347",
                        padding: "4px 10px 4px 10px",
                        borderRadius: 3,
                        marginRight: 5,
                      }}
                    >
                      information
                    </div>
                    <div>
                      <FaEllipsisV />
                    </div>
                  </div>
                </section>
                <section
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <div style={{ height: 35, width: 35, marginRight: 5 }}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: 4,
                        }}
                        src="https://dashlite.themenio.com/demo3/images/avatar/b-sm.jpg"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 12,
                          color: "#526484",
                          marginBottom: 5,
                          marginLeft: 2,
                        }}
                      >
                        Jono
                      </p>
                      <WrapInfoSocial>
                        <WrapInfoSocialDetail onClick={() => alert("ok")}>
                          <FaEye style={{ marginRight: 5 }} /> detail
                        </WrapInfoSocialDetail>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 12,
                            color: "black",
                            fontWeight: 600,
                            display: "flex",
                          }}
                        >
                          <FaFacebookSquare
                            color="#0572e7"
                            size="15px"
                            style={{ marginRight: 3 }}
                          />
                          Abinaya facebook
                        </p>
                        <p style={{ margin: 0, fontSize: 12, color: "black" }}>
                          Lorem ipsum dolor sit amet,
                        </p>
                      </WrapInfoSocial>
                    </div>
                  </div>
                </section>
                <section style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ flex: 1 }}>
                    <FaInfoCircle
                      color="rgb(82, 100, 132)"
                      style={{ marginRight: 5 }}
                    />
                    <FaTicketAlt color="rgb(82, 100, 132)" />
                  </div>
                  <WrapComment>
                    <BsChatSquareDots />
                    <span style={{ marginLeft: 4 }}>Comment</span>
                  </WrapComment>
                </section>
              </CartTicket>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const ListCardOpen = ({ activeCard }) => {
  if (activeCard !== 2) {
    return null;
  }
  return <div>Open</div>;
};

const ListCardProgress = ({ activeCard }) => {
  if (activeCard !== 3) {
    return null;
  }
  return <div>Progress</div>;
};

const ListCardClosed = ({ activeCard }) => {
  if (activeCard !== 4) {
    return null;
  }
  return <div>Closed</div>;
};

const ListCardPending = ({ activeCard }) => {
  if (activeCard !== 5) {
    return null;
  }
  return <div>Pending</div>;
};

const ListCardAll = ({ activeCard }) => {
  if (activeCard !== 6) {
    return null;
  }
  return <div>All</div>;
};
