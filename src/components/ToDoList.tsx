import React from "react";
import styled from "styled-components";
import { BsCircle, BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

import background from "../assets/BG_black.jpg";
import element from "../assets/element.png";
import element2 from "../assets/element2.png";
import { ListBox, BgElement } from "../layouts/common/Components";

export default function ToDoList() {
	const toDoExample = [
		"this is a new task",
		"Develop the To-do list page",
		"Create the drag-and-drop function",
		"Add new tasks",
		"Delete itens",
		"Erase all",
		"Checked item goes to Done list",
		"This item label may be edited",
		"Editing an item..."
	];

	const doneExamples = [
		"Get FTP credentials",
		"Home Page Design",
		"E-mail John about the deadline",
		"Create a Google Drive folder",
		"Send a gift to the client"
	];

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
					<Tasks>
						{toDoExample.map((item, index) => (
							<>
								<div key={index}>
									<EmptyCircle />
									<p>{item}</p>
									<a>delete</a>
								</div>								
							</>
						))}
					</Tasks>
					<Button>
                        erase all
					</Button>
				</ListBox>
				<ListBox color={"done"}>
					<h1>Done</h1>
					<h2>Congratulations!</h2>
					<h3>You have done 5 tasks</h3>
					<Tasks>
						{doneExamples.map((item, index) => (
							<>
								<div key={index}>
									<CircleFill />
									<p>{item}</p>
									<a>delete</a>
								</div>
							</>
						))}
					</Tasks>
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

const Tasks = styled.div`
    margin-top: 1.7rem;

    div{
        display: grid;
        grid-template-columns: 1fr 6.5fr 1fr;
        margin-bottom: 0.75rem;
        align-items: center;

        p{
            font-size: 1rem;
            line-height: 1.2rem;
        }

        a{
            color: #999999;
            font-size: 0.75rem;
            text-align: right;
            align-self: center;
        }
    }

    @media(min-width: 1024px) {
        div{
            grid-template-columns: 1fr 6fr 1fr;

            p{
                font-size: 1.2rem;
                line-height: 1.5rem;
            }
        }
    }
`;

const EmptyCircle = styled(BsCircle)`
    color:#E88D39;
    font-size: 1rem;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`;

const CircleFill = styled(BsCheckCircleFill)`
    color:#4AC959;
    font-size: 1rem;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
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
