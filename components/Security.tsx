import React from 'react';

const Security = () => {
    return (
        <section className="py-24 px-6 bg-surface-container-lowest border-y border-outline-variant/30" id="seguridad">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-primary-fixed font-label text-sm tracking-widest uppercase mb-4 block">Confianza Inquebrantable</span>
                        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6">Seguridad de Nivel Bancario</h2>
                        <p className="text-secondary text-lg mb-8">Protegemos cada activo y cada dato con protocolos de seguridad de última generación, asegurando que su proyecto esté a salvo de principio a fin.</p>
                        <div className="grid gap-6">
                            <div className="flex gap-6 p-6 rounded-xl bg-surface-container-high border border-outline-variant/50">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary-fixed">lock</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Pagos Seguros en Escrow</h4>
                                    <p className="text-secondary text-sm">Los fondos se resguardan en cuentas segregadas y solo se liberan tras la validación técnica de cada etapa.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 p-6 rounded-xl bg-surface-container-high border border-outline-variant/50">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary-fixed">contract</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Contratos Inteligentes</h4>
                                    <p className="text-secondary text-sm">Ejecución automática de términos contractuales basados en datos objetivos, eliminando disputas subjetivas.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 p-6 rounded-xl bg-surface-container-high border border-outline-variant/50">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary-fixed">fingerprint</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Verificación de Identidad</h4>
                                    <p className="text-secondary text-sm">KYC riguroso para todos los profesionales y proveedores en la red Habita.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative bg-surface-container-high p-1 rounded-2xl shadow-2xl overflow-hidden border border-outline-variant">
                            <div className="bg-background rounded-xl p-8 flex flex-col items-center justify-center text-center py-20">
                                <div className="w-24 h-24 bg-primary-fixed/20 rounded-full flex items-center justify-center mb-6 relative">
                                    <span className="material-symbols-outlined text-primary-fixed text-5xl">shield_with_heart</span>
                                    <div className="absolute inset-0 rounded-full border-2 border-primary-fixed animate-ping opacity-20"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Protocolo Habita Vault</h3>
                                <p className="text-secondary text-sm mb-6 max-w-xs">Encriptación AES-256 para todos los documentos de obra y transacciones financieras.</p>
                                <div className="flex gap-2">
                                    <div className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] text-primary-fixed font-bold border border-primary-fixed/20 uppercase tracking-widest">PCI DSS Compliant</div>
                                    <div className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] text-primary-fixed font-bold border border-primary-fixed/20 uppercase tracking-widest">SOC2 Type II</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;
