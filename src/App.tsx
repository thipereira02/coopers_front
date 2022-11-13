import React, { useState } from "react";
import GlobalStyle from "./layouts/GlobalStyle";
import BaseModalWrapper from "./ModalPopup/BaseModalWrapper";
import Home from "./pages/Home";
import ModalContext from "./contexts/ModalContext";

function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	return (
		<ModalContext.Provider value={{ isModalVisible, setIsModalVisible }}>
			<GlobalStyle />
			<BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
			<Home />
		</ModalContext.Provider>
	);
}

//19 35 54 41 55 4
export default App;
