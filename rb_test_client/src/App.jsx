import MainPage from "./pages/MainPage";
import AddressContext from "./context/LocationContext";
import useLocation from "./hooks/location.hook";

function App() {
    const { changeLocation, locationNumber, location } = useLocation()

    return (
        <AddressContext.Provider
            value={{
                changeLocation, 
                locationNumber, 
                location
            }}
        >
            <MainPage />
        </AddressContext.Provider>
    );
}

export default App;
