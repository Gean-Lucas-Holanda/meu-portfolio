import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12 py-12 bg-white rounded-xl shadow-lg">
          <h1 className="text-5xl font-extrabold text-gray-800">[Seu Nome]</h1>
          <p className="mt-4 text-xl text-gray-600">Desenvolvedor Full Stack • React • Node.js • MySQL • AWS</p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Sobre mim</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Sou desenvolvedor full stack com experiência prática em projetos reais, como plataformas de inspeção de fotos com geração de relatórios,
            sites de reserva, bots automatizados e muito mais. Meu foco é entregar soluções funcionais e bem estruturadas com performance,
            organização e usabilidade.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Projeto 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Plataforma de Inspeção de Fotos</h3>
              <p className="text-gray-700 mb-4">Sistema completo com upload de fotos, marcações, geração de relatórios PDF e armazenamento em nuvem.</p>
              <p className="text-sm text-gray-500">React • Node.js • MySQL • AWS</p>
            </div>

            {/* Projeto 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sistema de Reservas de Cadeiras</h3>
              <p className="text-gray-700 mb-4">Web app para controle de uso de cadeiras em escritório com login, agenda e notificações.</p>
              <p className="text-sm text-gray-500">React • Node.js • MySQL</p>
            </div>

            {/* Projeto 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Bot para Preenchimento de Formulários</h3>
              <p className="text-gray-700 mb-4">Aplicativo desktop para automação de tarefas repetitivas de preenchimento de formulários.</p>
              <p className="text-sm text-gray-500">Electron • JavaScript</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contato</h2>
          <div className="space-y-2 text-lg text-gray-700">
            <p>📧 seuemail@email.com</p>
            <p>🔗 <a href="https://github.com/seuusuario" className="text-blue-600 hover:underline">github.com/seuusuario</a></p>
            <p>📞 (00) 00000-0000</p>
          </div>
        </section>
      </div>
    </div>
  );
}
