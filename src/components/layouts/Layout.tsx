import React from 'react';
import Navbar from './navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className='h-screen pt-56'>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
