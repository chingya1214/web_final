import React, { useState } from "react";
import Header from "../components/Header";
import PortfolioContainer from "../components/PortfolioContainer";
import PortfolioDetail from "../components/PortfolioDetail";
import "normalize.css";
import "../index.css";

export default function App() {
  return (
    <>
      <Header />
      <PortfolioContainer />
      <PortfolioDetail />
    </>
  );
}
