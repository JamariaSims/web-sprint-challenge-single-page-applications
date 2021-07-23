import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(`https://reqres.in/api/orders`)
			.then((res) => setData(res.data.data));
	}, []);
	return (
		<div className="App">
			<Form data={data} setData={setData} />
			{data &&
				data.map((x, y) => (
					<>
						<p>{JSON.stringify(x)}</p>
					</>
				))}
		</div>
	);
}
export default App;
