import react from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import styles from "./components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import VehicleDetails from "./components/VehicleDetails";
import Charges from "./components/charges";
import Passenger from "./components/Passenger";

function App() {
  return (
    <>
      <Navbar />
      <VehicleDetails />
      <Charges />
      <Passenger />
      <Footer /> 
    </>
  );
}

export default App;
