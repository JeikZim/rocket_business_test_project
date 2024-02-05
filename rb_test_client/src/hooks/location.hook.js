import { useState, useCallback, useEffect } from "react";

const { LOCATIONS } = require("../data/global.json");

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
            setLocation({
                city: LOCATIONS[num].CITY,
                street: LOCATIONS[num].STREET,
                house: LOCATIONS[num].HOUSE,
            });

            localStorage.setItem(
                storageName,
                JSON.stringify({
                    locationNumber: num,
                    location: LOCATIONS[num],
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
                    location: LOCATIONS[0],
                })
            );
        }
    }, [changeLocation]);

    return { changeLocation, locationNumber, location };
};

export default useLocation;
