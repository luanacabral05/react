"use client";

import { useState } from "react";

function Texto1() {
  return <p>Um parágrafo de texto</p>;
}

export default function Home() {
  const [hide, setHide] = useState(false);
  const aula = 2;
  return (
    <div>
    <h1>Hello Lua!</h1>
      <p> {aula}ª aula  de React </p>
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
  )
}