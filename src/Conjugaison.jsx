import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Conjugaison = ({ onBack }) => {
  const [step, setStep] = useState(1); // 1: Introduction, 2: Verbes du quotidien

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
            {step === 1
              ? "PARTIE 1 : LES BASES ET LA RÈGLE"
              : "PARTIE 2 : LES VERBES DU QUOTIDIEN"}
          </div>
          <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-black">
            ÉTAPE {step} / 2
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4 md:p-10 space-y-16">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-16"
            >

              {/* --- SECTION : LES COMPOSANTS DE LA PHRASE (AQSAM AL-KALAM) --- */}
<section className="space-y-8">
  <div className="bg-white p-8 rounded-[40px] shadow-xl border-2 border-slate-100">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-black text-slate-800 mb-2">De quoi est faite une phrase ? 🧱</h2>
      <p className="text-slate-500 italic">"Aqsam Al-Kalam" : Les 3 types de mots en Arabe</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 1. LE NOM */}
      <div className="bg-rose-50 p-6 rounded-3xl border-2 border-rose-100 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white text-3xl font-script mb-4 shadow-lg shadow-rose-200">اسْم</div>
        <h3 className="text-rose-700 font-bold text-xl mb-2">L'ISM (Le Nom)</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          C'est une personne, un objet ou un animal. <br/>
          <span className="font-bold text-rose-500">Ex: بَيْت (Maison), وَلَد (Garçon)</span>
        </p>
      </div>

      {/* 2. LE VERBE */}
      <div className="bg-sky-50 p-6 rounded-3xl border-2 border-sky-100 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center text-white text-3xl font-script mb-4 shadow-lg shadow-sky-200">فِعْل</div>
        <h3 className="text-sky-700 font-bold text-xl mb-2">Le FI'L (Le Verbe)</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          C'est l'action qui change avec le temps. <br/>
          <span className="font-bold text-sky-500">Ex: يَسْكُنُ (Il habite), يَلْعَبُ (Il joue)</span>
        </p>
      </div>

      {/* 3. LA PARTICULE */}
      <div className="bg-amber-50 p-6 rounded-3xl border-2 border-amber-100 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-3xl font-script mb-4 shadow-lg shadow-amber-200">حَرْف</div>
        <h3 className="text-amber-700 font-bold text-xl mb-2">Le HARF (Lien)</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Ce sont les petits mots qui collent la phrase. <br/>
          <span className="font-bold text-amber-500">Ex: فِي (Dans), عَلَى (Sur), بِـ (Avec)</span>
        </p>
      </div>
    </div>

    {/* EXEMPLE DE DÉCOMPOSITION VISUELLE */}
    <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
      <h4 className="text-center font-bold text-slate-400 uppercase text-xs tracking-widest mb-6">Analyse d'une phrase complète</h4>
      <div className="flex flex-wrap justify-center items-center gap-4 text-center">
        
        {/* Verbe */}
        <div className="flex flex-col items-center">
          <div className="px-6 py-4 bg-sky-500 text-white rounded-2xl font-script text-3xl shadow-md">يَلْعَبُ</div>
          <p className="mt-2 text-xs font-bold text-sky-600">FI'L (Action)</p>
        </div>

        {/* Nom 1 */}
        <div className="flex flex-col items-center">
          <div className="px-6 py-4 bg-rose-500 text-white rounded-2xl font-script text-3xl shadow-md">الْوَلَدُ</div>
          <p className="mt-2 text-xs font-bold text-rose-600">ISM (Sujet)</p>
        </div>

        {/* Harf */}
        <div className="flex flex-col items-center">
          <div className="px-6 py-4 bg-amber-500 text-white rounded-2xl font-script text-3xl shadow-md">فِي</div>
          <p className="mt-2 text-xs font-bold text-amber-600">HARF (Lien)</p>
        </div>

        {/* Nom 2 */}
        <div className="flex flex-col items-center">
          <div className="px-6 py-4 bg-rose-500 text-white rounded-2xl font-script text-3xl shadow-md">الْبَيْتِ</div>
          <p className="mt-2 text-xs font-bold text-rose-600">ISM (Lieu)</p>
        </div>

      </div>
      <p className="text-center mt-8 text-slate-500 italic text-lg">"Le garçon joue dans la maison"</p>
    </div>
  </div>
