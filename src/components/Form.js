import React, { useState } from "react";
import axios from "axios";
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
		// setData({...form, })
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
		<div className="formInput" id="pizza-form">
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name</label>
				<input
					id="name-input"
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
				/>
				<label htmlFor="size">Size</label>
				<select
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

				<label htmlFor="topping1" name="topping1">
					Topping 1{" "}
					<label>
						Pepperoni{" "}
						<input
							type="checkbox"
							name="topping1"
							value="pepperoni"
							onChange={handleChange}
						/>
					</label>
					<label>
						Mushroom{" "}
						<input
							type="checkbox"
							name="topping1"
							value="mushroom"
							onChange={handleChange}
						/>
					</label>
					<label>
						Sausage{" "}
						<input
							type="checkbox"
							name="topping1"
							value="sausage"
							onChange={handleChange}
						/>
					</label>
					<label>
						Extra Cheese{" "}
						<input
							type="checkbox"
							name="topping1"
							value="extraCheese"
							onChange={handleChange}
						/>
					</label>
				</label>

				<label htmlFor="topping2" name="topping2">
					Topping 2
					<label>
						Pepperoni{" "}
						<input
							type="checkbox"
							name="topping2"
							value="pepperoni"
							onChange={handleChange}
						/>
					</label>
					<label>
						Mushroom{" "}
						<input
							type="checkbox"
							name="topping2"
							value="mushroom"
							onChange={handleChange}
						/>
					</label>
					<label>
						Sausage{" "}
						<input
							type="checkbox"
							name="topping2"
							value="sausage"
							onChange={handleChange}
						/>
					</label>
					<label>
						Extra Cheese{" "}
						<input
							type="checkbox"
							name="topping2"
							value="extraCheese"
							onChange={handleChange}
						/>
					</label>
				</label>
				<label htmlFor="special">
					Special
					<input
						id="special-text"
						type="text"
						name="special"
						checked={form.special}
						onChange={handleChange}
					/>
				</label>
				<button id="order-button">Ready!</button>
			</form>
		</div>
	);
}
