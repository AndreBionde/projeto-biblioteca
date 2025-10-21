import { useState } from "react";
import { Send, User, BookOpen } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/FazerEmprestimos.css";

const FazerEmprestimo = () => {
  const [formData, setFormData] = useState({
    nomeUsuario: "",
    codigoUsuario: "",
    codigoLivro: "",
    dataDevolucao: "",
  });

  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.nomeUsuario ||
      !formData.codigoUsuario ||
      !formData.codigoLivro ||
      !formData.dataDevolucao
    ) {
      setMensagem({
        texto: "Por favor, preencha todos os campos!",
        tipo: "erro",
      });
      return;
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataSelecionada = new Date(formData.dataDevolucao);

    if (dataSelecionada < hoje) {
      setMensagem({
        texto: "A data de devolução não pode ser no passado!",
        tipo: "erro",
      });
      return;
    }

    try {
      // Aqui será a chamada para o backend quando estiver pronto
      // const response = await fetch('http://localhost:5000/api/emprestimos', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     codigo_usuario: formData.codigoUsuario,
      //     codigo_livro: formData.codigoLivro,
      //     data_devolucao_prevista: formData.dataDevolucao
      //   })
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.erro || 'Erro ao realizar empréstimo');
      // }

      setMensagem({
        texto: `Empréstimo realizado com sucesso para ${formData.nomeUsuario}!`,
        tipo: "sucesso",
      });

      setFormData({
        nomeUsuario: "",
        codigoUsuario: "",
        codigoLivro: "",
        dataDevolucao: "",
      });

      setTimeout(() => setMensagem({ texto: "", tipo: "" }), 3000);
    } catch (error) {
      setMensagem({
        texto: "Erro ao realizar empréstimo. Tente novamente.",
        tipo: "erro",
      });
    }
  };

  const getMinDate = () => {
    const hoje = new Date();
    return hoje.toISOString().split("T")[0];
  };

  return (
    <div className="emprestimo-container">
      <Header />

      <section className="form-section">
        <div className="form-header">
          <Send size={40} />
          <h2>Realizar Empréstimo</h2>
        </div>

        {mensagem.texto && (
          <div className={`mensagem ${mensagem.tipo}`}>{mensagem.texto}</div>
        )}

        <form onSubmit={handleSubmit} className="emprestimo-form">
          <div className="info-box">
            <User size={24} />
            <h3>Informações do Usuário</h3>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nomeUsuario">
                Nome do Usuário <span className="required">*</span>
              </label>
              <input
                type="text"
                id="nomeUsuario"
                name="nomeUsuario"
                value={formData.nomeUsuario}
                onChange={handleChange}
                placeholder="Ex: João Silva"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="codigoUsuario">
                Código do Usuário <span className="required">*</span>
              </label>
              <input
                type="text"
                id="codigoUsuario"
                name="codigoUsuario"
                value={formData.codigoUsuario}
                onChange={handleChange}
                placeholder="Ex: USR001"
                required
              />
            </div>
          </div>

          <div className="info-box">
            <BookOpen size={24} />
            <h3>Informações do Livro</h3>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="codigoLivro">
                Código do Livro <span className="required">*</span>
              </label>
              <input
                type="text"
                id="codigoLivro"
                name="codigoLivro"
                value={formData.codigoLivro}
                onChange={handleChange}
                placeholder="Ex: LIV001"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dataDevolucao">
                Data de Devolução <span className="required">*</span>
              </label>
              <input
                type="date"
                id="dataDevolucao"
                name="dataDevolucao"
                value={formData.dataDevolucao}
                onChange={handleChange}
                min={getMinDate()}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              <Send size={20} />
              Realizar Empréstimo
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default FazerEmprestimo;
