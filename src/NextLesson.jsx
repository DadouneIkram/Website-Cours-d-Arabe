import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DONNÉES ENRICHIES ---
const wordsData = [
  // --- LES CLASSIQUES ---
  { word: "الشَّـمْس", type: "Solaire", gender: "Féminin", hasTa: false, fr: "Le soleil", tip: "Exception : Féminin sans ة" },
  { word: "الْـقَمَر", type: "Lunaire", gender: "Masculin", hasTa: false, fr: "La lune" },
  { word: "الْبِنْت", type: "Lunaire", gender: "Féminin", hasTa: false, fr: "La fille", tip: "Exception : Féminin sans ة" },
  
  // --- NOUVEAUX : LES ANIMAUX ---
  { word: "الْأَسَد", type: "Lunaire", gender: "Masculin", hasTa: false, fr: "Le lion" },
  { word: "الـزَّرَافَة", type: "Solaire", gender: "Féminin", hasTa: true, fr: "La girafe" },
  { word: "الْـفِيْل", type: "Lunaire", gender: "Masculin", hasTa: false, fr: "L'éléphant" },
  { word: "الـنَّـمِل", type: "Solaire", gender: "Masculin", hasTa: false, fr: "La fourmi (masc en arabe)" },
  { word: "الْـحِمَار", type: "Lunaire", gender: "Masculin", hasTa: false, fr: "L'âne" },

  // --- NOUVEAUX : OBJETS ET NATURE ---
  { word: "الـسَّـمَاء", type: "Solaire", gender: "Féminin", hasTa: false, fr: "Le ciel", tip: "Exception : Féminin sans ة" },
  { word: "الْـمَطَر", type: "Lunaire", gender: "Masculin", hasTa: false, fr: "La pluie" },
  { word: "الـثَّـلْج", type: "Solaire", gender: "Masculin", hasTa: false, fr: "La neige" },
  { word: "الْـكُرْسِيّ", type: "Lunaire", gender: "Masculin", hasTa: false, fr: "La chaise" },
  { word: "الـطَّـاوِلَة", type: "Solaire", gender: "Féminin", hasTa: true, fr: "La table" },

  // --- NOUVEAUX : CORPS ET FAMILLE (PIÈGES) ---
  { word: "الْـعَيْن", type: "Lunaire", gender: "Féminin", hasTa: false, fr: "L'œil", tip: "Le corps (double) est souvent féminin !" },
  { word: "الـرَّأْس", type: "Solaire", gender: "Masculin", hasTa: false, fr: "La tête" },
  { word: "الأُخْت", type: "Lunaire", gender: "Féminin", hasTa: false, fr: "La sœur", tip: "Exception : Féminin sans ة" },
  { word: "الـرَّجُل", type: "Solaire", gender: "Masculin", hasTa: false, fr: "L'homme" },
  { word: "الْـمَرْأَة", type: "Lunaire", gender: "Féminin", hasTa: true, fr: "La femme" },
  
  // --- DERNIERS DÉFIS ---
  { word: "الـتِّـلْمِيذ", type: "Solaire", gender: "Masculin", hasTa: false, fr: "L'élève" },
  { word: "الْـحَقِيْبَة", type: "Lunaire", gender: "Féminin", hasTa: true, fr: "Le sac" },
];

