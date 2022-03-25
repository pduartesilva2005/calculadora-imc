import { useState } from 'react';

import './App.scss';

export function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');

  function calculateIMC() {
    const heightPerson = height / 100;
    const imc = weight / (heightPerson * heightPerson);

    if (imc < 18.6) {
      setMessage(`Seu imc foi ${imc.toFixed(2)}, você está abaixo do peso!`);
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage(`Seu imc foi ${imc.toFixed(2)}, você está no peso ideal!`);
    } else if (imc >= 24.9 && imc < 29.9) {
      setMessage(
        `Seu imc foi ${imc.toFixed(2)}, você está levemente acima do peso!`
      );
    } else if (imc >= 29.9 && imc < 34.9) {
      setMessage(`Seu imc foi ${imc.toFixed(2)}, você está ficando obeso!`);
    } else if (imc >= 34.9 && imc < 39.9) {
      setMessage(`Seu imc foi ${imc.toFixed(2)}, você está severamente obeso!`);
    } else if (imc > 39.9) {
      setMessage(
        `Seu imc foi ${imc.toFixed(2)}, você está em obesidade mórbida!`
      );
    }
  }

  return (
    <div className="app-wrapper">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu imc</span>

      <div className="inputs-wrapper">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={weight}
          onChange={({ target }) => setWeight(target.value)}
        />

        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={height}
          onChange={({ target }) => setHeight(target.value)}
        />

        <button onClick={calculateIMC}>Calcular</button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}
