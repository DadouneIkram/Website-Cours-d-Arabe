import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const quranLessons = [
  {
    title: "سُورَةُ الْفَاتِحَة",
    name: "Al-Fatiha",
    verses: [
      { ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", tips: "Attention au 'Mad' sur Ar-Rahman" },
      { ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", tips: "Prononce bien le 'Ha' (ح) de Al-Hamdu" },
      { ar: "الرَّحْمَنِ الرَّحِيمِ", tips: "Solaire : On ne dit pas Al-Rahman, mais Ar-Rahman" },
      { ar: "مَالِكِ يَوْمِ الدِّينِ", tips: "Le 'Ma' (مَا) est long !" },
      { ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", tips: "Appuie fort sur la Shadda de Iyyaka" },
      { ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", tips: "Le 'S' (ص) est une lettre lourde" },
      { ar: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", tips: "Le Mad de 'Dalline' est très long (6 temps)" }
    ]
  },
  {
    title: "سُورَةُ النَّصْر",
    name: "An-Nasr",
    verses: [
      { ar: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ", tips: "Le 'Jaa' (جَاءَ) est un Mad très long !" },
      { ar: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا", tips: "Double bien le 'N' de An-Naas (Ghunna)" },
      { ar: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا", tips: "Marque bien la pause sur le 'H' de Wastaghfirh" }
    ]
  },
  {
    title: "سُورَةُ الْكَوْثَر",
    name: "Al-Kawthar",
    verses: [
      { ar: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", tips: "Le 'Inna' (إِنَّا) a une Ghunna (on reste sur le N)" },
      { ar: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", tips: "Le 'Ha' (ح) de Wanhar doit être bien clair" },
      { ar: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", tips: "Fais rebondir le 'B' (ب) de Al-Abtar" }
    ]
  },
  {
    title: "سُورَةُ الْمَسَد",
    name: "Al-Masad",
    verses: [
      { ar: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ", tips: "La Shadda sur le 'Ba' (تَبَّ) est très forte" },
      { ar: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ", tips: "Le 'Ghayn' (غ) est une lettre qui gratte la gorge" },
      { ar: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ", tips: "Le 'S' (ص) est lourd, mais le 'Ya' est léger" },
      { ar: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ", tips: "On insiste sur le 'M' de Hammalah" },
      { ar: "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ", tips: "Rebondis sur le 'B' (حَبْلٌ) : Qalqalah !" }
    ]
  },
  {
    title: "سُورَةُ الْإِخْلَاص",
    name: "Al-Ikhlas",
    verses: [
      { ar: "قُلْ هُوَ اللَّهُ أَحَدٌ", tips: "Fais rebondir le 'Dal' à la fin (Qalqalah)" },
      { ar: "اللَّهُ الصَّمَدُ", tips: "Le 'S' (ص) est lourd, le 'Dal' rebondit" },
      { ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ", tips: "Deux Qalqalah ici sur le 'Dal'" },
      { ar: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", tips: "Attention : ne t'arrête pas entre 'Kufuwan' et 'Ahad'" }
    ]
  },
  {
    title: "سُورَةُ الْكَافِرُونَ",
    name: "Al-Kafirun",
    verses: [
      { ar: "قُلْ يَا أَيُّهَا الْكَافِرُونَ", tips: "Mad long sur 'Ya' et 'Ayyuha'" },
      { ar: "لَا أَعْبُدُ مَا تَعْبُدُونَ", tips: "Le 'Ayn' (ع) vient du milieu de la gorge" },
      { ar: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ", tips: "Le 'n' de Antum est caché (Ikhfa)" },
      { ar: "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ", tips: "Le 'A' de Ana est court ici !" },
      { ar: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ", tips: "Finis avec un beau 'Y' sur Waliya" }
    ]
  }
];



export default function QuranLesson({ onScoreUpdate }) {
  const [selectedSurah, setSelectedSurah] = useState(0);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [showTip, setShowTip] = useState(false);

  const surah = quranLessons[selectedSurah];

  const nextVerse = () => {
    if (currentVerse < surah.verses.length - 1) {
      setCurrentVerse(currentVerse + 1);
      setShowTip(false);
    } else {
      // Fin de la sourate
      alert("MachaAllah ! Sourate terminée ! ✨");
      setCurrentVerse(0);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-4 md:p-8 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Sélecteur de Sourate */}
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
          {quranLessons.map((s, idx) => (
            <button
              key={idx}
              onClick={() => { setSelectedSurah(idx); setCurrentVerse(0); }}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl font-bold transition-all ${
                selectedSurah === idx ? "bg-emerald-700 text-white shadow-lg scale-105" : "bg-white text-emerald-700 border border-emerald-200"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Card de Lecture */}
        <motion.div 
          key={selectedSurah + "-" + currentVerse}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-b-8 border-emerald-200 text-center relative"
        >
          <div className="absolute top-6 right-8 text-emerald-200 font-bold text-xl uppercase tracking-widest">
            {surah.name}
          </div>
          
          <h2 className="text-emerald-700 text-2xl font-bold mb-12">{surah.title}</h2>

          <div className="min-h-[200px] flex items-center justify-center">
            <p className="text-5xl md:text-6xl leading-[1.8] text-slate-800 font-quran" dir="rtl">
              {surah.verses[currentVerse].ar}
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <button 
              onClick={() => setShowTip(!showTip)}
              className="text-emerald-600 font-bold text-sm underline decoration-dotted underline-offset-4"
            >
              {showTip ? "Masquer l'astuce" : "Besoin d'aide pour lire ?"}
            </button>

            <AnimatePresence>
              {showTip && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-emerald-50 p-4 rounded-xl text-emerald-800 text-sm italic"
                >
                  💡 {surah.verses[currentVerse].tips}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-10 flex gap-4">
            <button 
              onClick={() => setCurrentVerse(Math.max(0, currentVerse - 1))}
              className="flex-1 py-4 rounded-2xl bg-slate-100 text-slate-500 font-bold hover:bg-slate-200"
            >
              Précédent
            </button>
            <button 
              onClick={nextVerse}
              className="flex-[2] py-4 rounded-2xl bg-emerald-600 text-white font-black text-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 active:scale-95 transition-all"
            >
              Verset Suivant ⮕
            </button>
          </div>
        </motion.div>

        {/* Progression Score (Optionnel) */}
        <div className="bg-white p-6 rounded-3xl border-2 border-emerald-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl shadow-inner">🏆</div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">Objectif Lecture</p>
              <p className="font-black text-slate-700">Verset {currentVerse + 1} sur {surah.verses.length}</p>
            </div>
          </div>
          <div className="w-32 bg-slate-100 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-500" 
              style={{ width: `${((currentVerse + 1) / surah.verses.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}