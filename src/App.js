import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/icons/logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import HashLoader from "react-spinners/HashLoader";
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

function App() {
  const [loading, setLoading] = useState(false);
  let [showToTop, setShowToTop] = useState(false);
  let [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(pageYOffset);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageYOffset]);

  let handleScroll = () => {
    let scrollHeight = window.scrollY;
    setPageYOffset(scrollHeight);
  };

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

            <Fade bottom>
              <div className={`${pageYOffset > 578 ? "to-top" : "hide"}`}>
                <Fade top>
                  <HashLink to="/#hero">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </HashLink>
                </Fade>
              </div>
            </Fade>

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
