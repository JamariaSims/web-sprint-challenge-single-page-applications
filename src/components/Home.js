import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../Assets/Pizza.jpg";

function Home() {
	return (
		<div className="home">
			<div className="navBar">
				<div className="title">LAMBDA EATS</div>
				<div className="sideBar">
					<a href="/">Home</a>
					<a href="/help">Help</a>
				</div>
			</div>
			<div className="con1">
				<img src={pic1} width="100%" height="70%" />
				<Link to={"/form"}>
					<div>Pizza?</div>
				</Link>
			</div>
			<div className="con2"></div>
			<div className="con3"></div>
		</div>
	);
}

export default Home;
