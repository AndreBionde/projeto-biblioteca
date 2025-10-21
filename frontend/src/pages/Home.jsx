import { useNavigate } from "react-router-dom";
import {
  Users,
  Book,
  BookOpen,
  CheckCircle,
  Plus,
  Send,
  RotateCcw,
  List,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "1,247", label: "Livros Cadastrados", Icon: Book },
    { number: "89", label: "Livros Emprestados", Icon: BookOpen },
    { number: "1,158", label: "Livros Disponíveis", Icon: CheckCircle },
    { number: "156", label: "Empréstimos Hoje", Icon: Users },
  ];

  const quickActions = [
    {
      title: "Cadastrar Livro",
      description: "Adicione novos livros ao acervo",
      Icon: Plus,
      color: "#4CAF50",
      path: "/cadastrar-livro",
    },
    {
      title: "Fazer Empréstimo",
      description: "Empreste um livro informando nome e código do usuário",
      Icon: Send,
      color: "#FF9800",
      path: "/fazer-emprestimo",
    },
    {
      title: "Processar Devolução",
      description: "Registre a devolução de livros",
      Icon: RotateCcw,
      color: "#9C27B0",
      path: "/processar-devolucao",
    },
    {
      title: "Ver Empréstimos",
      description: "Consulte todos os empréstimos ativos",
      Icon: List,
      color: "#2196F3",
      path: "/ver-emprestimos",
    },
  ];

  const recentBooks = [
    { title: "Dom Casmurro", author: "Machado de Assis", code: "LIV001" },
    { title: "O Cortiço", author: "Aluísio Azevedo", code: "LIV002" },
    { title: "1984", author: "George Orwell", code: "LIV003" },
  ];

  return (
    <div className="home-container">
      <Header />

      <section>
        <h2>Estatísticas do Sistema</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="stat-icon">
                <stat.Icon size={48} />
              </div>
              <div className="stat-content">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="actions-section">
        <h2>Ações Rápidas</h2>
        <div className="actions-grid">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="action-card"
              style={{ "--accent-color": action.color }}
            >
              <div className="action-icon">
                <action.Icon size={48} />
              </div>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              <button
                className="action-button"
                onClick={() => navigate(action.path)}
              >
                Acessar
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="recent-section">
        <h2>Livros Adicionados Recentemente</h2>
        <div className="recent-books">
          {recentBooks.map((book, index) => (
            <div key={index} className="book-card">
              <div className="book-info">
                <BookOpen size={20} />
                <div>
                  <h4>{book.title}</h4>
                  <p>por {book.author}</p>
                  <span className="book-code">{book.code}</span>
                </div>
              </div>
              <div className="book-status available">
                <CheckCircle size={16} />
                Disponível
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
