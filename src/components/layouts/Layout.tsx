import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
