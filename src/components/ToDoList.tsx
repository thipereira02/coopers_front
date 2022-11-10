import React from "react";
import styled from "styled-components";

import background from "../assets/BG_black.jpg";

export default function ToDoList() {
	return(
		<ToDoListContainer>    
			<img src={background} alt="background" />
			<h1>To-do-list</h1>
			<h2>Drag and drop to set your main priorities, check when done and create what´s new.</h2>
		</ToDoListContainer>
	);
}

const ToDoListContainer = styled.div`
    width: 100vw;
    display: inline-block;
    position: relative;

    h1{
        color: #FFF;
        font-size: 2.2rem;
        font-family: 'Poppins', sans-serif;
        text-decoration: underline;
        text-decoration-color: #4AC959;
        text-underline-position: under;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2{
        color: #FFF;
        font-size: 1rem;
        font-weight: 500;
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    @media(min-width: 768px) {
        img{
            margin-top: 5rem;
        }

        h1{
            font-size: 3.75rem;
        }

        h2{
            font-size: 1.5rem;
        }
    }
`;