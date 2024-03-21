import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Navbar0 from "./navbar0";
import Navbar1 from "./navbar1";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [navL, setNavL] = useState(-200);
  const handleClick = () => {
    setNavL(-200);
  };

  return (
    <div>
      <div>
        {isSmallScreen ? (
          <div
            style={{
              padding: "5px",
              position: "fixed",
              width: "100vw",
              height:"56px",
              borderBottom:"1px black solid",
              top:'0',
            }}
          >
            <GiHamburgerMenu
              onClick={() => {
                setNavL(0);
              }}
            />
          </div>
        ) : (
          <Navbar1 />
        )}
      </div>
      {isSmallScreen ? (
        <div
          style={{
            position: "fixed",
            top:'0',
            width: "200px",
            left: `${navL}px`,
            transition: "left 0.5s ease",
          }}
        >
          <Navbar0 Click1={handleClick} />
        </div>
      ) : (
        <br></br>
      )}
    </div>
  );
};

export default Navbar;
