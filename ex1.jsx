import { useEffect, useState } from "react";

export default function Exercicio1() {
  const [hora, setHora] = useState(null);
  const [cliques, setCliques] = useState(0);


  useEffect(() => {
    console.log("Efeito executado (deve aparecer só uma vez)");
    setHora(new Date().toLocaleTimeString());
  }, []);

  return (
    <div>
      <p>Hora do carregamento: {hora ?? "carregando..."}</p>
      <p>Cliques: {cliques}</p>
    
      <button onClick={() => setCliques((c) => c + 1)}>Re-renderizar</button>
    </div>
  );
}