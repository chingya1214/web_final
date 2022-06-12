import React, { useState } from "react";
import LikeIcon from "../components/LikeIcon";

export default function PortfolioItem({ initStatus = false, index, handleClick = (f) => f }) {
  const [status, setStatus] = useState(initStatus);

  return (
    <div className="PortfolioItem">
      <a onClick={() => { document.getElementById("popup").style.display = "block";document.body.style.overflowY = "hidden"; }}>
        <img src="https://goolink.cc/sNGWe" style={{ width: "100%" }} alt="" />
      </a>
      <div className="ItemBottom">
        <div className="work-detail">
          <img src="https://goolink.cc/tjgp2" alt="" />
          <h3>作品名稱</h3>
        </div>
        <div className="work-like">
          <LikeIcon
            selected={status}
            onClick={() => {
              if (status === false) {
                setStatus(true);
              } else {
                setStatus(false);
              }
            }}
          />
          <h4>{100 + 22}</h4>
        </div>
      </div>
    </div>
  );
}
