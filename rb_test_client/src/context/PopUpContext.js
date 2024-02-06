import { createContext } from "react";

const PopUpContext = createContext({
    isClosed: true,
    toggleState: () => {}
});

export default PopUpContext;