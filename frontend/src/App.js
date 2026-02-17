import { HashRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
