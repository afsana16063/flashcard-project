// Home.js
import React from "react";
import Afsana from "./assets/Afsana.jpeg";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./components/Home.css";

function Home() {
  return (
    <>
      <div className="general-information">
        <div className="about-me">
          <h3>I am Afsana Mammadova</h3>
          <p>
            Driven and enthusiastic student with a genuine passion for
            start-ups, coupled with a relentless pursuit of academic excellence.
            Embraces learning with joy, demonstrating exceptional communication
            and leadership abilities. Actively seeks growth opportunities,
            aiming to make a positive impact through continuous personal and
            professional development.
          </p>
          <div className="links links_home">
            <a
              href="https://github.com/afsana16063"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/afsana-mammadova-322525238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/channel/UC79-BuG1ZDu9LwpVsZ6_Wbg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="img">
          <img src={Afsana} width={600}></img>
        </div>
      </div>
      <div className="portfolio">
        <h1>My Projects</h1>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Simple Dice Roll Game - Refresh to play! </p>
          <a
            href="https://afsana16063.github.io/DiceChallenge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href="https://github.com/afsana16063/DiceChallenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>The game ends when someone is 100!</p>
          <a
            href="https://afsana16063.github.io/Pig-Game/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href="https://github.com/afsana16063/Pig-Game"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Description of Project 3</p>
          <a
            href="https://afsana16063.github.io/Drum-Kit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href="https://github.com/afsana16063/Drum-Kit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      ;
    </>
  );
}

export default Home;
