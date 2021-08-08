import entrar from "../../assets/entrar.png";
import "./pokebola.css";

function Pokebola() {
  return (
    <div className="pokebola">
      <div className="pokebola-up-side"></div>
      <div className="pokebola-buttom"></div>
      <img src={entrar} className="button" alt="entrar" />
      <div className="pokebola-down-side"></div>
    </div>
  );
}

export default Pokebola;
