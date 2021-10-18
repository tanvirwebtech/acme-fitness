import React, { createContext } from "react";
import useServices from "../hooks/useServices";

export const ServiceContext = createContext();
const ServiceProvider = ({ children }) => {
    const allService = useServices();
    return (
        <ServiceContext.Provider value={allService}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;
