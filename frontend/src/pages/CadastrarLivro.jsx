import { useState } from "react";
import { Book, Save, X } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/CadastrarLivro.css";
import BackButton from "../components/BackButton";

const CadastrarLivro = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    codigo: "",
    isbn: "",
    editora: "",
    ano: "",
    categoria: "",
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

    if (!formData.titulo || !formData.autor || !formData.codigo) {
      setMensagem({
        texto: "Por favor, preencha os campos obrigatórios!",
        tipo: "erro",
      });
      return;
    }

    try {
      // Aqui será a chamada para o backend quando estiver pronto
      // const response = await fetch('http://localhost:5000/api/livros', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.erro || 'Erro ao cadastrar livro');
      // }

      // Simulação de sucesso
      setMensagem({
        texto: `Livro "${formData.titulo}" cadastrado com sucesso!`,
        tipo: "sucesso",
      });

      setFormData({
        titulo: "",
        autor: "",
        codigo: "",
        isbn: "",
        editora: "",
        ano: "",
        categoria: "",
      });

      setTimeout(() => setMensagem({ texto: "", tipo: "" }), 3000);
    } catch (error) {
      setMensagem({
        texto: "Erro ao cadastrar livro. Tente novamente.",
        tipo: "erro",
      });
    }
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      autor: "",
      codigo: "",
      isbn: "",
      editora: "",
      ano: "",
      categoria: "",
    });
    setMensagem({ texto: "", tipo: "" });
  };

  return (
    <div className="cadastrar-container">
      <Header />

      <section className="form-section">
        <BackButton />
        <div className="form-header">
          <Book size={40} />
          <h2>Cadastrar Novo Livro</h2>
        </div>

        {mensagem.texto && (
          <div className={`mensagem ${mensagem.tipo}`}>{mensagem.texto}</div>
        )}

        <form onSubmit={handleSubmit} className="book-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="titulo">
                Título do Livro <span className="required">*</span>
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Ex: Dom Casmurro"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="autor">
                Autor <span className="required">*</span>
              </label>
              <input
                type="text"
                id="autor"
                name="autor"
                value={formData.autor}
                onChange={handleChange}
                placeholder="Ex: Machado de Assis"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="codigo">
                Código do Livro <span className="required">*</span>
              </label>
              <input
                type="text"
                id="codigo"
                name="codigo"
                value={formData.codigo}
                onChange={handleChange}
                placeholder="Ex: LIV001"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="isbn">
                ISBN (International Standard Book Number)
              </label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder="Ex: 978-3-16-148410-0"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="editora">Editora</label>
              <input
                type="text"
                id="editora"
                name="editora"
                value={formData.editora}
                onChange={handleChange}
                placeholder="Ex: Companhia das Letras"
              />
            </div>

            <div className="form-group">
              <label htmlFor="ano">Ano de Publicação</label>
              <input
                type="number"
                id="ano"
                name="ano"
                value={formData.ano}
                onChange={handleChange}
                placeholder="Ex: 1899"
                min="1000"
                max="2100"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="">Selecione uma categoria</option>
              <option value="ficcao">Ficção</option>
              <option value="romance">Romance</option>
              <option value="tecnico">Técnico</option>
              <option value="infantil">Infantil</option>
              <option value="poesia">Poesia</option>
              <option value="biografia">Biografia</option>
              <option value="historia">História</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              <Save size={20} />
              Cadastrar Livro
            </button>
            <button type="button" onClick={handleReset} className="btn-reset">
              <X size={20} />
              Limpar Formulário
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default CadastrarLivro;
