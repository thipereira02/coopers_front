import React, { useState } from "react";
import Modal from "./Modal";

import { DesktopModalContainer } from "../layouts/ModalPopupStyle";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
	const [togglePage, setTogglePage] = useState(false);

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
					<LoginForm setTogglePage={setTogglePage} />
				) : (
					<SignUpForm setTogglePage={setTogglePage} />
				)}	
			</DesktopModalContainer>
		</Modal>
	); 
};

export default BaseModalWrapper;