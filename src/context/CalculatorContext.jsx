import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);

  // Agregar un número a la lista
  const addNumber = (num) => {
    setNumbers([...numbers, num]);
    setSelectedNumber(num);
  };

  // Resetear la lista
  const reset = () => {
    setNumbers([]);
    setSelectedNumber(null);
  };

  return (
    <CalculatorContext.Provider value={{ numbers, selectedNumber, addNumber, reset }}>
      {children}
    </CalculatorContext.Provider>
  );
};