</section>
              {/* --- PARTIE 1 : L'INTRODUCTION (LA RACINE) --- */}
              <section className="space-y-6">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                    La Magie des Verbes Arabe ✨
                  </h1>
                  <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    Avant de conjuguer, il faut comprendre le secret de
                    construction des mots en arabe.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
                >
                  <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
                    <span className="bg-indigo-100 p-2 rounded-lg mr-3">
                      🌳
                    </span>
                    1. Le secret des 3 lettres (La Racine)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4 text-slate-600">
                      <p>
                        En arabe, presque tous les verbes naissent d'une{" "}
                        <strong>racine de 3 lettres</strong>.
                      </p>
                      <p className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400 italic">
                        Imagine que la racine est un arbre. Les branches sont
                        les mots qui en sortent (verbe, nom, métier).
                      </p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-2xl text-white text-center">
                      <p className="text-sm text-slate-400 mb-2 uppercase tracking-widest">
                        Exemple : Écrire
                      </p>
                      <div className="flex justify-center gap-4 text-5xl font-script text-yellow-400 mb-4">
                        <span>ب</span>
                        <span>ت</span>
                        <span>ك</span>
                      </div>
                      <p className="text-xs text-slate-400 italic">
                        (K-T-B : Racine de l'écriture)
                      </p>
                      <div className="mt-4 pt-4 border-t border-slate-700 grid grid-cols-2 gap-2">
                        <div className="text-sm">
                          <strong>Kitab</strong> (Livre)
                        </div>
                        <div className="text-sm">
                          <strong>Maktub</strong> (Écrit)
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* --- PARTIE 2 : LA RÈGLE GÉNÉRALE (LE PRÉSENT) --- */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px bg-slate-200 flex-1"></div>
                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest">
                    La Règle du Présent
                  </h2>
                  <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                <div className="bg-teal-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-script">
                    ي
                  </div>
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="bg-teal-500 p-2 rounded-lg mr-3">🔑</span>
                    Le code secret des préfixes
                  </h3>
                  <p className="mb-8 text-teal-50">
                    Pour parler au présent (ce que je fais{" "}
                    <strong>maintenant</strong>), on ajoute une lettre au début
                    de la racine :
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        p: "Ana (Moi)",
                        letter: "أَ",
                        desc: "Alif",
                        color: "bg-orange-500",
                      },
                      {
                        p: "Anta (Toi 👦)",
                        letter: "تَ",
                        desc: "Ta",
                        color: "bg-blue-500",
                      },
                      {
                        p: "Huwa (Lui)",
                        letter: "يَ",
                        desc: "Ya",
                        color: "bg-emerald-500",
                      },
                      {
                        p: "Nahnu (Nous)",
                        letter: "نَ",
                        desc: "Nun",
                        color: "bg-purple-500",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center"
                      >
                        <div
                          className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl font-script font-bold`}
                        >
                          {item.letter}
                        </div>
                        <p className="font-bold">{item.p}</p>
                        <p className="text-xs text-teal-200 uppercase">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* BOUTON TRANSITION */}
              <div className="text-center pt-10">
                <button
                  onClick={() => {
                    setStep(2);
                    window.scrollTo(0, 0);
                  }}
                  className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl shadow-xl hover:bg-indigo-700 transition transform hover:scale-105"
                >
                  C'EST COMPRIS ! ON PASSE À LA PRATIQUE 🚀
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-16"
            >
              {/* --- PARTIE 3 : LES EXEMPLES (LES VERBES) --- */}
              <section className="space-y-12">
                <h2 className="text-3xl font-bold text-slate-800 text-center italic underline decoration-indigo-300">
                  Les Verbes du Quotidien ⚽🍎
                </h2>

                {/* VERBE 1 : HABITER */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                  <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">
                        Verbe : SAKANA (Habiter)
                      </h3>
                    </div>
                    <span className="text-4xl font-script opacity-50 text-white">
                      يَسْكُنُ
                    </span>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        pronom: "أَنَا",
                        verb: "أَسْكُنُ",
                        trans: "Ana askunu",
                        mean: "J'habite",
                      },
                      {
                        pronom: "أَنْتَ",
                        verb: "تَسْكُنُ",
                        trans: "Anta taskunu",
                        mean: "Tu habites (👦)",
                      },
                      {
                        pronom: "هُوَ",
                        verb: "يَسْكُنُ",
                        trans: "Huwa yaskunu",
                        mean: "Il habite",
                      },
                      {
                        pronom: "نَحْنُ",
                        verb: "نَسْكُنُ",
                        trans: "Nahnu naskunu",
                        mean: "Nous habitons",
                      },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100"
                      >
                        <span className="text-3xl font-script text-indigo-700 w-16">
                          {row.pronom}
                        </span>
                        <div className="ml-4 flex-1 text-center">
                          <p className="text-2xl font-script font-black text-slate-800 tracking-wide">
                            {row.verb}
                          </p>
                          <p className="text-xs text-slate-400 font-medium uppercase">
                            {row.trans}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-indigo-50 p-4 text-center text-indigo-700 font-medium border-t border-indigo-100 italic">
                    Exemple : أَنَا أَسْكُنُ فِي فَرَنْسَا (J'habite en France)
                  </div>
                </div>

                {/* VERBE 2 : MANGER */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                  <div className="bg-orange-500 p-6 text-white flex justify-between items-center">
                    <h3 className="text-xl font-bold">
                      Verbe : AKALA (Manger)
                    </h3>
                    <span className="text-4xl font-script opacity-50">
                      يَأْكُلُ
                    </span>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        pronom: "أَنَا",
                        verb: "آكُلُ",
                        trans: "Ana akulu",
                        mean: "Je mange",
                      },
                      {
                        pronom: "أَنْتَ",
                        verb: "تَأْكُلُ",
                        trans: "Anta takulu",
                        mean: "Tu manges",
                      },
                      {
                        pronom: "هُوَ",
                        verb: "يَأْكُلُ",
                        trans: "Huwa yakulu",
                        mean: "Il mange",
                      },
                      {
                        pronom: "نَحْنُ",
                        verb: "نَأْكُلُ",
                        trans: "Nahnu nakulu",
                        mean: "Nous mangeons",
                      },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-4 bg-orange-50 rounded-2xl border border-orange-100"
                      >
                        <span className="text-2xl font-script text-orange-700">
                          {row.pronom}
                        </span>
                        <p className="text-2xl font-script font-black text-slate-800">
                          {row.verb}
                        </p>
                        <span className="text-xs font-bold text-slate-400 uppercase">
                          {row.mean}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-orange-50 p-4 text-center text-orange-700 font-medium italic">
                    Exemple : هُوَ يَأْكُلُ تُفَّاحَةً (Il mange une pomme)
                  </div>
                </div>

                {/* VERBE 3 : ÉTUDIER */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                  <div className="bg-purple-600 p-6 text-white flex justify-between items-center">
                    <h3 className="text-xl font-bold">
                      Verbe : DARASA (Étudier)
                    </h3>
                    <span className="text-4xl font-script opacity-50">
                      يَدْرُسُ
                    </span>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { pronom: "أَنَا", verb: "أَدْرُسُ", m: "J'étudie" },
                      { pronom: "أَنْتَ", verb: "تَدْرُسُ", m: "Tu étudies" },
                      { pronom: "هُوَ", verb: "يَدْرُسُ", m: "Il étudie" },
                      {
                        pronom: "نَحْنُ",
                        verb: "نَدْرُسُ",
                        m: "Nous étudions",
                      },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-4 bg-purple-50 rounded-2xl border border-purple-100"
                      >
                        <span className="text-2xl font-script text-purple-700">
                          {row.pronom}
                        </span>
                        <p className="text-2xl font-script font-black text-slate-800">
                          {row.verb}
                        </p>
                        <span className="text-xs font-bold text-slate-400 uppercase">
                          {row.m}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-purple-50 p-4 text-center text-purple-700 font-medium italic">
                    Exemple : نَحْنُ نَدْرُسُ الْعَرَبِيَّةَ (Nous étudions
                    l'arabe)
                  </div>
                </div>
              </section>

              {/* ATELIER CRÉATIF */}
              <section className="space-y-6">
                <div className="bg-amber-50 p-8 rounded-[40px] border-2 border-dashed border-amber-200">
                  <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                    Atelier : Construis tes phrases ! 🏗️
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                      <p className="text-slate-600 mb-4">
                        Choisis un pronom et un verbe pour créer une phrase :
                      </p>
                      <div className="flex flex-wrap justify-center gap-4 text-2xl font-script">
                        <span className="bg-indigo-100 p-3 rounded-xl">
                          أَنَا
                        </span>
                        <span className="bg-emerald-100 p-3 rounded-xl underline">
                          أَلْعَبُ
                        </span>
                        <span className="bg-orange-100 p-3 rounded-xl">
                          بِالْكُرَةِ
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-slate-400">
                        "Je joue avec le ballon"
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            

              {/* --- SECTION DÉFIS FINAUX --- */}
              <section className="space-y-8">
                <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16"></div>

                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-indigo-400 mb-2 font-serif">
                      🏆 LE GRAND DÉFI FINAL 🏆
                    </h2>
                    <p className="text-slate-400">
                      Réponds correctement aux 3 défis pour valider ta séance !
                    </p>
                  </div>

                  <div className="space-y-12">
                    {/* DÉFI 1 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                          1
                        </span>
                        <p className="text-xl">
                          Comment dit-on{" "}
                          <span className="text-indigo-400 font-bold">
                            "Nous mangeons"
                          </span>{" "}
                          ?
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <button
                          onClick={() =>
                            alert("Faux ! 'A' c'est pour 'Ana' (Je)")
                          }
                          className="p-4 bg-white/5 hover:bg-red-500/20 border border-white/10 rounded-2xl transition font-script text-2xl"
                        >
                          آكُلُ
                        </button>
                        <button
                          onClick={() =>
                            alert("Faux ! 'Ta' c'est pour 'Anta' (Tu)")
                          }
                          className="p-4 bg-white/5 hover:bg-red-500/20 border border-white/10 rounded-2xl transition font-script text-2xl"
                        >
                          تَأْكُلُ
                        </button>
                        <button
                          onClick={() =>
                            alert("BRAVO ! ✅ 'Na' pour 'Nahnu' (Nous)")
                          }
                          className="p-4 bg-white/5 hover:bg-green-500/40 border border-indigo-500/50 rounded-2xl transition font-script text-2xl"
                        >
                          نَأْكُلُ
                        </button>
                      </div>
                    </div>

                    {/* DÉFI 2 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                          2
                        </span>
                        <p className="text-xl">
                          Complète :{" "}
                          <span className="text-indigo-400 font-bold">
                            هُوَ ....... فِي الْبَيْتِ
                          </span>{" "}
                          (Il habite)
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <button
                          onClick={() =>
                            alert("Presque ! Mais 'Ta' c'est pour 'Tu'")
                          }
                          className="p-4 bg-white/5 hover:bg-red-500/20 border border-white/10 rounded-2xl transition font-script text-2xl"
                        >
                          تَسْكُنُ
                        </button>
                        <button
                          onClick={() =>
                            alert("EXCELLENT ! ✅ 'Ya' pour 'Huwa' (Il)")
                          }
                          className="p-4 bg-white/5 hover:bg-green-500/40 border border-indigo-500/50 rounded-2xl transition font-script text-2xl"
                        >
                          يَسْكُنُ
                        </button>
                      </div>
                    </div>

                    {/* DÉFI 3 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                          3
                        </span>
                        <p className="text-xl">
                          Trouve la bonne lettre pour{" "}
                          <span className="text-indigo-400 font-bold">
                            "Ana" (Je)
                          </span>{" "}
                          :
                        </p>
                      </div>
                      <div className="flex justify-center gap-4">
                        {["يَ", "تَ", "أَ", "نَ"].map((lettre, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (lettre === "أَ")
                                alert("PARFAIT ! ⭐ C'est la lettre du 'Moi'");
                              else alert("Réessaie !");
                            }}
                            className="w-16 h-16 bg-white/10 hover:bg-indigo-500 border border-white/20 rounded-xl flex items-center justify-center text-3xl font-script transition"
                          >
                            {lettre}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              {/* BOUTONS FINAUX */}
              <div className="flex flex-col md:flex-row gap-4 pt-10">
                <button
                  onClick={() => {
                    setStep(1);
                    window.scrollTo(0, 0);
                  }}
                  className="flex-1 py-5 bg-slate-200 text-slate-700 rounded-2xl font-black text-lg hover:bg-slate-300 transition"
                >
                  REVOIR LEÇON 1
                </button>
                <button
                  onClick={onBack}
                  className="flex-[2] py-5 bg-green-600 text-white rounded-2xl font-black text-xl shadow-xl hover:bg-green-700 transition transform hover:scale-105 active:scale-95"
                >
                  SÉANCE TERMINÉE ! BRAVO ✅
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Conjugaison;
