"use client";

import React, { useState } from "react";
import Dado from "./Dado";

export default function App() {
    const [numero, setNumero] = useState(1);

    const jogarDado = () => {
        const novoNumero = Math.floor(Math.random() * 6) + 1;
        setNumero(novoNumero);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Jogue o Dado</h1>
            <Dado numero={numero} />
            <button 
                onClick={jogarDado} 
                style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
                Jogar
            </button>
        </div>
    );
}