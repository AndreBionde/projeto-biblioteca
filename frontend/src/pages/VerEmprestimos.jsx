import { useState } from "react";
import { List, User, BookOpen, Calendar, AlertCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import "../styles/VerEmprestimos.css";

const VerEmprestimos = () => {
  // Quando o backend estiver pronto, usar useEffect para buscar dados reais
  // import { useEffect } from "react";
  // useEffect(() => {
  //   buscarEmprestimos();
  // }, []);
  // const buscarEmprestimos = async () => {
  //   const response = await fetch('http://localhost:5000/api/emprestimos/ativos');
  //   const data = await response.json();
  //   setEmprestimos(data);
  // };

  const [emprestimos] = useState([
    {
      id: "EMP001",
      usuario: "João Silva",
      codigoUsuario: "USR001",
      livro: "Dom Casmurro",
      codigoLivro: "LIV001",
      dataEmprestimo: "2025-10-10",
      dataDevolucao: "2025-10-24",
      status: "ativo",
    },
    {
      id: "EMP002",
      usuario: "Maria Santos",
      codigoUsuario: "USR002",
      livro: "O Cortiço",
      codigoLivro: "LIV002",
      dataEmprestimo: "2025-10-12",
      dataDevolucao: "2025-10-26",
      status: "ativo",
    },
    {
      id: "EMP003",
      usuario: "Pedro Oliveira",
      codigoUsuario: "USR003",
      livro: "1984",
      codigoLivro: "LIV003",
      dataEmprestimo: "2025-10-05",
      dataDevolucao: "2025-10-19",
      status: "atrasado",
    },
    {
      id: "EMP004",
      usuario: "Ana Costa",
      codigoUsuario: "USR004",
      livro: "Memórias Póstumas de Brás Cubas",
      codigoLivro: "LIV004",
      dataEmprestimo: "2025-10-15",
      dataDevolucao: "2025-10-29",
      status: "ativo",
    },
  ]);

  const calcularDiasRestantes = (dataDevolucao) => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataDevol = new Date(dataDevolucao);
    const diffTime = dataDevol - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const renderStatusBadge = (emprestimo) => {
    const diasRestantes = calcularDiasRestantes(emprestimo.dataDevolucao);

    if (diasRestantes < 0) {
      return (
        <span className="status-badge atrasado">
          <AlertCircle size={16} />
          Atrasado ({Math.abs(diasRestantes)} dias)
        </span>
      );
    } else if (diasRestantes <= 3) {
      return (
        <span className="status-badge proximo">
          <Calendar size={16} />
          Vence em {diasRestantes} dia(s)
        </span>
      );
    } else {
      return (
        <span className="status-badge ativo">
          <Calendar size={16} />
          Ativo
        </span>
      );
    }
  };

  return (
    <div className="emprestimos-container">
      <Header />

      <section className="lista-section">
        <BackButton />
        <div className="lista-header">
          <List size={40} />
          <h2>Empréstimos Ativos</h2>
          <p className="total-count">{emprestimos.length} empréstimo(s)</p>
        </div>

        <div className="emprestimos-grid">
          {emprestimos.map((emprestimo) => (
            <div key={emprestimo.id} className="emprestimo-card">
              <div className="card-header">
                <span className="emprestimo-id">{emprestimo.id}</span>
                {renderStatusBadge(emprestimo)}
              </div>

              <div className="card-body">
                <div className="info-row">
                  <User size={18} className="icon-info" />
                  <div className="info-content">
                    <span className="info-label">Usuário</span>
                    <span className="info-value">{emprestimo.usuario}</span>
                    <span className="info-code">
                      {emprestimo.codigoUsuario}
                    </span>
                  </div>
                </div>

                <div className="info-row">
                  <BookOpen size={18} className="icon-info" />
                  <div className="info-content">
                    <span className="info-label">Livro</span>
                    <span className="info-value">{emprestimo.livro}</span>
                    <span className="info-code">{emprestimo.codigoLivro}</span>
                  </div>
                </div>

                <div className="dates-info">
                  <div className="date-item">
                    <span className="date-label">Empréstimo:</span>
                    <span className="date-value">
                      {new Date(emprestimo.dataEmprestimo).toLocaleDateString(
                        "pt-BR"
                      )}
                    </span>
                  </div>
                  <div className="date-item">
                    <span className="date-label">Devolução:</span>
                    <span className="date-value">
                      {new Date(emprestimo.dataDevolucao).toLocaleDateString(
                        "pt-BR"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {emprestimos.length === 0 && (
          <div className="empty-state">
            <List size={80} />
            <h3>Nenhum empréstimo ativo</h3>
            <p>Não há empréstimos registrados no momento.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default VerEmprestimos;
