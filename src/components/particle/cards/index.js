import React from "react";
import styles from "./styles.css";
import {
  FaHome,
  FaTheaterMasks,
  FaFeather,
  FaTeam,
  FaRocket,
  FaDownload
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";

export default function Card(props) {
  function processIcon() {
    switch (props.icon) {
      case "home":
        return <FaHome className="mainIcon" />;
      case "history":
        return <FaTheaterMasks className="mainIcon" />;
      case "characters":
        return <FaFeather className="mainIcon" />;
      case "aboutUs":
        return <GoPerson className="mainIcon" />;
      case "launch":
        return <FaRocket className="mainIcon" />;
      case "download":
        return <FaDownload className="mainIcon" />;
    }
  }
  return (
    <div
      onClick={() => {
        props.clicked();
      }}
      className="segment"
    >
      {processIcon()}
      {document.body.offsetWidth > 450 && (
        <p className="mainText">{props.text}</p>
      )}
    </div>
  );
}
