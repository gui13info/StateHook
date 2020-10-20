import React, { useState } from 'react';
import './styles.css';

function PaginaInicial(){
    const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100-1) + 1 );
        setNumeroAleatorio(novoNumero);
    }

    return(
    <div className="container">
        <div className="container-conteudo">
            <h3>Número Aleatório:</h3>
            <h1>{ numeroAleatorio }</h1>

            <div className="area-botao">
                <label>
                Gerar número aleatório:
                </label>

                <button onClick={gerarNumero}>
                Gerar número
                </button>
            </div>
        </div>
    </div>
    );
}

export default PaginaInicial;