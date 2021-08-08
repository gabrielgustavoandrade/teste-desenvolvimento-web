import { useHistory } from "react-router";
import entrar from "../../assets/entrar.png";
import "./pokebola.css";

function Pokebola() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/pokemons");
  };

  return (
    <div className="pokebola">
      <div className="pokebola-up-side"></div>
      <div className="pokebola-buttom"></div>
      <img src={entrar} className="button" onClick={handleClick} alt="entrar" />
      <div className="pokebola-down-side"></div>
    </div>
  );
}

export default Pokebola;
