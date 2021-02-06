import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Header from "./pages/header/header";
import { Content } from "./customcss/content/content";
import Eticket from "./pages/eticket/eticket";
import Publish from "./pages/publish/publish";
import Broadcast from "./pages/broadcast/broadcast";
import Blasting from "./pages/blasting/blasting";
import Reporting from "./pages/reporting/reporting";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route path="/eticket" component={Eticket}></Route>
          <Route path="/publish" component={Publish}></Route>
          <Route path="/broadcast" component={Broadcast}></Route>
          <Route path="/blasting" component={Blasting}></Route>
          <Route path="/reporting" component={Reporting}></Route>
        </Switch>
      </Content>
    </Router>
  );
};

export default Routing;
