import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import { Basic } from "./components/Basic";
import { Activation } from "./components/Activation";
import { Similitude } from "./components/Similutude";
import { Indentation } from "./components/Indentation";
import { Sofia } from "./components/Sofia";
import { MaTerialDInVerter } from "./components/MaTerialDInVerter";
import "./scss/styles.scss";

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
    <Router>
      <Header setIsSidebarActive={setIsSidebarActive} />
      {isSidebarActive && <Sidebar setIsSidebarActive={setIsSidebarActive} />}

      <Switch>
        <Route exact path="/">
          <Basic />
        </Route>
        <Route path="/activation">
          <Activation />
        </Route>
        <Route path="/similitude">
          <Similitude />
        </Route>
        <Route path="/indentation">
          <Indentation />
        </Route>
        <Route path="/sofia">
          <Sofia />
        </Route>
        <Route path="/maTerialDInVerter">
          <MaTerialDInVerter />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
