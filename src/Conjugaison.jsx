import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Conjugaison = ({ onBack }) => {
  const [step, setStep] = useState(1); // 1: Introduction, 2: Verbes du quotidien
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinished, setShowFinished] = useState(false);
  const questions = [
    // --- VERBE BOIRE (Shariba) ---
    {
      pronoun: "أَنَا (Ana)",
      translation: "Je bois",
      options: [
        {
          text: "أَشْرَبُ",
          isCorrect: true,
          feedback: "BRAVO ! ✅ Le 'A' (أَ) est pour 'Ana' (Moi)",
        },
        {
          text: "تَشْرَبُ",
          isCorrect: false,
          feedback: "Faux ! 'Ta' c'est pour 'Tu' ou 'Elle'",
        },
        {
          text: "يَشْرَبُ",
          isCorrect: false,
          feedback: "Faux ! 'Ya' c'est pour 'Il'",
        },
      ],
    },
    {
      pronoun: "نَحْنُ (Nahnu)",
      translation: "Nous buvons",
      options: [
        {
          text: "أَشْرَبُ",
          isCorrect: false,
          feedback: "Non, 'A' c'est pour 'Je'",
        },
        {
          text: "نَشْرَبُ",
          isCorrect: true,
          feedback: "SUPER ! ✅ 'Na' pour 'Nahnu' (Nous)",
        },
        {
          text: "يَشْرَبُ",
          isCorrect: false,
          feedback: "Non, 'Ya' c'est pour 'Il'",
        },
      ],
    },

    // --- VERBE JOUER (La'iba) ---
    {
      pronoun: "هُوَ (Huwa)",
      translation: "Il joue",
      options: [
        {
          text: "تَلْعَبُ",
          isCorrect: false,
          feedback: "Presque ! Mais 'Ta' c'est pour 'Elle' ou 'Tu'",
        },
        {
          text: "يَلْعَبُ",
          isCorrect: true,
          feedback: "EXCELLENT ! ✅ 'Ya' pour 'Huwa' (Il)",
        },
        {
          text: "أَلْعَبُ",
          isCorrect: false,
          feedback: "Faux ! 'A' c'est pour 'Moi'",
        },
      ],
    },
    {
      pronoun: "أَنَا (Ana)",
      translation: "Je joue",
      options: [
        {
          text: "يَلْعَبُ",
          isCorrect: false,
          feedback: "Non, 'Ya' c'est pour 'Il'",
        },
        {
          text: "نَلْعَبُ",
          isCorrect: false,
          feedback: "Non, 'Na' c'est pour 'Nous'",
        },
        {
          text: "أَلْعَبُ",
          isCorrect: true,
          feedback: "BRAVO ! ✅ 'A' pour 'Ana' (Je)",
        },
      ],
    },

    // --- VERBE LIRE (Qara'a) ---
    {
      pronoun: "نَحْنُ (Nahnu)",
      translation: "Nous lisons",
      options: [
        {
          text: "أَقْرَأُ",
          isCorrect: false,
          feedback: "Faux ! 'A' c'est pour 'Je'",
        },
        {
          text: "تَقْرَأُ",
          isCorrect: false,
          feedback: "Faux ! 'Ta' c'est pour 'Tu'",
        },
        {
          text: "نَقْرَأُ",
          isCorrect: true,
          feedback: "PARFAIT ! ✅ 'Na' pour 'Nahnu'",
        },
      ],
    },
    {
      pronoun: "هِيَ (Hiya)",
      translation: "Elle lit",
      options: [
        {
          text: "تَقْرَأُ",
          isCorrect: true,
          feedback: "OUI ! ✅ 'Ta' pour 'Hiya' (Elle)",
        },
        {
          text: "يَقْرَأُ",
          isCorrect: false,
          feedback: "Non, 'Ya' c'est pour 'Il'",
        },
        {
          text: "أَقْرَأُ",
          isCorrect: false,
          feedback: "Non, 'A' c'est pour 'Je'",
        },
      ],
    },

    // --- VERBE HABITER (Sakana) ---
    {
      pronoun: "أَنْتَ (Anta)",
      translation: "Tu (garçon) habites",
      options: [
        {
          text: "تَسْكُنُ",
          isCorrect: true,
          feedback: "OUI ! ✅ 'Ta' pour 'Anta' (Tu)",
        },
        {
          text: "يَسْكُنُ",
          isCorrect: false,
          feedback: "Faux ! 'Ya' c'est pour 'Il'",
        },
        {
          text: "أَسْكُنُ",
          isCorrect: false,
          feedback: "Faux ! 'A' c'est pour 'Moi'",
        },
      ],
    },
    {
      pronoun: "هُوَ (Huwa)",
      translation: "Il habite",
      options: [
        {
          text: "تَسْكُنُ",
          isCorrect: false,
          feedback: "Non, 'Ta' c'est pour 'Tu'",
        },
        {
          text: "يَسْكُنُ",
          isCorrect: true,
          feedback: "BRAVO ! ✅ 'Ya' pour 'Huwa'",
        },
        {
          text: "نَسْكُنُ",
          isCorrect: false,
          feedback: "Non, 'Na' c'est pour 'Nous'",
        },
      ],
    },

    // --- VERBE MANGER (Akala) ---
    {
      pronoun: "أَنَا (Ana)",
      translation: "Je mange",
      options: [
        {
          text: "آكُلُ",
          isCorrect: true,
          feedback: "SUPER ! ✅ 'A' pour 'Moi'",
        },
        {
          text: "تَأْكُلُ",
          isCorrect: false,
          feedback: "Non, c'est 'Tu' ou 'Elle'",
        },
        { text: "يَأْكُلُ", isCorrect: false, feedback: "Non, c'est 'Il'" },
      ],
    },
    {
      pronoun: "نَحْنُ (Nahnu)",
      translation: "Nous mangeons",
      options: [
        {
          text: "نَأْكُلُ",
          isCorrect: true,
          feedback: "OUI ! ✅ 'Na' pour 'Nous'",
        },
        { text: "تَأْكُلُ", isCorrect: false, feedback: "Non, c'est 'Tu'" },
        { text: "آكُلُ", isCorrect: false, feedback: "Non, c'est 'Je'" },
      ],
    },

    // --- VERBE ÉCRIRE (Kataba) ---
    {
      pronoun: "هُوَ (Huwa)",
      translation: "Il écrit",
      options: [
        { text: "أَكْتُبُ", isCorrect: false, feedback: "Non, c'est 'Je'" },
        { text: "تَكْتُبُ", isCorrect: false, feedback: "Non, c'est 'Tu'" },
        {
          text: "يَكْتُبُ",
          isCorrect: true,
          feedback: "PARFAIT ! ✅ 'Ya' pour 'Il'",
        },
      ],
    },
    {
      pronoun: "أَنْتَ (Anta)",
      translation: "Tu écrit",
      options: [
        {
          text: "تَكْتُبُ",
          isCorrect: true,
          feedback: "BRAVO ! ✅ 'Ta' pour 'Tu'",
        },
        { text: "نَكْتُبُ", isCorrect: false, feedback: "Non, c'est 'Nous'" },
        { text: "يَكْتُبُ", isCorrect: false, feedback: "Non, c'est 'Il'" },
      ],
    },

    // --- VERBE ALLER (Dhahaba) ---
    {
      pronoun: "أَنَا (Ana)",
      translation: "Je vais",
      options: [
        { text: "أَذْهَبُ", isCorrect: true, feedback: "✅ 'A' pour 'Je'" },
        { text: "يَذْهَبُ", isCorrect: false, feedback: "Non, c'est 'Il'" },
        { text: "تَذْهَبُ", isCorrect: false, feedback: "Non, c'est 'Tu'" },
      ],
    },
    {
      pronoun: "نَحْنُ (Nahnu)",
      translation: "Nous allons",
      options: [
        { text: "تَذْهَبُ", isCorrect: false, feedback: "Non, c'est 'Tu'" },
        { text: "نَذْهَبُ", isCorrect: true, feedback: "✅ 'Na' pour 'Nous'" },
        { text: "يَذْهَبُ", isCorrect: false, feedback: "Non, c'est 'Il'" },
      ],
    },

    // --- VERBE SORTIR (Kharaja) ---
    {
      pronoun: "هِيَ (Hiya)",
      translation: "Elle sort",
      options: [
        { text: "تَخْرُجُ", isCorrect: true, feedback: "✅ 'Ta' pour 'Elle'" },
        { text: "يَخْرُجُ", isCorrect: false, feedback: "Non, c'est 'Il'" },
        { text: "أَخْرُجُ", isCorrect: false, feedback: "Non, c'est 'Je'" },
      ],
    },
    {
      pronoun: "هُوَ (Huwa)",
      translation: "Il sort",
      options: [
        { text: "تَخْرُجُ", isCorrect: false, feedback: "Non, c'est 'Elle'" },
        { text: "يَخْرُجُ", isCorrect: true, feedback: "✅ 'Ya' pour 'Il'" },
        { text: "نَخْرُجُ", isCorrect: false, feedback: "Non, c'est 'Nous'" },
      ],
    },

    // --- VERBE ENTRER (Dakhala) ---
    {
      pronoun: "أَنَا (Ana)",
      translation: "J'entre",
      options: [
        { text: "تَدْخُلُ", isCorrect: false, feedback: "Non, c'est 'Tu'" },
        { text: "أَدْخُلُ", isCorrect: true, feedback: "✅ 'A' pour 'Je'" },
        { text: "نَدْخُلُ", isCorrect: false, feedback: "Non, c'est 'Nous'" },
      ],
    },
    {
      pronoun: "أَنْتَ (Anta)",
      translation: "Tu entres",
      options: [
        { text: "تَدْخُلُ", isCorrect: true, feedback: "✅ 'Ta' pour 'Tu'" },
        { text: "يَدْخُلُ", isCorrect: false, feedback: "Non, c'est 'Il'" },
        { text: "أَدْخُلُ", isCorrect: false, feedback: "Non, c'est 'Je'" },
      ],
    },

    // --- VERBE DESSINER (Rasama) ---
    {
      pronoun: "نَحْنُ (Nahnu)",
      translation: "Nous dessinons",
      options: [
        { text: "أَرْسُمُ", isCorrect: false, feedback: "Non, c'est 'Je'" },
        { text: "تَرْسُمُ", isCorrect: false, feedback: "Non, c'est 'Tu'" },
        { text: "نَرْسُمُ", isCorrect: true, feedback: "✅ 'Na' pour 'Nous'" },
      ],
    },
    {
      pronoun: "هُوَ (Huwa)",
      translation: "Il dessine",
      options: [
        { text: "يَرْسُمُ", isCorrect: true, feedback: "✅ 'Ya' pour 'Il'" },
        { text: "تَرْسُمُ", isCorrect: false, feedback: "Non, c'est 'Elle'" },
        { text: "أَرْسُمُ", isCorrect: false, feedback: "Non, c'est 'Je'" },
      ],
    },
    // --- LE DÉFI DE LIYANA (Féminin) ---
    {
      pronoun: "أَنْتِ (Anti)",
      translation: "Tu (fille) bois",
      options: [
        {
          text: "تَشْرَبُ",
          isCorrect: false,
          feedback: "Presque ! Ça c'est pour un garçon (Anta).",
        },
        {
          text: "تَشْرَبِينَ",
          isCorrect: true,
          feedback:
            "MAGNIFIQUE ! ✅ Pour une fille (Anti), on ajoute 'ina' à la fin !",
        },
        { text: "أَشْرَبُ", isCorrect: false, feedback: "Non, ça c'est 'Je'." },
      ],
    },
    {
      pronoun: "أَنْتِ (Anti)",
      translation: "Tu (fille) joues",
      options: [
        {
          text: "تَلْعَبِينَ",
          isCorrect: true,
          feedback: "BRAVO Liyana ! ✅ Le 'Ta' au début et le 'ina' à la fin !",
        },
        { text: "يَلْعَبُ", isCorrect: false, feedback: "Non, c'est 'Il'." },
        {
          text: "تَلْعَبُ",
          isCorrect: false,
          feedback: "Ça c'est pour Halim (Anta) !",
        },
      ],
    },

    // --- LE DÉFI DE LA NÉGATION ---
    {
      pronoun: "أَنَا لا (Ana La)",
      translation: "Je ne mange pas",
      options: [
        {
          text: "لا آكُلُ",
          isCorrect: true,
          feedback: "EXCELLENT ! ✅ 'La' + le verbe = Je ne fais pas l'action.",
        },
        {
          text: "لا تَأْكُلُ",
          isCorrect: false,
          feedback: "Ça c'est 'Tu ne manges pas'.",
        },
        { text: "آكُلُ", isCorrect: false, feedback: "Ça c'est 'Je mange' !" },
      ],
    },
  ];

  const negationQuestions = [
  // --- NÉGATION : BOIRE ---
  {
    pronoun: "أَنَا لا (Ana La)",
    translation: "Je ne bois pas",
    options: [
      { text: "لا أَشْرَبُ", isCorrect: true, feedback: "GÉNIAL ! ✅ Le bouclier 'LA' protège bien le verbe 'Moi'." },
      { text: "أَشْرَبُ لا", isCorrect: false, feedback: "Oups ! En arabe, le 'LA' se met TOUJOURS avant le verbe." },
      { text: "لا تَشْرَبُ", isCorrect: false, feedback: "C'est la bonne négation, mais pour 'Tu'." },
    ],
  },

  // --- NÉGATION : JOUER ---
  {
    pronoun: "هُوَ لا (Huwa La)",
    translation: "Il ne joue pas",
    options: [
      { text: "يَلْعَبُ لا", isCorrect: false, feedback: "Le bouclier est du mauvais côté ! Mets-le devant." },
      { text: "لا يَلْعَبُ", isCorrect: true, feedback: "TRÈS BIEN ! ✅ Tu as bien mis le 'LA' devant 'Il joue'." },
      { text: "لا أَلْعَبُ", isCorrect: false, feedback: "Presque, mais ça c'est 'Je ne joue pas'." },
    ],
  },

  // --- NÉGATION : LIRE ---
  {
    pronoun: "نَحْنُ لا (Nahnu La)",
    translation: "Nous ne lisons pas",
    options: [
      { text: "لا نَقْرَأُ", isCorrect: true, feedback: "PARFAIT ! ✅ Nahnu + La + Naqra'u." },
      { text: "نَقْرَأُ", isCorrect: false, feedback: "Ça c'est 'Nous lisons'. Il manque le 'NON' !" },
      { text: "لا أَقْرَأُ", isCorrect: false, feedback: "C'est 'Je ne lis pas'. On cherche 'Nous'." },
    ],
  },

  // --- NÉGATION : ÉCRIRE ---
  {
    pronoun: "أَنْتَ لا (Anta La)",
    translation: "Tu n'écris pas",
    options: [
      { text: "لا يَكْتُبُ", isCorrect: false, feedback: "C'est 'Il n'écrit pas'. Cherche le 'Ta' pour 'Tu'." },
      { text: "لا تَكْتُبُ", isCorrect: true, feedback: "BRAVO ! ✅ Le bouclier est à la bonne place pour 'Tu'." },
      { text: "تَكْتُبُ", isCorrect: false, feedback: "Tu as oublié de dire 'NON' !" },
    ],
  },

  // --- NÉGATION : ALLER ---
  {
    pronoun: "هِيَ لا (Hiya La)",
    translation: "Elle ne va pas",
    options: [
      { text: "لا تَذْهَبُ", isCorrect: true, feedback: "MAGNIFIQUE ! ✅ 'Ta' pour 'Elle' avec son bouclier 'La'." },
      { text: "لا أَذْهَبُ", isCorrect: false, feedback: "C'est 'Je ne vais pas'." },
      { text: "يَذْهَبُ لا", isCorrect: false, feedback: "Le bouclier est mal placé et c'est pour 'Il' !" },
    ],
  },

  // --- NÉGATION : ÉTUDIER ---
  {
    pronoun: "نَحْنُ لا (Nahnu La)",
    translation: "Nous n'étudions pas",
    options: [
      { text: "نَدْرُسُ", isCorrect: false, feedback: "C'est 'Nous étudions'. Ajoute le 'LA' !" },
      { text: "لا نَدْرُسُ", isCorrect: true, feedback: "OUI ! ✅ C'est la bonne façon de dire 'NON'." },
      { text: "لا تَدْرُسُ", isCorrect: false, feedback: "C'est pour 'Tu' ou 'Elle'." },
    ],
  },

  // --- NÉGATION : SORTIR ---
  {
    pronoun: "أَنَا لا (Ana La)",
    translation: "Je ne sors pas",
    options: [
      { text: "أَخْرُجُ", isCorrect: false, feedback: "C'est 'Je sors'. On veut dire le contraire !" },
      { text: "لا أَخْرُجُ", isCorrect: true, feedback: "SUPER ! ✅ Tu es un champion de la négation." },
      { text: "لا نَخْرُجُ", isCorrect: false, feedback: "C'est 'Nous ne sortons pas'." },
    ],
  },

  // --- NÉGATION : DESSINER ---
  {
    pronoun: "هُوَ لا (Huwa La)",
    translation: "Il ne dessine pas",
    options: [
      { text: "لا يَرْسُمُ", isCorrect: true, feedback: "C'EST ÇA ! ✅ Huwa + La + Yarsumu." },
      { text: "لا تَرْسُمُ", isCorrect: false, feedback: "C'est pour 'Tu' ou 'Elle'." },
      { text: "يَرْسُمُ لا", isCorrect: false, feedback: "Attention à la place du bouclier !" },
    ],
  },
];

  const handleAnswer = (option) => {
    alert(option.feedback);
    if (option.isCorrect) setScore(score + 1);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowFinished(false);
  };
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
                    <h2 className="text-3xl font-black text-slate-800 mb-2">
                      De quoi est faite une phrase ? 🧱
                    </h2>
                    <p className="text-slate-500 italic">
                      "Aqsam Al-Kalam" : Les 3 types de mots en Arabe
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 1. LE NOM */}
                    <div className="bg-rose-50 p-6 rounded-3xl border-2 border-rose-100 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white text-3xl font-script mb-4 shadow-lg shadow-rose-200">
                        اسْم
                      </div>
                      <h3 className="text-rose-700 font-bold text-xl mb-2">
                        L'ISM (Le Nom)
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        C'est une personne, un objet ou un animal. <br />
                        <span className="font-bold text-rose-500">
                          Ex: بَيْت (Maison), وَلَد (Garçon)
                        </span>
                      </p>
                    </div>

                    {/* 2. LE VERBE */}
                    <div className="bg-sky-50 p-6 rounded-3xl border-2 border-sky-100 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center text-white text-3xl font-script mb-4 shadow-lg shadow-sky-200">
                        فِعْل
                      </div>
                      <h3 className="text-sky-700 font-bold text-xl mb-2">
                        Le FI'L (Le Verbe)
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        C'est l'action qui change avec le temps. <br />
                        <span className="font-bold text-sky-500">
                          Ex: يَسْكُنُ (Il habite), يَلْعَبُ (Il joue)
                        </span>
                      </p>
                    </div>

                    {/* 3. LA PARTICULE */}
                    <div className="bg-amber-50 p-6 rounded-3xl border-2 border-amber-100 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-3xl font-script mb-4 shadow-lg shadow-amber-200">
                        حَرْف
                      </div>
                      <h3 className="text-amber-700 font-bold text-xl mb-2">
                        Le HARF (Lien)
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Ce sont les petits mots qui collent la phrase. <br />
                        <span className="font-bold text-amber-500">
                          Ex: فِي (Dans), عَلَى (Sur), بِـ (Avec)
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* EXEMPLE DE DÉCOMPOSITION VISUELLE */}
                  <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h4 className="text-center font-bold text-slate-400 uppercase text-xs tracking-widest mb-6">
                      Analyse d'une phrase complète
                    </h4>
                    <div className="flex flex-wrap justify-center items-center gap-4 text-center">
                      {/* Verbe */}
                      <div className="flex flex-col items-center">
                        <div className="px-6 py-4 bg-sky-500 text-white rounded-2xl font-script text-3xl shadow-md">
                          يَلْعَبُ
                        </div>
                        <p className="mt-2 text-xs font-bold text-sky-600">
                          FI'L (Action)
                        </p>
                      </div>

                      {/* Nom 1 */}
                      <div className="flex flex-col items-center">
                        <div className="px-6 py-4 bg-rose-500 text-white rounded-2xl font-script text-3xl shadow-md">
                          الْوَلَدُ
                        </div>
                        <p className="mt-2 text-xs font-bold text-rose-600">
                          ISM (Sujet)
                        </p>
                      </div>

                      {/* Harf */}
                      <div className="flex flex-col items-center">
                        <div className="px-6 py-4 bg-amber-500 text-white rounded-2xl font-script text-3xl shadow-md">
                          فِي
                        </div>
                        <p className="mt-2 text-xs font-bold text-amber-600">
                          HARF (Lien)
                        </p>
                      </div>

                      {/* Nom 2 */}
                      <div className="flex flex-col items-center">
                        <div className="px-6 py-4 bg-rose-500 text-white rounded-2xl font-script text-3xl shadow-md">
                          الْبَيْتِ
                        </div>
                        <p className="mt-2 text-xs font-bold text-rose-600">
                          ISM (Lieu)
                        </p>
                      </div>
                    </div>
                    <p className="text-center mt-8 text-slate-500 italic text-lg">
                      "Le garçon joue dans la maison"
                    </p>
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
{/* --- PARTIE 1 : LE PASSÉ (AL-MAADI) --- */}
<section className="space-y-8">
  <div className="flex items-center gap-4">
    <div className="h-px bg-slate-200 flex-1"></div>
    <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest">
      La Règle du Passé
    </h2>
    <div className="h-px bg-slate-200 flex-1"></div>
  </div>

  <div className="bg-indigo-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-script">
      ت
    </div>
    <h3 className="text-xl font-bold mb-6 flex items-center">
      <span className="bg-indigo-500 p-2 rounded-lg mr-3">⏳</span>
      Le code secret des suffixes
    </h3>
    <p className="mb-8 text-indigo-50">
      Pour parler au passé (ce que j'ai <strong>déjà fini</strong>), on ajoute une lettre (ou plusieurs) à la 
      <strong> fin</strong> de la racine :
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          p: "Ana (Moi)",
          letter: "تُ",
          desc: "Tu (O-u)",
          color: "bg-pink-500",
        },
        {
          p: "Anta (Toi 👦)",
          letter: "تَ",
          desc: "Ta",
          color: "bg-blue-400",
        },
        {
          p: "Anti (Toi 👧)",
          letter: "تِ",
          desc: "Ti",
          color: "bg-rose-400",
        },
        {
          p: "Nahnu (Nous)",
          letter: "نَا",
          desc: "Naa",
          color: "bg-amber-500",
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
          <p className="text-xs text-indigo-200 uppercase">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* --- PARTIE 3 : L'ORDRE (L'IMPÉRATIF) --- */}
