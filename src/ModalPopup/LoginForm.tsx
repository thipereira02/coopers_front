import React from "react";

import { Title, Form, StyledLink } from "../layouts/ModalPopupStyle";
import image from "../assets/image 1.jpg";

export default function LoginForm({ setTogglePage }: any) {
	return(
		<>
			<Title>
				<img src={image} alt="image" />
				<div>
					<h1>Sign in</h1>
					<h2>to access your list</h2>
				</div>
			</Title>
			<Form>
				<label htmlFor="name">User:</label>
				<input type="name"/>
				<label htmlFor="password">Password:</label>
				<input type="password" />
				<button>Sign in</button>
			</Form>
			<StyledLink onClick={() => setTogglePage(true)}>
				<p>Not registered? <br/>Create an account</p>
			</StyledLink>
		</>
	);
}