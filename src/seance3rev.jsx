import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  { arabic: "ي", name: "Ya", sound: "Y" }
];

// Quiz de révision mixte
const revisionQuiz = [
  { id: 1, question: "Quelle lettre fait le son 'B' ?", answer: "ب", choices: ["ب", "ت", "ث", "ن"], hint: "Un point en dessous" },
  { id: 2, question: "Quelle lettre fait le son 'M' ?", answer: "م", choices: ["م", "ن", "ه", "و"], hint: "Forme ronde et fermée" },
  { id: 3, question: "Quelle lettre fait le son 'L' ?", answer: "ل", choices: ["ل", "ك", "ي", "ن"], hint: "Forme élancée qui monte" },
  { id: 4, question: "Quelle lettre fait le son 'K' ?", answer: "ك", choices: ["ك", "ق", "ف", "غ"], hint: "Pas de point, comme 'kilo'" },
  { id: 5, question: "Quelle lettre fait le son 'N' ?", answer: "ن", choices: ["ن", "م", "ت", "ب"], hint: "Un point au-dessus, comme un bol" },
  { id: 6, question: "Quelle lettre fait le son 'S' ?", answer: "س", choices: ["س", "ش", "ص", "ض"], hint: "Trois traits horizontaux" },
  { id: 7, question: "Quelle lettre fait le son 'J' ?", answer: "ج", choices: ["ج", "ح", "خ", "د"], hint: "Un point en dessous" },
  { id: 8, question: "Quelle lettre fait le son 'R' ?", answer: "ر", choices: ["ر", "ز", "د", "ذ"], hint: "Ne se connecte pas à gauche" },
  { id: 9, question: "Quelle lettre fait le son 'Y' ?", answer: "ي", choices: ["ي", "و", "ن", "ت"], hint: "Deux points en dessous" },
  { id: 10, question: "Quelle lettre fait le son 'Q' guttural ?", answer: "ق", choices: ["ق", "ك", "ف", "غ"], hint: "Deux points au-dessus" }
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
  { arabic: "قَمَر", trans: "qamar", meaning: "lune" }
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
      document.getElementById("lesson-content")?.scrollIntoView({ behavior: "smooth" });
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
  const shuffledQuizChoices = currentQuiz ? [...currentQuiz.choices].sort(() => Math.random() - 0.5) : [];

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
          Séance 3 - Révision complète 🔄
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Bienvenue Tako ! Aujourd'hui on consolide tout ce qu'on a appris ensemble 🌸
        </p>

        <motion.button
          onClick={handleStartCourse}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-teal-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-teal-600 transition"
        >
          Commencer la révision
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
            {/* Introduction */}
            <Card icon="🎯" title="Objectifs de cette séance">
              <p className="text-gray-700 leading-relaxed mb-4">
                Bonjour Tako ! 🌸 Cette séance est spéciale : on va réviser TOUT ce qu'on a appris ensemble.
              </p>
              <div className="bg-teal-50 p-5 rounded-xl">
                <h3 className="font-bold text-teal-700 mb-3">📋 Au programme :</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Révision interactive des <strong>28 lettres</strong> de l'alphabet</li>
                  <li>Quiz de consolidation sur les lettres</li>
                  <li>Révision complète des <strong>voyelles</strong> (courtes, longues, Chadda, Tanwin)</li>
                  <li>Les <strong>positions des lettres</strong> (début, milieu, fin)</li>
                  <li>Vocabulaire essentiel</li>
                  <li>Phrases de salutation et présentation</li>
                </ul>
              </div>
            </Card>

            {/* Révision alphabet par groupes */}
            <Card icon="🔤" title="Révision des 28 lettres par groupes">
              <p className="text-gray-700 mb-4">
                Révisons l'alphabet en groupant les lettres similaires pour mieux les mémoriser !
              </p>

              {/* Groupe 1 : Lettres avec points */}
              <div className="bg-purple-50 p-5 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  👉 Groupe 1 : Même forme, différents points
                </h3>
                <p className="text-gray-700 mb-3">Ces lettres ont la même forme de base, seuls les points changent :</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">ب ت ث</p>
                    <p className="text-center font-bold text-purple-700">Ba, Ta, Tha</p>
                    <p className="text-sm text-gray-600 text-center">1, 2, 3 points</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">ج ح خ</p>
                    <p className="text-center font-bold text-purple-700">Jim, Ha, Kha</p>
                    <p className="text-sm text-gray-600 text-center">1 point dessous, 0, 1 dessus</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">د ذ</p>
                    <p className="text-center font-bold text-purple-700">Dal, Thal</p>
                    <p className="text-sm text-gray-600 text-center">0 et 1 point</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">ر ز</p>
                    <p className="text-center font-bold text-purple-700">Ra, Zay</p>
                    <p className="text-sm text-gray-600 text-center">0 et 1 point</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">س ش</p>
                    <p className="text-center font-bold text-purple-700">Sin, Shin</p>
                    <p className="text-sm text-gray-600 text-center">3 traits vs 3 points</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-5xl font-script text-center mb-2">ع غ</p>
                    <p className="text-center font-bold text-purple-700">Ain, Ghain</p>
                    <p className="text-sm text-gray-600 text-center">0 et 1 point</p>
                  </div>
                </div>
              </div>

              {/* Groupe 2 : Lettres emphatiques */}
              <div className="bg-orange-50 p-5 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  💪 Groupe 2 : Les lettres emphatiques (sons épais)
                </h3>
                <p className="text-gray-700 mb-3">Ces lettres se prononcent de manière plus profonde et emphatique :</p>
                
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
                  Ces lettres sont <strong>isolées</strong> : elles ne se relient JAMAIS à la lettre suivante !
                </p>
                
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {[
                    { letter: "ا", name: "Alif" },
                    { letter: "د", name: "Dal" },
                    { letter: "ذ", name: "Thal" },
                    { letter: "ر", name: "Ra" },
                    { letter: "ز", name: "Zay" },
                    { letter: "و", name: "Waw" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg text-center">
                      <p className="text-4xl font-script mb-2">{item.letter}</p>
                      <p className="text-sm font-bold text-red-700">{item.name}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">💡 Exemple visuel :</p>
                  <p className="text-3xl font-script text-center mb-2">وَرْدَة</p>
                  <p className="text-center text-gray-600">(warda - fleur)</p>
                  <p className="text-sm text-gray-500 text-center">
                    Le و ne se connecte pas au ر, et le ر ne se connecte pas au د
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
                    { letter: "ي", name: "Ya", note: "2 points dessous" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg text-center">
                      <p className="text-4xl font-script mb-2">{item.letter}</p>
                      <p className="text-sm font-bold text-blue-700">{item.name}</p>
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
                    Bravo Tako ! Quiz terminé !
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
                            quizAttemptStatus === "correct" && choice === currentQuiz.answer
                              ? "bg-green-100 border-4 border-green-500"
                              : quizAttemptStatus === "incorrect" && choice === currentQuiz.answer
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

            {/* Révision voyelles - Résumé */}
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
                      { symbol: "ْ", name: "Sukun", sound: "–", ex: "بْ" }
                    ].map((v, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg text-center">
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
                      { combo: "ِ + ي", sound: "ī", ex: "بِي" }
                    ].map((v, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg text-center">
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
                      { word: "مُعَلِّم", meaning: "professeur" }
                    ].map((w, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg text-center">
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
                      { symbol: "ٌ", sound: "un", ex: "كَلْبٌ" }
                    ].map((t, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg text-center">
                        <p className="text-2xl font-script">{t.ex}</p>
                        <p className="text-sm font-bold">{t.symbol} = {t.sound}</p>
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
                    <p className="text-center text-sm text-gray-500 italic">({word.meaning})</p>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Phrases essentielles */}
            <Card icon="💬" title="Phrases essentielles - Révision">
              <div className="space-y-4">
                {[
                  { ar: "السَّلامُ عَلَيْكُمْ", fr: "As-salamu 'alaykum", tr: "Paix sur toi (Bonjour)" },
                  { ar: "وَعَلَيْكُمُ السَّلام", fr: "Wa 'alaykumu s-salām", tr: "Et sur toi la paix (Réponse)" },
                  { ar: "أَنَا اسْمِي تَاكُو", fr: "Ana ismi Tako", tr: "Je m'appelle Tako" },
                  { ar: "كَيْفَ حَالُكَ؟", fr: "Kayfa hāluk?", tr: "Comment vas-tu ?" },
                  { ar: "أَنَا بِخَيْر، شُكْرًا", fr: "Ana bi-khayr, shukran", tr: "Je vais bien, merci" }
                ].map((phrase, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.01 }}
                    className="bg-green-50 p-4 rounded-lg"
                  >
                    <p className="text-2xl font-script text-green-700 mb-2">{phrase.ar}</p>
                    <p className="text-gray-700">{phrase.fr}</p>
                    <p className="text-sm text-gray-500 italic">{phrase.tr}</p>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Conclusion */}
            <Card icon="🌟" title="Bravo Tako ! 🎉">
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-700 mb-4">
                  Tu as terminé la révision complète ! 🌸
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Tu maîtrises maintenant les bases essentielles de l'arabe :
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl mb-6">
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>✅ Les 28 lettres de l'alphabet</li>
                    <li>✅ Toutes les voyelles (courtes, longues, Chadda, Tanwin)</li>
                    <li>✅ Les positions des lettres</li>
                    <li>✅ Du vocabulaire de base</li>
                    <li>✅ Des phrases de présentation</li>
                  </ul>
                </div>
                
                <div className="bg-teal-100 p-5 rounded-xl">
                  <p className="font-bold text-teal-800 mb-2">📚 Pour continuer à progresser :</p>
                  <ul className="text-left space-y-2 text-gray-700 pl-6">
                    <li>• Révise l'alphabet chaque jour (5-10 minutes)</li>
                    <li>• Entraîne-toi à lire les mots simples</li>
                    <li>• Pratique l'écriture des lettres</li>
                    <li>• Essaie de te présenter en arabe</li>
                  </ul>
                </div>

                <p className="text-xl text-teal-600 font-semibold mt-6 italic">
                  "La persévérance est la clé du succès" 🔑
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