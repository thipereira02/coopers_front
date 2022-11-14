import React from "react";
import Modal from "./Modal";

import { DesktopModalContainer, Title, Form } from "./ModalPopupStyle";
import image from "../assets/image 1.jpg";

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
	if(!isModalVisible) return null;

	return(
		<Modal onBackdropClick={onBackdropClick}>
			<DesktopModalContainer>
				<p onClick={onBackdropClick}>close</p>
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
			</DesktopModalContainer>
		</Modal>
	); 
};

export default BaseModalWrapper;