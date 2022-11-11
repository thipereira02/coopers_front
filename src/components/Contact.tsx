import React from "react";
import styled from "styled-components";

import photo from "../assets/tatiana.jpg";
import ContactForm from "./ContactForm";

export default function Contact() {
	return(
		<Content>
			<div>
				<Background />
				<img src={photo} alt="Tatiana" />
			</div>
			<ContactForm />
		</Content>
	);
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;

    div{
        position: relative;
    }

    img{
        height: 8.5rem;
        border-radius: 50%;
    }

    @media (min-width: 768px){
        padding: 0 20%;

        img{
            height: 11rem;
        }
    }

    @media (min-width: 1024px){
        padding: 0 30%;
    }
`;

const Background = styled.div`
    width: 8rem;
    height: 1rem;
    background-color: #4AC959;
    position: absolute;
    top: 4.8rem;
    right: 30%;
    z-index: -1;
    
    @media (min-width: 768px){
        height: 1.5rem;
        top: 6.5rem;
    }
`;