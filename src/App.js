import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:id" element={<DetailsPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
