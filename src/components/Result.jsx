import { useContext } from "react";
import { Link } from "react-router-dom";
import { CalculatorContext } from "../context/CalculatorContext";

const Result = () => {
  const { numbers, reset } = useContext(CalculatorContext);

  return (
    <div className="result">
      <h1>Resultado</h1>

      {/* Mostrar números seleccionados */}
      <p className="selected-numbers">
        {numbers.length > 0 ? `Números: ${numbers.join(" + ")}` : "No se han seleccionado números."}
      </p>

      {/* Mostrar el total */}
      <p className="total">Total: {numbers.reduce((acc, num) => acc + num, 0)}</p>

      <button onClick={reset} className="reset-button">Reset</button>
      <Link to="/" className="back-link">Volver</Link>
    </div>
  );
};

export default Result;