<section className="space-y-8">
  <div className="flex items-center gap-4">
    <div className="h-px bg-slate-200 flex-1"></div>
    <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest">
      Donner un Ordre
    </h2>
    <div className="h-px bg-slate-200 flex-1"></div>
  </div>

  <div className="bg-orange-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-script">
      ا
    </div>
    <h3 className="text-xl font-bold mb-6 flex items-center">
      <span className="bg-orange-500 p-2 rounded-lg mr-3">📢</span>
      Le mode "Boss" (Al-Amr)
    </h3>
    <p className="mb-8 text-orange-50">
      Pour donner un ordre, on utilise souvent un <strong>Alif (ا)</strong> au début et on change 
      <strong> la fin</strong> selon à qui on parle :
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        {
          p: "Toi (Garçon)",
          letter: "ـْ",
          desc: "Sukun (Silence)",
          color: "bg-slate-700",
        },
        {
          p: "Toi (Fille)",
          letter: "ـي",
          desc: "Ya (Iii)",
          color: "bg-rose-500",
        },
        {
          p: "Vous (Pluriel)",
          letter: "ـوا",
          desc: "Waw + Alif",
          color: "bg-cyan-500",
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
          <p className="text-xs text-orange-200 uppercase">
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
              <section className="space-y-16">
  {/* --- ÉTAPE 1 : LE DICTIONNAIRE DES CHAMPIONS --- */}
  <div className="bg-slate-50 p-8 rounded-[3rem] border-4 border-dashed border-slate-200">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">
        🚀 Ton Trésor de Verbes
      </h2>
      <p className="text-slate-500">Mémorise ces actions avant de les transformer !</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {[
        { act: "Boire", ar: "شَرِبَ", trans: "Shariba", icon: "🥛", color: "bg-blue-100 text-blue-700" },
        { act: "Écrire", ar: "كَتَبَ", trans: "Kataba", icon: "📝", color: "bg-amber-100 text-amber-700" },
        { act: "Lire", ar: "قَرَأَ", trans: "Qara'a", icon: "📖", color: "bg-emerald-100 text-emerald-700" },
        { act: "Sortir", ar: "خَرَجَ", trans: "Kharaja", icon: "🚪", color: "bg-rose-100 text-rose-700" },
        { act: "Entrer", ar: "دَخَلَ", trans: "Dakhala", icon: "🏠", color: "bg-purple-100 text-purple-700" },
      ].map((v, i) => (
        <div key={i} className={`${v.color} p-4 rounded-2xl text-center shadow-sm border border-white/50`}>
          <div className="text-3xl mb-2">{v.icon}</div>
          <div className="font-script text-2xl font-bold">{v.ar}</div>
          <div className="text-xs font-black uppercase opacity-60">{v.trans}</div>
          <div className="text-sm mt-1 font-medium">{v.act}</div>
        </div>
      ))}
    </div>
  </div>

  {/* --- ÉTAPE 2 : LE TABLEAU MAGIQUE DU PRÉSENT --- */}
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-black uppercase">Verbe : DARASA (Étudier) 📚</h3>
          <p className="text-indigo-100">C'est ici que la magie opère !</p>
        </div>
        <div className="text-5xl font-script opacity-30 rotate-12">يَدْرُسُ</div>
      </div>
    </div>

    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { p: "Ana (Moi)", pr: "أَنَا", v: "أَ", rest: "دْرُسُ", t: "A-d rusu", c: "bg-orange-500" },
        { p: "Anta (Toi 👦)", pr: "أَنْتَ", v: "تَ", rest: "دْرُسُ", t: "Ta-drusu", c: "bg-blue-500" },
        { 
          p: "Anti (Toi 👧)", 
          pr: "أَنْتِ", 
          v: "تَ", 
          rest: "دْرُسُ", 
          suffix: "ونَ", 
          t: "Ta-drusu-na", 
          c: "bg-pink-500",
          special: "⚠️ Attention au 'iina' à la fin !" 
        },
        { p: "Huwa (Lui)", pr: "هُوَ", v: "يَ", rest: "دْرُسُ", t: "Ya-drusu", c: "bg-emerald-500" },
        { p: "Hiya (Elle)", pr: "هِيَ", v: "تَ", rest: "دْرُسُ", t: "Ta-drusu", c: "bg-rose-500" },
        { p: "Nahnu (Nous)", pr: "نَحْنُ", v: "نَ", rest: "دْرُسُ", t: "Na-drusu", c: "bg-purple-500" },
      ].map((item, i) => (
        <div key={i} className="relative group">
          <div className="absolute -top-2 -left-2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md z-10 font-bold uppercase">
            {item.p}
          </div>
          <div className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl hover:border-indigo-300 transition-all">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-script text-slate-400">{item.pr}</span>
              <div className="text-3xl font-script font-black text-slate-800">
                <span className={`${item.c} text-white px-1 rounded-lg mr-0.5`}>{item.v}</span>
                {item.rest}
                {item.pr === "أَنْتِ" && <span className="text-pink-500 font-black">ينَ</span>}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.t}</p>
              {item.pr === "أَنْتِ" && (
                <span className="text-[10px] text-pink-600 font-bold bg-pink-50 px-2 py-1 rounded-full">
                  + Suffixe final
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ASTUCE POUR LES ENFANTS */}
    <div className="bg-amber-50 p-6 flex items-start gap-4 border-t border-amber-100">
      <span className="text-3xl">💡</span>
      <div>
        <h4 className="font-bold text-amber-800">L'astuce de Grand-père !</h4>
        <p className="text-amber-700 text-sm">
          Remarque bien : <strong>Anta</strong> (Toi garçon) et <strong>Hiya</strong> (Elle) utilisent exactement la même lettre au début : le <span className="font-bold">ت (Ta)</span> ! 
          Pour les différencier, regarde le petit pronom devant.
        </p>
      </div>
    </div>
  </div>

  {/* --- ZONE D'ENTRAINEMENT --- */}
  <div className="text-center">
    <p className="text-slate-400 font-medium mb-4 italic">"Maintenant, essaie de faire pareil avec le verbe Kataba (Écrire)..."</p>
    <div className="flex justify-center gap-2">
       <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
       <div className="h-2 w-2 rounded-full bg-indigo-300"></div>
       <div className="h-2 w-2 rounded-full bg-indigo-200"></div>
    </div>
  </div>

  {/* VERBE 1 : HABITER (SAKANA) */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transform hover:scale-[1.01] transition-transform">
    <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
      <div>
        <span className="bg-indigo-400/30 text-xs uppercase px-3 py-1 rounded-full mb-2 inline-block">Maison 🏠</span>
        <h3 className="text-xl font-bold text-white">SAKANA (Habiter)</h3>
      </div>
      <span className="text-4xl font-script opacity-80">يَسْكُنُ</span>
    </div>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { p: "أَنَا", v: "أَ", rest: "سْكُنُ", t: "Ana askunu", m: "J'habite", c: "text-orange-500" },
        { p: "أَنْتَ", v: "تَ", rest: "سْكُنُ", t: "Anta taskunu", m: "Tu habites (👦)", c: "text-blue-500" },
        { p: "هُوَ", v: "يَ", rest: "سْكُنُ", t: "Huwa yaskunu", m: "Il habite", c: "text-emerald-500" },
        { p: "نَحْنُ", v: "نَ", rest: "سْكُنُ", t: "Nahnu naskunu", m: "Nous habitons", c: "text-purple-500" },
      ].map((row, i) => (
        <div key={i} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
          <span className="text-3xl font-script text-indigo-700 w-16">{row.p}</span>
          <div className="ml-4 flex-1">
            <p className="text-2xl font-script font-black text-slate-800">
              <span className={row.c}>{row.v}</span>{row.rest}
            </p>
            <p className="text-xs text-slate-400 font-bold uppercase">{row.t}</p>
          </div>
          <span className="text-xs font-bold text-slate-400">{row.m}</span>
        </div>
      ))}
    </div>
    <div className="bg-indigo-50 p-4 text-center text-indigo-700 font-medium border-t border-indigo-100 italic">
      Exemple : أَنَا <span className="font-bold">أَ</span>سْكُنُ فِي فَرَنْسَا (J'habite en France)
    </div>
  </div>

  {/* VERBE 2 : JOUER (LA'IBA) - NOUVEAU & ÉNERGIQUE */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transform hover:scale-[1.01] transition-transform">
    <div className="bg-emerald-500 p-6 text-white flex justify-between items-center">
      <div>
        <span className="bg-emerald-400/30 text-xs uppercase px-3 py-1 rounded-full mb-2 inline-block">Sport ⚽</span>
        <h3 className="text-xl font-bold text-white">LA'IBA (Jouer)</h3>
      </div>
      <span className="text-4xl font-script opacity-80">يَلْعَبُ</span>
    </div>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { p: "أَنَا", v: "أَ", rest: "لْعَبُ", m: "Je joue", c: "text-orange-500" },
        { p: "أَنْتَ", v: "تَ", rest: "لْعَبُ", m: "Tu joues", c: "text-blue-500" },
        { p: "هُوَ", v: "يَ", rest: "لْعَبُ", m: "Il joue", c: "text-emerald-500" },
        { p: "نَحْنُ", v: "نَ", rest: "لْعَبُ", m: "Nous jouons", c: "text-purple-500" },
      ].map((row, i) => (
        <div key={i} className="flex justify-between items-center p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
          <span className="text-2xl font-script text-emerald-700">{row.p}</span>
          <p className="text-2xl font-script font-black text-slate-800">
            <span className={row.c}>{row.v}</span>{row.rest}
          </p>
          <span className="text-xs font-bold text-slate-400 uppercase">{row.m}</span>
        </div>
      ))}
    </div>
    <div className="bg-emerald-50 p-4 text-center text-emerald-700 font-medium italic">
      Exemple : هُوَ <span className="font-bold">يَ</span>لْعَبُ كُرَةَ الْقَدَمِ (Il joue au football)
    </div>
  </div>

  {/* VERBE 3 : MANGER (AKALA) */}
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transform hover:scale-[1.01] transition-transform">
    <div className="bg-orange-500 p-6 text-white flex justify-between items-center">
      <div>
        <span className="bg-orange-400/30 text-xs uppercase px-3 py-1 rounded-full mb-2 inline-block">Miam 🍎</span>
        <h3 className="text-xl font-bold text-white">AKALA (Manger)</h3>
      </div>
      <span className="text-4xl font-script opacity-80">يَأْكُلُ</span>
    </div>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { p: "أَنَا", v: "آ", rest: "كُلُ", m: "Je mange", c: "text-orange-500" }, // Note: Ana Akulu s'écrit avec un Madda
        { p: "أَنْتَ", v: "تَ", rest: "أْكُلُ", m: "Tu manges", c: "text-blue-500" },
        { p: "هُوَ", v: "يَ", rest: "أْكُلُ", m: "Il mange", c: "text-emerald-500" },
        { p: "نَحْنُ", v: "نَ", rest: "أْكُلُ", m: "Nous mangeons", c: "text-purple-500" },
      ].map((row, i) => (
        <div key={i} className="flex justify-between items-center p-4 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm">
          <span className="text-2xl font-script text-orange-700">{row.p}</span>
          <p className="text-2xl font-script font-black text-slate-800">
            <span className={row.c}>{row.v}</span>{row.rest}
          </p>
          <span className="text-xs font-bold text-slate-400 uppercase">{row.m}</span>
        </div>
      ))}
    </div>
    <div className="bg-orange-50 p-4 text-center text-orange-700 font-medium italic">
      Exemple : نَحْنُ <span className="font-bold">نَ</span>أْكُلُ التُّفَّاحَةَ (Nous mangeons la pomme)
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
              <section className="space-y-8 max-w-2xl mx-auto p-4">
                <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16"></div>

                  {!showFinished ? (
                    <>
                      <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-indigo-400 mb-2 font-serif">
                          🏆 DÉFI DE CONJUGAISON 🏆
                        </h2>
                        <p className="text-slate-400">
                          Question {currentStep + 1} sur {questions.length}
                        </p>
                      </div>

                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                              {currentStep + 1}
                            </span>
                            <p className="text-xl">
                              Complète pour :{" "}
                              <span className="text-indigo-400 font-bold">
                                {questions[currentStep].pronoun}
                              </span>
                              <br />
                              <span className="text-sm text-slate-400 italic">
                                ({questions[currentStep].translation})
                              </span>
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {questions[currentStep].options.map(
                              (option, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleAnswer(option)}
                                  className="p-4 bg-white/5 hover:bg-indigo-500/20 border border-white/10 rounded-2xl transition font-serif text-2xl"
                                >
                                  {option.text}
                                </button>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center space-y-6">
                      <h2 className="text-4xl font-black text-green-400">
                        TERMINE ! 🎉
                      </h2>
                      <p className="text-2xl">
                        Score :{" "}
                        <span className="font-bold text-indigo-400">
                          {score} / {questions.length}
                        </span>
                      </p>
                      <p className="text-slate-400">Bravo Halim et Liyana !</p>
                      <button
                        onClick={resetQuiz}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full font-bold transition"
                      >
                        Recommencer
                      </button>
                    </div>
                  )}
                </div>
              </section>

              {/* --- NOUVELLE SECTION : LA NÉGATION (LA) --- */}
              <section className="space-y-8">
                <div className="bg-white p-8 rounded-[40px] shadow-xl border-2 border-slate-100 relative overflow-hidden">
                  {/* Petit badge décoratif */}
                  <div className="absolute -top-2 -right-2 bg-rose-500 text-white px-6 py-2 rounded-bl-3xl font-black text-sm rotate-3 shadow-lg">
                    NOUVEAU ! 🛡️
                  </div>

                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-slate-800 mb-2">
                      Le Bouclier du "NON" 🛡️
                    </h2>
                    <p className="text-slate-500 italic">
                      "La" (لا) : Pour dire que l'on ne fait pas quelque chose.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <div className="bg-rose-50 p-6 rounded-3xl border-2 border-rose-100">
                        <h4 className="font-bold text-rose-700 mb-2 flex items-center gap-2">
                          <span>💡</span> La règle est simple :
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          On ajoute juste le petit mot{" "}
                          <span className="font-bold text-rose-600 text-xl font-script">
                            لا
                          </span>
                          <strong> AVANT</strong> le verbe. Le verbe reste
                          exactement le même !
                        </p>
                      </div>

                      <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 italic text-indigo-700 text-sm">
                        "C'est comme mettre un parapluie : le verbe dessous ne
                        change pas, il est juste protégé !"
                      </div>
                    </div>

                    {/* Comparaison Visuelle */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="text-center">
                          <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                            Affirmatif
                          </p>
                          <p className="text-2xl font-script font-bold text-sky-600">
                            أَشْرَبُ
                          </p>
                          <p className="text-[10px] text-slate-400">Je bois</p>
                        </div>
                        <div className="text-2xl">➡️</div>
                        <div className="text-center">
                          <p className="text-xs font-bold text-rose-400 uppercase mb-1">
                            Négatif
                          </p>
                          <p className="text-2xl font-script font-bold text-rose-600">
                            لا أَشْرَبُ
                          </p>
                          <p className="text-[10px] text-slate-400">
                            Je ne bois pas
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="text-center">
                          <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                            Affirmatif
                          </p>
                          <p className="text-2xl font-script font-bold text-sky-600">
                            يَلْعَبُ
                          </p>
                          <p className="text-[10px] text-slate-400">Il joue</p>
                        </div>
                        <div className="text-2xl">➡️</div>
                        <div className="text-center">
                          <p className="text-xs font-bold text-rose-400 uppercase mb-1">
                            Négatif
                          </p>
                          <p className="text-2xl font-script font-bold text-rose-600">
                            لا يَلْعَبُ
                          </p>
                          <p className="text-[10px] text-slate-400">
                            Il ne joue pas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Petit exercice rapide interactif (Optionnel) */}
                  <div className="mt-10 p-6 bg-slate-900 rounded-3xl text-center">
                    <p className="text-slate-400 text-sm mb-4">
                      Comment dirais-tu "Nous ne mangeons pas" ?
                    </p>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() =>
                          alert("Réessaie ! Il manque le bouclier 'LA'")
                        }
                        className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl font-script text-xl text-white transition"
                      >
                        نَأْكُلُ
                      </button>
                      <button
                        onClick={() => alert("BRAVO ! ✅ لا + نَأْكُلُ")}
                        className="px-6 py-2 bg-rose-500 hover:bg-rose-600 rounded-xl font-script text-xl text-white transition shadow-lg shadow-rose-900/20"
                      >
                        لا نَأْكُلُ
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- SECTION DÉFI NÉGATION "LA" --- */}
<section className="space-y-8 max-w-2xl mx-auto p-4">
  <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border-2 border-rose-500/20">
    {/* Décoration : Un grand "LA" en fond */}
    <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl font-script text-rose-500 pointer-events-none">
      لا
    </div>

    {!showFinished ? (
      <>
        {/* En-tête du Quiz */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-rose-500/20 rounded-full text-rose-400 text-xs font-bold uppercase tracking-widest mb-4 border border-rose-500/30">
            🛡️ Le Bouclier du Non
          </div>
          <h2 className="text-3xl font-black text-white mb-2 font-serif">
            DÉFI : <span className="text-rose-400">LA NÉGATION</span>
          </h2>
          {/* Barre de progression */}
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-6 overflow-hidden">
            <div 
              className="bg-rose-500 h-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / negationQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-rose-900/40">
                {currentStep + 1}
              </span>
              <div className="space-y-2">
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Comment dire :</p>
                <p className="text-3xl font-black text-indigo-400 underline decoration-white/20 underline-offset-8">
                  "{negationQuestions[currentStep].translation}"
                </p>
                <p className="text-lg text-slate-300 italic pt-2">
                  Pour : {negationQuestions[currentStep].pronoun}
                </p>
              </div>
            </div>

            {/* Grille des boutons de réponse */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              {negationQuestions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="group relative p-6 bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/50 rounded-3xl transition-all duration-300 text-left"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-script font-bold text-white group-hover:text-rose-300 transition-colors">
                      {option.text}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-400 text-xl">
                      🛡️
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    ) : (
      /* Écran de fin du défi Négation */
      <div className="text-center py-10 space-y-8">
        <div className="relative inline-block">
          <div className="text-8xl mb-4">🛡️</div>
          <div className="absolute -top-2 -right-2 text-4xl animate-bounce">✨</div>
        </div>
        <h2 className="text-4xl font-black text-rose-400">
          BOUCLIER ACTIVÉ !
        </h2>
        <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
          <p className="text-xl mb-2">Score de Halim et Liyana :</p>
          <p className="text-5xl font-black text-indigo-400">
            {score} <span className="text-2xl text-slate-500">/ {negationQuestions.length}</span>
          </p>
        </div>
        <button
          onClick={resetQuiz}
          className="w-full py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-black text-xl shadow-xl transition-all active:scale-95"
        >
          REFAIRE LE DÉFI 🛡️
        </button>
      </div>
    )}
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
