import React from "react";
import Footer from "./Footer";
import Navigation from "./Navbar";
import Header from "./Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({subsets:['latin'], weight:['100', '300', '400', '500', '700', '900']});

const Layout = ({ children }) => {
  return (
    <div className={poppins.className}>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
