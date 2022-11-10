import React from "react";
import styled from "styled-components";

import bg from "../assets/BG.png";
import coverImage from "../assets/02.jpg";

export default function Cover() {
	return (
		<Content>
			<TextArea>
				<h1>Organize</h1>
				<h1>your daily jobs</h1>
				<h2>The only way to get things done</h2>
				<button>Go to To-do list</button>
			</TextArea>
			<div>
				<Logo src={bg} alt="logo" />
				<CoverImage src={coverImage} alt="image" />
			</div>
		</Content>
	);
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
`;

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25rem;

    h1:nth-child(1){
        font-size: 3rem;
        font-weight: 700;
        line-height: 4rem;
    }

    h1:nth-child(2){
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.8rem;
        color: #4AC959;
        margin-bottom: 1rem;
    }

    h2{
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem;
        margin-bottom: 1.5rem;
    }

    button{
        width: 12rem;
        height: 2.5rem;
        border-radius: 0.625rem;
        border: none;
        background-color: #4AC959;
        color: #FFF;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
    }

    @media(min-width: 768px){
        align-items: flex-start;
        margin-top: 3rem;
        padding-left: 2rem;
    }

    @media(min-width: 1024px){
        padding-left: 2rem;

        h1:nth-child(1){
            font-size: 4rem;
        }

        h1:nth-child(2){
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        h2{
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
    }
`;

const Logo = styled.img`
    position: absolute;
    top: 2rem;
    right: 0;
    height: 30rem;
    z-index: 1;

    @media(min-width: 768px){
        top: 2rem;
    }
`;

const CoverImage = styled.img`
    width: auto;
    height: auto;
    max-width: 20rem;
    max-height: 100%;
    position: absolute;
    top: 7rem;
    right: 1.8rem;
    z-index: 2;
`;
