import axios from "axios";

const BASE_URL = "http://localhost:4000";

function setConfig(token: string){
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

function registerUser(body: { username: string, email: string, password: string, confirmPassword: string }){
	return axios.post(`${BASE_URL}/signup`, body);
}

function login(body: { email: string, password: string }){
	return axios.post(`${BASE_URL}/login`, body);
}

function logout(token: string){
	return axios.post(`${BASE_URL}/logout`, [], setConfig(token));
}

export { registerUser, login, logout };