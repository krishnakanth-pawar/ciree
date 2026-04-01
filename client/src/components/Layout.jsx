// components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import React from "react";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 right:auto">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

