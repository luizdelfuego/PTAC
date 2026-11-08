import { useEffect, useState } from "react";

function Filho({ valor }) {

  useEffect(() => {
    console.log("Prop valor:", valor);
  }, [valor]);

  return <p>Valor recebido: {valor}</p>;
}

export default function Exercicio2() {
  const [valor, setValor] = useState(0);
  const [outro, setOutro] = useState(0);

  return (
    <div>
      <Filho valor={valor} />
      <button onClick={() => setValor((v) => v + 1)}>Mudar prop (loga)</button>

      <button onClick={() => setOutro((o) => o + 1)}>
       ({outro})
      </button>
    </div>
  );
}