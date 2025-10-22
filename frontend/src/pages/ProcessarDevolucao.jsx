import { useState } from "react";
import { RotateCcw, Search, Check } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/ProcessarDevolucao.css";
import BackButton from "../components/BackButton";

const ProcessarDevolucao = () => {
  const [codigoEmprestimo, setCodigoEmprestimo] = useState("");
  const [emprestimoEncontrado, setEmprestimoEncontrado] = useState(null);
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });

  const handleBuscar = async (e) => {
    e.preventDefault();

    if (!codigoEmprestimo) {
      setMensagem({
        texto: "Por favor, informe o código do empréstimo!",
        tipo: "erro",
      });
      return;
    }

    try {
      // Aqui será a chamada para o backend quando estiver pronto
      // const response = await fetch(`http://localhost:5000/api/emprestimos/codigo/${codigoEmprestimo}`);
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.erro || 'Empréstimo não encontrado');
      // }
      // setEmprestimoEncontrado({
      //   codigo: data.codigo,
      //   usuario: data.usuario_nome,
      //   codigoUsuario: data.usuario_codigo,
      //   livro: data.livro_titulo,
      //   codigoLivro: data.livro_codigo,
      //   dataEmprestimo: data.data_emprestimo,
      //   dataDevolucaoPrevista: data.data_devolucao_prevista,
      //   diasAtraso: calcularDiasAtraso(data.data_devolucao_prevista),
      // });

      // Simulando dados do empréstimo encontrado
      const emprestimoSimulado = {
        codigo: codigoEmprestimo,
        usuario: "João Silva",
        codigoUsuario: "USR001",
        livro: "Dom Casmurro",
        codigoLivro: "LIV001",
        dataEmprestimo: "2025-10-10",
        dataDevolucaoPrevista: "2025-10-24",
        diasAtraso: calcularDiasAtraso("2025-10-24"),
      };

      setEmprestimoEncontrado(emprestimoSimulado);
      setMensagem({ texto: "", tipo: "" });
    } catch (error) {
      setMensagem({
        texto: "Empréstimo não encontrado. Verifique o código.",
        tipo: "erro",
      });
      setEmprestimoEncontrado(null);
    }
  };

  const calcularDiasAtraso = (dataPrevista) => {
    const hoje = new Date();
    const dataPrevis = new Date(dataPrevista);
    const diffTime = hoje - dataPrevis;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const handleDevolucao = async () => {
    try {
      // Aqui será a chamada para o backend quando estiver pronto
      // const response = await fetch(`http://localhost:5000/api/emprestimos/${codigoEmprestimo}/devolver`, {
      //   method: 'PUT'
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.erro || 'Erro ao processar devolução');
      // }

      setMensagem({
        texto: "Devolução processada com sucesso!",
        tipo: "sucesso",
      });

      setTimeout(() => {
        setEmprestimoEncontrado(null);
        setCodigoEmprestimo("");
        setMensagem({ texto: "", tipo: "" });
      }, 2000);
    } catch (error) {
      setMensagem({
        texto: "Erro ao processar devolução. Tente novamente.",
        tipo: "erro",
      });
    }
  };

  return (
    <div className="devolucao-container">
      <Header />

      <div className="devolucao-main-content">
        <section className="form-section">
          <BackButton />
          <div className="form-header">
            <RotateCcw size={40} />
            <h2>Processar Devolução</h2>
          </div>

          {mensagem.texto && (
            <div className={`mensagem ${mensagem.tipo}`}>{mensagem.texto}</div>
          )}

          <form onSubmit={handleBuscar} className="busca-form">
            <div className="search-group">
              <input
                type="text"
                value={codigoEmprestimo}
                onChange={(e) => setCodigoEmprestimo(e.target.value)}
                placeholder="Digite o código do empréstimo (ex: EMP001)"
                className="search-input"
              />
              <button type="submit" className="btn-search">
                <Search size={20} />
                Buscar
              </button>
            </div>
          </form>

          {emprestimoEncontrado && (
            <div className="emprestimo-details">
              <h3>Detalhes do Empréstimo</h3>

              <div className="detail-grid">
                <div className="detail-item">
                  <span className="label">Usuário:</span>
                  <span className="value">{emprestimoEncontrado.usuario}</span>
                </div>

                <div className="detail-item">
                  <span className="label">Código do Usuário:</span>
                  <span className="value">
                    {emprestimoEncontrado.codigoUsuario}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="label">Livro:</span>
                  <span className="value">{emprestimoEncontrado.livro}</span>
                </div>

                <div className="detail-item">
                  <span className="label">Código do Livro:</span>
                  <span className="value">
                    {emprestimoEncontrado.codigoLivro}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="label">Data do Empréstimo:</span>
                  <span className="value">
                    {new Date(
                      emprestimoEncontrado.dataEmprestimo
                    ).toLocaleDateString("pt-BR")}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="label">Data Prevista de Devolução:</span>
                  <span className="value">
                    {new Date(
                      emprestimoEncontrado.dataDevolucaoPrevista
                    ).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              </div>

              {emprestimoEncontrado.diasAtraso > 0 && (
                <div className="alert-atraso">
                  ⚠️ Este empréstimo está com {emprestimoEncontrado.diasAtraso}{" "}
                  dia(s) de atraso!
                </div>
              )}

              <button onClick={handleDevolucao} className="btn-confirmar">
                <Check size={20} />
                Confirmar Devolução
              </button>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProcessarDevolucao;
