import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Gean</h1>
          <p className="text-lg text-gray-600">Desenvolvedor Full Stack • React • Node.js • MySQL • AWS</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
          <p className="text-gray-700">
            Sou desenvolvedor full stack com experiência prática em projetos reais, como plataformas de inspeção de fotos com geração de relatórios, sites de reserva, bots automatizados e muito mais. Meu foco é entregar soluções funcionais e bem estruturadas com performance, organização e usabilidade.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
          <div className="grid gap-6">
            <div className="bg-white shadow-md rounded-xl p-4">
              <h3 className="text-xl font-bold">Plataforma de Inspeção de Fotos</h3>
              <p className="text-gray-700">Sistema completo com upload de fotos, marcações, geração de relatórios PDF e armazenamento em nuvem.</p>
              <p className="text-sm text-gray-500 mt-1">React • Node.js • MySQL • AWS</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4">
              <h3 className="text-xl font-bold">Sistema de Reservas de Cadeiras</h3>
              <p className="text-gray-700">Web app para controle de uso de cadeiras em escritório com login, agenda e notificações.</p>
              <p className="text-sm text-gray-500 mt-1">React • Node.js • MySQL</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4">
              <h3 className="text-xl font-bold">Bot para Preenchimento de Formulários</h3>
              <p className="text-gray-700">Aplicativo desktop para automação de tarefas repetitivas de preenchimento de formulários.</p>
              <p className="text-sm text-gray-500 mt-1">Electron • JavaScript</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p className="text-gray-700">📧 gean.dev.api@outlook.com</p>
          <p className="text-gray-700">🔗 <a href="https://github.com/seuusuario" className="text-blue-600 hover:underline">github.com/seuusuario</a></p>
          <p className="text-gray-700">📞 (00) 00000-0000</p>
        </section>
      </div>
    </div>
  );
}
