"use client";

import { useState } from "react";

function Texto1() {
  return <p>Um parágrafo de texto</p>;
}

function gerarNumAleat() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function Home() {
  const [hide, setHide] = useState(false);
  const [numAleat, setNumAleat] = useState(0);
  const aula = 2;
  return (
    <div>
      <h1>Hello lua!</h1>
      <p> {aula}ª aula  de React </p>
      <hr />
      <button onClick={() => setNumAleat(gerarNumAleat())}>
        Aletatório: {numAleat}
      </button>
      <hr />
      <button onClick={() => setHide(!hide)}>{hide ? "Abrir" : "Fechar"}</button>
      <hr />
      {!hide && (
        <>
          <Texto1 />
          <Texto1 />
        </>
      )}
    </div>
  );
}