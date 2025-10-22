import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../styles/BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate("/")}>
      <ArrowLeft size={20} />
      Voltar
    </button>
  );
};

export default BackButton;
