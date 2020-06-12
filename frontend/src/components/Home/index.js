import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './home.css';

export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      api.get('/')
        .then( async (response) => {
          setQuestions(response.data)
        })
  }, []);

  return (
    <div className="container home-container">
      <h1>Lista de perguntas</h1>
      <span className="newask"><a href="/ask">Fazer pergunta</a></span>
      {questions.map((question) => (
        <div key={question.id} className="card">
          <div className="card-body">
            <h5 className="card-text">{question.title}</h5>
            <a href="/askview">Ver / Responder</a>
          </div>
        </div>
      ))}
    </div>
  )
}
