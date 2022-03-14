import { Helmet } from "react-helmet";
import logo from "./assets/icons/logo.svg";

function App() {
  return (
    <>
      <div className=" ">
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href={logo} type="image/x-icon" />
          <title>Ryan M | Software Developer</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div class=" text-primarypink">r</div>
      </div>
    </>
  );
}

export default App;
