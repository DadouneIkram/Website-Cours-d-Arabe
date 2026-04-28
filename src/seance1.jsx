import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ title, icon, children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 ${className}`}
  >
    <div className="flex items-center mb-4">
      <span className="text-4xl mr-3">{icon}</span>
      <h2 className="text-2xl font-bold text-teal-700 font-serif">{title}</h2>
    </div>
    {children}
  </motion.div>
);

// ========================================
// DONNÉES : LETTRES SOLAIRES ET LUNAIRES
// ========================================

const lettresSolaires = [
  { ar: "ت", name: "Ta", exemple: "التَّمْر", trans: "at-tamr", fr: "les dattes" },
  { ar: "ث", name: "Tha", exemple: "الثَّوْب", trans: "ath-thawb", fr: "le vêtement" },
  { ar: "د", name: "Dal", exemple: "الدَّار", trans: "ad-dār", fr: "la maison" },
  { ar: "ذ", name: "Dhal", exemple: "الذَّهَب", trans: "adh-dhahab", fr: "l'or" },
  { ar: "ر", name: "Ra", exemple: "الرَّجُل", trans: "ar-rajul", fr: "l'homme" },
  { ar: "ز", name: "Zay", exemple: "الزَّيْت", trans: "az-zayt", fr: "l'huile" },
  { ar: "س", name: "Sin", exemple: "السَّمَاء", trans: "as-samā'", fr: "le ciel" },
  { ar: "ش", name: "Shin", exemple: "الشَّمْس", trans: "ash-shams", fr: "le soleil" },
  { ar: "ص", name: "Sad", exemple: "الصَّبَاح", trans: "aṣ-ṣabāḥ", fr: "le matin" },
  { ar: "ض", name: "Dad", exemple: "الضَّوْء", trans: "aḍ-ḍaw'", fr: "la lumière" },
  { ar: "ط", name: "Ta", exemple: "الطَّعَام", trans: "aṭ-ṭa'ām", fr: "la nourriture" },
  { ar: "ظ", name: "Za", exemple: "الظُّهْر", trans: "aẓ-ẓuhr", fr: "midi" },
  { ar: "ل", name: "Lam", exemple: "اللَّيْل", trans: "al-layl", fr: "la nuit" },
  { ar: "ن", name: "Nun", exemple: "النَّار", trans: "an-nār", fr: "le feu" },
];

const lettresLunaires = [
  { ar: "ا", name: "Alif", exemple: "الأَرْض", trans: "al-arḍ", fr: "la terre" },
  { ar: "ب", name: "Ba", exemple: "البَيْت", trans: "al-bayt", fr: "la maison" },
  { ar: "ج", name: "Jim", exemple: "الجَبَل", trans: "al-jabal", fr: "la montagne" },
  { ar: "ح", name: "Ha", exemple: "الحَلِيب", trans: "al-ḥalīb", fr: "le lait" },
  { ar: "خ", name: "Kha", exemple: "الخُبْز", trans: "al-khubz", fr: "le pain" },
  { ar: "ع", name: "Ain", exemple: "العَيْن", trans: "al-'ayn", fr: "l'œil" },
  { ar: "غ", name: "Ghain", exemple: "الغَابَة", trans: "al-ghāba", fr: "la forêt" },
  { ar: "ف", name: "Fa", exemple: "الفَاكِهَة", trans: "al-fākiha", fr: "le fruit" },
  { ar: "ق", name: "Qaf", exemple: "القَلَم", trans: "al-qalam", fr: "le stylo" },
  { ar: "ك", name: "Kaf", exemple: "الكِتَاب", trans: "al-kitāb", fr: "le livre" },
  { ar: "م", name: "Mim", exemple: "المَاء", trans: "al-mā'", fr: "l'eau" },
  { ar: "ه", name: "Ha", exemple: "الهَوَاء", trans: "al-hawā'", fr: "l'air" },
  { ar: "و", name: "Waw", exemple: "الوَرْد", trans: "al-ward", fr: "la rose" },
  { ar: "ي", name: "Ya", exemple: "اليَد", trans: "al-yad", fr: "la main" },
];

// ========================================
// QUIZ : CHIFFRES & COULEURS (AJOUTÉS)
// ========================================

const quizChiffresCouleurs = [
  {
    id: 46,
    question: "Halim a 7 ans. Quel est le chiffre 7 en arabe ?",
    answer: "٧",
    choices: ["٦", "٧", "٨", "٩"],
    hint: "Il regarde vers le haut !",
    category: "chiffres-couleurs"
  },
  {
    id: 47,
    question: "Liyana a 8 ans. Quel est le chiffre 8 en arabe ?",
    answer: "٨",
    choices: ["٧", "٨", "٩", "٠"],
    hint: "Il regarde vers le bas.",
    category: "chiffres-couleurs"
  },
  {
    id: 48,
    question: "Quelle est la couleur NOIR (Aswad) ?",
    answer: "أَسْوَد",
    choices: ["أَسْوَد", "أَبْيَض", "أَحْمَر", "أَزْرَق"],
    hint: "Comme la couleur du stylo.",
    category: "chiffres-couleurs"
  },
  {
    id: 49,
    question: "Quelle est la couleur BLANC (Abyad) ?",
    answer: "أَبْيَض",
    choices: ["أَسْوَد", "أَبْيَض", "أَخْضَر", "أَصْفَر"],
    hint: "Comme la feuille de papier.",
    category: "chiffres-couleurs"
  },
  {
    id: 50,
    question: "Quelle couleur signifie ROUGE ?",
    answer: "أَحْمَر",
    choices: ["أَحْمَر", "أَخْضَر", "أَزْرَق", "أَسْوَد"],
    hint: "Ahmar",
    category: "chiffres-couleurs"
  },
  {
    id: 51,
    question: "Quelle couleur signifie BLEU ?",
    answer: "أَزْرَق",
    choices: ["أَزْرَق", "أَصْفَر", "أَبْيَض", "أَخْضَر"],
    hint: "Azraq",
    category: "chiffres-couleurs"
  }
];

// RECONNAISSANCE DES LETTRES
const quizReconnaissanceLettres = [
  { id: 1, question: "Quelle lettre fait le son 'B' ?", answer: "ب", choices: ["ب", "ت", "ث", "ن"], hint: "Un point en dessous", category: "lettres" },
  { id: 2, question: "Quelle lettre fait le son 'M' ?", answer: "م", choices: ["م", "ن", "ه", "و"], hint: "Forme ronde et fermée", category: "lettres" },
  { id: 3, question: "Quelle lettre fait le son 'L' ?", answer: "ل", choices: ["ل", "ك", "ي", "ن"], hint: "Forme élancée qui monte", category: "lettres" },
];

// VOYELLES
const quizVoyelles = [
  { id: 11, question: "Comment se lit : بَ ?", answer: "ba", choices: ["ba", "bi", "bu", "b"], hint: "Fatha fait le son 'a'", category: "voyelles" },
  { id: 12, question: "Comment se lit : تِ ?", answer: "ti", choices: ["ta", "ti", "tu", "t"], hint: "Kasra fait le son 'i'", category: "voyelles" },
];

// VOCABULAIRE
const quizVocabulaire = [
  { id: 21, question: "Comment dit-on 'maison' en arabe ?", answer: "بَيْت", choices: ["بَيْت", "كِتَاب", "قَلَم", "مَاء"], hint: "bayt", category: "vocabulaire" },
  { id: 23, question: "Comment dit-on 'stylo' en arabe ?", answer: "قَلَم", choices: ["قَمَر", "قَلَم", "كِتَاب", "نُور"], hint: "qalam", category: "vocabulaire" },
];

// COMBINER TOUS LES QUIZ (MAINTENANT 50+ QUESTIONS)
const tousLesQuiz = [
  ...quizReconnaissanceLettres,
  ...quizVoyelles,
  ...quizVocabulaire,
  ...quizChiffresCouleurs,
];

// ========================================
// COMPOSANT PRINCIPAL
// ========================================

const NextLesson = ({ onBack }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAttemptStatus, setQuizAttemptStatus] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showLunaireSolaire, setShowLunaireSolaire] = useState(false);

  const filteredQuiz = selectedCategory === "all" 
    ? tousLesQuiz 
    : tousLesQuiz.filter(q => q.category === selectedCategory);

  const handleQuizAnswer = (selectedChoice) => {
    if (quizCompleted) return;
    const currentQuiz = filteredQuiz[currentQuizIndex];

    if (selectedChoice === currentQuiz.answer) {
      setQuizAttemptStatus("correct");
      setScore(score + 1);
      setTimeout(() => {
        if (currentQuizIndex < filteredQuiz.length - 1) {
          setCurrentQuizIndex((prev) => prev + 1);
          setQuizAttemptStatus(null);
        } else {
          setQuizCompleted(true);
          setQuizAttemptStatus(null);
        }
      }, 1000);
    } else {
      setQuizAttemptStatus("incorrect");
      setTimeout(() => setQuizAttemptStatus(null), 2000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setQuizCompleted(false);
    setScore(0);
    setQuizAttemptStatus(null);
  };

  const currentQuiz = filteredQuiz[currentQuizIndex];
  const shuffledQuizChoices = currentQuiz
    ? [...currentQuiz.choices].sort(() => Math.random() - 0.5)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 font-sans text-gray-800">
      <style>{`
        .font-serif { font-family: 'Inter', sans-serif; }
        .font-script { font-family: 'Noto Sans Arabic', sans-serif; }
      `}</style>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-16 pb-20 px-4 md:px-8 text-center bg-white shadow-md border-b-2 border-teal-100"
      >
        <button onClick={onBack} className="m-4 px-4 py-2 bg-teal-500 text-white rounded-full font-bold shadow-md hover:bg-teal-600 transition">
          ⬅ Retour
        </button>
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-600 mb-3 font-serif">
          Séance Finale : Chiffres, Couleurs & Quiz 🎯
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Liyana (8 ans) et Halim (7 ans), c'est l'heure de tester vos super-pouvoirs ! 🚀
        </p>
      </motion.header>

      <main className="container mx-auto p-4 md:p-8 pt-10 grid gap-12 max-w-6xl">

        {/* SECTION COULEURS VISUELLES */}
        <Card icon="🎨" title="Apprenons les couleurs !">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Rouge", ar: "أَحْمَر", color: "bg-red-500" },
              { label: "Bleu", ar: "أَزْرَق", color: "bg-blue-500" },
              { label: "Vert", ar: "أَخْضَر", color: "bg-green-500" },
              { label: "Jaune", ar: "أَصْفَر", color: "bg-yellow-400" },
              { label: "Noir", ar: "أَسْوَد", color: "bg-black text-white" },
              { label: "Blanc", ar: "أَبْيَض", color: "bg-white border-2" },
            ].map((c, i) => (
              <div key={i} className={`${c.color} p-4 rounded-xl text-center shadow-md`}>
                <p className="text-xl font-script mb-1">{c.ar}</p>
                <p className="text-xs font-bold uppercase">{c.label}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* SECTION QUIZ */}
        <Card icon="🎯" title="Le Grand Quiz Final" className="bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="mb-6 flex flex-wrap gap-2">
            {["all", "lettres", "voyelles", "vocabulaire", "chiffres-couleurs"].map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); resetQuiz(); }}
                className={`px-4 py-2 rounded-full text-sm font-bold transition ${selectedCategory === cat ? "bg-purple-600 text-white" : "bg-white text-purple-600 border border-purple-200"}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {quizCompleted ? (
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <p className="text-6xl mb-4">🏆</p>
              <h3 className="text-3xl font-bold text-green-700">Score Final : {score}/{filteredQuiz.length}</h3>
              <button onClick={resetQuiz} className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full font-bold shadow-lg">Recommencer</button>
            </div>
          ) : (
            <div>
              <div className="mb-4 text-purple-700 font-bold">Question {currentQuizIndex + 1}/{filteredQuiz.length}</div>
              <p className="text-2xl font-medium mb-8">{currentQuiz?.question}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shuffledQuizChoices.map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuizAnswer(choice)}
                    className={`p-6 text-2xl font-script rounded-xl border-2 transition shadow-sm ${quizAttemptStatus === "correct" && choice === currentQuiz.answer ? "bg-green-200 border-green-500" : "bg-white hover:bg-purple-50 border-purple-100"}`}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              {quizAttemptStatus === "incorrect" && <p className="mt-4 text-red-500 font-bold">❌ Réessaie ! {currentQuiz?.hint}</p>}
              {quizAttemptStatus === "correct" && <p className="mt-4 text-green-500 font-bold">✅ Bravo !</p>}
            </div>
          )}
        </Card>
      </main>
    </div>
  );
};

export default NextLesson;