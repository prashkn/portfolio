import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { motion } from "framer-motion";
//import { useState } from "react";
//import test from "../styles/test.module.css";
import Nav from "react-bootstrap/Nav";
import fonts from "../styles/fonts.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  /*
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    console.log("Switched");
  };
  */
  return (
    <>
      <Nav
        className="justify-content-end"
        activeKey="/home"
        style={{ marginTop: 10, marginRight: 20 }}
      >
        <Nav.Item>
          <Nav.Link>
            <Link
              to="/"
              className={fonts.poppinssemibold}
              style={styles.navText}
            >
              home
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link
              className={fonts.poppinssemibold}
              style={styles.navText}
              eventKey="link-1"
              to="/About"
            >
              about
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link
              className={fonts.poppinssemibold}
              style={styles.navText}
              eventKey="link-2"
              to="/Work"
            >
              work
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link
              className={fonts.poppinssemibold}
              style={styles.navText}
              eventKey="link-4"
              to="/Projects"
            >
              projects
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link
              className={fonts.poppinssemibold}
              style={styles.navText}
              eventKey="link-3"
              to="/Contact"
            >
              contact
            </Link>
          </Nav.Link>
        </Nav.Item>
        {/* 
        <Nav.Item>
          <div className={test.switch} data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className={test.handle} layout transition={spring} />
          </div>
        </Nav.Item>
        */}
      </Nav>
      <Outlet />
    </>
  );
}

const styles = {
  navText: {
    fontSize: 18,
    color: "#ac5afe",
    textDecoration: "none",
  },
  activeNav: {
    fontSize: 18,
    color: "black",
    textDecoration: "underline",
  },
};

/*
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

*/
