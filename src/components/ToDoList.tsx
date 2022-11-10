import React from "react";
import styled from "styled-components";

import background from "../assets/BG_black.jpg";

export default function ToDoList() {
	return(
		<>
			<Banner>
				<img src={background} alt="background" />
				<h1>To-do-list</h1>
				<h2>Drag and drop to set your main priorities, check when done and create what´s new.</h2>
			</Banner>
			<Lists>
				<ToDoContainer>
					<h1>sdfsdf</h1>
				</ToDoContainer>
				<DoneContainer>
					<h1>asasf</h1>
				</DoneContainer>
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
        padding: 0 25%;
    }
`;

const ToDoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 20vh;
    box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
    border-top: 1rem solid #4AC959;

    @media(min-width: 768px) {
        border-width: 1.25rem;
    }
`;

const DoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 20vh;
    box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
    border-top: 1rem solid #E88D39;

    @media(min-width: 768px) {
        border-width: 1.25rem;
    }
`;