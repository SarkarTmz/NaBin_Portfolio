import React from "react";
import MobileNav from "../components/MobileNav/MobileNav";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({children}) => {
  return (
    <>
    <div className="main">
      <MobileNav />
      <Header />
      <div className="content container1">
        {children}
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Layout;
