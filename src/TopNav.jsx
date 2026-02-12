import React from "react";
import "./TopNav.css";
import bracket from "./assets/bracket.png";
import placeholder from "./assets/placeholdericon.png";

function TopNav() {
	return (
		<>

	<div className="top-nav">
					<div className="nav-button-container">
					<img className="nav-button" src={placeholder} />
					<img className="nav-button-underline" src={bracket} />
					<h1 id="faq">F.A.Q</h1>
				</div>
				<div className="nav-button-container">
					<img className="nav-button" src={placeholder} />
					<img className="nav-button-underline" src={bracket} />
					<h1 id="models">MODELS</h1>
				</div>
				<div className="nav-button-container">
					<img className="nav-button" src={placeholder} />
					<img className="nav-button-underline" src={bracket} />
					<h1 id="home">HOME</h1>

				</div>
				<div className="nav-button-container">
					<img className="nav-button" src={placeholder} />
					<img className="nav-button-underline" src={bracket} />
					<h1 id="projects">PROJECTS</h1>
			
				</div>
				<div className="nav-button-container">
					<img className="nav-button" src={placeholder} />
					<img className="nav-button-underline" src={bracket} />
				<h1 id="contact">CONTACT</h1>
				</div>
		</div>
			
		</>
	);
}

export default TopNav;
