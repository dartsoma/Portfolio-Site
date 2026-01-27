import React from "react";
import "./TopNav.css";
import bracket from "./assets/bracket.png";
import placeholder from "./assets/placeholdericon.png";

function TopNav() {
	return (
		<>
			<div className="top-nav">
				<ol>
					<div className="nav-button-container">
						<img className="nav-button" src={placeholder} />
						<img className="nav-button-underline" src={bracket} />
						<li id="faq">F.A.Q</li>
					</div>
					<div className="nav-button-container">
						<img className="nav-button" src={placeholder} />
						<img className="nav-button-underline" src={bracket} />
						<li id="models">MODELS</li>
					</div>
					<div className="nav-button-container">
						<img className="nav-button" src={placeholder} />
						<img className="nav-button-underline" src={bracket} />
						<li id="home">HOME</li>
					</div>
					<div className="nav-button-container">
						<img className="nav-button" src={placeholder} />
						<img className="nav-button-underline" src={bracket} />
						<li id="projects">PROJECTS</li>
					</div>
					<div className="nav-button-container">
						<img className="nav-button" src={placeholder} />
						<img className="nav-button-underline" src={bracket} />
						<li id="contact">CONTACT</li>
					</div>
				</ol>
			</div>
		</>
	);
}

export default TopNav;
