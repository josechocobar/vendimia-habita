import React from 'react';

const Ecosystem = () => {
    return (
        <section className="py-24 px-6 bg-surface" id="plataforma">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary-fixed font-label text-sm tracking-widest uppercase mb-4 block">Ecosistema Habita</span>
                    <h2 className="font-headline font-bold text-4xl text-white mb-6">Una Red Totalmente Integrada</h2>
                    <p className="text-secondary max-w-2xl mx-auto">Conectamos a todos los actores clave en un solo entorno digital orquestado por inteligencia artificial.</p>
                </div>
                <div className="relative">
                    {/* Mobile View: Vertical Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:border-primary-fixed transition-colors">
                            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">home</span>
                            <h3 className="text-xl font-bold text-white mb-2">Propietarios</h3>
                            <p className="text-sm text-secondary">Control total, transparencia financiera y visión en tiempo real de su inversión.</p>
                        </div>
                        <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:border-primary-fixed transition-colors">
                            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">design_services</span>
                            <h3 className="text-xl font-bold text-white mb-2">Arquitectos</h3>
                            <p className="text-sm text-secondary">Herramientas de diseño asistido y gestión de planos sin fricciones operativas.</p>
                        </div>
                        <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:border-primary-fixed transition-colors">
                            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">construction</span>
                            <h3 className="text-xl font-bold text-white mb-2">Constructores</h3>
                            <p className="text-sm text-secondary">Logística optimizada, flujos de caja seguros y cumplimiento de hitos por IA.</p>
                        </div>
                        <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:border-primary-fixed transition-colors">
                            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">inventory_2</span>
                            <h3 className="text-xl font-bold text-white mb-2">Proveedores</h3>
                            <p className="text-sm text-secondary">Acceso a proyectos de élite con pagos automáticos garantizados vía Escrow.</p>
                        </div>
                    </div>
                    {/* Schematic Connector (Desktop Only) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 -z-0">
                        <svg className="w-full h-24 overflow-visible" viewBox="0 0 1200 100">
                            <path className="dash-path" d="M 150 50 L 1050 50" fill="none" stroke="#c3f400" strokeOpacity="0.2" strokeWidth="2"></path>
                            <circle cx="150" cy="50" fill="#c3f400" r="4"></circle>
                            <circle cx="450" cy="50" fill="#c3f400" r="4"></circle>
                            <circle cx="750" cy="50" fill="#c3f400" r="4"></circle>
                            <circle cx="1050" cy="50" fill="#c3f400" r="4"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
