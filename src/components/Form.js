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
		<div className="formInput">
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
				/>
				<label htmlFor="size">Size</label>
				<input
					type="text"
					name="size"
					value={form.size}
					onChange={handleChange}
				/>
				<label htmlFor="topping1">Topping 1</label>
				<input
					type="radio"
					name="topping1"
					value={form.topping1}
					onChange={handleChange}
				/>
				<label htmlFor="topping2">
					Topping 2
					<input
						type="radio"
						name="topping2"
						checked={form.topping2}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="special">
					Special
					<input
						type="text"
						name="special"
						checked={form.special}
						onChange={handleChange}
					/>
				</label>
			</form>
		</div>
	);
}
