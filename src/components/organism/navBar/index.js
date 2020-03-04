import React from "react";
import styles from "./styles.css";
import Card from "../../particle/cards";

export default function NavBar(props) {
  return (
    <div className="container">
      <div className="icon">
        <img
          className="iconImage"
          src={require("../../../assets/imgs/Logo.png")}
        ></img>
      </div>
      <Card
        clicked={() => {
          props.switchState("home");
        }}
        icon={"home"}
        text={"Início"}
      />
      <Card
        clicked={() => {
          props.switchState("");
        }}
        icon={"history"}
        text={"História"}
      />
      <Card
        clicked={() => {
          props.switchState("");
        }}
        icon={"characters"}
        text={"Personagens"}
      />
      <Card
        clicked={() => {
          props.switchState("aboutUs");
        }}
        icon={"aboutUs"}
        text={"Sobre nós"}
      />
      <Card
        clicked={() => {
          props.switchState("");
        }}
        icon={"launch"}
        text={"Lançamento"}
      />
      <Card
        clicked={() => {
          props.switchState("");
        }}
        icon={"download"}
        text={"Download"}
      />
    </div>
  );
}
