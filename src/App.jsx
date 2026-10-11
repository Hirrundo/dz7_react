import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setSeconds(0);
    setIsRunning(false);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Таймер: {seconds} сек</h1>

      <div>
        <button onClick={handleStart}>▶ Старт</button>
        <button onClick={handlePause}>⏸ Пауза</button>
        <button onClick={handleReset}>Сброс</button>
      </div>
    </div>
  );
}

export default App;