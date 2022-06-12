import React, { useState } from "react";
import PortfolioItem from "../components/PortfolioItem";

export default function PortfolioContainer() {
  let tasks = [1, 2, 3, 1, 2, 3, 1, 2, 3];
  return (
    <div className="PortfolioContainer">
      {tasks.map((task, i) => (
        <PortfolioItem key={i} index={i} />
      ))}
    </div>
  );
}
