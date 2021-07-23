import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home">
			<nav>
				<h1>LAMBDA EATS</h1>
				<button>Home</button>
				<button>Help</button>
			</nav>
			<div className="con1">
				<img />
				<Link to={"/form"}>
					<button>Pizza?</button>
				</Link>
			</div>
			<div className="con2"></div>
			<div className="con3"></div>
		</div>
	);
}

export default Home;
