import React from "react";
import { FaHeart } from "react-icons/fa";

export default function PortfolioItem({ selected = false, onClick = (f) => f }) {
  return <FaHeart style={{ marginRight: "10px" }} color={selected ? "red" : "gray"} onClick={onClick} />;
}
