import React from "react";
import styled from "styled-components";

import background from "../assets/BG_black.jpg";
import { ListBox } from "../layouts/common/Components";

export default function ToDoList() {
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
				</ListBox>
				<ListBox color={"done"}>
					<h1>Done</h1>
				</ListBox>
			</Lists>
		</>
	);
}

const Banner = styled.div`
    width: 100vw;
    display: inline-block;
    position: relative;
    margin-top: 1rem;

    img{
        width: 100vw;
        height: 15rem;
    }

    h1{
        color: #FFF;
        font-size: 2.2rem;
        font-family: 'Poppins', sans-serif;
        text-decoration: underline;
        text-decoration-color: #4AC959;
        text-underline-position: under;
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2{
        color: #FFF;
        font-size: 0.8rem;
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
        padding: 0 15%;
    }

    @media(min-width: 1024px) {
        padding: 0 20%;
    }
`;