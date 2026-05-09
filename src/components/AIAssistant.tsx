import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hey! I'm Beatzy AI. Need help with song names, lyrics, or marketing ideas?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: input,
        config: {
          systemInstruction: "You are a creative music assistant for Beatzy. Help users with song titles, lyrics, marketing strategy, and production tips. Keep it concise, cool, and futuristic."
        }
      });
      
      setMessages(prev => [...prev, { role: 'assistant', text: response.text || "Sorry, I lost my frequency for a moment." }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-32 right-6 w-14 h-14 bg-brand-secondary text-white rounded-full shadow-[0_0_20px_rgba(255,0,229,0.4)] flex items-center justify-center z-40 hover:scale-110 transition-transform cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-[shimmer_3s_infinite]" />
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-32 right-6 w-[350px] sm:w-[400px] h-[500px] glass rounded-[2.5rem] flex flex-col z-50 overflow-hidden shadow-2xl border-brand-secondary/30"
          >
            {/* Header */}
            <div className="p-6 bg-brand-secondary/10 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-secondary flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Beatzy Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "max-w-[85%] p-4 rounded-2xl text-sm",
                  msg.role === 'user' 
                    ? "bg-brand-primary/20 border border-brand-primary/20 ml-auto" 
                    : "bg-white/5 border border-white/10 mr-auto"
                )}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-16 flex gap-1 justify-center">
                  <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10">
              <div className="relative">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask for lyrics, tips, ideas..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-brand-secondary/50 transition-all"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-secondary rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] text-white/30 font-bold uppercase tracking-widest">
                <Sparkles size={10} /> Powered by Beatzy AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
