import { useContext } from "react";
import { ServiceContext } from "../context/ServicesProvider";

const useServiceContext = () => {
    return useContext(ServiceContext);
};

export default useServiceContext;
