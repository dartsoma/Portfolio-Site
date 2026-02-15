import React, { useState } from 'react';
	import "./TopNav.css";
	import bracket from "./assets/bracket.png";
	import placeholder from "./assets/placeholdericon.png";

	function TopNav({ globalTab, setTabState }) {


		const toggleTab = (index) => {

			setTabState(index);

		}

		const home = 0
		const models = 1;
		const projects = 2;
		const faq = 3;
		const contact = 4;

	return (
	<>

	<div className="top-nav">
			<div className="nav-button-container">
				<img className={globalTab === faq ? "nav-button-active" : "nav-button"} onClick={() => toggleTab(faq)} src={placeholder} />
				<img className={globalTab === faq ? "nav-underline-active" : "nav-underline"} src={bracket} />
				<h1 id="faq">F.A.Q</h1>
			</div>
			<div className="nav-button-container">
				<img className={globalTab === models ? "nav-button-active" : "nav-button"} onClick={() => toggleTab(models)} src={placeholder} />
				<img className={globalTab === models ? "nav-underline-active" : "nav-underline"} src={bracket} />
				<h1 id="models">MODELS</h1>
			</div>
			<div className="nav-button-container">
				<img className={globalTab=== home ? "nav-button-active" : "nav-button"} onClick={() => toggleTab(home)} src={placeholder} />
				<img className={globalTab === home ? "nav-underline-active" : "nav-underline"} src={bracket} />
				<h1 id="home">HOME</h1>

			</div>
			<div className="nav-button-container">
				<img className={globalTab === projects ? "nav-button-active" : "nav-button"} onClick={() => toggleTab(projects)} src={placeholder} />
				<img className={globalTab === projects ? "nav-underline-active" : "nav-underline"} src={bracket} />
				<h1 id="projects">PROJECTS</h1>
		
			</div>
			<div className="nav-button-container">
				<img className={globalTab === contact ? "nav-button-active" : "nav-button"} onClick={() => toggleTab(contact)} src={placeholder} />
				<img className={globalTab === contact ? "nav-underline-active" : "nav-underline"} src={bracket} />
			<h1 id="contact">CONTACT</h1>
			</div>
	</div>
		
	</>
	);
	}

	export default TopNav;
