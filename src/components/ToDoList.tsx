import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { TodoExample, DoneExample } from "./ExampleTasks";
import background from "../assets/BG_black.jpg";
import element from "../assets/element.png";
import element2 from "../assets/element2.png";
import { ListBox, BgElement } from "../layouts/common/Components";
import { UserDoneTasks, UserToDoTasks } from "./UserTasks";
import { getTasks } from "../services/requests";
import UserContext from "../contexts/UserContext";

export default function ToDoList() {
	const user = localStorage.getItem("user");
	const { userData } = useContext(UserContext);
	const [toDoTasks, setToDoTasks] = useState([]);
	const [doneTasks, setDoneTasks] = useState([]);

	function filterTasks(tasks: any) {
		const userToDoTasks = tasks.filter((task: any) => task.taskType === "todo");
		setToDoTasks(userToDoTasks);

		const userDoneTasks = tasks.filter((task: any) => task.taskType === "done");
		setDoneTasks(userDoneTasks);
	}

	useEffect(() => {
		const req = getTasks(userData?.token);
		req.then((res) => {
			filterTasks(res.data);
		}).catch((err) => {
			toast.error("An error occurred while trying to get your tasks");
			console.log(err);
		});
	}, []);

	return(
		<>
			<Banner>
				<img src={background} alt="background" />
				<h1>To-do-list</h1>
				<h2>Drag and drop to set your main priorities, check when done and create what´s new.</h2>
			</Banner>
			<Lists>
				<ListBox color={"todo"}>
					<h1>To-do</h1>
					<h2>Take a breath. <br/>Start doing.</h2>
					{user ? <UserToDoTasks tasks={toDoTasks} /> : <TodoExample />}
					<Button>
                        erase all
					</Button>
				</ListBox>
				<ListBox color={"done"}>
					<h1>Done</h1>
					<h2>Congratulations!</h2>
					<h3>You have done 5 tasks</h3>
					{user ? <UserDoneTasks tasks={doneTasks} /> : <DoneExample />}
					<Button>
                        erase all
					</Button>
				</ListBox>
			</Lists>
			<BgElement src={element} alt="element" top={"back"} />
			<BgElement src={element2} alt="element2" top={"front"} />
		</>
	);
}

const Banner = styled.div`
    width: 100vw;
    display: inline-block;
    position: relative;
    margin-top: -4rem;

    img{
        width: 100vw;
        height: 15rem;
    }

    h1{
        color: #FFF;
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        text-decoration: underline;
        text-decoration-color: #4AC959;
        text-underline-position: under;
        position: absolute;
        top: 32%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2{
        color: #FFF;
        font-size: 1rem;
        font-weight: 500;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    @media(min-width: 768px) {
        margin-top: 2.5rem;

        img{
            margin-top: 5rem;
        }

        h1{
            font-size: 3rem;
            top: 50%;
        }

        h2{
            font-size: 1.2rem;
            top: 72%;
        }
    }
`;

const Lists = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;

    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
        padding: 0 15%;
    }

    @media(min-width: 1024px) {
        padding: 0 20%;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 2.5rem;
    background-color: #000;
    border-radius: 10px;
    border: none;
    color: #FFF;
    font-weight: 600;
    font-size: 1.125rem;
    margin-top: 2rem;

    @media(min-width: 1024px) {
        height: 3rem;
        font-size: 1.3125rem;
    }
`;
