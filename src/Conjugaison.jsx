import React, { useState } from "react";
import { motion } from "framer-motion";

const Conjugaison = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      {/* Barre de navigation / Header de la séance */}
      <nav className="bg-white shadow-sm sticky top-0 z-20 p-4 border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack} 
            className="flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition"
          >
            <span className="mr-2">←</span> Retour au menu
          </button>
          <div className="hidden md:block text-slate-400 font-medium text-sm">
            SÉANCE COMPLÈTE : INTRODUCTION À LA CONJUGAISON (2H)
          </div>
          <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-black">
            NIVEAU DÉBUTANT
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4 md:p-10 space-y-16">
        
        {/* --- PARTIE 1 : L'INTRODUCTION--- */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              La Magie des Verbes Arabe ✨
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Avant de conjuguer, il faut comprendre le secret de construction des mots en arabe.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
              <span className="bg-indigo-100 p-2 rounded-lg mr-3">🌳</span>
              1. Le secret des 3 lettres (La Racine)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-slate-600">
                <p>
                  En arabe, presque tous les verbes naissent d'une <strong>racine de 3 lettres</strong>. 
                  
                </p>
                <p className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400 italic">
                  Imagine que la racine est un arbre. Les branches sont les mots qui en sortent (verbe, nom, métier).
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl text-white text-center">
                <p className="text-sm text-slate-400 mb-2 uppercase tracking-widest">Exemple : Écrire</p>
                <div className="flex justify-center gap-4 text-5xl font-script text-yellow-400 mb-4">
                  <span>ب</span><span>ت</span><span>ك</span>
                </div>
                <p className="text-xs text-slate-400 italic">(K-T-B : Racine de l'écriture)</p>
                <div className="mt-4 pt-4 border-t border-slate-700 grid grid-cols-2 gap-2">
                  <div className="text-sm"><strong>Kitab</strong> (Livre)</div>
                  <div className="text-sm"><strong>Maktub</strong> (Écrit)</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- PARTIE 2 : LA RÈGLE GÉNÉRALE (LE PRÉSENT) --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest">La Règle du Présent</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="bg-teal-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-script">ي</div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-teal-500 p-2 rounded-lg mr-3">🔑</span>
              Le code secret des préfixes
            </h3>
            <p className="mb-8 text-teal-50">
              Pour parler au présent (ce que je fais <strong>maintenant</strong>), on ajoute une lettre au début de la racine :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { p: "Ana (Moi)", letter: "أَ", desc: "Alif", color: "bg-orange-500" },
                { p: "Anta (Toi 👦)", letter: "تَ", desc: "Ta", color: "bg-blue-500" },
                { p: "Huwa (Lui)", letter: "يَ", desc: "Ya", color: "bg-emerald-500" },
                { p: "Nahnu (Nous)", letter: "نَ", desc: "Nun", color: "bg-purple-500" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl font-script font-bold`}>
                    {item.letter}
                  </div>
                  <p className="font-bold">{item.p}</p>
                  <p className="text-xs text-teal-200 uppercase">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PARTIE 3 : LES EXEMPLES (LES VERBES) --- */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Exemples d'application 📖</h2>

          {/* VERBE 1 : HABITER */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Verbe : SAKANA (Habiter)</h3>
                <p className="text-indigo-200 text-sm italic underline">Le verbe pour dire où l'on vit</p>
              </div>
              <span className="text-4xl font-script opacity-50">يَسْكُنُ</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { pronom: "أَنَا", verb: "أَسْكُنُ", trans: "Ana askunu", mean: "J'habite" },
                { pronom: "أَنْتَ", verb: "تَسْكُنُ", trans: "Anta taskunu", mean: "Tu habites (👦)" },
                { pronom: "أَنْتِ", verb: "تَسْكُنِينَ", trans: "Anti taskunina", mean: "Tu habites (👧)" },
                { pronom: "نَحْنُ", verb: "نَسْكُنُ", trans: "Nahnu naskunu", mean: "Nous habitons" },
              ].map((row, i) => (
                <div key={i} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-indigo-50 transition">
                  <span className="text-3xl font-script text-indigo-700 w-16">{row.pronom}</span>
                  <div className="ml-4 flex-1">
                    <p className="text-2xl font-script font-black text-slate-800 tracking-wide">{row.verb}</p>
                    <p className="text-xs text-slate-400 font-medium uppercase mt-1">{row.trans}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-400">{row.mean}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VERBE 2 : JOUER */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Verbe : LA'IBA (Jouer)</h3>
                <p className="text-emerald-200 text-sm italic underline">Le verbe pour s'amuser</p>
              </div>
              <span className="text-4xl font-script opacity-50">يَلْعَبُ</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { pronom: "أَنَا", verb: "أَلْعَبُ", trans: "Ana al'abu", mean: "Je joue" },
                { pronom: "أَنْتَ", verb: "تَلْعَبُ", trans: "Anta tal'abu", mean: "Tu joues (👦)" },
                { pronom: "هُوَ", verb: "يَلْعَبُ", trans: "Huwa yal'abu", mean: "Il joue" },
                { pronom: "نَحْنُ", verb: "نَلْعَبُ", trans: "Nahnu nal'abu", mean: "Nous jouons" },
              ].map((row, i) => (
                <div key={i} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50 transition">
                  <span className="text-3xl font-script text-emerald-700 w-16">{row.pronom}</span>
                  <div className="ml-4 flex-1">
                    <p className="text-2xl font-script font-black text-slate-800 tracking-wide">{row.verb}</p>
                    <p className="text-xs text-slate-400 font-medium uppercase mt-1">{row.trans}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-400">{row.mean}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PARTIE 4 : ATELIER D'ÉCRITURE ET JEU (30 MIN) --- */}
        <section className="space-y-6">
          <div className="bg-amber-50 p-8 rounded-[40px] border-2 border-dashed border-amber-200 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-200 text-amber-800 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-md">
              Atelier Créatif
            </div>
            
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center mt-4">
              Deviens un Architecte de Phrases 🏗️
            </h2>

            <div className="space-y-8">
              {/* Leçon de construction */}
              <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
                <p className="text-center font-bold text-slate-500 uppercase text-xs">Modèle de construction</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <div className="px-6 py-3 bg-indigo-100 rounded-2xl text-indigo-700 font-script text-2xl">أَنَا أَسْكُنُ</div>
                  <div className="text-amber-300 text-2xl font-black">+</div>
                  <div className="px-6 py-3 bg-teal-100 rounded-2xl text-teal-700 font-script text-2xl">فِي بَيْتٍ جَمِيلٍ</div>
                </div>
                <p className="text-center text-sm text-slate-400 italic">"Ana askunu fi baytin jamilin" (J'habite dans une belle maison)</p>
              </div>

              {/* Petit Défi Quiz */}
              <div className="space-y-4">
                <p className="font-bold text-slate-700 text-center italic">Saura-tu trouver la bonne pièce ? 🧩</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center space-y-3">
                    <p className="text-slate-600">Comment dit-on "Il joue" ?</p>
                    <div className="flex justify-center gap-2">
                      <button className="px-4 py-2 bg-slate-100 rounded-xl hover:bg-emerald-500 hover:text-white transition font-script text-xl">يَلْعَبُ</button>
                      <button className="px-4 py-2 bg-slate-100 rounded-xl hover:bg-red-500 hover:text-white transition font-script text-xl">أَلْعَبُ</button>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center space-y-3">
                    <p className="text-slate-600">Quel est le pronom pour "Nous" ?</p>
                    <div className="flex justify-center gap-2">
                      <button className="px-4 py-2 bg-slate-100 rounded-xl hover:bg-indigo-500 hover:text-white transition font-script text-xl">نَحْنُ</button>
                      <button className="px-4 py-2 bg-slate-100 rounded-xl hover:bg-indigo-500 hover:text-white transition font-script text-xl">أَنَا</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONCLUSION ET RÉCAPITULATIF --- */}
        <section className="text-center py-10 space-y-6">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white px-8 py-3 rounded-full font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 uppercase tracking-widest">
              Séance Terminée ! 🌟
            </div>
          </div>
          <p className="text-slate-500">
            Tu as appris aujourd'hui les bases de la conjugaison arabe. <br /> 
            Prochaine étape : Les verbes au passé !
          </p>
          <div className="pt-6">
            <p className="text-xs text-slate-300 font-bold uppercase tracking-widest italic">
              "La persévérance est la clé du succès"
            </p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Conjugaison;