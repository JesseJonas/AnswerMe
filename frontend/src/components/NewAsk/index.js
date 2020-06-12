import React, { useState } from 'react';
import api from '../../services/api';

import './newask.css';

export default function NewAsk() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    
    const data = new FormData();
    data.append('title', title);
    data.append('body', body);

    api.post('/ask', {
      title,
      body
    });

    setTitle('');
    setBody('');
  }

  return (
    <div className="container newask-container">
      <h1>Nova Pergunta</h1>
      
      <form onSubmit={handleSubmit} className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Título"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea 
          className="form-control" 
          rows="7" 
          placeholder="Descrição da pergunta"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>
        <button type="submit" className="btn btn-dark btn-block">Enviar</button>
      </form>
    </div>  
  )
}
