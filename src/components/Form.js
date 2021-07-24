import React, { useState } from "react";
import axios from "axios";
import pic1 from "../Assets/Pizza.jpg";
const initialData = {
	name: "",
	size: "",
	topping1: false,
	topping2: false,
	special: "",
};

export default function Form(props) {
	const { data, setData } = props;
	const [form, setForm] = useState(initialData);
	const handleChange = (e) => {
		console.log(e.target.value);
		console.log(e.target.name);
		const { value } = e.target;
		setForm({ ...form, [e.target.name]: value });
	};
	const submitForm = (e) => {
		e.preventDefault();
		axios.post(`https://reqres.in/api/orders`, form).then((res) => {
			console.log(data);
			setData([...data, res.data]);
			setForm(initialData);
		});
	};
	return (
		<>
			<div className="navBar">
				<div className="title">LAMBDA EATS</div>
				<div className="sideBar">
					<a href="/">Home</a>
					<a href="/help">Help</a>
				</div>
			</div>
			<div className="formInput" id="pizza-form">
				<form onSubmit={submitForm}>
					<div className="f1">
						<label htmlFor="name">Name</label>
						<input
							data-cy="name"
							id="name-input"
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
						/>

						<label htmlFor="size">Size</label>
						<select
							data-cy="size"
							htmlFor="size"
							id="size-dropdown"
							value={form.size}
							name="size"
							onChange={handleChange}
						>
							<option></option>
							<option onChange={handleChange} value="small">
								Small
							</option>
							<option onChange={handleChange} value="medium">
								Medium
							</option>
							<option onChange={handleChange} value="large">
								Large
							</option>
							<option onChange={handleChange} value="giant">
								Giant
							</option>
						</select>
					</div>
					<div className="f2">
						<label htmlFor="topping1" name="topping1">
							Topping 1{" "}
							<label>
								Pepperoni{" "}
								<input
									data-cy="pepperoni1"
									type="checkbox"
									name="topping1"
									value="pepperoni"
									onChange={handleChange}
								/>
							</label>
							<label>
								Mushroom{" "}
								<input
									data-cy="mushroom1"
									type="checkbox"
									name="topping1"
									value="mushroom"
									onChange={handleChange}
								/>
							</label>
							<label>
								Sausage{" "}
								<input
									data-cy="sausage1"
									type="checkbox"
									name="topping1"
									value="sausage"
									onChange={handleChange}
								/>
							</label>
							<label>
								Extra Cheese{" "}
								<input
									data-cy="extraCheese1"
									type="checkbox"
									name="topping1"
									value="extraCheese"
									onChange={handleChange}
								/>
							</label>
						</label>
					</div>
					<div className="f3">
						<label htmlFor="topping2" name="topping2">
							Topping 2
							<label>
								Pepperoni{" "}
								<input
									data-cy="pepperoni2"
									type="checkbox"
									name="topping2"
									value="pepperoni"
									onChange={handleChange}
								/>
							</label>
							<label>
								Mushroom{" "}
								<input
									data-cy="mushroom2"
									type="checkbox"
									name="topping2"
									value="mushroom"
									onChange={handleChange}
								/>
							</label>
							<label>
								Sausage{" "}
								<input
									data-cy="sausage2"
									type="checkbox"
									name="topping2"
									value="sausage"
									onChange={handleChange}
								/>
							</label>
							<label>
								Extra Cheese{" "}
								<input
									data-cy="extraCheese2"
									type="checkbox"
									name="topping2"
									value="extraCheese"
									onChange={handleChange}
								/>
							</label>
						</label>
					</div>

					<label htmlFor="special">
						Special
						<input
							id="special-text"
							data-cy="special"
							type="text"
							name="special"
							checked={form.special}
							onChange={handleChange}
						/>
					</label>

					<button data-cy="order" id="order-button">
						Ready!
					</button>
				</form>

				<div className="App">
					<h1>Users</h1>
					{data &&
						data.map((x, y) => (
							<>
								<h4>{x["name"]}</h4>
							</>
						))}
				</div>
			</div>
		</>
	);
}
