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

function login(body: { username: string, password: string }){
	return axios.post(`${BASE_URL}/login`, body);
}

function logout(token: string){
	return axios.post(`${BASE_URL}/logout`, [], setConfig(token));
}

function addTask(body: { description: string, taskType: string }, token: string){
	return axios.post(`${BASE_URL}/tasks`, body, setConfig(token));
}

function getTasks(token: string){
	return axios.get(`${BASE_URL}/tasks`, setConfig(token));
}

function deleteTask(id: number, token: string){
	return axios.delete(`${BASE_URL}/tasks/${id}`, setConfig(token));
}

function deleteAllTasks(body: { taskType: string }, token: string){
	return axios.post(`${BASE_URL}/deleteAll`, body, setConfig(token));
}

export { registerUser, login, logout, addTask, getTasks, deleteTask, deleteAllTasks };