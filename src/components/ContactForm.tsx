import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import icon from "../assets/letter.svg";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [telephone, setTelephone] = useState("");

	function sendEmail(e: any) {
		e.preventDefault();

		if (name === "") {
			toast.error("Please enter your name");
			return;
		}

		if (email === "") {
			toast.error("Please enter your email");
			return;
		}
        
		if (telephone === "") {
			toast.error("Please enter your telephone");
			return;
		}

		if (message === "") {
			toast.error("Please enter your message");
			return;
		}

		toast.success("Your message was sent successfully. We will contact you soon.");
		setName("");
		setEmail("");
		setMessage("");
		setTelephone("");
	}

	return(
		<Content>
			<Info>
				<IconBg>
					<img src={icon} alt="letter" />
				</IconBg>
				<Text>
					<h1>GET IN</h1>
					<h2>TOUCH</h2>
				</Text>
			</Info>
			<Form onSubmit={sendEmail}>
				<label htmlFor="name">Your name</label>
				<input 
					type="text" 
					id="name" 
					placeholder="type your name here..." 
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<div>
					<EmailLabel htmlFor="email">Email*</EmailLabel>
					<input 
						type="email" 
						id="email" 
						placeholder="example@example.com" 
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TelLabel htmlFor="message" id="telephone">Telephone*</TelLabel>
					<input 
						type="tel" 
						id="telephone" 
						placeholder="(  ) ____-____" 
						value={telephone}
						onChange={(e) => setTelephone(e.target.value)}
					/>
				</div>
				<label htmlFor="message">Message*</label>
				<textarea 
					id="message" 
					placeholder="Type what you want to say to us" 
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit">SEND NOW</button>
			</Form>
		</Content>
	);
}

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Info = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
`;

const IconBg = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #4AC959;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 1.8rem;
    }

    @media (min-width: 768px){
        width: 3.75rem;
        height: 3.75rem;

        img{
            width: 2rem;
        }
    }
`;

const Text = styled.div`
    margin-left: 0.7rem;
    letter-spacing: 0.08rem;

    h1{
        font-size: 1.2rem;
        font-weight: 500;
    }

    h2{
        font-size: 1.2rem;
        font-weight: 700;
    }

    @media (min-width: 768px){
        h1{
            font-size: 1.5rem;
            font-weight: 500;
        }

        h2{
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2.625rem;

    div{
        display: flex;
        flex-direction: column;
    }

    input{
        border: 1px solid #06152B;
        border-radius: 4px;
        padding: 0.5rem;
        margin-bottom: 1rem;

        ::placeholder{
            color: #9A9A9A;
        }
    }

    label{
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }

    textarea{
        border: 1px solid #06152B;
        border-radius: 4px;
        padding: 0.5rem;
        margin-bottom: 1rem;
        height: 7rem;

        ::placeholder{
            color: #9A9A9A;
        }
    }

    button{
        height: 2.5rem;
        border: none;
        background-color: #46BD62;
        border-radius: 4px;
        color: #FFF;
        font-size: 1rem;
        font-weight: 700;
    }

    @media (min-width: 768px){
        div{
            flex-direction: row;
            justify-content: space-between;
            margin-top: 1rem;
            
            input{
                width: 48%;
            }
        }

    }  
`;

const EmailLabel = styled.label`
    @media (min-width: 768px){
        position: absolute;
        bottom: 3rem;
    }
`;

const TelLabel = styled.label`
    @media (min-width: 768px){
        position: absolute;
        bottom: 3rem;
        right: 28%;
    }

    @media (min-width: 1024px){
        right: 30%;
    }
`;
