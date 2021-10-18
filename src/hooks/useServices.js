const { useState, useEffect } = require("react");

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return { services, setServices };
};

export default useServices;
