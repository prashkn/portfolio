import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Poppins/Poppins-Medium.ttf";
import "./fonts/Poppins/Poppins-Regular.ttf";
import "./fonts/Poppins/Poppins-SemiBold.ttf";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Home from "./routes/Home";
import Work from "./routes/Work";
import Projects from "./routes/Projects";
import CapitalOne from "./routes/CapitalOne";
import AbbVie from "./routes/AbbVie";
import UIUC from "./routes/UIUC";
import Cisco from "./routes/Cisco";
import TheCodingSchool from "./routes/TheCodingSchool";
import Stanford from "./routes/Stanford";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="Work" element={<Work />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="CapitalOne" element={<CapitalOne />} />
        <Route path="AbbVie" element={<AbbVie />} />
        <Route path="UIUC" element={<UIUC />} />
        <Route path="Cisco" element={<Cisco />} />
        <Route path="TheCodingSchool" element={<TheCodingSchool />} />
        <Route path="Stanford" element={<Stanford />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
