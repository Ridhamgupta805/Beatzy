import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Wand2, Music2, Download, Share2, Play, Save } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { generateMusicInfo } from '../services/geminiService';

export default function Generator() {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      const data = await generateMusicInfo(prompt);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 neon-text-primary">AI Music Generator</h2>
        <p className="text-white/50 lg:text-lg">Turn your imagination into professional sounds. Just type a prompt and let Beatzy create the foundation.</p>
      </header>

      <div className="space-y-8">
        {/* Prompt Input */}
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='e.g. "Create a dark cinematic trap beat with emotional piano..."'
            className="w-full h-40 bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 text-xl lg:text-2xl focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all resize-none"
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt}
            className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-brand-primary text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 cursor-pointer"
          >
            {isGenerating ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              >
                <Sparkles size={20} />
              </motion.div>
            ) : (
              <Wand2 size={20} />
            )}
            {isGenerating ? 'Generating...' : 'Generate Beat'}
          </button>
        </div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 rounded-2xl flex items-center justify-center p-8 relative group overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&auto=format')] opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                  <Music2 className="text-white/20 w-32 h-32 relative z-10" />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer">
                    <Play size={48} fill="white" className="text-white" />
                  </button>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4 justify-center lg:justify-start">
                    <h3 className="text-3xl font-display font-bold uppercase">{result.title}</h3>
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold rounded-full border border-brand-primary/20 uppercase tracking-widest">{result.genre}</span>
                  </div>
                  
                  <p className="text-white/60 mb-8 italic text-lg lg:text-xl">"{result.mood_description}"</p>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] uppercase text-white/30 font-bold mb-1 tracking-widest">BPM</p>
                      <p className="text-xl font-display font-bold">{result.bpm_suggestion}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] uppercase text-white/30 font-bold mb-1 tracking-widest">Key</p>
                      <p className="text-xl font-display font-bold">C Minor</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] uppercase text-white/30 font-bold mb-1 tracking-widest">Mood</p>
                      <p className="text-xl font-display font-bold">Dark</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] uppercase text-white/30 font-bold mb-1 tracking-widest">Engine</p>
                      <p className="text-xl font-display font-bold underline decoration-brand-primary underline-offset-4">Beatzy-02</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button className="px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-white/90 cursor-pointer">
                      <Save size={18} /> Save Track
                    </button>
                    <button className="px-6 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 cursor-pointer">
                      <Download size={18} /> Export WAV
                    </button>
                    <button className="px-6 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 cursor-pointer">
                      <Share2 size={18} /> Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Tips */}
        {!result && !isGenerating && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-primary/30 transition-all cursor-pointer group">
              <h4 className="font-bold mb-2 flex items-center gap-2 group-hover:text-brand-primary">
                <Sparkles size={16} /> Cinematic Atmospheres
              </h4>
              <p className="text-sm text-white/50 italic">"Emotional orchestral background with slow piano and heavy bass for a movie scene."</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-primary/30 transition-all cursor-pointer group">
              <h4 className="font-bold mb-2 flex items-center gap-2 group-hover:text-brand-primary">
                <Sparkles size={16} /> Lo-Fi Study Beats
              </h4>
              <p className="text-sm text-white/50 italic">"Vintage dusty lo-fi hip hop beat with rain sounds and a jazz guitar loop."</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
