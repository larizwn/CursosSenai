import React from 'react';
import './style.css';
import gestaofinanceira from './gestaofinanceira.jpg';

function Card2() {
    return(
        <div className="card-container">
            <h3>Gestão Financeira</h3>
            <img src={gestaofinanceira} id ="imagem2" alt="gestaofinanceira"/> 
            <p><strong>Carga Horária:</strong> 40 Horas</p>
            <p><strong>Valor:</strong> Gratuito</p>
        </div>
    );
}

export default Card2;