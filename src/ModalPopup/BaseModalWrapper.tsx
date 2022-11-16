import React, { useState } from "react";
import Modal from "./Modal";

import { DesktopModalContainer, Title, Form, StyledLink } from "../layouts/ModalPopupStyle";
import image from "../assets/image 1.jpg";

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
	const [togglePage, setTogglePage] = useState(false);
	console.log(togglePage);

	if(!isModalVisible) return null;

	function closeModal() {
		onBackdropClick();
		setTogglePage(false);
	}

	return(
		<Modal onBackdropClick={onBackdropClick}>
			<DesktopModalContainer>
				<p onClick={closeModal}>close</p>
				{!togglePage ? (
					<>
						<Title>
							<img src={image} alt="image" />
							<div>
								<h1>Sign in</h1>
								<h2>to access your list</h2>
							</div>
						</Title>
						<Form>
							<label htmlFor="name">User:</label>
							<input type="name"/>
							<label htmlFor="password">Password:</label>
							<input type="password" />
							<button>Sign in</button>
						</Form>
						<StyledLink onClick={() => setTogglePage(true)}>
							<p>Not registered? <br/>Create an account</p>
						</StyledLink>
					</>
				) : (
					<>
						<Title>
							<img src={image} alt="image" />
							<div>
								<h1>Create</h1>
								<h2>your account</h2>
							</div>
						</Title>
						<Form>
							<label htmlFor="name">User:</label>
							<input type="name"/>
							<label htmlFor="email">Email:</label>
							<input type="email" />
							<label htmlFor="password">Password:</label>
							<input type="password" />
							<label htmlFor="password">Confirm password:</label>
							<input type="password" />
							<button>Register</button>
						</Form>
						<StyledLink onClick={() => setTogglePage(false)}>
							<p>Already have an account?</p>
						</StyledLink>
					</>

				)}	
		
				
			</DesktopModalContainer>
		</Modal>
	); 
};

export default BaseModalWrapper;