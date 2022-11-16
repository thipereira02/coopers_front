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
			toast.success("Cadastro realizado com sucesso!");
			setTogglePage(false);
		}).catch((err) => {
			toast.error(err.response.data);
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
					onInvalid={e => (e.target as HTMLInputElement).setCustomValidity("Você deve inserir um nome aqui")} 
					onInput={e => (e.target as HTMLInputElement).setCustomValidity("")}
					required
				/>
				<label htmlFor="email">Email:</label>
				<input 
					type="email" 
					value={email}
					onChange={e => setEmail(e.target.value)}
					onInvalid={e => (e.target as HTMLInputElement).setCustomValidity("Você deve inserir um email válido aqui")}
					onInput={e => (e.target as HTMLInputElement).setCustomValidity("")}
					required
				/>
				<label htmlFor="password">Password:</label>
				<input 
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					onInvalid={e => (e.target as HTMLInputElement).setCustomValidity("Insira uma senha com no mínimo 6 caracteres")}
					onInput={e => (e.target as HTMLInputElement).setCustomValidity("")}
					required
				/>
				<label htmlFor="password">Confirm password:</label>
				<input 
					type="password" 
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					onInvalid={e => (e.target as HTMLInputElement).setCustomValidity("As senhas não coincidem")}
					onInput={e => (e.target as HTMLInputElement).setCustomValidity("")}
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