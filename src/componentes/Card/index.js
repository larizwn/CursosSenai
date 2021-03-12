import React from 'react';
import './style.css';
import mecanica from './mecanica.jpg';

function Card() {
    return(
        <div className="card-container">
            <h3>Automotiva - Mecânica</h3> 
            <img src={mecanica} id="imagem" alt="mecanica"/>      
            <p><strong>Carga Horária:</strong> 14 Horas</p>
            <p><strong>Valor:</strong> Gratuito</p>
        </div> 
    );
}

export default Card;