import { useState, useCallback, useEffect } from "react";

const { locations } = require("../data/global.json");

const useLocation = () => {
    const [locationNumber, setLocationNumber] = useState(0);
    const [location, setLocation] = useState({
        city: "",
        street: "",
        house: "",
    });

    const storageName = "location";

    const changeLocation = useCallback(
        (num) => {
            setLocationNumber(num);
            setLocation(locations[num]);

            localStorage.setItem(
                storageName,
                JSON.stringify({
                    locationNumber: num,
                    location: locations[num],
                })
            );
        },
        [setLocationNumber]
    );

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data) {
            changeLocation(data.locationNumber);
        } else {
            localStorage.setItem(
                storageName,
                JSON.stringify({
                    locationNumber: 0,
                    location: locations[0],
                })
            );
        }
    }, [changeLocation]);

    return { changeLocation, locationNumber, location };
};

export default useLocation;
