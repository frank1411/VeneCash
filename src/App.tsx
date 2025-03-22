import React, { useState } from 'react';
import { Wallet, DollarSign, CreditCard, History, HelpCircle, BookOpen, Trophy, MessageCircle, Send, BrainCircuit } from 'lucide-react';

function App() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#1b4d3e]">
      {/* Navbar */}
      <nav className="bg-[#1b4d3e] border-b border-[#2c6152] p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-yellow-400 text-2xl font-bold">VeneCash</h1>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <a 
                href="https://t.me/tucanal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Canal
              </a>
              <a 
                href="https://t.me/tugrupo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Grupo
              </a>
            </div>
            <button 
              onClick={() => setShowRegisterModal(true)}
              className="bg-yellow-400 text-[#1b4d3e] px-4 py-2 rounded-md font-semibold hover:bg-yellow-300"
            >
              Registrarse
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#164534] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tu Camino al Éxito en las Apuestas Deportivas
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            Únete a la comunidad líder de pronósticos
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowRegisterModal(true)}
              className="bg-yellow-400 text-[#1b4d3e] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300"
            >
              Comenzar Ahora
            </button>
            <a 
              href="https://t.me/tuasesor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-500 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Asesoría Personalizada
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
                <h2 className="text-2xl text-white font-bold">Registro</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Únete a nuestra plataforma y obtén acceso a:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Pronósticos premium
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Asesoría personalizada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Comunidad exclusiva
                </li>
              </ul>
              <button 
                onClick={() => setShowRegisterModal(true)}
                className="w-full bg-yellow-400 text-[#1b4d3e] py-3 rounded-md font-bold hover:bg-yellow-300"
              >
                Crear Cuenta
              </button>
            </div>

            <div className="bg-[#2c6152] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="text-yellow-400 w-6 h-6" />
                <h2 className="text-2xl text-white font-bold">Depósitos</h2>
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
                <h2 className="text-2xl text-white font-bold">Últimos Pronósticos</h2>
              </div>
              <div className="space-y-4">
                <Prediction 
                  match="Real Madrid vs Barcelona"
                  prediction="Over 2.5 goles"
                  confidence={85}
                />
                <Prediction 
                  match="Manchester City vs Liverpool"
                  prediction="Victoria local"
                  confidence={90}
                />
                <Prediction 
                  match="PSG vs Bayern Munich"
                  prediction="Ambos marcan"
                  confidence={75}
                />
              </div>
            </div>

            <div className="bg-[#2c6152] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="text-yellow-400 w-6 h-6" />
                <h2 className="text-2xl text-white font-bold">Conceptos Clave</h2>
              </div>
              <div className="space-y-4">
                <Concept 
                  title="Valor en Apuestas"
                  description="Aprende a identificar apuestas con valor positivo"
                />
                <Concept 
                  title="Gestión de Banca"
                  description="Estrategias para manejar tu capital de manera efectiva"
                />
                <Concept 
                  title="Análisis Estadístico"
                  description="Uso de datos para tomar mejores decisiones"
                />
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
                  href="https://t.me/tucanal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <Send className="w-4 h-4" />
                  Canal de Telegram
                </a>
                <a 
                  href="https://t.me/tugrupo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <MessageCircle className="w-4 h-4" />
                  Grupo de Telegram
                </a>
                <a 
                  href="https://t.me/tuasesor" 
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
                <a href="#" className="block hover:text-yellow-400">Guía de Inicio</a>
                <a href="#" className="block hover:text-yellow-400">FAQ</a>
                <a href="#" className="block hover:text-yellow-400">Blog</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-yellow-400">Términos y Condiciones</a>
                <a href="#" className="block hover:text-yellow-400">Política de Privacidad</a>
                <a href="#" className="block hover:text-yellow-400">Juego Responsable</a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2c6152] mt-8 pt-8 text-center">
            <p>© 2025 VeneCash. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#2c6152] p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl text-white font-bold mb-4">Crear Cuenta</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded bg-[#1b4d3e] text-white border border-green-600"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 rounded bg-[#1b4d3e] text-white border border-green-600"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Contraseña</label>
                <input 
                  type="password" 
                  className="w-full p-2 rounded bg-[#1b4d3e] text-white border border-green-600"
                  placeholder="********"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-yellow-400 text-[#1b4d3e] py-3 rounded-md font-bold hover:bg-yellow-300"
              >
                Registrarse
              </button>
            </form>
            <button 
              onClick={() => setShowRegisterModal(false)}
              className="mt-4 text-gray-300 hover:text-white w-full"
            >
              Cerrar
            </button>
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
          {confidence}%
        </span>
      </div>
    </div>
  );
}

function Concept({ title, description }) {
  return (
    <div className="bg-[#1b4d3e] p-4 rounded-lg">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

export default App;