"use client";

import React, { useState } from "react";
import JogoDeDado from "./JogoDeDado";

export default function JogoDeDados() {
    const [jogador1, setJogador1] = useState(1); // Dado esquerdo (Jogador 1)
    const [jogador2, setJogador2] = useState(1); // Dado direito (Jogador 2)
    const [rodada, setRodada] = useState(1);
    const [pontosJogador1, setPontosJogador1] = useState(0); // Pontos do Jogador 1
    const [pontosJogador2, setPontosJogador2] = useState(0); // Pontos do Jogador 2
    const [vencedor, setVencedor] = useState(null);
    const [jogadorAtual, setJogadorAtual] = useState(1); // 1 para Jogador 1, 2 para Jogador 2

    const jogarDado = (jogador) => {
        const novoNumero = Math.floor(Math.random() * 6) + 1;

        if (jogador === 1) {
            setJogador1(novoNumero); // Atualiza o dado esquerdo (Jogador 1)
            setJogadorAtual(2); // Passa a vez para o Jogador 2
            console.log(`Jogador 1 rolou: ${novoNumero}`);
        } else {
            setJogador2(novoNumero); // Atualiza o dado direito (Jogador 2)
            setJogadorAtual(1); // Passa a vez para o Jogador 1
            setRodada(rodada + 1); // Incrementa a rodada após o Jogador 2 jogar
            console.log(`Jogador 2 rolou: ${novoNumero}`);
        }

        // Verifica quem ganhou a rodada (após o Jogador 2 jogar)
        if (jogador === 2) {
            console.log(`Comparando: Jogador 1 (${jogador1}) x Jogador 2 (${jogador2})`);
            if (jogador1 > jogador2) {
                setPontosJogador1(pontosJogador1 + 1); // Jogador 1 ganha a rodada
                console.log("Jogador 1 ganhou a rodada!");
            } else if (jogador2 > jogador1) {
                setPontosJogador2(pontosJogador2 + 1); // Jogador 2 ganha a rodada
                console.log("Jogador 2 ganhou a rodada!");
            } else {
                console.log("Empate na rodada!"); // Empate
            }
        }

        // Verifica se o jogo terminou (após 5 rodadas)
        if (rodada === 5 && jogador === 2) {
            if (pontosJogador1 > pontosJogador2) {
                setVencedor("Jogador 1");
            } else if (pontosJogador2 > pontosJogador1) {
                setVencedor("Jogador 2");
            } else {
                setVencedor("Empate");
            }
        }
    };

    const reiniciarJogo = () => {
        setJogador1(1); // Reseta o dado esquerdo (Jogador 1)
        setJogador2(1); // Reseta o dado direito (Jogador 2)
        setRodada(1); // Reseta as rodadas
        setPontosJogador1(0); // Reseta os pontos do Jogador 1
        setPontosJogador2(0); // Reseta os pontos do Jogador 2
        setVencedor(null); // Reseta o vencedor
        setJogadorAtual(1); // Reinicia com o Jogador 1
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
                backgroundColor: "#000", // Fundo preto
                color: "#fff", // Texto branco
                padding: "20px",
            }}
        >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#fff" }}>Jogo de Dados</h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "40px", color: "#fff" }}>
                {rodada}ª Rodada
            </p>
            <div style={{ display: "flex", gap: "100px", marginBottom: "40px" }}>
                {/* Dado esquerdo (Jogador 1) */}
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
                            backgroundColor: jogadorAtual === 1 ? "#170068" : "#555", // Roxo quando habilitado
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: jogadorAtual === 1 ? "pointer" : "not-allowed",
                        }}
                    >
                        Jogar Dado
                    </button>
                </div>

                {/* Dado direito (Jogador 2) */}
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
                            backgroundColor: jogadorAtual === 2 ? "#170068" : "#555", // Roxo quando habilitado
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

            {/* Exibe o placar e o vencedor apenas após o término do jogo */}
            {rodada > 5 && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    {/* Placar */}
                    <h2 style={{ fontSize: "2rem", color: "#fff", marginBottom: "10px" }}>
                        Placar: {pontosJogador1} x {pontosJogador2}
                    </h2>

                    {/* Mensagem do vencedor */}
                    <h2 style={{ fontSize: "2rem", color: "#fff", marginBottom: "20px" }}>
                        {vencedor === "Empate" ? "Empate!" : `${vencedor} Ganhou!`}
                    </h2>

                    {/* Botão para reiniciar o jogo */}
                    <button 
                        onClick={reiniciarJogo} 
                        style={{ 
                            marginTop: "20px", 
                            padding: "10px 20px", 
                            fontSize: "16px", 
                            backgroundColor: "#170068", // Roxo
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