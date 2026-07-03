import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем новый метод
import App from './App';
import './styles.scss';

const rootElement = document.getElementById('root');

// Проверяем на null для спокойствия TypeScript, 
// а затем создаем корень и рендерим приложение
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}