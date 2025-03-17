"use client";

import React, { useState } from "react";
import JogoDeDado from "./JogoDeDado";

export default function JogoDeDados() {
    const [jogador1, setJogador1] = useState(1);
    const [jogador2, setJogador2] = useState(1);
    const [rodada, setRodada] = useState(1);
    const [pontosJogador1, setPontosJogador1] = useState(0);
    const [pontosJogador2, setPontosJogador2] = useState(0);
    const [vencedor, setVencedor] = useState(null);
    const [jogadorAtual, setJogadorAtual] = useState(1);
    const [resultadoRodada, setResultadoRodada] = useState("");

    const jogarDado = (jogador) => {
        const novoNumero = Math.floor(Math.random() * 6) + 1;

        if (jogador === 1) {
            setJogador1(novoNumero);
            setJogadorAtual(2);
            console.log(`Jogador 1 rolou: ${novoNumero}`);
        } else {
            setJogador2(novoNumero);
            setJogadorAtual(1);
            console.log(`Jogador 2 rolou: ${novoNumero}`);

            if (novoNumero > jogador1) {
                setPontosJogador2(pontosJogador2 + 1);
                console.log("Jogador 2 ganhou a rodada!");
            } else if (jogador1 > novoNumero) {
                setPontosJogador1(pontosJogador1 + 1);
                console.log("Jogador 1 ganhou a rodada!");
            } else {
                console.log("Empate na rodada!");
            }

            setRodada(rodada + 1);
        }

        if (rodada === 5 && jogador === 2) {
            if (pontosJogador1 > pontosJogador2) {
                setVencedor("Jogador 1");
            } else if (pontosJogador2 > pontosJogador1) {
                setVencedor("Jogador 2");
            } else {
                setVencedor("Empate");
            }
            setResultadoRodada("Fim do Jogo");
        }
    };

    const reiniciarJogo = () => {
        setJogador1(1);
        setJogador2(1);
        setRodada(1);
        setPontosJogador1(0);
        setPontosJogador2(0);
        setVencedor(null);
        setJogadorAtual(1);
        setResultadoRodada("");
        console.log("Jogo reiniciado!");
    };

    return (
        <div 
            style={{
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "100vh",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#000",
                color: "#fff",
                padding: "20px",
            }}
        >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#fff" }}>Jogo de Dados</h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#fff" }}>
                {rodada}ª Rodada
            </p>
            <div style={{ display: "flex", gap: "100px", marginBottom: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "20px" }}>Jogador 1</h2>
                    <JogoDeDado numero={jogador1} />
                    <button 
                        onClick={() => jogarDado(1)} 
                        disabled={jogadorAtual !== 1 || rodada > 5}
                        style={{ 
                            marginTop: "20px", 
                            padding: "10px 20px", 
                            fontSize: "16px", 
                            backgroundColor: jogadorAtual === 1 ? "#170068" : "#555",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: jogadorAtual === 1 ? "pointer" : "not-allowed",
                        }}
                    >
                        Jogar Dado
                    </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "20px" }}>Jogador 2</h2>
                    <JogoDeDado numero={jogador2} />
                    <button 
                        onClick={() => jogarDado(2)} 
                        disabled={jogadorAtual !== 2 || rodada > 5}
                        style={{ 
                            marginTop: "20px", 
                            padding: "10px 20px", 
                            fontSize: "16px", 
                            backgroundColor: jogadorAtual === 2 ? "#170068" : "#555",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: jogadorAtual === 2 ? "pointer" : "not-allowed",
                        }}
                    >
                        Jogar Dado
                    </button>
                </div>
            </div>

            {resultadoRodada && (
                <p style={{ fontSize: "1.25rem", marginBottom: "20px", color: "#fff" }}>
                    {resultadoRodada}
                </p>
            )}

            {rodada > 5 && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2rem", color: "#fff", marginBottom: "10px" }}>
                        Placar Final: {pontosJogador1} x {pontosJogador2}
                    </h2>

                    <h2 style={{ fontSize: "2rem", color: "#fff", marginBottom: "20px" }}>
                        {vencedor === "Empate" ? "Empate!" : `${vencedor} Ganhou!`}
                    </h2>

                    <button 
                        onClick={reiniciarJogo} 
                        style={{ 
                            marginTop: "20px", 
                            padding: "10px 20px", 
                            fontSize: "16px", 
                            backgroundColor: "#170068",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Jogar Novamente
                    </button>
                </div>
            )}
        </div>
    );
}