import React, {createContext, useState} from 'react';
import Button from "@mui/material/Button";

const VisibilityContext = createContext(false);

{const VisibilityProvider = ({ children }) => {
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    const toggleVisibility = () => setIsSectionVisible(!isSectionVisible);

    return (
        <VisibilityContext.Provider value={{ isSectionVisible, toggleVisibility }}>
            {children}
        </VisibilityContext.Provider>
    );
};

export { VisibilityContext, VisibilityProvider };