import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { People } from "./views/people";
import injectContext from "./store/appContext";
import DebugMenu from "./views/debugmenu";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planet } from "./views/planets";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/debug" element={<DebugMenu />} />
            {/*                |path   |url key | */}
            <Route exact path="/planets/:planetId" element={<Planet />} />
            <Route exact path="/people/:peopleId" element={<People />} />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
