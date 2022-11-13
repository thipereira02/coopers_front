import React, { useContext } from "react";
import styled from "styled-components";

import ModalContext from "../contexts/ModalContext";
import logo from "../assets/Fill 1.jpg";

export default function Header() { 
	const { isModalVisible, setIsModalVisible } = useContext(ModalContext);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};
    
	return (
		<>
			<Content>
				<Name>
					<img src={logo} alt="logo" />
					<h1>coopers</h1>
				</Name>
				<SignIn onClick={toggleModal}>
                    entrar
				</SignIn>
			</Content>
		</>
	);
}

const Content = styled.div`
    width: 100vw;
    height: 6.25rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: alpha(opacity=50);
    opacity: 1;
`;

const Name = styled.div`
    display: flex;
    align-items: center;

    img{
        height: 1.8rem;
        margin-right: 0.4rem;
    }

    h1{
        font-size: 1.6rem;
        font-weight: 600;
    }
`;

const SignIn = styled.button`
    width: 5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #000;
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 3;

    @media(min-width: 768px){
        width: 7.5rem;
    }
`;
