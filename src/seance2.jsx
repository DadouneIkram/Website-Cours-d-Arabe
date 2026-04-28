import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Composant utilitaire pour les cartes de section ---
const Card = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
  >
    <div className="flex items-center mb-4">
      <span className="text-4xl mr-3">{icon}</span>
      <h2 className="text-2xl font-bold text-purple-700 font-serif">{title}</h2>
    </div>
    {children}
  </motion.div>
);

// --- Données des 8 dernières lettres ---
const newLetterData = [
  { id: 21, arabic: "ق", name: "Qaf", sound: "Q", example: "قَمَر (Qamar - lune)", note: "Deux points au-dessus. Son guttural 'q', produit très profondément dans la gorge." },
  { id: 22, arabic: "ك", name: "Kaf", sound: "K", example: "كِتَاب (Kitab - livre)", note: "Pas de point. Son 'k' comme dans 'kilo'. Forme élégante et reconnaissable." },
  { id: 23, arabic: "ل", name: "Lam", sound: "L", example: "لَيْمُون (Laymun - citron)", note: "Pas de point. Son 'l' comme en français. Lettre très utilisée." },
  { id: 24, arabic: "م", name: "Mim", sound: "M", example: "مَاء (Ma' - eau)", note: "Pas de point. Son 'm' comme en français. Forme ronde et fermée." },
  { id: 25, arabic: "ن", name: "Nun", sound: "N", example: "نَجْم (Najm - étoile)", note: "Un point au-dessus. Son 'n' comme en français. Ressemble à un petit bol." },
  { id: 26, arabic: "ه", name: "Ha", sound: "H", example: "هَوَاء (Hawa' - air)", note: "Pas de point. Son 'h' léger, aspiré. Forme qui change beaucoup selon la position." },
  { id: 27, arabic: "و", name: "Waw", sound: "W/U", example: "وَلَد (Walad - garçon)", note: "Pas de point. Son 'w' ou voyelle longue 'u'. Ne se relie pas à la lettre suivante." },
  { id: 28, arabic: "ي", name: "Ya", sound: "Y/I", example: "يَد (Yad - main)", note: "Deux points en dessous. Son 'y' ou voyelle longue 'i'. Dernière lettre de l'alphabet !" }
];

// --- Révision des 20 premières lettres ---
const reviewLetters = [
  { arabic: "ا", name: "Alif" },
  { arabic: "ب", name: "Ba" },
  { arabic: "ت", name: "Ta" },
  { arabic: "ث", name: "Tha" },
  { arabic: "ج", name: "Jim" },
  { arabic: "ح", name: "Ha" },
  { arabic: "خ", name: "Kha" },
  { arabic: "د", name: "Dal" },
  { arabic: "ذ", name: "Thal" },
  { arabic: "ر", name: "Ra" },
  { arabic: "ز", name: "Zay" },
  { arabic: "س", name: "Sin" },
  { arabic: "ش", name: "Shin" },
  { arabic: "ص", name: "Sad" },
  { arabic: "ض", name: "Dad" },
  { arabic: "ط", name: "Ta" },
  { arabic: "ظ", name: "Za" },
  { arabic: "ع", name: "Ain" },
  { arabic: "غ", name: "Ghain" },
  { arabic: "ف", name: "Fa" }
];

// --- Quiz pour les nouvelles lettres ---
const newLetterQuiz = [
  {
    id: 1,
    question: "Quelle lettre correspond au son 'Q' guttural ?",
    answer: "ق",
    choices: ["ق", "ك", "ف", "غ"],
    hint: "Deux points au-dessus, son très profond dans la gorge.",
  },
  {
    id: 2,
    question: "Quelle lettre correspond au son 'K' ?",
    answer: "ك",
    choices: ["ك", "ق", "خ", "ح"],
    hint: "Pas de point. Son 'k' comme dans 'kilo'.",
  },
  {
    id: 3,
    question: "Quelle lettre correspond au son 'L' ?",
    answer: "ل",
    choices: ["ل", "ن", "ي", "م"],
    hint: "Pas de point. Forme élancée comme un bâton qui monte.",
  },
  {
    id: 4,
    question: "Quelle lettre correspond au son 'M' ?",
    answer: "م",
    choices: ["م", "ن", "ه", "و"],
    hint: "Pas de point. Forme ronde et fermée.",
  },
  {
    id: 5,
    question: "Quelle lettre correspond au son 'N' ?",
    answer: "ن",
    choices: ["ن", "م", "ي", "ت"],
    hint: "Un point au-dessus. Ressemble à un petit bol.",
  },
];

