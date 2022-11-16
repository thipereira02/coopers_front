import React, { useState } from "react";
import GlobalStyle from "./layouts/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
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
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
			<Home />
		</ModalContext.Provider>
	);
}

//19 35 54 41 55 4
export default App;
