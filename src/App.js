import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./view/dashboard/Dashboard";
import Address from "./view/address/Address";
import DisplayDetails from "./view/thirdPage/DisplayDetails";
import { useState } from "react";

function App() {
  const [allData, setAllData] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/address" element={<Address />} />
          <Route path="/" element={<Dashboard setAllData={setAllData} />} />
          <Route
            path="/third-page"
            element={<DisplayDetails allData={allData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