// --- Mots simples à lire ---
const simpleWords = [
  { arabic: "بَابٌ", transliteration: "Bāb", meaning: "porte" },
  { arabic: "كَلْبٌ", transliteration: "Kalb", meaning: "chien" },
  { arabic: "قَلَمٌ", transliteration: "Qalam", meaning: "stylo" },
  { arabic: "وَرْدٌ", transliteration: "Ward", meaning: "rose" },
  { arabic: "يَدٌ", transliteration: "Yad", meaning: "main" },
  { arabic: "نُورٌ", transliteration: "Nūr", meaning: "lumière" },
];

// --- Composant principal ---
const App = () => {
  const [showLesson, setShowLesson] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [quizAttemptStatus, setQuizAttemptStatus] = useState(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStartCourse = () => {
    setShowLesson(true);
    setTimeout(() => {
      document.getElementById("lesson-content")?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const currentLetter = newLetterData[currentLetterIndex];
  const handleNextLetter = () => {
    setCurrentLetterIndex((prev) => (prev < newLetterData.length - 1 ? prev + 1 : prev));
  };

  const handleQuizAnswer = (selectedChoice) => {
    if (quizCompleted) return;
    const currentQuiz = newLetterQuiz[currentQuizIndex];

    if (selectedChoice === currentQuiz.answer) {
      setQuizAttemptStatus("correct");
      setTimeout(() => {
        if (currentQuizIndex < newLetterQuiz.length - 1) {
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

  const currentQuiz = newLetterQuiz[currentQuizIndex];
  const shuffledQuizChoices = currentQuiz ? currentQuiz.choices.sort(() => Math.random() - 0.5) : [];

  return (
    <div className="min-h-screen bg-purple-50/70 font-sans text-gray-800">
      <style>{`
        .font-serif { font-family: 'Inter', sans-serif; }
        .font-script { font-family: 'Noto Sans Arabic', sans-serif; }
      `}</style>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-16 pb-20 px-4 md:px-8 text-center bg-white shadow-md border-b-2 border-purple-100"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-600 mb-3 font-serif">
          Deuxième séance d'arabe 🌙
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Bienvenue Tako ! Aujourd'hui, nous terminons l'alphabet arabe et pratiquons la lecture !
        </p>

        <motion.button
          onClick={handleStartCourse}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-purple-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-600 transition"
        >
          Commencer la séance
        </motion.button>
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
            {/* Bienvenue */}
            <Card icon="👋" title="Bienvenue pour la séance 2 !">
              <p className="text-gray-700 leading-relaxed">
                Bonjour Tako ! 🌸 J'espère que tu as bien pratiqué les exercices de la dernière fois.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Aujourd'hui, nous allons :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Réviser rapidement les 20 premières lettres</li>
                <li>Apprendre les <strong>8 dernières lettres</strong> de l'alphabet arabe</li>
                <li>Pratiquer la <strong>lecture de mots simples</strong></li>
                <li>Découvrir comment les lettres se <strong>connectent</strong> dans les mots</li>
              </ul>
            </Card>

            {/* Programme */}
            <Card icon="🧭" title="Programme de la séance">
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Révision rapide des 20 premières lettres</li>
                <li>Les 8 dernières lettres : ق، ك، ل، م، ن، ه، و، ي</li>
                <li>Quiz interactif</li>
                <li>Lecture de mots simples</li>
                <li>La liaison des lettres (comment elles se connectent)</li>
                <li>Phrases de présentation simples</li>
              </ul>
            </Card>

            {/* Révision rapide */}
            <Card icon="🔄" title="Révision rapide des 20 premières lettres">
              <p className="text-gray-700 mb-4">
                Voici les 20 lettres que tu as déjà apprises. Essaie de te souvenir de leur nom !
              </p>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-3 text-center">
                {reviewLetters.map((letter, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-50 p-3 rounded-lg shadow-sm cursor-pointer"
                    title={letter.name}
                  >
                    <span className="text-3xl font-script">{letter.arabic}</span>
                    <p className="text-xs text-gray-600 mt-1">{letter.name}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-purple-600 italic mt-4">
                💡 Clique sur chaque lettre pour voir son nom !
              </p>
            </Card>

            {/* Les 8 nouvelles lettres */}
            <Card icon="✨" title="Les 8 dernières lettres de l'alphabet">
              <p className="text-gray-600 mb-4">
                Félicitations ! Après ces 8 lettres, tu connaîtras <strong>tout l'alphabet arabe</strong> ! 🎉
              </p>
              <motion.div
                key={currentLetter.id}
                className="bg-white p-6 rounded-xl border border-purple-200 shadow-md"
              >
                <h3 className="text-3xl font-semibold text-purple-700 mb-4">
                  Lettre {currentLetter.id} : {currentLetter.name} ({currentLetter.arabic})
                </h3>
                <p className="text-lg mb-2">
                  <strong>Son :</strong> {currentLetter.sound}
                </p>
                <p className="text-gray-700 italic mb-2">{currentLetter.note}</p>
                <p className="text-lg mb-3">
                  <strong>Exemple :</strong>{" "}
                  <span className="font-script text-2xl">{currentLetter.example}</span>
                </p>
              </motion.div>

              <div className="mt-6 flex justify-end">
                {currentLetterIndex < newLetterData.length - 1 ? (
                  <motion.button
                    onClick={handleNextLetter}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition"
                  >
                    Lettre suivante ({newLetterData[currentLetterIndex + 1].name}) →
                  </motion.button>
                ) : (
                  <p className="text-lg text-green-700 font-semibold">
                    🎉 Bravo ! Tu connais maintenant les 28 lettres de l'alphabet arabe ! 🎉
                  </p>
                )}
              </div>
            </Card>

            {/* Quiz */}
            <Card icon="🎯" title="Quiz - Les nouvelles lettres">
              {quizCompleted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-green-100 rounded-xl"
                >
                  <p className="text-2xl font-bold text-green-700 mb-3">
                    Quiz Terminé ! Félicitations ! 🎉
                  </p>
                  <p className="text-lg text-gray-700">
                    Tu maîtrises les nouvelles lettres ! Excellent travail !
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={currentQuiz.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl font-medium mb-5 text-gray-700">
                    {currentQuizIndex + 1}/{newLetterQuiz.length}. {currentQuiz.question}
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
                            quizAttemptStatus === "correct" && choice === currentQuiz.answer
                              ? "bg-green-100 border-4 border-green-500"
                              : quizAttemptStatus === "incorrect" && choice === currentQuiz.answer
                              ? "bg-red-100 border-4 border-red-500"
                              : "bg-purple-100 hover:bg-purple-200 border border-purple-300"
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
                        Bravo ! Question suivante ! 🎉
                      </motion.p>
                    )}
                    {quizAttemptStatus === "incorrect" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 text-center text-red-600 font-bold text-lg"
                      >
                        Essaie encore ! Indice : {currentQuiz.hint} 😉
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </Card>

              {/* Les positions des lettres */}
            <Card icon="🔗" title="Les positions des lettres (début, milieu, fin)">
              <p className="text-gray-700 mb-4">
                En arabe, chaque lettre change de forme selon sa position dans le mot :
                <strong> au début</strong>, <strong>au milieu</strong>, <strong>à la fin</strong>, ou <strong>isolée</strong>.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  📍 Les 4 positions d'une lettre
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-blue-600 mb-2">Isolée</p>
                    <p className="text-sm text-gray-600">Seule, sans connexion</p>
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
                    Mot exemple : <span className="font-script text-xl">كتاب</span> (kitāb - livre) - le ب est à la fin
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
                    Mot exemple : <span className="font-script text-xl">بيت</span> (bayt - maison) - le ت est à la fin
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
                    Mot exemple : <span className="font-script text-xl">قلم</span> (qalam - stylo) - le م est à la fin
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
                    Mot exemple : <span className="font-script text-xl">نور</span> (nūr - lumière) - le ن est au début
                  </p>
                </div>
              </div>

              {/* Lettres qui ne se connectent pas */}
              {/* Lettres qui ne se connectent pas */}
              <div className="bg-yellow-50 p-6 rounded-xl mt-6">
                <h3 className="text-xl font-bold text-yellow-700 mb-3">
                  ⚠️ Exception : Lettres qui ne se connectent PAS à gauche
                </h3>
                <p className="text-gray-700 mb-3">
                  Ces 6 lettres ne se relient JAMAIS à la lettre qui les suit. 
                  Elles ont seulement 2 formes : <strong>isolée</strong> et <strong>fin</strong>.
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                  {[
                    { letter: "ا", name: "Alif" },
                    { letter: "د", name: "Dal" },
                    { letter: "ذ", name: "Thal" },
                    { letter: "ر", name: "Ra" },
                    { letter: "ز", name: "Zay" },
                    { letter: "و", name: "Waw" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg">
                      <p className="text-3xl font-script">{item.letter}</p>
                      <p className="text-xs text-gray-600 mt-1">{item.name}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm italic text-gray-600 mt-3">
                  💡 Exemple : dans <span className="font-script text-xl">ورد</span> (ward - rose), 
                  le و ne se connecte pas au ر qui le suit.
                </p>
              </div>

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
                    Cette lettre spéciale n'existe QUE à la <strong>fin des mots</strong>. 
                    Elle ressemble à un ه avec deux points au-dessus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">ة</p>
                      <p className="font-bold text-pink-600">Forme isolée/fin</p>
                      <p className="text-sm text-gray-600">Toujours à la fin</p>
                    </div>
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">ـة</p>
                      <p className="font-bold text-pink-600">Connectée</p>
                      <p className="text-sm text-gray-600">Après une lettre</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-gray-700 mb-2">Exemples de mots :</p>
                    <div className="space-y-2">
                      <p className="text-2xl font-script">مَدْرَسَة <span className="text-base text-gray-600">(madrasa - école)</span></p>
                      <p className="text-2xl font-script">طَاوِلَة <span className="text-base text-gray-600">(ṭāwila - table)</span></p>
                      <p className="text-2xl font-script">وَرْدَة <span className="text-base text-gray-600">(warda - fleur)</span></p>
                    </div>
                  </div>
                </div>

                {/* Ha */}
                <div className="bg-white p-5 rounded-xl mb-4">
                  <h4 className="text-lg font-bold text-pink-600 mb-3">
                    2️⃣ Le ه (Ha) - Changements importants !
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Le ه change énormément de forme selon sa position. C'est l'une des lettres les plus variables !
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
                      <p className="text-sm text-gray-600">Très petite boucle</p>
                    </div>
                    <div className="text-center bg-pink-50 p-4 rounded-lg">
                      <p className="text-5xl font-script mb-2">ـه</p>
                      <p className="font-bold text-pink-600">Fin</p>
                      <p className="text-sm text-gray-600">Descend en bas</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-gray-700 mb-2">Exemples de mots :</p>
                    <div className="space-y-2">
                      <p className="text-2xl font-script">هَذَا <span className="text-base text-gray-600">(hādhā - ceci) - ه au début</span></p>
                      <p className="text-2xl font-script">فَهِمَ <span className="text-base text-gray-600">(fahima - comprendre) - ه au milieu</span></p>
                      <p className="text-2xl font-script">وَجْه <span className="text-base text-gray-600">(wajh - visage) - ه à la fin</span></p>
                    </div>
                  </div>
                </div>

                {/* Ta ouvert vs fermé */}
                <div className="bg-white p-5 rounded-xl">
                  <h4 className="text-lg font-bold text-pink-600 mb-3">
                    3️⃣ Le ت (Ta ouvert) vs ة (Ta fermé)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Ne confonds pas ces deux lettres qui se ressemblent !
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-4xl font-script text-center mb-2">ت</p>
                      <p className="font-bold text-blue-700 text-center mb-2">Ta ouvert (normale)</p>
                      <p className="text-sm text-gray-700 mb-2">• A toutes les positions (début, milieu, fin)</p>
                      <p className="text-sm text-gray-700 mb-2">• Deux points AU-DESSUS</p>
                      <p className="text-xl font-script mt-2">Exemple : بَيْت (maison)</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="text-4xl font-script text-center mb-2">ة</p>
                      <p className="font-bold text-pink-700 text-center mb-2">Ta Marbuta (fermé)</p>
                      <p className="text-sm text-gray-700 mb-2">• UNIQUEMENT à la fin</p>
                      <p className="text-sm text-gray-700 mb-2">• Deux points au-dessus d'un ه</p>
                      <p className="text-xl font-script mt-2">Exemple : مَدْرَسَة (école)</p>
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
                  Regarde ces mots et essaie d'identifier la position de chaque lettre :
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-script text-center mb-2">سَمَكٌ</p>
                    <p className="text-center text-gray-600">(samak - poisson)</p>
                    {/* <p className="text-sm text-gray-500 mt-2">
                      س (début) - م (milieu) - ك (fin)
                    </p> */}
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-script text-center mb-2">مَدْرَسَة</p>
                    <p className="text-center text-gray-600">(madrasa - école)</p>
                    {/* <p className="text-sm text-gray-500 mt-2">
                      م (début) - د (fin, ne se connecte pas) - ر (fin, ne se connecte pas) - س (milieu) - ة (fin)
                    </p> */}
                  </div>
                </div>
              </div>
            </Card>

  {/* Révision complète des voyelles */}
            <Card icon="🎵" title="Révision complète des voyelles">
              <p className="text-gray-700 mb-4">
                Révisons toutes les voyelles en arabe : les <strong>courtes</strong>, les <strong>longues</strong> et la <strong>Chadda</strong> !
              </p>

              {/* Voyelles courtes - Révision */}
              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-yellow-700 mb-4">
                  📌 Les voyelles courtes (Harakat)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { symbol: "َ", name: "Fatha", sound: "a", example: "بَ", word: "بَيْت (bayt - maison)" },
                    { symbol: "ِ", name: "Kasra", sound: "i", example: "بِ", word: "بِنْت (bint - fille)" },
                    { symbol: "ُ", name: "Damma", sound: "u/ou", example: "بُ", word: "بُيُوت (buyūt - maisons)" },
                    { symbol: "ْ", name: "Sukun", sound: "–", example: "بْ", word: "كَلْب (kalb - chien)" },
                  ].map((vowel, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <p className="text-4xl font-script text-yellow-700 mb-2">
                        {vowel.example}
                      </p>
                      <p className="text-lg font-semibold text-gray-800">{vowel.name}</p>
                      <p className="text-sm text-gray-600 mt-1">Son : {vowel.sound}</p>
                      <p className="text-xs text-gray-500 mt-2 font-script">{vowel.word}</p>
                    </div>
                  ))}
                </div>
              </div>

                {/* La Chadda - NOUVEAU */}
              <div className="bg-pink-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-pink-700 mb-4">
                  💪 La Chadda (Shadda) - ّ
                </h3>
                <p className="text-gray-700 mb-4">
                  La <strong>Chadda (ّ)</strong> est un petit signe qui ressemble à un "w" ou à un "3" à l'envers. 
                  Elle indique qu'on doit <strong>doubler la lettre</strong> (prononcer la lettre deux fois).
                </p>

                <div className="bg-white p-5 rounded-lg mb-4">
                  <h4 className="font-bold text-pink-700 mb-3">📝 Comment ça marche ?</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• La Chadda se place <strong>au-dessus de la lettre</strong></p>
                    <p>• On peut ajouter une voyelle (Fatha, Kasra, Damma) <strong>au-dessus ou en dessous</strong> de la Chadda</p>
                    <p>• Effet : La lettre est prononcée <strong>deux fois</strong> avec emphase</p>
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
                      explanation: "Le ب est doublé : rab-b"
                    },
                    { 
                      letter: "لّ", 
                      sound: "ll", 
                      with: "لّ", 
                      example: "اللّٰه (Allāh - Dieu)",
                      explanation: "Le ل est doublé : Al-lāh"
                    },
                    { 
                      letter: "مّ", 
                      sound: "mm", 
                      with: "مَّ", 
                      example: "أُمّ (umm - mère)",
                      explanation: "Le م est doublé : um-m"
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <p className="text-5xl font-script text-pink-700 mb-2">
                        {item.letter}
                      </p>
                      <p className="text-lg font-semibold text-gray-800">Son : {item.sound}</p>
                      <p className="text-sm text-gray-700 mt-2 font-script font-bold">{item.example}</p>
                      <p className="text-xs text-gray-500 mt-1 italic">{item.explanation}</p>
                    </div>
                  ))}
                </div>

                {/* Plus d'exemples avec Chadda */}
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-pink-700 mb-3">🌟 Plus d'exemples avec Chadda</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { word: "مُعَلِّم", trans: "mu'allim", meaning: "professeur", note: "Le ل est doublé" },
                      { word: "مُحَمَّد", trans: "Muhammad", meaning: "Mohammed", note: "Le م est doublé" },
                      { word: "سَيَّارَة", trans: "sayyāra", meaning: "voiture", note: "Le ي est doublé" },
                      { word: "جَنَّة", trans: "janna", meaning: "paradis", note: "Le ن est doublé" },
                    ].map((ex, i) => (
                      <div key={i} className="bg-pink-50 p-3 rounded-lg">
                        <p className="text-2xl font-script text-center mb-1">{ex.word}</p>
                        <p className="text-sm text-gray-600 text-center">{ex.trans} - {ex.meaning}</p>
                        <p className="text-xs text-gray-500 text-center italic mt-1">({ex.note})</p>
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
                  Le <strong>Tanwin</strong> est une voyelle <strong>doublée</strong> qui se met uniquement à la <strong>fin des mots</strong>. 
                  Il produit le son "n" à la fin : -an, -in, -un.
                </p>

                <p className="text-orange-700 italic mt-4 text-center">
                  💡 <strong>Important :</strong> Le Tanwin est très utilisé en arabe classique et dans le Coran. 
                  Il indique souvent qu'un mot est indéfini (un/une).
                </p>

                <div className="bg-white p-5 rounded-lg mb-4">
                  <h4 className="font-bold text-orange-700 mb-3">📝 Les 3 types de Tanwin :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { 
                        symbol: "ً", 
                        name: "Tanwin Fatha", 
                        sound: "an", 
                        example: "كَلْبً", 
                        word: "كَلْبًا (kalban - un chien)",
                        note: "Double Fatha (deux traits)"
                      },
                      { 
                        symbol: "ٍ", 
                        name: "Tanwin Kasra", 
                        sound: "in", 
                        example: "كَلْبٍ", 
                        word: "كَلْبٍ (kalbin - d'un chien)",
                        note: "Double Kasra (deux traits dessous)"
                      },
                      { 
                        symbol: "ٌ", 
                        name: "Tanwin Damma", 
                        sound: "un", 
                        example: "كَلْبٌ", 
                        word: "كَلْبٌ (kalbun - un chien)",
                        note: "Double Damma (comme un petit 9)"
                      },
                    ].map((tanwin, i) => (
                      <div key={i} className="bg-orange-50 p-4 rounded-lg shadow-sm text-center">
                        <p className="text-5xl font-script text-orange-700 mb-2">
                          {tanwin.example}
                        </p>
                        <p className="text-lg font-semibold text-gray-800">{tanwin.name}</p>
                        <p className="text-sm text-gray-600 mt-1">Son : {tanwin.sound}</p>
                        <p className="text-xs text-gray-700 mt-2 font-script font-bold">{tanwin.word}</p>
                        <p className="text-xs text-gray-500 mt-1 italic">({tanwin.note})</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plus d'exemples avec Tanwin */}
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-orange-700 mb-3">🌟 Plus d'exemples avec Tanwin</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { word: "بَيْتًا", trans: "baytan", meaning: "une maison" },
                      { word: "بَيْتٍ", trans: "baytin", meaning: "d'une maison" },
                      { word: "بَيْتٌ", trans: "baytun", meaning: "une maison" },
                      { word: "كِتَابًا", trans: "kitāban", meaning: "un livre" },
                      { word: "قَلَمٍ", trans: "qalamin", meaning: "d'un stylo" },
                      { word: "وَلَدٌ", trans: "waladun", meaning: "un garçon" },
                    ].map((ex, i) => (
                      <div key={i} className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-2xl font-script text-center mb-1">{ex.word}</p>
                        <p className="text-sm text-gray-600 text-center">{ex.trans}</p>
                        <p className="text-xs text-gray-500 text-center italic">({ex.meaning})</p>
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
                  Les voyelles longues <strong>allongent le son</strong>. Elles sont formées par une voyelle courte + une lettre spéciale :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {[
                    { 
                      vowel: "َ", 
                      letter: "ا", 
                      sound: "ā (aa)", 
                      example: "بَا", 
                      exampleFull: "بَاب (bāb - porte)",
                      description: "Fatha + Alif"
                    },
                    { 
                      vowel: "ُ", 
                      letter: "و", 
                      sound: "ū (ouu)", 
                      example: "نُو", 
                      exampleFull: "نُور (nūr - lumière)",
                      description: "Damma + Waw"
                    },
                    { 
                      vowel: "ِ", 
                      letter: "ي", 
                      sound: "ī (ii)", 
                      example: "كَبِي", 
                      exampleFull: "كَبِير (kabīr - grand)",
                      description: "Kasra + Ya"
                    },
                  ].map((vowel, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <p className="text-4xl font-script text-blue-700 mb-2">
                        {vowel.example}ـر
                      </p>
                      <p className="text-lg font-semibold text-gray-800">{vowel.sound}</p>
                      <p className="text-sm text-gray-600 mt-1">{vowel.description}</p>
                      <p className="text-sm text-gray-700 mt-2 font-script font-bold">{vowel.exampleFull}</p>
                    </div>
                  ))}
                </div>

                {/* Comparaison courte vs longue */}
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-3">🔄 Compare : Courte vs Longue</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-script mb-1">بَ ➜ بَا</p>
                      <p className="text-sm text-gray-600">ba ➜ bā (plus long)</p>
                    </div>
                    <div>
                      <p className="text-3xl font-script mb-1">بُ ➜ بُو</p>
                      <p className="text-sm text-gray-600">bu ➜ bū (plus long)</p>
                    </div>
                    <div>
                      <p className="text-3xl font-script mb-1">بِ ➜ بِي</p>
                      <p className="text-sm text-gray-600">bi ➜ bī (plus long)</p>
                    </div>
                  </div>
                </div>
              </div>

            

              {/* Exercice de distinction */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  ✏️ Exercice : Distingue les voyelles
                </h3>
                <p className="text-gray-700 mb-4">
                  Essaie de lire ces exemples et identifie le type de voyelle :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-script text-center mb-2">كَتَبَ</p>
                    <p className="text-sm text-gray-600 text-center">(kataba - il a écrit)</p>
                    <p className="text-xs text-gray-500 mt-1">✓ Voyelles courtes (Fatha)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-script text-center mb-2">كَاتِب</p>
                    <p className="text-sm text-gray-600 text-center">(kātib - écrivain)</p>
                    <p className="text-xs text-gray-500 mt-1">✓ Voyelle longue (Fatha + Alif)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-script text-center mb-2">كُتُب</p>
                    <p className="text-sm text-gray-600 text-center">(kutub - livres)</p>
                    <p className="text-xs text-gray-500 mt-1">✓ Voyelles courtes (Damma)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-3xl font-script text-center mb-2">مُعَلِّم</p>
                    <p className="text-sm text-gray-600 text-center">(mu'allim - professeur)</p>
                    <p className="text-xs text-gray-500 mt-1">✓ Chadda sur le ل</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-4 italic text-center">
                💡 <strong>Astuce :</strong> Écoute bien la différence entre les voyelles courtes et longues. 
                Les longues tiennent le son 2 fois plus longtemps !
              </p>
            </Card>

            {/* Lecture de mots simples */}
            <Card icon="📖" title="Lecture de mots simples">
              <p className="text-gray-700 mb-4">
                Maintenant que tu connais tout l'alphabet, essayons de lire quelques mots simples ! 
                Prends ton temps et prononce lettre par lettre.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {simpleWords.map((word, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-purple-50 p-5 rounded-lg shadow-sm"
                  >
                    <p className="text-4xl font-script text-purple-700 text-center mb-2">
                      {word.arabic}
                    </p>
                    <p className="text-lg text-gray-600 text-center">
                      {word.transliteration}
                    </p>
                    <p className="text-md text-gray-500 text-center italic">
                      ({word.meaning})
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="text-purple-600 italic mt-4">
                💡 Conseil : Lis d'abord les voyelles (Fatha, Kasra, Damma), puis prononce chaque lettre lentement !
              </p>
            </Card>

          
            {/* Phrases simples */}
            <Card icon="💬" title="Phrases de présentation simples">
              <p className="text-gray-700 mb-4">
                Maintenant, apprenons quelques phrases utiles pour te présenter :
              </p>
              <div className="space-y-4">
                {[
                  {
                    ar: "أَنَا اسْمِي تَاكُو",
                    fr: "Ana ismi Tako",
                    tr: "Je m'appelle Tako",
                  },
                  {
                    ar: "أَنَا مِنْ فَرَنْسَا",
                    fr: "Ana min Faransa",
                    tr: "Je viens de France",
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
                    whileHover={{ scale: 1.02 }}
                    className="bg-green-50 p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-3xl font-script text-green-700 mb-2">
                      {phrase.ar}
                    </p>
                    <p className="text-lg text-gray-600">
                      {phrase.fr}
                    </p>
                    <p className="text-md text-gray-500 italic">
                      {phrase.tr}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>

          

            {/* Conclusion */}
            <Card icon="🌟" title="Fin de la séance 2">
              <p className="text-lg text-gray-700 mb-4">
                Mabrouk (Félicitations) Tako ! 🎉 
              </p>
              <p className="text-gray-700 mb-4">
                Tu connais maintenant <strong>les 28 lettres de l'alphabet arabe</strong> ! 
                C'est une étape énorme ! 🌙
              </p>
              
              <div className="bg-purple-50 p-5 rounded-xl">
                <h3 className="font-bold text-purple-700 mb-2">📚 Pour la prochaine séance :</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Révise toutes les lettres (essaie de les écrire)</li>
                  <li>Pratique la lecture des mots simples</li>
                  <li>Entraîne-toi à te présenter en arabe</li>
                  <li>Nous apprendrons les chiffres et plus de vocabulaire inchaAllah ✨</li>
                </ul>
              </div>

              <p className="text-purple-600 italic mt-4 text-center font-semibold">
                "Petit à petit, l'oiseau fait son nid." Continue comme ça ! 💫
              </p>
            </Card>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;