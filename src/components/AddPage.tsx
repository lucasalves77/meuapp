import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Plus, X } from "@phosphor-icons/react";

const AddPage: React.FC = () => {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [nomeDigitado, setNomeDigitado] = useState<string | null>(null);
  const [nomesSalvos, setNomesSalvos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Ao carregar o componente, recuperar os itens do localStorage
    const nomesSalvosLocalStorage = localStorage.getItem("nomesSalvos");
    if (nomesSalvosLocalStorage) {
      setNomesSalvos(JSON.parse(nomesSalvosLocalStorage));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificar se o clique ocorreu fora do input
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setMostrarInput(false);
      }
    };

    // Adicionar o ouvinte de evento ao componente
    document.addEventListener("mousedown", handleClickOutside);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setMostrarInput(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeDigitado(event.target.value);
  };

  const handleSalvarNome = () => {
    if (nomeDigitado) {
      const novosNomesSalvos = [...nomesSalvos, nomeDigitado];
      setNomesSalvos(novosNomesSalvos);
      setNomeDigitado(null);
      setMostrarInput(false);

      localStorage.setItem("nomesSalvos", JSON.stringify(novosNomesSalvos));
    }
  };

  const handleCancelar = () => {
    setNomeDigitado(null);
    setMostrarInput(false);
  };

  return (
    <div>
      {mostrarInput ? (
        <div
          ref={inputRef}
          className="pl-2 relative h-4 bg-bgInput flex items-center rounded">
            <X
              style={{ fontSize: 20 }}
              className=" cursor-pointer text-textWhite "
              onClick={handleCancelar}>
            </X>
            <input
            className="pl-2  relative text-sm text-textWhite bg-bgInput outline-none rounded"
            type="text"
            placeholder="Nome"
            value={nomeDigitado || ""}
            onChange={handleInputChange}
          />
            <ArrowRight
              style={{ fontSize: 20 }}
              className="absolute right-0 mr-2 cursor-pointer text-textWhite "
              onClick={handleSalvarNome}>
            </ArrowRight>
        </div>
      ) : (
        <div onClick={handleClick} className="cursor-pointer flex items-center rounded h-4 bg-bgInput">
          <Plus style={{ fontSize: 20 }} className="text-textWhite ml-2" />
          <button className=" text-sm pl-2 text-textWhite">Criar pagina</button>
        </div>
      )}

      {nomesSalvos.length > 0 && (
        <div className="mt-2 ">
          <ul className="text-textWhite cursor-pointer select-none">
            {nomesSalvos.map((nome, index) => (
              <li key={index}>{nome}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddPage;
