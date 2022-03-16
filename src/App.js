import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/icons/logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#232427");

  const override = {
    display: "block",
    height: "100vh",
    margin: "auto",
    backGround: "#232427",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);
  return (
    <>
      <div className="container">
        {loading ? (
          <HashLoader
            color={"#BD0F71"}
            loading={loading}
            css={override}
            size={50}
            backGround="#232427"
          />
        ) : (
          <div>
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
        )}
      </div>
    </>
  );
}

export default App;
