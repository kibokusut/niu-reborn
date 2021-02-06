import React, { useState } from "react";
import { Dummy } from "../../../data/listmenu";

const Facebook = ({ activeTab }) => {
  const [cardActive, setCardactive] = useState(0);
  if (activeTab !== 1) {
    return null;
  }

  return (
    <React.Fragment>
      <section
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <nav>
          <ul
            style={{
              display: "flex",
              width: "100%",
              // background: "pink",
              justifyContent: "space-around",
              height: 40,
            }}
          >
            <li
              onClick={() => setCardactive(1)}
              style={{
                width: "16.6%",
                borderBottom: "4px solid red",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              New
            </li>
            <li
              onClick={() => setCardactive(2)}
              style={{
                width: "16.6%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              Open
            </li>
            <li
              onClick={() => setCardactive(3)}
              style={{
                width: "16.6%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              Progress
            </li>
            <li
              onClick={() => setCardactive(4)}
              style={{
                width: "16.6%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              Closed
            </li>
            <li
              onClick={() => setCardactive(5)}
              style={{
                width: "16.6%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              Pending
            </li>
            <li
              onClick={() => setCardactive(6)}
              style={{
                width: "16.6%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              All
            </li>
          </ul>
        </nav>
        <div
          style={{
            flex: 1,
            display: "flex",
            width: "100%",
            // background: "rgba(209,209,240,0.2)",
            // background: "#f1f5f9",
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
  if (activeCard !== 1) {
    return null;
  }
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {Dummy.map((nama, index) => {
          return (
            <div
              key={index}
              style={{
                height: 150,
                width: "25%",
                padding: 5,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  background: "white",
                  height: "100%",
                  width: "100%",
                  borderRadius: 8,
                  border: "1px solid #e5e2e2",
                  boxShadow:
                    "rgb(0 0 0 / 9%) 0px 4px 6px -10px, rgb(0 0 0 / 10%) 0px 2px 4px 0px",
                }}
              >
                sasas
              </div>
            </div>
          );
        })}

        {/* <div
          style={{
            height: 150,
            width: "25%",
            padding: 5,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "white",
              height: "100%",
              width: "100%",
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
            }}
          >
            sasas
          </div>
        </div> */}
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
