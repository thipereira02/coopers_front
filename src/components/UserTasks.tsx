import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import RefreshContext from "../contexts/RefreshContext";
import { Tasks, Task, EmptyCircle, CircleFill } from "../layouts/common/Components";
import { addTask, deleteTask, updateTaskType, updateTaskDescription } from "../services/requests";

export function UserToDoTasks({tasks, setTasks}: any) {
	const [text, setText] = useState("");
	const { userData } = useContext(UserContext);
	const { refresh, setRefresh } = useContext(RefreshContext);
	const token = userData?.token;

	function newTask() {
		if (text === "") {
			toast.error("Please, write a task");
			return;
		}

		const body = { description: text, taskType: "todo" };

		const req = addTask(body, token);
		req.then(() => {
			toast.success("Task added");
			setRefresh(!refresh);
			setText("");
		}).catch((err) => {
			toast.error("An error occurred while trying to add your task");
			console.log(err);
		});
	}

	function updateType(id: number) {
		const req = updateTaskType(id, token);
		req.then(() => {
			toast.success("Task updated");
			setRefresh(!refresh);
		}).catch((err) => {
			toast.error("An error occurred while trying to update your task");
			console.log(err);
		});
	}

	function deleteATask(id: number) {
		const req = deleteTask(id, token);
		req.then(() => {
			toast.success("Task deleted");
			setRefresh(!refresh);
		}).catch((err) => {
			toast.error("An error occurred while trying to delete your task");
			console.log(err);
		});
	}

	function updateATask(id: number) {
		const description = tasks.find((t: any) => t.id === id)?.description || "";
		const body = { description };

		const req = updateTaskDescription(id, body, token);
		req.then(() => {
			toast.success("Task updated");
			setRefresh(!refresh);
		}).catch((err) => {
			toast.error("An error occurred while trying to update your task");
			console.log(err);
		});
	}

	return(
		<Tasks>
			<Task>
				<EmptyCircle />
				<Input 
					type="text"
					placeholder="this is a new task"
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<a onClick={newTask}>add</a>
			</Task>
			{tasks.map((item: any) => (
				<Task key={item.id}>
					<EmptyCircle cursor={"pointer"} onClick={() => updateType(item.id)} />
					<TextEditable
						type="text"
						placeholder={item.description}
						value={item.description}
						onChange={(e: any)=>setTasks(
							tasks.map(
								(t:any) => {
									if (t.id === item.id){
										t.description = e.target.value;
										t.changed = true;
									}
									return t;
								}
							)
						)}
					/>
					{item.changed ? 
						<a onClick={() => updateATask(item.id)}>update</a> :
						<a onClick={() => deleteATask(item.id)}>delete</a>
					}
				</Task>								
			))}
		</Tasks>
	);
}

export function UserDoneTasks({tasks}: any) {
	const { userData } = useContext(UserContext);
	const { refresh, setRefresh } = useContext(RefreshContext);

	function deleteATask(id: number) {
		const token = userData?.token;

		const req = deleteTask(id, token);
		req.then(() => {
			toast.success("Task deleted");
			setRefresh(!refresh);
		}).catch((err) => {
			toast.error("An error occurred while trying to delete your task");
			console.log(err);
		});
	}

	return(
		<Tasks>
			{tasks.map((item: any) => (
				<Task key={item.id}>
					<CircleFill />
					<p>{item.description}</p>
					<a onClick={() => deleteATask(item.id)}>delete</a>
				</Task>								
			))}
		</Tasks>
	);
}

const Input = styled.input`
	width: 100%;
	border: none;
	font-size: 1rem;
    line-height: 1.2rem;

	::placeholder {
		color: #000;
		font-weight: 700;
	}

	:focus::placeholder {
		color: transparent;
	}

	@media(min-width: 1024px){
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
`;

const TextEditable = styled.input`
	width: 100%;
	border: none;
	font-size: 1rem;
	line-height: 1.2rem;

	::placeholder {
		color: #000;
	}

	:focus::placeholder {
		color: transparent;
	}

	@media(min-width: 1024px){
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
`;