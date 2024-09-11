import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/sing in up.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Lógica de cadastro aqui
    navigate('/');
  };

  return (
    <div className='campo-perfil'>
      <h2>Cadastro</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Cadastrar</button>
    </div>
  );
}

export default Signup;
