import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextLesson from "./NextLesson";
import QuranLesson from "./QuranLesson";
import Conjugaison from "./Conjugaison";


const Card = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
  >
    <div className="flex items-center mb-4">
      <span className="text-4xl mr-3">{icon}</span>
      <h2 className="text-2xl font-bold text-teal-700 font-serif">{title}</h2>
    </div>
    {children}
  </motion.div>
);

// --- DONNÉES POUR LA RÉVISION ---

// 1. Les Salutations et Bases
const basics = [
  { ar: "بِسْمِ اللَّه", tr: "Bismillah", fr: "Au nom d'Allah" },
  {
    ar: "السَّلامُ عَلَيْكُمْ",
    tr: "As-salam 'alaykum",
    fr: "Bonjour / Paix sur vous",
  },
  { ar: "شُكْرًا", tr: "Shukran", fr: "Merci" },
  { ar: "مَعَ السَّلامَة", tr: "Ma'a salama", fr: "Au revoir" },
  { ar: "كَيْفَ حَالُكَ؟", tr: "Kayfa haluk?", fr: "Comment vas-tu ?" },
  { ar: "أَنَا بِخَيْر", tr: "Ana bi-khayr", fr: "Je vais bien" },
];

// 2. Les Pronoms (Rappel)
const pronouns = [
  { ar: "أَنَا", fr: "Je", sound: "Ana" },
  { ar: "أَنْتَ", fr: "Tu (👦)", sound: "Anta" },
  { ar: "أَنْتِ", fr: "Tu (👧)", sound: "Anti" },
  { ar: "هُوَ", fr: "Il", sound: "Huwa" },
  { ar: "هِيَ", fr: "Elle", sound: "Hiya" },
  { ar: "نَحْنُ", fr: "Nous", sound: "Nahnu" },
];

// 3. Les Chiffres (NOUVEAU 🔢)
const numbers = [
  { ar: "٠", word: "صِفْر", name: "Sifr", fr: "Zéro", val: 0 },
  { ar: "١", word: "وَاحِد", name: "Wahid", fr: "Un", val: 1 },
  { ar: "٢", word: "اِثْنَان", name: "Ithnan", fr: "Deux", val: 2 },
  { ar: "٣", word: "ثَلَاثَة", name: "Thalatha", fr: "Trois", val: 3 },
  { ar: "٤", word: "أَرْبَعَة", name: "Arba'a", fr: "Quatre", val: 4 },
  { ar: "٥", word: "خَمْسَة", name: "Khamsa", fr: "Cinq", val: 5 },
  { ar: "٦", word: "سِتَّة", name: "Sitta", fr: "Six", val: 6 },
  { ar: "٧", word: "سَبْعَة", name: "Sab'a", fr: "Sept", val: 7 },
  { ar: "٨", word: "ثَمَانِيَة", name: "Thamaniya", fr: "Huit", val: 8 },
  { ar: "٩", word: "تِسْعَة", name: "Tis'a", fr: "Neuf", val: 9 },
  { ar: "١٠", word: "عَشَرَة", name: "'Ashara", fr: "Dix", val: 10 },
];

// Toutes les lettres pour la révision
const allLetters = [
  { arabic: "ا", name: "Alif", sound: "A" },
  { arabic: "ب", name: "Ba", sound: "B" },
  { arabic: "ت", name: "Ta", sound: "T" },
  { arabic: "ث", name: "Tha", sound: "Th" },
  { arabic: "ج", name: "Jim", sound: "J" },
  { arabic: "ح", name: "Ha", sound: "H" },
  { arabic: "خ", name: "Kha", sound: "Kh" },
  { arabic: "د", name: "Dal", sound: "D" },
  { arabic: "ذ", name: "Thal", sound: "Dh" },
  { arabic: "ر", name: "Ra", sound: "R" },
  { arabic: "ز", name: "Zay", sound: "Z" },
  { arabic: "س", name: "Sin", sound: "S" },
  { arabic: "ش", name: "Shin", sound: "Sh" },
  { arabic: "ص", name: "Sad", sound: "S" },
  { arabic: "ض", name: "Dad", sound: "D" },
  { arabic: "ط", name: "Ta", sound: "T" },
  { arabic: "ظ", name: "Za", sound: "Z" },
  { arabic: "ع", name: "Ain", sound: "'" },
  { arabic: "غ", name: "Ghain", sound: "Gh" },
  { arabic: "ف", name: "Fa", sound: "F" },
  { arabic: "ق", name: "Qaf", sound: "Q" },
  { arabic: "ك", name: "Kaf", sound: "K" },
  { arabic: "ل", name: "Lam", sound: "L" },
  { arabic: "م", name: "Mim", sound: "M" },
  { arabic: "ن", name: "Nun", sound: "N" },
  { arabic: "ه", name: "Ha", sound: "H" },
  { arabic: "و", name: "Waw", sound: "W" },
  { arabic: "ي", name: "Ya", sound: "Y" },
];

// Quiz de révision mixte
const revisionQuiz = [
  {
    id: 1,
    question: "Quelle lettre fait le son 'B' ?",
    answer: "ب",
    choices: ["ب", "ت", "ث", "ن"],
    hint: "Un point en dessous",
  },
  {
    id: 2,
    question: "Quelle lettre fait le son 'M' ?",
    answer: "م",
    choices: ["م", "ن", "ه", "و"],
    hint: "Forme ronde et fermée",
  },
  {
    id: 3,
    question: "Quelle lettre fait le son 'L' ?",
    answer: "ل",
    choices: ["ل", "ك", "ي", "ن"],
    hint: "Forme élancée qui monte",
  },
  {
    id: 4,
    question: "Quelle lettre fait le son 'K' ?",
    answer: "ك",
    choices: ["ك", "ق", "ف", "غ"],
    hint: "Pas de point, comme 'kilo'",
  },
  {
    id: 5,
    question: "Quelle lettre fait le son 'N' ?",
    answer: "ن",
    choices: ["ن", "م", "ت", "ب"],
    hint: "Un point au-dessus, comme un bol",
  },
  {
    id: 6,
    question: "Quelle lettre fait le son 'S' ?",
    answer: "س",
    choices: ["س", "ش", "ص", "ض"],
    hint: "Trois traits horizontaux",
  },
  {
    id: 7,
    question: "Quelle lettre fait le son 'J' ?",
    answer: "ج",
    choices: ["ج", "ح", "خ", "د"],
    hint: "Un point en dessous",
  },
  {
    id: 8,
    question: "Quelle lettre fait le son 'R' ?",
    answer: "ر",
    choices: ["ر", "ز", "د", "ذ"],
    hint: "Ne se connecte pas à gauche",
  },
  {
    id: 9,
    question: "Quelle lettre fait le son 'Y' ?",
    answer: "ي",
    choices: ["ي", "و", "ن", "ت"],
    hint: "Deux points en dessous",
  },
  {
    id: 10,
    question: "Quelle lettre fait le son 'Q' guttural ?",
    answer: "ق",
    choices: ["ق", "ك", "ف", "غ"],
    hint: "Deux points au-dessus",
  },
];

// Mots de vocabulaire pour révision
const vocabularyWords = [
  { arabic: "بَيْت", trans: "bayt", meaning: "maison" },
  { arabic: "كِتَاب", trans: "kitāb", meaning: "livre" },
  { arabic: "قَلَم", trans: "qalam", meaning: "stylo" },
  { arabic: "مَاء", trans: "mā'", meaning: "eau" },
  { arabic: "نُور", trans: "nūr", meaning: "lumière" },
  { arabic: "بَاب", trans: "bāb", meaning: "porte" },
  { arabic: "يَد", trans: "yad", meaning: "main" },
  { arabic: "وَرْد", trans: "ward", meaning: "rose" },
  { arabic: "شَمْس", trans: "shams", meaning: "soleil" },
  { arabic: "قَمَر", trans: "qamar", meaning: "lune" },
];

