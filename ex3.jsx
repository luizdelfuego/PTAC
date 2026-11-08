import { useEffect, useState } from "react";
import { subscribe, emit } from "./eventBus";

function Emissor() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    const proximo = contador + 1;
    setContador(proximo);
    emit("botao-clicado", {
      numero: proximo,
      hora: new Date().toLocaleTimeString(),
    });
  }

  return <button onClick={handleClick}>Emitir evento</button>;
}

function Receptor() {
  const [ultimo, setUltimo] = useState(null);

  useEffect(() => {
    const cancelar = subscribe("botao-clicado", setUltimo);
    return cancelar; 
  }, []);

  return (
    <p>
      {ultimo
        ? `Evento #${ultimo.numero} recebido às ${ultimo.hora}`
        : "Nenhum evento recebido ainda"}
    </p>
  );
}
export default function Exercicio3() {
  return (
    <div>
      <Emissor />
      <Receptor />
    </div>
  );
}