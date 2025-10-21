import { Book, Calendar } from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="welcome-section">
          <h1>
            <Book
              size={40}
              style={{ marginRight: "10px", verticalAlign: "middle" }}
            />
            Sistema de Biblioteca
          </h1>
          <p>Bem-vindo ao sistema de gerenciamento da nossa biblioteca</p>
        </div>

        <div className="current-date">
          <Calendar size={18} className="date-icon" />
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
