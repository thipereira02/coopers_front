import { createContext } from "react";

interface RefreshContextProps {
    refresh: boolean;
    setRefresh: (refresh: boolean) => void;
}

const RefreshContext = createContext({} as RefreshContextProps);

export default RefreshContext;