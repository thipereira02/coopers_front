/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { toast } from "react-toastify";

import { Title, Form, StyledLink } from "../layouts/ModalPopupStyle";
import image from "../assets/image 1.jpg";
import { registerUser } from "../services/requests";

export default function SignUpForm({ setTogglePage }: any) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	function signup(e: any){
		e.preventDefault();
		
		const body = { username: name, email, password, confirmPassword };

		const req = registerUser(body);
		req.then(() => {
			toast.success("Registration done successfully!");
			setTogglePage(false);
		}).catch((err) => {
			toast.error(err.response.data.message);
		});
	}

	return(
		<>
			<Title>
				<img src={image} alt="image" />
				<div>
					<h1>Create</h1>
					<h2>your account</h2>
				</div>
			</Title>
			<Form onSubmit={signup}>
				<label htmlFor="name">User:</label>
				<input 
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>
				<label htmlFor="email">Email:</label>
				<input 
					type="email" 
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<label htmlFor="password">Password:</label>
				<input 
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<label htmlFor="password">Confirm password:</label>
				<input 
					type="password" 
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					required
				/>
				<button type="submit">Register</button>
			</Form>
			<StyledLink onClick={() => setTogglePage(false)}>
				<p>Already have an account?</p>
			</StyledLink>
		</>
	);
}