const NextLesson = () => {
  const [activeTab, setActiveTab] = useState("sort"); 
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const checkAnswer = (answer, correct) => {
    if (answer === correct) {
      setScore(score + 10);
      setFeedback({ type: "success", msg: "Excellent ! 🌟" });
    } else {
      setFeedback({ type: "error", msg: "Regarde bien la règle... 😉" });
    }
    setTimeout(() => {
      setFeedback(null);
      setCurrentIndex((prev) => (prev + 1) % wordsData.length);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-indigo-50 p-4 font-sans">
      <header className="max-w-4xl mx-auto flex justify-between items-center bg-white p-6 rounded-3xl shadow-md mb-8">
        <div>
          <h1 className="text-2xl font-black text-indigo-900">Académie Pro 🎓</h1>
          <p className="text-indigo-500 font-bold">Séance 2 : Consolidation</p>
        </div>
        <div className="bg-yellow-400 px-6 py-2 rounded-2xl text-white font-black text-2xl shadow-lg">
          {score} pts
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex gap-2 justify-center mb-6">
          {['sort', 'exceptions', 'master'].map((tab) => (
            <button 
              key={tab}
              onClick={() => {setActiveTab(tab); setCurrentIndex(0);}}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-400'}`}
            >
              {tab === 'sort' && "🌙 vs ☀️"}
              {tab === 'exceptions' && "⚠️ Les Pièges"}
              {tab === 'master' && "🏆 Test Final"}
            </button>
          ))}
        </div>

        {/* --- EXERCICE 1 : TRI SOLAIRE / LUNAIRE --- */}
        {activeTab === "sort" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-8 rounded-3xl shadow-xl text-center">
            <h2 className="text-xl font-bold mb-6 text-gray-700">Le "L" est-il muet ou sonore ?</h2>
            <div className="text-7xl font-black mb-10 text-slate-800" dir="rtl">
              {wordsData[currentIndex].word}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <button 
                onClick={() => checkAnswer("Lunaire", wordsData[currentIndex].type)}
                className="p-6 bg-blue-100 hover:bg-blue-200 border-b-8 border-blue-300 rounded-2xl transition-all group"
              >
                <span className="text-4xl block group-hover:scale-120 duration-200">🌙</span>
                <span className="font-black text-blue-800">LUNAIRE (Le L chante)</span>
              </button>
              <button 
                onClick={() => checkAnswer("Solaire", wordsData[currentIndex].type)}
                className="p-6 bg-orange-100 hover:bg-orange-200 border-b-8 border-orange-300 rounded-2xl transition-all group"
              >
                <span className="text-4xl block group-hover:scale-120 duration-200">☀️</span>
                <span className="font-black text-orange-800">SOLAIRE (Le L dort)</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* --- EXERCICE 2 : DÉTECTEUR D'EXCEPTIONS --- */}
        {activeTab === "exceptions" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-purple-900 p-8 rounded-3xl shadow-xl text-center text-white">
            <h2 className="text-xl font-bold mb-6 text-purple-200">C'est une fille (Féminin) mais... où est le ة ?</h2>
            <p className="mb-8 text-sm opacity-80">Trouve les mots qui sont féminins MÊME sans la petite robe (ة) !</p>
            
            <div className="text-7xl font-black mb-10" dir="rtl">
              {wordsData[currentIndex].word}
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => checkAnswer(true, wordsData[currentIndex].gender === "Féminin" && !wordsData[currentIndex].hasTa)}
                className="py-4 bg-purple-500 rounded-2xl font-black border-b-4 border-purple-700 hover:bg-purple-400"
              >
                C'EST UN PIÈGE ! (Féminin sans ة) 🕵️‍♂️
              </button>
              <button 
                onClick={() => checkAnswer(false, wordsData[currentIndex].gender === "Féminin" && !wordsData[currentIndex].hasTa)}
                className="py-4 bg-indigo-500 rounded-2xl font-black border-b-4 border-indigo-700 hover:bg-indigo-400"
              >
                NON, C'EST NORMAL
              </button>
            </div>
          </motion.div>
        )}

        {/* --- EXERCICE 3 : LE TEST FINAL --- */}
        {activeTab === "master" && (
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-emerald-400">
             <div className="text-center">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase">Mode Expert</span>
                <h2 className="text-2xl font-black mt-2 mb-6">Analyse Complète</h2>
                <div className="text-6xl font-black mb-8 text-gray-800" dir="rtl">{wordsData[currentIndex].word}</div>
                
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-gray-500 mb-4">Traduction : {wordsData[currentIndex].fr}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <p className="font-bold text-xs uppercase text-gray-400">Nature du AL</p>
                       <div className="p-3 bg-white rounded-lg border shadow-sm font-bold text-indigo-600">{wordsData[currentIndex].type}</div>
                    </div>
                    <div className="space-y-2">
                       <p className="font-bold text-xs uppercase text-gray-400">Genre</p>
                       <div className="p-3 bg-white rounded-lg border shadow-sm font-bold text-pink-600">{wordsData[currentIndex].gender}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % wordsData.length)}
                    className="mt-8 w-full py-4 bg-emerald-500 text-white font-black rounded-2xl shadow-lg hover:bg-emerald-600"
                  >
                    MOT SUIVANT ⮕
                  </button>
                </div>
             </div>
          </div>
        )}

        {/* FEEDBACK OVERLAY */}
        <AnimatePresence>
          {feedback && (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-full shadow-2xl z-50 text-white font-black text-3xl ${feedback.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}
            >
              {feedback.msg}
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* FOOTER PÉDAGOGIQUE */}
      <footer className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-2xl border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-800 text-sm">Règle 🌙</h4>
          <p className="text-xs">Si la lettre après ال est normale, on entend le <b>L</b>.</p>
        </div>
        <div className="bg-orange-100 p-4 rounded-2xl border-l-4 border-orange-500">
          <h4 className="font-bold text-orange-800 text-sm">Règle ☀️</h4>
          <p className="text-xs">Si la lettre a une <b>Shadda (ّ)</b>, le L devient muet.</p>
        </div>
        <div className="bg-pink-100 p-4 rounded-2xl border-l-4 border-pink-500">
          <h4 className="font-bold text-pink-800 text-sm">Règle ة</h4>
          <p className="text-xs">Le <b>ة</b> transforme un garçon en fille (sauf exceptions !).</p>
        </div>
      </footer>
    </div>
  );
};

export default NextLesson;