import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/icons/logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href={logo} type="image/x-icon" />
          <title>Ryan M | Software Developer</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
