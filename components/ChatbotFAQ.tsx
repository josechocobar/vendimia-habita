'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

// Generate a stable session ID once per component mount
const generateSessionId = () => 'session-' + Math.random().toString(36).substring(2, 10);

const ChatbotFAQ = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "¡Hola! Soy el asistente de Vinality. ¿En qué puedo ayudarte hoy con respecto a tu proyecto de construcción?",
            sender: 'ai'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const sessionIdRef = useRef<string>(generateSessionId());

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue;
        setInputValue('');
        setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: sessionIdRef.current
                }),
            });

            const data = await response.json();

            if (data.fulfillmentText) {
                setMessages(prev => [...prev, { text: data.fulfillmentText, sender: 'ai' }]);
            } else {
                setMessages(prev => [...prev, { text: "Lo siento, no pude procesar tu mensaje.", sender: 'ai' }]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { text: "Error de conexión con el asistente.", sender: 'ai' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary-fixed font-label text-sm tracking-widest uppercase mb-4 block">Asistente Inteligente</span>
                    <h2 className="font-headline font-bold text-4xl text-white mb-4">Respuestas en Tiempo Real</h2>
                    <p className="text-secondary">Conectado a Dialogflow para brindarte información precisa e instantánea.</p>
                </div>

                <div className="bg-surface-container-low rounded-3xl border border-outline-variant overflow-hidden shadow-2xl flex flex-col h-[700px]">
                    {/* Chat Header */}
                    <div className="bg-surface-container-high p-4 flex items-center justify-between border-b border-outline-variant shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center relative">
                                <span className="material-symbols-outlined text-on-primary-fixed">smart_toy</span>
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#c3f400] rounded-full border-2 border-surface-container-high"></div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Vinality Assistant</h4>
                                <span className="text-[10px] text-primary-fixed uppercase font-bold tracking-widest">En línea</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-outline"></div>
                            <div className="w-2 h-2 rounded-full bg-outline"></div>
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto custom-scrollbar">
                        {messages.map((msg, index) => (
                            <div key={index} className="space-y-6">
                                {msg.sender === 'user' ? (
                                    /* User Message */
                                    <div className="flex justify-end pr-4 md:pr-0">
                                        <div className="max-w-[85%] md:max-w-[70%] bg-surface-container-highest p-4 rounded-2xl rounded-tr-none border border-outline-variant">
                                            <p className="text-on-surface text-sm">{msg.text}</p>
                                        </div>
                                    </div>
                                ) : (
                                    /* AI Message */
                                    <div className="flex justify-start pl-4 md:pl-0">
                                        <div className="flex gap-3 max-w-[90%] md:max-w-[80%]">
                                            <div className="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center shrink-0 mt-1">
                                                <span className="material-symbols-outlined text-primary-fixed text-lg">psychology</span>
                                            </div>
                                            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl rounded-tl-none border border-white/10 relative shadow-lg">
                                                <p className="text-secondary text-sm leading-relaxed">{msg.text}</p>
                                                <div className="absolute inset-0 bg-primary-fixed/5 rounded-2xl opacity-10 pointer-events-none"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            /* Typing Indicator */
                            <div className="flex justify-start pl-4 md:pl-0 opacity-60">
                                <div className="flex gap-3 items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary-fixed/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary-fixed/50 text-lg">psychology</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-primary-fixed/50 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-primary-fixed/50 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-primary-fixed/50 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="p-6 bg-surface-container-high border-t border-outline-variant shrink-0">
                        <form onSubmit={handleSendMessage} className="flex gap-4 items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Escribe tu mensaje..."
                                className="flex-1 bg-surface-container-lowest rounded-full px-6 py-3 border border-outline-variant text-white text-sm focus:outline-none focus:border-primary-fixed transition-colors"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isLoading}
                                className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed cursor-pointer hover:bg-primary-fixed-dim transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-fixed/5 blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-fixed/5 blur-[100px] translate-x-1/3 pointer-events-none"></div>
        </section>
    );
};

export default ChatbotFAQ;
