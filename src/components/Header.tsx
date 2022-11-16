import React, { useContext } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import ModalContext from "../contexts/ModalContext";
import logo from "../assets/Fill 1.jpg";
import { Button } from "../layouts/common/Components";
import { logout } from "../services/requests";
import UserContext from "../contexts/UserContext";

export default function Header() { 
	const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
	const user = localStorage.getItem("user");
	const { userData } = useContext(UserContext);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const finishSession = () => {
		if (window.confirm("Are you sure you want to logout?")) {
			const req = logout(userData.token);
			req.then(() => {
				localStorage.removeItem("user");
				window.location.reload();
			}).catch(err => {
				console.log(err);
				toast.error("An error occurred while trying to sign out. Try again.");
			});
		}
	};

	return (
		<>
			<Content>
				<Name>
					<img src={logo} alt="logo" />
					<h1>coopers</h1>
				</Name>
				{user ? (
					<Button onClick={finishSession}>
                        sair
					</Button>
				) : (
					<Button onClick={toggleModal}>
                    entrar
					</Button>
				)}
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