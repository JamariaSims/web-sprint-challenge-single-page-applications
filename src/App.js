import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(`https://reqres.in/api/orders`)
			.then((res) => setData(res.data.data));
	}, []);
	return (
		<Router>
			{" "}
			<Route path="/">
				<Home />
			</Route>
			<Route path="/form">
				<Form data={data} setData={setData} />
			</Route>
		</Router>
	);
}
export default App;
