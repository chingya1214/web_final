import React, { useState } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import LikeIcon from "../components/LikeIcon";
import Message from "../components/Message";

export default function PortfolioContainer({ initStatus = false, index}) {
  const [status, setStatus] = useState(initStatus);
  return (
    <div className="popup" id="popup">
      <div className="ItemDetail">
        <div className="work-box"></div>
        <div className="work-box2">
          <div className="work-name">
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
          <div className="work-message">
            <Message />
          </div>
        </div>
      </div>
      <BsFillCaretLeftFill className="prev btn" size="5em" />
      <BsFillCaretRightFill className="next btn" size="5em" />
      <BsArrowLeft className="close btn" size="5em" onClick={() => { document.body.style.overflowY = "scroll"; document.getElementById("popup").style.display="none"}}/>
    </div>
  );
}
