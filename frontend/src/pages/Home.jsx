import {
  Users,
  Book,
  BookOpen,
  CheckCircle,
  Plus,
  Send,
  RotateCcw,
  List,
} from "lucide-react"; // Importa ícones da biblioteca lucide-react
import Header from "../components/Header"; // Importação do componente Header
import Footer from "../components/Footer"; // Importação do componente Footer
import "../styles/Home.css"; // CSS específico da Home

const Home = () => {
  // Dados de estatísticas do sistema
  const stats = [
    { number: "1,247", label: "Livros Cadastrados", Icon: Book },
    { number: "89", label: "Livros Emprestados", Icon: BookOpen },
    { number: "1,158", label: "Livros Disponíveis", Icon: CheckCircle },
    { number: "156", label: "Empréstimos Hoje", Icon: Users },
  ];

  // Dados para as ações rápidas
  const quickActions = [
    {
      title: "Cadastrar Livro",
      description: "Adicione novos livros ao acervo",
      Icon: Plus,
      color: "#4CAF50",
    },
    {
      title: "Fazer Empréstimo",
      description: "Empreste um livro informando nome e código do usuário",
      Icon: Send,
      color: "#FF9800",
    },
    {
      title: "Processar Devolução",
      description: "Registre a devolução de livros",
      Icon: RotateCcw,
      color: "#9C27B0",
    },
    {
      title: "Ver Empréstimos",
      description: "Consulte todos os empréstimos ativos",
      Icon: List,
      color: "#2196F3",
    },
  ];

  // Livros adicionados recentemente (Começo com dados fictícios)
  const recentBooks = [
    { title: "Dom Casmurro", author: "Machado de Assis", code: "LIV001" },
    { title: "O Cortiço", author: "Aluísio Azevedo", code: "LIV002" },
    { title: "1984", author: "George Orwell", code: "LIV003" },
  ];

  return (
    <div className="home-container">
      <Header />

      {/* Seção de Estatísticas */}
      <section>
        <h2>Estatísticas do Sistema</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }} // Delay da animação para cada card
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

      {/* Seção de Ações Rápidas */}
      <section className="actions-section">
        <h2>Ações Rápidas</h2>
        <div className="actions-grid">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="action-card"
              style={{ "--accent-color": action.color }} // Cor personalizada do card
            >
              <div className="action-icon">
                <action.Icon size={48} /> {/* Ícone da ação */}
              </div>
              <h3>{action.title}</h3> {/* Título da ação */}
              <p>{action.description}</p> {/* Descrição */}
              <button className="action-button">Acessar</button>{" "}
              {/* Botão sem funcionalidade por enquanto */}
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Livros Recentes */}
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

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Home;
