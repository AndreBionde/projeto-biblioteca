import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CadastrarLivro from "./pages/CadastrarLivro";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cadastrar-livro" element={<CadastrarLivro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