// Données complètes des formes (Isolée, Début, Milieu, Fin)
const alphabetForms = [
  { letter: "Alif", iso: "ا", init: "ا", med: "ـا", fin: "ـا" },
  { letter: "Ba", iso: "ب", init: "بـ", med: "ـبـ", fin: "ـب" },
  { letter: "Ta", iso: "ت", init: "تـ", med: "ـتـ", fin: "ـت" },
  { letter: "Tha", iso: "ث", init: "ثـ", med: "ـثـ", fin: "ـث" },
  { letter: "Jim", iso: "ج", init: "جـ", med: "ـجـ", fin: "ـج" },
  { letter: "Ha", iso: "ح", init: "حـ", med: "ـحـ", fin: "ـح" },
  { letter: "Kha", iso: "خ", init: "خـ", med: "ـخـ", fin: "ـخ" },
  { letter: "Dal", iso: "د", init: "د", med: "ـد", fin: "ـد" },
  { letter: "Thal", iso: "ذ", init: "ذ", med: "ـذ", fin: "ـذ" },
  { letter: "Ra", iso: "ر", init: "ر", med: "ـر", fin: "ـر" },
  { letter: "Zay", iso: "ز", init: "ز", med: "ـز", fin: "ـز" },
  { letter: "Sin", iso: "س", init: "سـ", med: "ـسـ", fin: "ـس" },
  { letter: "Shin", iso: "ش", init: "شـ", med: "ـشـ", fin: "ـش" },
  { letter: "Sad", iso: "ص", init: "صـ", med: "ـصـ", fin: "ـص" },
  { letter: "Dad", iso: "ض", init: "ضـ", med: "ـضـ", fin: "ـض" },
  { letter: "Ta", iso: "ط", init: "طـ", med: "ـطـ", fin: "ـط" },
  { letter: "Za", iso: "ظ", init: "ظـ", med: "ـظـ", fin: "ـظ" },
  { letter: "Ain", iso: "ع", init: "عـ", med: "ـعـ", fin: "ـع" },
  { letter: "Ghain", iso: "غ", init: "غـ", med: "ـغـ", fin: "ـغ" },
  { letter: "Fa", iso: "ف", init: "فـ", med: "ـفـ", fin: "ـف" },
  { letter: "Qaf", iso: "ق", init: "قـ", med: "ـقـ", fin: "ـق" },
  { letter: "Kaf", iso: "ك", init: "كـ", med: "ـكـ", fin: "ـك" },
  { letter: "Lam", iso: "ل", init: "لـ", med: "ـلـ", fin: "ـل" },
  { letter: "Mim", iso: "م", init: "مـ", med: "ـمـ", fin: "ـم" },
  { letter: "Nun", iso: "ن", init: "نـ", med: "ـنـ", fin: "ـن" },
  { letter: "Ha", iso: "ه", init: "هـ", med: "ـهـ", fin: "ـه" },
  { letter: "Waw", iso: "و", init: "و", med: "ـو", fin: "ـو" },
  { letter: "Ya", iso: "ي", init: "يـ", med: "ـيـ", fin: "ـي" },
];

