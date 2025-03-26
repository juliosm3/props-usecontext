import { useContext } from "react";
import { Link } from "react-router-dom";
import { CalculatorContext } from "../context/CalculatorContext";

const Calculator = () => {
  const { numbers, selectedNumber, addNumber } = useContext(CalculatorContext);

  return (
    <div className="calculator">
      <h1>Calculadora</h1>
      
      {/* Último número pulsado */}
      {selectedNumber !== null && <p className="selected">Último número: {selectedNumber}</p>}

      {/* Teclado numérico */}
      <div className="grid">
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => addNumber(num)}>
            {num}
          </button>
        ))}
      </div>

      {/* Números seleccionados */}
      {numbers.length > 0 && (
        <p className="selected-numbers">Seleccionados: {numbers.join(", ")}</p>
      )}

      <Link to="/resultado" className="result-link">Ver resultado</Link>
    </div>
  );
};

export default Calculator;