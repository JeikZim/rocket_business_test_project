import { createContext } from "react";

const LocationContext = createContext({
    location: {
        city: "",
        street: "",
        house: "",
    },
    locationNumber: 0,
    changeLocation: () => {}
});

export default LocationContext;