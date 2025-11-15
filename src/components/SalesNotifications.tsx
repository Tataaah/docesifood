import { useState, useEffect } from 'react';

const SalesNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    "Maria S. de São Paulo acabou de comprar o guia completo!",
    "João P. do Rio de Janeiro garantiu sua vaga agora!",
    "Ana L. de Belo Horizonte está começando a lucrar!",
    "Carlos M. de Porto Alegre acabou de adquirir o material!",
    "Fernanda R. de Salvador garantiu o acesso completo!",
    "Roberto S. de Curitiba está transformando sua vida!",
    "Juliana C. de Fortaleza acabou de fazer a compra!",
    "Pedro H. de Brasília garantiu sua independência!",
    "Mariana F. de Recife está mudando de vida!",
    "Lucas T. de Goiânia acabou de investir no seu futuro!",
    "Patrícia M. de Manaus garantiu o guia agora!",
    "Ricardo L. de Vitória está começando hoje mesmo!",
    "Camila S. de Florianópolis fez a melhor escolha!",
    "Eduardo P. de Campo Grande está realizando o sonho!",
    "Vanessa R. de João Pessoa garantiu sua vaga!"
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first notification after 2 seconds
    const initialTimer = setTimeout(showNotification, 2000);
    
    // Then show every 10 seconds
    const interval = setInterval(showNotification, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="bg-green-600 text-white p-3 rounded-lg shadow-lg border-l-4 border-green-400 animate-in slide-in-from-left duration-500">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          <div className="text-sm font-medium">{currentNotification}</div>
        </div>
      </div>
    </div>
  );
};

export default SalesNotifications;