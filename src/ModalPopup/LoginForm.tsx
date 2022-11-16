import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { Title, Form, StyledLink } from "../layouts/ModalPopupStyle";
import image from "../assets/image 1.jpg";
import { login } from "../services/requests";
import UserContext from "../contexts/UserContext";

export default function LoginForm({ setTogglePage }: any) {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const { setUserData } = useContext(UserContext);

	function signin(e: any){
		e.preventDefault();
		
		const body = { username: name, password };

		const req = login(body);
		req.then(res => {
			setUserData({
				token: res.data.token,
				username: res.data.username
			});
			toast.success("Login successful!");
			localStorage.setItem("user", JSON.stringify(res.data));
			window.location.reload();
		}).catch(err => {
			console.log(err);
			toast.error(err.response.data);
		});
	}

	return(
		<>
			<Title>
				<img src={image} alt="image" />
				<div>
					<h1>Sign in</h1>
					<h2>to access your list</h2>
				</div>
			</Title>
			<Form onSubmit={signin}>
				<label htmlFor="name">User:</label>
				<input 
					type="name"
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>
				<label htmlFor="password">Password:</label>
				<input 
					type="password" 
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Sign in</button>
			</Form>
			<StyledLink onClick={() => setTogglePage(true)}>
				<p>Not registered? <br/>Create an account</p>
			</StyledLink>
		</>
	);
}