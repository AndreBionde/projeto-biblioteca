import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CadastrarLivro from "./pages/CadastrarLivro";
import FazerEmprestimo from "./pages/FazerEmprestimos";
import ProcessarDevolucao from "./pages/ProcessarDevolucao";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar-livro" element={<CadastrarLivro />} />
          <Route path="/fazer-emprestimo" element={<FazerEmprestimo />} />
          <Route path="/processar-devolucao" element={<ProcessarDevolucao />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