const App = () => {
  const [showLesson, setShowLesson] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAttemptStatus, setQuizAttemptStatus] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleStartCourse = () => {
    setShowLesson(true);
    setTimeout(() => {
      document
        .getElementById("lesson-content")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const handleQuizAnswer = (selectedChoice) => {
    if (quizCompleted) return;
    const currentQuiz = revisionQuiz[currentQuizIndex];

    if (selectedChoice === currentQuiz.answer) {
      setQuizAttemptStatus("correct");
      setScore(score + 1);
      setTimeout(() => {
        if (currentQuizIndex < revisionQuiz.length - 1) {
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

  const currentQuiz = revisionQuiz[currentQuizIndex];
  const shuffledQuizChoices = currentQuiz
    ? [...currentQuiz.choices].sort(() => Math.random() - 0.5)
    : [];

  const [currentPage, setCurrentPage] = useState("revision");

  // Ajoute ce bloc juste avant le "return" principal
  if (currentPage === "next-lesson") {
    return <NextLesson onBack={() => setCurrentPage("revision")} />;
  }
  if (currentPage === "quran-lesson") {
    return <QuranLesson onBack={() => setCurrentPage("revision")} />;
  }
  if (currentPage === "conjugaison-lesson") {
    return <Conjugaison onBack={() => setCurrentPage("revision")} />;
  }
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
        <h1 className="text-5xl md:text-6xl font-extrabold text-teal-600 mb-3 font-serif">
          Cours d'Arabe 
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Bienvenue ! 🌸
        </p>

        <motion.button
          onClick={handleStartCourse}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-teal-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-teal-600 transition"
        >
          Commencer la Séance
        </motion.button>
        <div className="mt-12 flex justify-center mx-auto gap-3">
          <button
            onClick={() => {
              setCurrentPage("next-lesson");
              window.scrollTo(0, 0); // Pour remonter en haut de page
            }}
            className="flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-black rounded-full shadow-2xl hover:from-indigo-700 hover:to-purple-700 transition transform hover:scale-110 shadow-indigo-200"
          >
            PASSER À LA SÉANCE PROCHAINE 🚀
          </button>
          <button
            onClick={() => {
              setCurrentPage("quran-lesson");
              window.scrollTo(0, 0); // Pour remonter en haut de page
            }}
            className="flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-black rounded-full shadow-2xl hover:from-indigo-700 hover:to-purple-700 transition transform hover:scale-110 shadow-indigo-200"
          >
            PASSER À LA SÉANCE quran 🚀
          </button>

            <button
            onClick={() => {
              setCurrentPage("conjugaison-lesson");
              window.scrollTo(0, 0); // Pour remonter en haut de page
            }}
            className="flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-black rounded-full shadow-2xl hover:from-indigo-700 hover:to-purple-700 transition transform hover:scale-110 shadow-indigo-200"
          >
            PASSER À LA SÉANCE CONJUGAISON 🚀
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {showLesson && (
          <motion.main
            id="lesson-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto p-4 md:p-8 pt-10 grid gap-12 max-w-4xl"
          >
            {/* Introduction */}
            <Card icon="🎯" title="Objectifs de cette séance">
              <p className="text-gray-700 leading-relaxed mb-4">Bonjour ! 🌸</p>
              <div className="bg-teal-50 p-5 rounded-xl">
                <h3 className="font-bold text-teal-700 mb-3">
                  📋 Au programme :
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Révision interactive des <strong>28 lettres</strong> de
                    l'alphabet
                  </li>
                  <li>Quiz de consolidation sur les lettres</li>
                  <li>
                    Révision complète des <strong>voyelles</strong> (courtes,
                    longues, Chadda, Tanwin)
                  </li>
                  <li>
                    Les <strong>positions des lettres</strong> (début, milieu,
                    fin)
                  </li>
                  <li>Vocabulaire essentiel</li>
                  <li>Phrases de salutation et présentation</li>
                </ul>
              </div>
            </Card>

            {/* Révision alphabet interactif */}
            <Card icon="🔤" title="Révision interactive : Les 28 lettres">
              <p className="text-gray-700 mb-4">
                Clique sur chaque lettre pour voir ses détails !
              </p>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mb-6">
                {allLetters.map((letter, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedLetter(letter)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl shadow-md transition-all ${
                      selectedLetter?.arabic === letter.arabic
                        ? "bg-teal-500 text-white"
                        : "bg-teal-50 hover:bg-teal-100"
                    }`}
                  >
                    <span className="text-3xl font-script">
                      {letter.arabic}
                    </span>
                  </motion.button>
                ))}
              </div>

              {selectedLetter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-teal-50 p-6 rounded-xl"
                >
                  <div className="text-center">
                    <p className="text-6xl font-script text-teal-700 mb-3">
                      {selectedLetter.arabic}
                    </p>
                    <p className="text-2xl font-bold text-teal-800">
                      {selectedLetter.name}
                    </p>
                    <p className="text-xl text-gray-600 mt-2">
                      Son : <strong>{selectedLetter.sound}</strong>
                    </p>
                  </div>
                </motion.div>
              )}
            </Card>

            {/* TABLEAU COMPLET DES FORMES DES LETTRES */}
            <Card icon="✍️" title="Tableau complet : L'écriture des lettres">
              <p className="text-gray-700 mb-6">
                Voici comment toutes les lettres s'écrivent selon leur position.
                Observe bien comment elles changent de forme pour se connecter !
              </p>

              {/* En-têtes du tableau */}
              <div className="hidden md:grid grid-cols-5 gap-4 bg-teal-100 p-4 rounded-t-xl text-center font-bold text-teal-800">
                <div>Fin</div>
                <div>Milieu</div>
                <div>Début</div>
                <div>Isolée</div>
                <div>Lettre</div>
              </div>

              {/* Grille des lettres */}
              <div className="space-y-3 md:space-y-0">
                {alphabetForms.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ backgroundColor: "#f0fdfa" }}
                    className={`
                      grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 p-4 rounded-xl items-center text-center border-b border-gray-100
                      ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    `}
                  >
                    {/* Version Mobile : Nom de la lettre en haut */}
                    <div className="md:hidden font-bold text-teal-600 mb-2 border-b pb-2">
                      Lettre : {item.letter}
                    </div>

                    {/* Fin */}
                    <div className="flex flex-col md:block">
                      <span className="md:hidden text-xs text-gray-400 mb-1">
                        Fin
                      </span>
                      <span className="font-script text-3xl text-gray-800">
                        {item.fin}
                      </span>
                    </div>

                    {/* Milieu */}
                    <div className="flex flex-col md:block">
                      <span className="md:hidden text-xs text-gray-400 mb-1">
                        Milieu
                      </span>
                      <span className="font-script text-3xl text-gray-800">
                        {item.med}
                      </span>
                    </div>

                    {/* Début */}
                    <div className="flex flex-col md:block">
                      <span className="md:hidden text-xs text-gray-400 mb-1">
                        Début
                      </span>
                      <span className="font-script text-3xl text-gray-800">
                        {item.init}
                      </span>
                    </div>

                    {/* Isolée */}
                    <div className="flex flex-col md:block">
                      <span className="md:hidden text-xs text-gray-400 mb-1">
                        Isolée
                      </span>
                      <span className="font-script text-3xl text-teal-700 font-bold">
                        {item.iso}
                      </span>
                    </div>

                    {/* Nom (Desktop uniquement) */}
                    <div className="hidden md:block font-bold text-gray-500">
                      {item.letter}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* Révision alphabet par groupes */}
            <Card icon="🔤" title="Révision des 28 lettres par groupes">
              <p className="text-gray-700 mb-4">
                Révisons l'alphabet en groupant les lettres similaires pour
                mieux les mémoriser !
              </p>

              {/* Groupe 1 : Lettres avec points */}
              <div className="bg-purple-50 p-5 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  👉 Groupe 1 : Même forme, différents points
                </h3>
                <p className="text-gray-700 mb-3">
                  Ces lettres ont la même forme de base, seuls les points
                  changent :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">
                      ب ت ث
                    </p>
                    <p className="text-center font-bold text-purple-700">
                      Ba, Ta, Tha
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      1, 2, 3 points
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">
                      ج ح خ
                    </p>
                    <p className="text-center font-bold text-purple-700">
                      Jim, Ha, Kha
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      1 point dessous, 0, 1 dessus
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">د ذ</p>
                    <p className="text-center font-bold text-purple-700">
                      Dal, Thal
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      0 et 1 point
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">ر ز</p>
                    <p className="text-center font-bold text-purple-700">
                      Ra, Zay
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      0 et 1 point
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">س ش</p>
                    <p className="text-center font-bold text-purple-700">
                      Sin, Shin
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      3 traits vs 3 points
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">ع غ</p>
                    <p className="text-center font-bold text-purple-700">
                      Ain, Ghain
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      0 et 1 point
                    </p>
                  </div>
                </div>
              </div>

              {/* Groupe 2 : Lettres emphatiques */}
              <div className="bg-orange-50 p-5 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  💪 Groupe 2 : Les lettres emphatiques (sons épais)
                </h3>
                <p className="text-gray-700 mb-3">
                  Ces lettres se prononcent de manière plus profonde et
                  emphatique :
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-5xl font-script mb-2">ص</p>
                    <p className="font-bold text-orange-700">Sad</p>
                    <p className="text-sm text-gray-600">S emphatique</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-5xl font-script mb-2">ض</p>
                    <p className="font-bold text-orange-700">Dad</p>
                    <p className="text-sm text-gray-600">D emphatique</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-5xl font-script mb-2">ط</p>
                    <p className="font-bold text-orange-700">Ta</p>
                    <p className="text-sm text-gray-600">T emphatique</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-5xl font-script mb-2">ظ</p>
                    <p className="font-bold text-orange-700">Za</p>
                    <p className="text-sm text-gray-600">Z emphatique</p>
                  </div>
                </div>
              </div>

              {/* Groupe 3 : Lettres qui ne se connectent pas */}
              <div className="bg-red-50 p-5 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  ⚠️ Groupe 3 : Les 6 lettres qui ne se connectent PAS à gauche
                </h3>
                <p className="text-gray-700 mb-3">
                  Ces lettres sont <strong>isolées</strong> : elles ne se
                  relient JAMAIS à la lettre suivante !
                </p>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {[
                    { letter: "ا", name: "Alif" },
                    { letter: "د", name: "Dal" },
                    { letter: "ذ", name: "Thal" },
                    { letter: "ر", name: "Ra" },
                    { letter: "ز", name: "Zay" },
                    { letter: "و", name: "Waw" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-lg text-center"
                    >
                      <p className="text-4xl font-script mb-2">{item.letter}</p>
                      <p className="text-sm font-bold text-red-700">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">
                    💡 Exemple visuel :
                  </p>
                  <p className="text-3xl font-script text-center mb-2">
                    وَرْدَة
                  </p>
                  <p className="text-center text-gray-600">(warda - fleur)</p>
                  <p className="text-sm text-gray-500 text-center">
                    Le و ne se connecte pas au ر, et le ر ne se connecte pas au
                    د
                  </p>
                </div>
              </div>

              {/* Groupe 4 : Autres lettres importantes */}
              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  🔷 Groupe 4 : Autres lettres importantes
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { letter: "ف", name: "Fa", note: "1 point dessus" },
                    { letter: "ق", name: "Qaf", note: "2 points dessus" },
                    { letter: "ك", name: "Kaf", note: "Forme unique" },
                    { letter: "ل", name: "Lam", note: "Monte haut" },
                    { letter: "م", name: "Mim", note: "Ronde fermée" },
                    { letter: "ن", name: "Nun", note: "Comme un bol" },
                    { letter: "ه", name: "Ha", note: "Change beaucoup" },
                    { letter: "ي", name: "Ya", note: "2 points dessous" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-lg text-center"
                    >
                      <p className="text-4xl font-script mb-2">{item.letter}</p>
                      <p className="text-sm font-bold text-blue-700">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quiz de révision */}
            <Card icon="🎯" title="Quiz de révision - Test tes connaissances !">
              {quizCompleted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl"
                >
                  <p className="text-4xl mb-4">🎉</p>
                  <p className="text-2xl font-bold text-green-700 mb-3">
                    Bravo ! Quiz terminé !
                  </p>
                  <p className="text-3xl font-bold text-teal-700 mb-2">
                    Score : {score}/{revisionQuiz.length}
                  </p>
                  <p className="text-lg text-gray-700">
                    {score === revisionQuiz.length
                      ? "Parfait ! Tu maîtrises toutes les lettres ! 🌟"
                      : score >= 7
                        ? "Excellent travail ! Continue comme ça ! 💪"
                        : "Bon début ! Révise encore un peu et tu y arriveras ! 📚"}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={currentQuiz.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4 flex justify-between items-center">
                    <p className="text-lg font-semibold text-teal-700">
                      Question {currentQuizIndex + 1}/{revisionQuiz.length}
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                      Score : {score}
                    </p>
                  </div>

                  <p className="text-xl font-medium mb-5 text-gray-700">
                    {currentQuiz.question}
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    {shuffledQuizChoices.map((choice, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuizAnswer(choice)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className={`
                          text-4xl font-script p-6 rounded-xl shadow-lg transition-all duration-300
                          ${
                            quizAttemptStatus === "correct" &&
                            choice === currentQuiz.answer
                              ? "bg-green-100 border-4 border-green-500"
                              : quizAttemptStatus === "incorrect" &&
                                  choice === currentQuiz.answer
                                ? "bg-red-100 border-4 border-red-500"
                                : "bg-teal-100 hover:bg-teal-200 border border-teal-300"
                          }
                        `}
                      >
                        {choice}
                      </motion.button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {quizAttemptStatus === "correct" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 text-center text-green-600 font-bold text-lg"
                      >
                        ✅ Excellent ! Question suivante !
                      </motion.p>
                    )}
                    {quizAttemptStatus === "incorrect" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 text-center text-red-600 font-bold text-lg"
                      >
                        ❌ Réessaie ! Indice : {currentQuiz.hint}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </Card>

            {/* Les positions des lettres */}
            <Card
              icon="🔗"
              title="Les positions des lettres (début, milieu, fin)"
            >
              <p className="text-gray-700 mb-4">
                En arabe, chaque lettre change de forme selon sa position dans
                le mot :<strong> au début</strong>, <strong>au milieu</strong>,{" "}
                <strong>à la fin</strong>, ou <strong>isolée</strong>.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  📍 Les 4 positions d'une lettre
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-blue-600 mb-2">Isolée</p>
                    <p className="text-sm text-gray-600">
                      Seule, sans connexion
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-blue-600 mb-2">Début</p>
                    <p className="text-sm text-gray-600">Au début du mot</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-blue-600 mb-2">Milieu</p>
                    <p className="text-sm text-gray-600">Au milieu du mot</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-blue-600 mb-2">Fin</p>
                    <p className="text-sm text-gray-600">À la fin du mot</p>
                  </div>
                </div>
              </div>

              {/* Exemples de lettres avec positions */}
              <div className="space-y-4">
                {/* Lettre Ba */}
                <div className="bg-purple-50 p-5 rounded-xl">
                  <h4 className="text-lg font-bold text-purple-700 mb-3">
                    Exemple 1 : ب (Ba)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <p className="text-4xl font-script">ب</p>
                      <p className="text-sm text-gray-600 mt-1">Isolée</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">بـ</p>
                      <p className="text-sm text-gray-600 mt-1">Début</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">ـبـ</p>
                      <p className="text-sm text-gray-600 mt-1">Milieu</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">ـب</p>
                      <p className="text-sm text-gray-600 mt-1">Fin</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Mot exemple :{" "}
                    <span className="font-script text-xl">كتاب</span> (kitāb -
                    livre) - le ب est à la fin
                  </p>
                </div>

                {/* Lettre Ta */}
                <div className="bg-purple-50 p-5 rounded-xl">
                  <h4 className="text-lg font-bold text-purple-700 mb-3">
                    Exemple 2 : ت (Ta)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <p className="text-4xl font-script">ت</p>
                      <p className="text-sm text-gray-600 mt-1">Isolée</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">تـ</p>
                      <p className="text-sm text-gray-600 mt-1">Début</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">ـتـ</p>
                      <p className="text-sm text-gray-600 mt-1">Milieu</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">ـت</p>
                      <p className="text-sm text-gray-600 mt-1">Fin</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Mot exemple :{" "}
                    <span className="font-script text-xl">بيت</span> (bayt -
                    maison) - le ت est à la fin
                  </p>
                </div>

                {/* Lettre Mim */}
                <div className="bg-purple-50 p-5 rounded-xl">
                  <h4 className="text-lg font-bold text-purple-700 mb-3">
                    Exemple 3 : م (Mim)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <p className="text-4xl font-script">م</p>
                      <p className="text-sm text-gray-600 mt-1">Isolée</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">مـ</p>
                      <p className="text-sm text-gray-600 mt-1">Début</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">ـمـ</p>
                      <p className="text-sm text-gray-600 mt-1">Milieu</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">ـم</p>
                      <p className="text-sm text-gray-600 mt-1">Fin</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Mot exemple :{" "}
                    <span className="font-script text-xl">قلم</span> (qalam -
                    stylo) - le م est à la fin
                  </p>
                </div>

                {/* Lettre Nun */}
                <div className="bg-purple-50 p-5 rounded-xl">
                  <h4 className="text-lg font-bold text-purple-700 mb-3">
                    Exemple 4 : ن (Nun)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <p className="text-4xl font-script">ن</p>
                      <p className="text-sm text-gray-600 mt-1">Isolée</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">نـ</p>
                      <p className="text-sm text-gray-600 mt-1">Début</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">ـنـ</p>
                      <p className="text-sm text-gray-600 mt-1">Milieu</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-script">ـن</p>
                      <p className="text-sm text-gray-600 mt-1">Fin</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Mot exemple :{" "}
                    <span className="font-script text-xl">نور</span> (nūr -
                    lumière) - le ن est au début
                  </p>
                </div>
              </div>

              {/* Lettres qui ne se connectent pas */}
              {/* Lettres qui ne se connectent pas */}

              {/* Cas spéciaux */}
              <div className="bg-pink-50 p-6 rounded-xl mt-6">
                <h3 className="text-xl font-bold text-pink-700 mb-4">
                  ✨ Cas spéciaux : Lettres qui changent beaucoup !
                </h3>

                {/* Ta Marbuta */}
                <div className="bg-white p-5 rounded-xl mb-4">
                  <h4 className="text-lg font-bold text-pink-600 mb-3">
                    1️⃣ Le تاء مربوطة (Ta Marbuta) - ة
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Cette lettre spéciale n'existe QUE à la{" "}
                    <strong>fin des mots</strong>. Elle ressemble à un ه avec
                    deux points au-dessus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">ة</p>
                      <p className="font-bold text-pink-600">
                        Forme isolée/fin
                      </p>
                      <p className="text-sm text-gray-600">Toujours à la fin</p>
                    </div>
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">ـة</p>
                      <p className="font-bold text-pink-600">Connectée</p>
                      <p className="text-sm text-gray-600">Après une lettre</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-gray-700 mb-2">
                      Exemples de mots :
                    </p>
                    <div className="space-y-2">
                      <p className="text-2xl font-script">
                        مَدْرَسَة{" "}
                        <span className="text-base text-gray-600">
                          (madrasa - école)
                        </span>
                      </p>
                      <p className="text-2xl font-script">
                        طَاوِلَة{" "}
                        <span className="text-base text-gray-600">
                          (ṭāwila - table)
                        </span>
                      </p>
                      <p className="text-2xl font-script">
                        وَرْدَة{" "}
                        <span className="text-base text-gray-600">
                          (warda - fleur)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Ta ouvert vs fermé */}
                <div className="bg-white p-5 rounded-xl mb-4">
                  <h4 className="text-lg font-bold text-pink-600 mb-3">
                    3️⃣ Le ت (Ta ouvert) vs ة (Ta fermé)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Ne confonds pas ces deux lettres qui se ressemblent !
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-4xl font-script text-center mb-2">ت</p>
                      <p className="font-bold text-blue-700 text-center mb-2">
                        Ta ouvert (normale)
                      </p>
                      <p className="text-sm text-gray-700 mb-2">
                        • A toutes les positions (début, milieu, fin)
                      </p>
                      <p className="text-sm text-gray-700 mb-2">
                        • Deux points AU-DESSUS
                      </p>
                      <p className="text-xl font-script mt-2">
                        Exemple : بَيْت (maison)
                      </p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="text-4xl font-script text-center mb-2">ة</p>
                      <p className="font-bold text-pink-700 text-center mb-2">
                        Ta Marbuta (fermé)
                      </p>
                      <p className="text-sm text-gray-700 mb-2">
                        • est purement la marque du féminin
                      </p>
                      <p className="text-sm text-gray-700 mb-2">
                        • UNIQUEMENT à la fin
                      </p>

                      <p className="text-xl font-script mt-2">
                        Exemple : مَدْرَسَة (école)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ha */}
                <div className="bg-white p-5 rounded-xl mb-4">
                  <h4 className="text-lg font-bold text-pink-600 mb-3">
                    2️⃣ Le ه (Ha) - Changements importants !
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Le ه change énormément de forme selon sa position. C'est
                    l'une des lettres les plus variables !
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">ه</p>
                      <p className="font-bold text-pink-600">Isolée</p>
                      <p className="text-sm text-gray-600">Forme arrondie</p>
                    </div>
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">هـ</p>
                      <p className="font-bold text-pink-600">Début</p>
                      <p className="text-sm text-gray-600">Forme ouverte</p>
                    </div>
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">ـهـ</p>
                      <p className="font-bold text-pink-600">Milieu</p>
                      <p className="text-sm text-gray-600">
                        Très petite boucle
                      </p>
                    </div>
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">ـه</p>
                      <p className="font-bold text-pink-600">Fin</p>
                      <p className="text-sm text-gray-600">Descend en bas</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-gray-700 mb-2">
                      Exemples de mots :
                    </p>
                    <div className="space-y-2">
                      <p className="text-2xl font-script">
                        هَذَا{" "}
                        <span className="text-base text-gray-600">
                          (hādhā - ceci) - ه au début
                        </span>
                      </p>
                      <p className="text-2xl font-script">
                        فَهِمَ{" "}
                        <span className="text-base text-gray-600">
                          (fahima - comprendre) - ه au milieu
                        </span>
                      </p>
                      <p className="text-2xl font-script">
                        وَجْه{" "}
                        <span className="text-base text-gray-600">
                          (wajh - visage) - ه à la fin
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercice pratique */}
              <div className="bg-green-50 p-6 rounded-xl mt-6">
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  ✏️ Exercice : Observe les positions
                </h3>
                <p className="text-gray-700 mb-4">
                  Regarde ces mots et essaie d'identifier la position de chaque
                  lettre :
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-script text-center mb-2">
                      سَمَكٌ
                    </p>
                    <p className="text-center text-gray-600">
                      (samak - poisson)
                    </p>
                    {/* <p className="text-sm text-gray-500 mt-2">
                      س (début) - م (milieu) - ك (fin)
                    </p> */}
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-script text-center mb-2">
                      مَدْرَسَة
                    </p>
                    <p className="text-center text-gray-600">
                      (madrasa - école)
                    </p>
                    {/* <p className="text-sm text-gray-500 mt-2">
                      م (début) - د (fin, ne se connecte pas) - ر (fin, ne se connecte pas) - س (milieu) - ة (fin)
                    </p> */}
                  </div>
                </div>
              </div>
            </Card>

            {/* Révision voyelles - Résumé */}
            <Card icon="🔤" title="Les voyelles en arabe (Harakat)">
              <p className="text-gray-700 mb-4">
                En arabe, les voyelles ne sont pas des lettres, mais des petits
                signes qui s’ajoutent au-dessus ou en dessous de la lettre.
                Elles permettent de prononcer correctement les mots.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    symbol: "َ",
                    name: "Fatha",
                    sound: "a",
                    example: "بَ (ba)",
                  },
                  {
                    symbol: "ِ",
                    name: "Kasra",
                    sound: "i",
                    example: "بِ (bi)",
                  },
                  {
                    symbol: "ُ",
                    name: "Damma",
                    sound: "u",
                    example: "بُ (bo)",
                  },
                  { symbol: "ْ", name: "Sukun", sound: "–", example: "بْ (b)" },
                ].map((vowel, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-yellow-50 p-4 rounded-lg shadow-sm text-center"
                  >
                    <p className="text-4xl font-script text-yellow-700 mb-2">
                      {vowel.symbol}
                    </p>
                    <p className="text-lg font-semibold">{vowel.name}</p>
                    <p className="text-gray-600 mt-1">
                      Exemple :{" "}
                      <span className="font-script">{vowel.example}</span>
                    </p>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 mt-4 italic">
                Ces signes sont essentiels pour lire correctement. On les
                utilisera avec les lettres pour former des mots !
              </p>

              <Card
                className="mb-6 "
                icon="✏️"
                title="Petit exercice : les voyelles"
              >
                <p className="text-gray-700 mb-4">
                  Regarde la lettre avec son signe et essaie de dire le son à
                  haute voix. Puis vérifie avec le bouton 🔊.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { letter: "ب", vowel: "َ", sound: "ba" },
                    { letter: "ب", vowel: "ِ", sound: "bi" },
                    { letter: "ب", vowel: "ُ", sound: "bu" },
                    { letter: "ت", vowel: "َ", sound: "ta" },
                    { letter: "ت", vowel: "ِ", sound: "ti" },
                    { letter: "ت", vowel: "ُ", sound: "tu" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-yellow-50 p-4 rounded-lg shadow-sm text-center"
                    >
                      <p className="text-4xl font-script text-yellow-700 mb-2">
                        {item.letter}
                        {item.vowel}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-700 mt-4 italic">
                  Essaie de répéter chaque son à voix haute. Plus tu pratiques,
                  plus ce sera facile ! 🌸
                </p>
              </Card>

              {/* La Chadda - NOUVEAU */}
              <div className="bg-pink-50 p-6 rounded-xl my-6">
                <h3 className="text-xl font-bold text-pink-700 mb-4">
                  💪 La Chadda (Shadda) - ّ
                </h3>
                <p className="text-gray-700 mb-4">
                  La <strong>Chadda (ّ)</strong> est un petit signe qui
                  ressemble à un "w" ou à un "3" à l'envers. Elle indique qu'on
                  doit <strong>doubler la lettre</strong> (prononcer la lettre
                  deux fois).
                </p>

                <div className="bg-white p-5 rounded-lg mb-4">
                  <h4 className="font-bold text-pink-700 mb-3">
                    📝 Comment ça marche ?
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      • La Chadda se place{" "}
                      <strong>au-dessus de la lettre</strong>
                    </p>
                    <p>
                      • On peut ajouter une voyelle (Fatha, Kasra, Damma){" "}
                      <strong>au-dessus ou en dessous</strong> de la Chadda
                    </p>
                    <p>
                      • Effet : La lettre est prononcée{" "}
                      <strong>deux fois</strong> avec emphase
                    </p>
                  </div>
                </div>

                {/* Exemples de Chadda */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      letter: "بّ",
                      sound: "bb",
                      with: "بَبّ",
                      example: "رَبّ (rabb - Seigneur)",
                      explanation: "Le ب est doublé : rab-b",
                    },
                    {
                      letter: "لّ",
                      sound: "ll",
                      with: "لّ",
                      example: "اللّٰه (Allāh - Dieu)",
                      explanation: "Le ل est doublé : Al-lāh",
                    },
                    {
                      letter: "مّ",
                      sound: "mm",
                      with: "مَّ",
                      example: "أُمّ (umm - mère)",
                      explanation: "Le م est doublé : um-m",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-lg shadow-sm text-center"
                    >
                      <p className="text-5xl font-script text-pink-700 mb-2">
                        {item.letter}
                      </p>
                      <p className="text-lg font-semibold text-gray-800">
                        Son : {item.sound}
                      </p>
                      <p className="text-sm text-gray-700 mt-2 font-script font-bold">
                        {item.example}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 italic">
                        {item.explanation}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Plus d'exemples avec Chadda */}
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-pink-700 mb-3">
                    🌟 Plus d'exemples avec Chadda
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      {
                        word: "مُعَلِّم",
                        trans: "mu'allim",
                        meaning: "professeur",
                        note: "Le ل est doublé",
                      },
                      {
                        word: "مُحَمَّد",
                        trans: "Muhammad",
                        meaning: "Mohammed",
                        note: "Le م est doublé",
                      },
                      {
                        word: "سَيَّارَة",
                        trans: "sayyāra",
                        meaning: "voiture",
                        note: "Le ي est doublé",
                      },
                      {
                        word: "جَنَّة",
                        trans: "janna",
                        meaning: "paradis",
                        note: "Le ن est doublé",
                      },
                    ].map((ex, i) => (
                      <div key={i} className="bg-pink-50 p-3 rounded-lg">
                        <p className="text-2xl font-script text-center mb-1">
                          {ex.word}
                        </p>
                        <p className="text-sm text-gray-600 text-center">
                          {ex.trans} - {ex.meaning}
                        </p>
                        <p className="text-xs text-gray-500 text-center italic mt-1">
                          ({ex.note})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* NOUVEAU : Tanwin - Les voyelles de fin */}
              <div className="bg-orange-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-orange-700 mb-4">
                  🔔 Le Tanwin - Les voyelles doubles de fin de mot
                </h3>
                <p className="text-gray-700 mb-4">
                  Le <strong>Tanwin</strong> est une voyelle{" "}
                  <strong>doublée</strong> qui se met uniquement à la{" "}
                  <strong>fin des mots</strong>. Il produit le son "n" à la fin
                  : -an, -in, -un.
                </p>

                <p className="text-orange-700 italic mt-4 text-center">
                  💡 <strong>Important :</strong> Le Tanwin est très utilisé en
                  arabe classique et dans le Coran. Il indique souvent qu'un mot
                  est indéfini (un/une).
                </p>

                <div className="bg-white p-5 rounded-lg mb-4">
                  <h4 className="font-bold text-orange-700 mb-3">
                    📝 Les 3 types de Tanwin :
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        symbol: "ً",
                        name: "Tanwin Fatha",
                        sound: "an",
                        example: "كَلْبً",
                        word: "كَلْبًا (kalban - un chien)",
                        note: "Double Fatha (deux traits)",
                      },
                      {
                        symbol: "ٍ",
                        name: "Tanwin Kasra",
                        sound: "in",
                        example: "كَلْبٍ",
                        word: "كَلْبٍ (kalbin - d'un chien)",
                        note: "Double Kasra (deux traits dessous)",
                      },
                      {
                        symbol: "ٌ",
                        name: "Tanwin Damma",
                        sound: "un",
                        example: "كَلْبٌ",
                        word: "كَلْبٌ (kalbun - un chien)",
                        note: "Double Damma (comme un petit 9)",
                      },
                    ].map((tanwin, i) => (
                      <div
                        key={i}
                        className="bg-orange-50 p-4 rounded-lg shadow-sm text-center"
                      >
                        <p className="text-5xl font-script text-orange-700 mb-2">
                          {tanwin.example}
                        </p>
                        <p className="text-lg font-semibold text-gray-800">
                          {tanwin.name}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Son : {tanwin.sound}
                        </p>
                        <p className="text-xs text-gray-700 mt-2 font-script font-bold">
                          {tanwin.word}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 italic">
                          ({tanwin.note})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plus d'exemples avec Tanwin */}
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-orange-700 mb-3">
                    🌟 Plus d'exemples avec Tanwin
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      {
                        word: "بَيْتًا",
                        trans: "baytan",
                        meaning: "une maison",
                      },
                      {
                        word: "بَيْتٍ",
                        trans: "baytin",
                        meaning: "d'une maison",
                      },
                      {
                        word: "بَيْتٌ",
                        trans: "baytun",
                        meaning: "une maison",
                      },
                      {
                        word: "كِتَابًا",
                        trans: "kitāban",
                        meaning: "un livre",
                      },
                      {
                        word: "قَلَمٍ",
                        trans: "qalamin",
                        meaning: "d'un stylo",
                      },
                      {
                        word: "وَلَدٌ",
                        trans: "waladun",
                        meaning: "un garçon",
                      },
                    ].map((ex, i) => (
                      <div key={i} className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-2xl font-script text-center mb-1">
                          {ex.word}
                        </p>
                        <p className="text-sm text-gray-600 text-center">
                          {ex.trans}
                        </p>
                        <p className="text-xs text-gray-500 text-center italic">
                          ({ex.meaning})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Voyelles longues */}
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  📏 Les voyelles longues (Madd)
                </h3>
                <p className="text-gray-700 mb-4">
                  Les voyelles longues <strong>allongent le son</strong>. Elles
                  sont formées par une voyelle courte + une lettre spéciale :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      vowel: "َ",
                      letter: "ا",
                      sound: "ā (aa)",
                      example: "بَا",
                      exampleFull: "بَاب (bāb - porte)",
                      description: "Fatha + Alif",
                    },
                    {
                      vowel: "ُ",
                      letter: "و",
                      sound: "ū (ouu)",
                      example: "نُو",
                      exampleFull: "نُور (nūr - lumière)",
                      description: "Damma + Waw",
                    },
                    {
                      vowel: "ِ",
                      letter: "ي",
                      sound: "ī (ii)",
                      example: "كَبِي",
                      exampleFull: "كَبِير (kabīr - grand)",
                      description: "Kasra + Ya",
                    },
                  ].map((vowel, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-lg shadow-sm text-center"
                    >
                      <p className="text-4xl font-script text-blue-700 mb-2">
                        {vowel.example}ر
                      </p>
                      <p className="text-lg font-semibold text-gray-800">
                        {vowel.sound}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {vowel.description}
                      </p>
                      <p className="text-sm text-gray-700 mt-2 font-script font-bold">
                        {vowel.exampleFull}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Comparaison courte vs longue */}
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-3">
                    🔄 Compare : Courte vs Longue
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-script mb-1">بَ ➜ بَا</p>
                      <p className="text-sm text-gray-600">
                        ba ➜ bā (plus long)
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-script mb-1">بُ ➜ بُو</p>
                      <p className="text-sm text-gray-600">
                        bu ➜ bū (plus long)
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-script mb-1">بِ ➜ بِي</p>
                      <p className="text-sm text-gray-600">
                        bi ➜ bī (plus long)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card icon="🎵" title="Révision des voyelles - Résumé complet">
              <div className="space-y-6">
                {/* Voyelles courtes */}
                <div className="bg-yellow-50 p-5 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-700 mb-3">
                    ⭐ Voyelles courtes (Harakat)
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { symbol: "َ", name: "Fatha", sound: "a", ex: "بَ" },
                      { symbol: "ِ", name: "Kasra", sound: "i", ex: "بِ" },
                      { symbol: "ُ", name: "Damma", sound: "u", ex: "بُ" },
                      { symbol: "ْ", name: "Sukun", sound: "–", ex: "بْ" },
                    ].map((v, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg text-center"
                      >
                        <p className="text-3xl font-script">{v.ex}</p>
                        <p className="text-sm font-bold">{v.name}</p>
                        <p className="text-xs text-gray-600">{v.sound}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Voyelles longues */}
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">
                    📏 Voyelles longues (Madd)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { combo: "َ + ا", sound: "ā", ex: "بَا" },
                      { combo: "ُ + و", sound: "ū", ex: "بُو" },
                      { combo: "ِ + ي", sound: "ī", ex: "بِي" },
                    ].map((v, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg text-center"
                      >
                        <p className="text-3xl font-script">{v.ex}</p>
                        <p className="text-sm font-bold">{v.combo}</p>
                        <p className="text-xs text-gray-600">{v.sound}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chadda */}
                <div className="bg-pink-50 p-5 rounded-xl">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">
                    💪 Chadda (ّ) - Double la lettre
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { word: "رَبّ", meaning: "Seigneur" },
                      { word: "أُمّ", meaning: "mère" },
                      { word: "مُعَلِّم", meaning: "professeur" },
                    ].map((w, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg text-center"
                      >
                        <p className="text-2xl font-script">{w.word}</p>
                        <p className="text-sm text-gray-600">{w.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tanwin */}
                <div className="bg-orange-50 p-5 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">
                    🔔 Tanwin - Voyelles doubles de fin
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { symbol: "ً", sound: "an", ex: "كَلْبًا" },
                      { symbol: "ٍ", sound: "in", ex: "كَلْبٍ" },
                      { symbol: "ٌ", sound: "un", ex: "كَلْبٌ" },
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg text-center"
                      >
                        <p className="text-2xl font-script">{t.ex}</p>
                        <p className="text-sm font-bold">
                          {t.symbol} = {t.sound}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Révision vocabulaire */}
            <Card icon="📚" title="Vocabulaire essentiel - Révision">
              <p className="text-gray-700 mb-4">
                Voici les mots importants qu'on a appris. Essaie de les lire !
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vocabularyWords.map((word, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-teal-50 p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-3xl font-script text-teal-700 text-center mb-2">
                      {word.arabic}
                    </p>
                    <p className="text-center text-gray-600">{word.trans}</p>
                    <p className="text-center text-sm text-gray-500 italic">
                      ({word.meaning})
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card icon="📖" title="Séance du jour – Lecture et écriture">
              <div className="space-y-6">
                {/* 1. Lettres avec harakat */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700 mb-2">
                    1️⃣ Lecture des lettres avec les voyelles (الحركات)
                  </p>
                  <p className="text-2xl font-script text-green-700">
                    بَ&nbsp; بُ&nbsp; بِ <br />
                    تَ&nbsp; تُ&nbsp; تِ <br />
                    مَ&nbsp; مُ&nbsp; مِ <br />
                    نَ&nbsp; نُ&nbsp; نِ
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Lis chaque son lentement puis rapidement.
                  </p>
                </div>

                {/* 2. Lecture de mots */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700 mb-3">
                    2️⃣ Lecture de mots simples
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-2xl font-script text-green-700">
                        بَاب
                      </p>
                      <p className="text-gray-700">bab — porte</p>
                    </div>

                    <div>
                      <p className="text-2xl font-script text-green-700">
                        بِنْت
                      </p>
                      <p className="text-gray-700">bint — fille</p>
                    </div>

                    <div>
                      <p className="text-2xl font-script text-green-700">
                        أُمّ
                      </p>
                      <p className="text-gray-700">umm — maman</p>
                    </div>

                    <div>
                      <p className="text-2xl font-script text-green-700">أَب</p>
                      <p className="text-gray-700">ab — papa</p>
                    </div>

                    <div>
                      <p className="text-2xl font-script text-green-700">
                        قَلَم
                      </p>
                      <p className="text-gray-700">qalam — stylo</p>
                    </div>

                    <div>
                      <p className="text-2xl font-script text-green-700">
                        كِتَاب
                      </p>
                      <p className="text-gray-700">kitāb — livre</p>
                    </div>
                  </div>
                </div>

                {/* 3. Lecture guidée */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700 mb-2">
                    🔁 Lis encore
                  </p>
                  <p className="text-2xl font-script text-blue-700">
                    بَاب — قَلَم — أُمّ — بِنْت — كِتَاب
                  </p>
                </div>

                {/* 4. Écriture */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700 mb-2">
                    ✏️ Écriture
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Copie : بَاب</li>
                    <li>Copie : قَلَم</li>
                    <li>Copie : أُمّ</li>
                    <li>Écris sans modèle : بِنْت</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Phrases essentielles */}
            <Card icon="💬" title="Phrases essentielles - Révision">
              <div className="space-y-4">
                {[
                  {
                    ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
                    fr: "Bismillāh ar-Raḥmān ar-Raḥīm",
                    tr: "Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux",
                    exp: "C’est ce qu’on appelle « la basmala ». Les musulmans la disent avant de commencer à manger, à écrire, ou à faire toute bonne action. Elle signifie qu’on commence au nom de Dieu pour recevoir Sa bénédiction.",
                  },
                  {
                    ar: "السَّلامُ عَلَيْكُمْ",
                    fr: "As-salamu 'alaykum",
                    tr: "Paix sur toi (Bonjour)",
                  },
                  {
                    ar: "وَعَلَيْكُمُ السَّلام",
                    fr: "Wa 'alaykumu s-salām",
                    tr: "Et sur toi la paix (Réponse)",
                  },
                  {
                    ar: "أَنَا اسْمِي تَاكُو",
                    fr: "Ana ismi ",
                    tr: "Je m'appelle ",
                  },
                  {
                    ar: "كَيْفَ حَالُكَ؟",
                    fr: "Kayfa hāluk?",
                    tr: "Comment vas-tu ?",
                  },
                  {
                    ar: "أَنَا بِخَيْر، شُكْرًا",
                    fr: "Ana bi-khayr, shukran",
                    tr: "Je vais bien, merci",
                  },
                ].map((phrase, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.01 }}
                    className="bg-green-50 p-4 rounded-lg"
                  >
                    <p className="text-2xl font-script text-green-700 mb-2">
                      {phrase.ar}
                    </p>
                    <p className="text-gray-700">{phrase.fr}</p>
                    <p className="text-sm text-gray-500 italic">{phrase.tr}</p>
                    {phrase.exp && (
                      <p className="text-sm text-gray-600 mt-2">{phrase.exp}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card
              className="mb-6"
              icon="🗣️"
              title="Les pronoms personnels (الضمائر الشخصية)"
            >
              <p className="text-gray-700 mb-4">
                Voici les pronoms personnels en arabe avec leur équivalent en
                français, la prononciation, et un petit exemple pour chacun 🌸
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    ar: "أنا",
                    fr: "Je",
                    pr: "’ana",
                    ex: "أنا طالبٌ — Je suis étudiant",
                  },
                  {
                    ar: "أنتَ",
                    fr: "Tu (masculin)",
                    pr: "’anta",
                    ex: "أنتَ ذكيٌّ — Tu es intelligent",
                  },
                  {
                    ar: "أنتِ",
                    fr: "Tu (féminin)",
                    pr: "’anti",
                    ex: "أنتِ ذكيةٌ — Tu es intelligente",
                  },
                  { ar: "هو", fr: "Il", pr: "huwa", ex: "هو يدرس — Il étudie" },
                  {
                    ar: "هي",
                    fr: "Elle",
                    pr: "hiya",
                    ex: "هي تعمل — Elle travaille",
                  },
                  {
                    ar: "نحن",
                    fr: "Nous",
                    pr: "naḥnu",
                    ex: "نحن نلعب — Nous jouons",
                  },
                  {
                    ar: "أنتم",
                    fr: "Vous (masc.)",
                    pr: "’antum",
                    ex: "أنتم طلاب — Vous êtes des étudiants",
                  },
                  {
                    ar: "أنتن",
                    fr: "Vous (fém.)",
                    pr: "’antunna",
                    ex: "أنتن طالبات — Vous êtes des étudiantes",
                  },
                  {
                    ar: "هم",
                    fr: "Ils",
                    pr: "hum",
                    ex: "هم يكتبون — Ils écrivent",
                  },
                  {
                    ar: "هن",
                    fr: "Elles",
                    pr: "hunna",
                    ex: "هن يدرسن — Elles étudient",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-50 p-4 rounded-lg shadow-sm text-center"
                  >
                    <p className="text-3xl font-script text-green-700 mb-1">
                      {item.ar}
                    </p>
                    <p className="text-gray-700 font-semibold">{item.fr}</p>
                    <p className="text-gray-500 text-sm italic">{item.pr}</p>
                    <p className="text-gray-600 italic mt-2">{item.ex}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 mt-4 italic">
                Répète chaque pronom à voix haute avec sa prononciation
                (translittération) pour bien t’entraîner 🗣️
              </p>
            </Card>

            {/* --- DÉBUT DE LA SECTION RÉVISION --- */}
            <div className="space-y-12 max-w-4xl mx-auto pb-20">
              {/* TITRE PRINCIPAL */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <h2 className="text-4xl font-extrabold text-indigo-800 font-serif mb-2">
                  🌟 La Grande Révision 🌟
                </h2>
                <p className="text-gray-600">
                  On revoit tout ensemble avant de continuer !
                </p>
              </motion.div>

              {/* 1. LES SALUTATIONS (BASES) */}
              <Card icon="🤝" title="Les Formules Magiques (Salutations)">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {basics.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center text-center"
                    >
                      <span className="text-2xl font-script text-green-800 mb-1">
                        {item.ar}
                      </span>
                      <span className="text-sm font-bold text-gray-700">
                        {item.tr}
                      </span>
                      <span className="text-xs text-gray-500 italic">
                        ({item.fr})
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* 2. L'ALPHABET (RAPIDE) */}
              <Card icon="🔤" title="Flash-Check : L'Alphabet">
                <p className="mb-4 text-gray-600">
                  Peux-tu reconnaître toutes ces lettres ?
                </p>
                <div className="grid grid-cols-7 gap-2">
                  {allLetters.map((l, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, backgroundColor: "#e0e7ff" }}
                      className="bg-indigo-50 p-2 rounded-lg text-center cursor-pointer transition-colors"
                      title={l.name} // Affiche le nom au survol souris
                    >
                      <span className="text-xl font-script text-indigo-700">
                        {l.arabic}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* 3. LES VOYELLES (TABLEAU RÉCAP) */}
              <Card icon="🎵" title="Le Code Secret : Les Voyelles">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-purple-100 text-purple-800">
                      <tr>
                        <th className="p-3 text-left">Type</th>
                        <th className="p-3">Signe</th>
                        <th className="p-3">Son</th>
                        <th className="p-3">Exemple</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-3 font-bold text-gray-700">Courtes</td>
                        <td className="p-3 font-script text-2xl text-center">
                          َ ِ ُ
                        </td>
                        <td className="p-3 text-center">a - i - u</td>
                        <td className="p-3 font-script text-center">
                          بَ بِ بُ
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-gray-700">Longues</td>
                        <td className="p-3 font-script text-2xl text-center">
                          ا ي و
                        </td>
                        <td className="p-3 text-center">aa - ii - uu</td>
                        <td className="p-3 font-script text-center">
                          بَا بِي بُو
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-gray-700">Tanwin</td>
                        <td className="p-3 font-script text-2xl text-center">
                          ً ٍ ٌ
                        </td>
                        <td className="p-3 text-center">an - in - un</td>
                        <td className="p-3 font-script text-center">
                          بًا بٍ بٌ
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-gray-700">Chadda</td>
                        <td className="p-3 font-script text-2xl text-center">
                          ّ
                        </td>
                        <td className="p-3 text-center">Appui (double)</td>
                        <td className="p-3 font-script text-center">رَبّ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* 4. LES PRONOMS */}
              <Card icon="☝️" title="Moi, Toi, Lui... (Les Pronoms)">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {pronouns.map((p, i) => (
                    <div
                      key={i}
                      className="bg-orange-50 p-3 rounded-lg text-center border-l-4 border-orange-300"
                    >
                      <p className="text-3xl font-script text-orange-800 mb-1">
                        {p.ar}
                      </p>
                      <p className="font-bold text-gray-700">{p.fr}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {p.sound}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 5. NIVEAU BONUS : LES CHIFFRES */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-3xl shadow-2xl">
                  <div className="bg-white p-6 md:p-8 rounded-[22px]">
                    <div className="flex items-center justify-center mb-6">
                      <span className="text-5xl mr-4">🏆</span>
                      <h2 className="text-3xl font-extrabold text-orange-600 font-serif">
                        Niveau Bonus : Les Chiffres !
                      </h2>
                    </div>

                    <p className="text-center text-gray-600 mb-8">
                      Si tu as tout fini, apprends à compter de 0 à 10 !
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {numbers.map((n, i) => (
                        <motion.div
                          key={i}
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                          }}
                          className={`
                flex flex-col items-center p-4 rounded-2xl border-2
                ${i % 2 === 0 ? "bg-yellow-50 border-yellow-200" : "bg-orange-50 border-orange-200"}
              `}
                        >
                          {/* Le chiffre Arabe */}
                          {/* Dans la map des numbers */}
                          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-inner mb-2">
                            <span className="text-4xl font-script font-bold text-gray-800">
                              {n.ar}
                            </span>
                          </div>

                          {/* Ajout du mot en arabe ici */}
                          <span className="text-xl font-script text-indigo-600 mb-1">
                            {n.word}
                          </span>

                          <span className="text-2xl font-bold text-orange-500 mb-1">
                            {n.val}
                          </span>
                          <span className="text-sm font-semibold text-gray-600">
                            {n.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 text-center bg-blue-50 p-4 rounded-xl">
                      <p className="font-bold text-blue-800 mb-2">
                        💡 Le savais-tu ?
                      </p>
                      <p className="text-sm text-blue-700">
                        En arabe, on lit les chiffres de gauche à droite, comme
                        en français ! Exemple : Le numéro de téléphone s'écrit
                        et se lit dans le même sens.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* --- FIN DE LA SECTION RÉVISION --- */}

            <Card
              icon="🎨"
              title="J'apprends les Couleurs - أَتَعَلَّمُ الْأَلْوَان"
            >
              <p className="text-gray-700 mb-6 text-center">
                Cliquez sur une couleur pour apprendre son nom en arabe !
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* NOIR */}
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center p-4 bg-white rounded-2xl shadow-md border-l-8 border-black"
                >
                  <div className="bg-black w-12 h-12 rounded-full mr-4"></div>
                  <div>
                    <p className="text-2xl font-script text-black">أَسْوَد</p>
                    <p className="text-sm font-bold text-gray-500">
                      ASWAD (Noir)
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      Comme la couleur du **قَلَم** (stylo)
                    </p>
                  </div>
                </motion.div>

                {/* BLANC */}
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center p-4 bg-white rounded-2xl shadow-md border-l-8 border-gray-200"
                >
                  <div className="bg-white border-2 border-gray-200 w-12 h-12 rounded-full mr-4"></div>
                  <div>
                    <p className="text-2xl font-script text-gray-400">
                      أَبْيَض
                    </p>
                    <p className="text-sm font-bold text-gray-500">
                      ABYAD (Blanc)
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      Comme la feuille de **كِتَاب** (livre)
                    </p>
                  </div>
                </motion.div>
                {/* ROUGE */}
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center p-4 bg-white rounded-2xl shadow-md border-l-8 border-red-500"
                >
                  <div className="bg-red-500 w-12 h-12 rounded-full mr-4"></div>
                  <div>
                    <p className="text-2xl font-script text-red-600">أَحْمَر</p>
                    <p className="text-sm font-bold text-gray-500">
                      AHMAR (Rouge)
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      Comme le cœur pour **أُمِّي**
                    </p>
                  </div>
                </motion.div>

                {/* BLEU */}
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center p-4 bg-white rounded-2xl shadow-md border-l-8 border-blue-500"
                >
                  <div className="bg-blue-500 w-12 h-12 rounded-full mr-4"></div>
                  <div>
                    <p className="text-2xl font-script text-blue-600">
                      أَزْرَق
                    </p>
                    <p className="text-sm font-bold text-gray-500">
                      AZRAQ (Bleu)
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      Comme l'eau pour le **سَمَك**
                    </p>
                  </div>
                </motion.div>

                {/* VERT */}
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center p-4 bg-white rounded-2xl shadow-md border-l-8 border-green-500"
                >
                  <div className="bg-green-500 w-12 h-12 rounded-full mr-4"></div>
                  <div>
                    <p className="text-2xl font-script text-green-600">
                      أَخْضَر
                    </p>
                    <p className="text-sm font-bold text-gray-500">
                      AKHDAR (Vert)
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      Comme les feuilles du **وَرْد**
                    </p>
                  </div>
                </motion.div>

                {/* JAUNE */}
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center p-4 bg-white rounded-2xl shadow-md border-l-8 border-yellow-400"
                >
                  <div className="bg-yellow-400 w-12 h-12 rounded-full mr-4"></div>
                  <div>
                    <p className="text-2xl font-script text-yellow-600">
                      أَصْفَر
                    </p>
                    <p className="text-sm font-bold text-gray-500">
                      ASFAR (Jaune)
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      Comme la lumière du **نُور**
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Petit exercice de lecture des couleurs */}
              <div className="mt-8 bg-teal-50 p-4 rounded-xl text-center">
                <h4 className="font-bold text-teal-700 mb-2">
                  💡 Défi Lecture :
                </h4>
                <p className="text-lg font-script space-x-4">
                  <span>أَحْمَر</span> — <span>أَزْرَق</span> —{" "}
                  <span>أَخْضَر</span> — <span>أَصْفَر</span>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Pouvez-vous trouver la lettre **أ** (Alif) au début de chaque
                  couleur ?
                </p>
              </div>
            </Card>

            {/* Conclusion */}
            <Card icon="🌟" title="Bravo! 🎉">
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-700 mb-4">
                  Vous avez terminé la révision complète ! 🌸
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Tu maîtrises maintenant les bases essentielles de l'arabe :
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl mb-6">
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>✅ Les 28 lettres de l'alphabet</li>
                    <li>
                      ✅ Toutes les voyelles (courtes, longues, Chadda, Tanwin)
                    </li>
                    <li>✅ Les positions des lettres</li>
                    <li>✅ Du vocabulaire de base</li>
                    <li>✅ Des phrases de présentation</li>
                  </ul>
                </div>

                <div className="bg-teal-100 p-5 rounded-xl">
                  <p className="font-bold text-teal-800 mb-2">
                    💡 Conseils pour améliorer ton apprentissage, :
                  </p>
                  <ul className="text-left space-y-2 text-gray-700 pl-6">
                    <li>
                      • Révise un peu chaque jour (5-10 minutes sur l'alphabet
                      ou les voyelles)
                    </li>
                    <li>
                      • Lis à voix haute pour habituer ton oreille et ta
                      prononciation
                    </li>
                    <li>
                      • Écris les lettres, mots et phrases pour mieux mémoriser
                    </li>
                    <li>
                      • Regroupe les lettres similaires pour les retenir plus
                      facilement
                    </li>
                    <li>
                      • Pratique les voyelles, Chadda et Tanwin pour ne pas
                      changer le sens des mots
                    </li>
                    <li>
                      • Sois patiente et persévérante, l’arabe prend du temps à
                      maîtriser
                    </li>
                  </ul>
                </div>

                <p className="text-xl text-teal-600 font-semibold mt-6 italic">
                  persévérance est la clé du succès" 🔑
                </p>
                <p className="text-lg text-gray-600 mt-2">
                  À la prochaine séance inchaAllah ! 💫
                </p>
              </div>
            </Card>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
