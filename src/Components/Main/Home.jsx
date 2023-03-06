import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ThreeCanvas from '../Three/ThreeCanvas';

function Home() {
  return (
    <div className="home">
      <ThreeCanvas/>
    </div>
  );
}

export default Home;
