import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "@/pages";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="personal" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
