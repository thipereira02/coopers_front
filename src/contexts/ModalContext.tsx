import { createContext } from "react";

interface ModalContextData {
    isModalVisible: boolean;
    setIsModalVisible: (isModalVisible: boolean) => void;
}

const ModalContext = createContext({} as ModalContextData);

export default ModalContext;