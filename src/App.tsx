import React, { useState, useEffect } from 'react';
import { Wallet, DollarSign, CreditCard, History, HelpCircle, BookOpen, Trophy, MessageCircle, Send, BrainCircuit, X, ChevronDown, Link, Copy, Check } from 'lucide-react';

function App() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [showHeroDropdown, setShowHeroDropdown] = useState(false);
  const [showCreateAccountDropdown, setShowCreateAccountDropdown] = useState(false);
  const [copiedCode, setCopiedCode] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [concepts, setConcepts] = useState([]);
  const [resources, setResources] = useState([]);
  const [legal, setLegal] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);

  const bookmakers = [
    {
      name: 'BetWinner',
      url: 'https://bwredir.com/1VBz?s1=VZLA',
      logo: '/imagenes/bw.svg',
      code: 'VZLA'
    },
    {
      name: '1xBet',
      url: 'https://1xbet.com/',
      logo: '/imagenes/1x.svg',
      code: 'VZLA'
    },
    {
      name: 'Melbet',
      url: 'https://melbet.com.ve/es',
      logo: '/imagenes/MB.svg',
      code: 'VZLA14'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.register-dropdown')) {
        setShowRegisterDropdown(false);
        setShowHeroDropdown(false);
        setShowCreateAccountDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleCopyCode = (e, code) => {
    e.preventDefault();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    window.location.href = 'https://bwredir.com/1VBz?s1=VZLA';
  };

  useEffect(() => {
    // Load predictions
    fetch('/pronosticos.txt')
      .then(response => response.text())
      .then(text => {
        const predictions = text.trim().split('\n\n').map(block => {
          const lines = block.split('\n');
          return {
            match: lines[0].replace('Partido: ', ''),
            prediction: lines[1].replace('Mercado: ', ''),
            confidence: parseFloat(lines[2].replace('Cuota: ', ''))
          };
        });
        setPredictions(predictions);
      })
      .catch(error => console.error('Error loading predictions:', error));

    // Load concepts
    fetch('/conceptos.txt')
      .then(response => response.text())
      .then(text => {
        const concepts = text.trim().split('\n\n').map(block => {
          const lines = block.split('\n');
          return {
            title: lines[0].replace('Titulo: ', ''),
            subtitle: lines[1].replace('Subtitulo: ', ''),
            content: lines[2].replace('Contenido: ', '')
          };
        });
        setConcepts(concepts);
      })
      .catch(error => console.error('Error loading concepts:', error));

    // Load resources
    fetch('/recursos.txt')
      .then(response => response.text())
      .then(text => {
        const resources = text.trim().split('\n\n').map(block => {
          const lines = block.split('\n');
          return {
            title: lines[0].replace('Titulo: ', ''),
            subtitle: lines[1].replace('Subtitulo: ', ''),
            content: lines[2].replace('Contenido: ', '')
          };
        });
        setResources(resources);
      })
      .catch(error => console.error('Error loading resources:', error));

    // Load legal
    fetch('/legal.txt')
      .then(response => response.text())
      .then(text => {
        const legal = text.trim().split('\n\n').map(block => {
          const lines = block.split('\n');
          return {
            title: lines[0].replace('Titulo: ', ''),
            subtitle: lines[1].replace('Subtitulo: ', ''),
            content: lines[2].replace('Contenido: ', '')
          };
        });
        setLegal(legal);
      })
      .catch(error => console.error('Error loading legal:', error));
  }, []);

  const BookmakerDropdown = ({ show, items }) => (
    show && (
      <div className="absolute right-0 mt-2 w-80 bg-[#e8f5e9] rounded-lg shadow-xl overflow-hidden z-50">
        {items.map((bookmaker, index) => (
          <a
            key={index}
            href={bookmaker.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 hover:bg-[#c8e6c9] transition-colors duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={bookmaker.logo} 
                  alt={bookmaker.name}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-semibold flex items-center gap-2">
                  {bookmaker.name}
                  <Link className="w-4 h-4 text-blue-500" />
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-600">Código: {bookmaker.code}</span>
                  <button
                    onClick={(e) => handleCopyCode(e, bookmaker.code)}
                    className="text-blue-500 hover:text-blue-600"
                    title="Copiar código"
                  >
                    {copiedCode === bookmaker.code ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-[#1b4d3e]">
      {/* Navbar */}
      <nav className="bg-[#1b4d3e] border-b border-[#2c6152] p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-yellow-400 text-2xl font-bold">VeneCash</h1>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <a 
                href="https://t.me/BetWinnerVzla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Canal
              </a>
              <a 
                href="https://t.me/+Qihb06lnKeJkMGMx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Grupo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#164534] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforma tus Bolívares en Apuestas Ganadoras en Dólares
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            Somos tu puente para depositar en Bolívares y jugar en Dólares en las mejores casas. ¡Regístrate con nuestro código y accede a beneficios exclusivos!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative register-dropdown">
              <button 
                onClick={() => setShowHeroDropdown(!showHeroDropdown)}
                className="bg-yellow-400 text-[#1b4d3e] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 flex items-center gap-2 w-full justify-center"
              >
                Elegir Casa y Usar Nuestro Código
                <ChevronDown className="w-5 h-5" />
              </button>
              <BookmakerDropdown show={showHeroDropdown} items={bookmakers} />
            </div>
            <a 
              href="https://t.me/franketero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-500 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Asesoría Personal
            </a>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Registro y Depósitos */}
          <div className="space-y-8">
            <div className="bg-[#2c6152] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-yellow-400 w-6 h-6" />
                <h2 className="text-2xl text-white font-bold">Juega en $ con Bs en 3 Simples Pasos</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Sigue estos pasos para usar VeneCash y obtener acceso a:
              </p>
              <ul className="text-gray-300 space-y-4 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <span>Elige tu Casa y Usa Nuestro Código.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <span>Deposita en Bolívares, Juega en Dólares</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Contáctanos por Telegram y te guiaremos para usar estos métodos</span>
                      <a 
                        href="https://t.me/franketero" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        <Send className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <span>Disfruta de Beneficios Adicionales</span>
                    <div className="flex gap-2 mt-2">
                      <a 
                        href="https://t.me/BetWinnerVzla" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 flex items-center gap-1 text-sm"
                      >
                        <Send className="w-4 h-4" />
                        Canal
                      </a>
                      <a 
                        href="https://t.me/+Qihb06lnKeJkMGMx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 flex items-center gap-1 text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Grupo
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="relative register-dropdown">
                <button 
                  onClick={() => setShowCreateAccountDropdown(!showCreateAccountDropdown)}
                  className="block w-full bg-yellow-400 text-[#1b4d3e] py-3 rounded-md font-bold hover:bg-yellow-300 text-center flex items-center justify-center gap-2"
                >
                  Crear Cuenta
                  <ChevronDown className="w-4 h-4" />
                </button>
                <BookmakerDropdown show={showCreateAccountDropdown} items={bookmakers} />
              </div>
            </div>

            <div className="bg-[#2c6152] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="text-yellow-400 w-6 h-6" />
                <div>
                  <h2 className="text-2xl text-white font-bold">Depósitos</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Contáctanos por Telegram y te guiaremos para usar estos métodos</span>
                    <a 
                      href="https://t.me/franketero" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <PaymentMethod 
                  icon={<CreditCard className="w-6 h-6" />}
                  title="Pago Móvil"
                  description="Mercantil, Banesco, BDV, BFC, Bancamiga"
                />
                <PaymentMethod 
                  icon={<DollarSign className="w-6 h-6" />}
                  title="Transferencia Bancaria"
                  description="Transferencia directa a nuestras cuentas"
                />
              </div>
            </div>
          </div>

          {/* Pronósticos y Educación */}
          <div className="space-y-8">
            <div className="bg-[#2c6152] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-yellow-400 w-6 h-6" />
                <div>
                  <h2 className="text-2xl text-white font-bold">Últimos Pronósticos</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Obtén más pronósticos como estos en nuestro Grupo VIP</span>
                    <a 
                      href="https://t.me/+Qihb06lnKeJkMGMx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {predictions.map((pred, index) => (
                  <Prediction 
                    key={index}
                    match={pred.match}
                    prediction={pred.prediction}
                    confidence={pred.confidence}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#2c6152] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="text-yellow-400 w-6 h-6" />
                <div>
                  <h2 className="text-2xl text-white font-bold">Conceptos Clave</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Aprende más en nuestro Canal de Telegram</span>
                    <a 
                      href="https://t.me/BetWinnerVzla" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {concepts.map((concept, index) => (
                  <Concept 
                    key={index}
                    title={concept.title}
                    description={concept.subtitle}
                    onClick={() => setSelectedContent(concept)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#164534] text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Comunidad</h3>
              <div className="space-y-2">
                <a 
                  href="https://t.me/BetWinnerVzla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <Send className="w-4 h-4" />
                  Canal de Telegram
                </a>
                <a 
                  href="https://t.me/+Qihb06lnKeJkMGMx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <MessageCircle className="w-4 h-4" />
                  Grupo de Telegram
                </a>
                <a 
                  href="https://t.me/franketero" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <HelpCircle className="w-4 h-4" />
                  Asesoría Personal
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Recursos</h3>
              <div className="space-y-2">
                {resources.map((resource, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedContent(resource)}
                    className="block text-gray-300 hover:text-yellow-400 w-full text-left"
                  >
                    {resource.title}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <div className="space-y-2">
                {legal.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedContent(item)}
                    className="block text-gray-300 hover:text-yellow-400 w-full text-left"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#2c6152] mt-8 pt-8 text-center">
            <p>© 2025 VeneCash. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Content Modal */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#2c6152] p-6 rounded-lg w-full max-w-md relative">
            <button 
              onClick={() => setSelectedContent(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl text-white font-bold mb-2">{selectedContent.title}</h2>
            <p className="text-gray-300 mb-4">{selectedContent.subtitle}</p>
            <p className="text-white">{selectedContent.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function PaymentMethod({ icon, title, description }) {
  return (
    <div className="flex items-center gap-4 bg-[#1b4d3e] p-4 rounded-lg">
      <div className="text-yellow-400">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

function Prediction({ match, prediction, confidence }) {
  return (
    <div className="bg-[#1b4d3e] p-4 rounded-lg">
      <h3 className="text-white font-semibold">{match}</h3>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-300">{prediction}</p>
        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-sm">
          {confidence.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

function Concept({ title, description, onClick }) {
  return (
    <div 
      className="bg-[#1b4d3e] p-4 rounded-lg cursor-pointer hover:bg-[#164534] transition-colors duration-200"
      onClick={onClick}
    >
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

export default App;