import React from 'react';
import './style.css';
import logistica from './logistica.jpg'

function Card3() {
    return(
        <div className="card-container">
           <h3>Logística - Suprimento</h3>
           <img src={logistica} id = "imagem3"alt="logistica"/> 
            <p><strong>Carga Horária:</strong> 160 Horas</p>
            <p><strong>Valor:</strong> Gratuito</p>
        </div>
    );
}

export default Card3;