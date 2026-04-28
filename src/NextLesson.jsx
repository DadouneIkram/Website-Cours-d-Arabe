
// const motsEnfants = [
//   { ar: "أَسَد", trans: "Assad", fr: "Lion", icon: "🦁", color: "border-orange-200 bg-orange-50" },
//   { ar: "قِط", trans: "Qit", fr: "Chat", icon: "🐱", color: "border-gray-200 bg-gray-50" },
//   { ar: "شَمْس", trans: "Shams", fr: "Soleil", icon: "☀️", color: "border-yellow-200 bg-yellow-50" },
//   { ar: "قَمَر", trans: "Qamar", fr: "Lune", icon: "🌙", color: "border-blue-100 bg-blue-50" },
//   { ar: "تُفَّاح", trans: "Touffah", fr: "Pomme", icon: "🍎", color: "border-red-200 bg-red-50" },
//   { ar: "مَاء", trans: "Mâ", fr: "Eau", icon: "💧", color: "border-cyan-200 bg-cyan-50" },
// ];
// const vocabulaireEnfants = {
//   salutations: [
//     { ar: "السَّلامُ عَلَيْكُمْ", trans: "As-salamou 'alaykoum", fr: "Bonjour / Paix sur vous", icon: "👋", color: "bg-emerald-50 border-emerald-200" },
//     { ar: "شُكْراً", trans: "Shoukran", fr: "Merci", icon: "🙏", color: "bg-blue-50 border-blue-200" },
//     { ar: "تَفَضَّل", trans: "Tafaddal", fr: "Je t'en prie / Tiens", icon: "🎁", color: "bg-purple-50 border-purple-200" },
//     { ar: "مَعَ السَّلامَة", trans: "Ma'a salama", fr: "Au revoir", icon: "🚀", color: "bg-orange-50 border-orange-200" },
//   ],
//   famille: [
//     { ar: "أُمِّي", trans: "Oummi", fr: "Maman", icon: "👩‍👧", color: "bg-pink-50 border-pink-200" },
//     { ar: "أَبِي", trans: "Abbi", fr: "Papa", icon: "👨‍👦", color: "bg-cyan-50 border-cyan-200" },
//     { ar: "أَخِي", trans: "Akhi", fr: "Mon frère", icon: "👦", color: "bg-indigo-50 border-indigo-200" },
//     { ar: "أُخْتِي", trans: "Okhti", fr: "Ma sœur", icon: "👧", color: "bg-rose-50 border-rose-200" },
//   ],
//   maison: [
//     { ar: "بَيْت", trans: "Bayt", fr: "Maison", icon: "🏠", color: "bg-amber-50 border-amber-200" },
//     { ar: "بَاب", trans: "Bâb", fr: "Porte", icon: "🚪", color: "bg-orange-100 border-orange-200" },
//     { ar: "سَرِير", trans: "Sarir", fr: "Lit", icon: "🛏️", color: "bg-blue-50 border-blue-200" },
//     { ar: "طَعَام", trans: "Ta'âm", fr: "Nourriture", icon: "🍎", color: "bg-yellow-50 border-yellow-200" },
//   ],
//   etude: [
//     { ar: "كِتَاب", trans: "Kitâb", fr: "Livre", icon: "📚", color: "bg-indigo-50 border-indigo-200" },
//     { ar: "قَلَم", trans: "Qalam", fr: "Stylo", icon: "✏️", color: "bg-slate-50 border-slate-200" },
//     { ar: "مَدْرَسَة", trans: "Madrasa", fr: "École", icon: "🏫", color: "bg-red-50 border-red-200" },
//     { ar: "لَوْحَة", trans: "Lawha", fr: "Tableau / Ardoise", icon: "🖼️", color: "bg-teal-50 border-teal-200" },
//   ],
//   nature: [
//     { ar: "زَهْرَة", trans: "Zahra", fr: "Fleur", icon: "🌸", color: "bg-green-50 border-green-200" },
//     { ar: "شَجَرَة", trans: "Shajara", fr: "Arbre", icon: "🌳", color: "bg-green-100 border-green-300" },
//     { ar: "مَطَر", trans: "Matar", fr: "Pluie", icon: "🌧️", color: "bg-blue-100 border-blue-300" },
//     { ar: "قَلْب", trans: "Qalb", fr: "Cœur", icon: "❤️", color: "bg-red-50 border-red-200" },
//   ]
// };


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Card = ({ title, icon, children, className = "" }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//     className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 ${className}`}
//   >
//     <div className="flex items-center mb-4">
//       <span className="text-4xl mr-3">{icon}</span>
//       <h2 className="text-2xl font-bold text-emerald-700 font-serif">{title}</h2>
//     </div>
//     {children}
//   </motion.div>
// );

// // ========================================
// // DONNÉES : LES 5 PRIÈRES
// // ========================================

// const prayers = [
//   { name: "Sobh / Fajr", time: "Aube", rakaat: 2, icon: "🌅", color: "bg-orange-50" },
//   { name: "Dhuhr", time: "Midi", rakaat: 4, icon: "☀️", color: "bg-yellow-50" },
//   { name: "Asr", time: "Après-midi", rakaat: 4, icon: "🌤️", color: "bg-blue-50" },
//   { name: "Maghrib", time: "Coucher du soleil", rakaat: 3, icon: "🌇", color: "bg-pink-50" },
//   { name: "Isha", time: "Nuit", rakaat: 4, icon: "🌙", color: "bg-indigo-50" },
// ];

// // ========================================
// // QUIZ : LA PRÉPARATION & LA PRIÈRE
// // ========================================

// const quizData = [
//   {
//     id: 1,
//     question: "Quelle est la première chose à faire avant de commencer les ablutions ?",
//     answer: "L'intention (Niyya)",
//     choices: ["Se laver les mains", "L'intention (Niyya)", "Dire Allahou Akbar", "S'habiller"],
//     hint: "Cela se passe dans le cœur.",
//     category: "préparation"
//   },
//   {
//     id: 2,
//     question: "Combien de fois doit-on laver le visage, la bouche et le nez ?",
//     answer: "3 fois",
//     choices: ["1 fois", "2 fois", "3 fois", "4 fois"],
//     hint: "C'est le chiffre recommandé pour la plupart des gestes.",
//     category: "ablutions"
//   },
//   {
//     id: 3,
//     question: "Dans quelle direction doit-on se tourner pour prier ?",
//     answer: "La Qibla (Kaaba)",
//     choices: ["Le Nord", "Le Soleil", "La Qibla (Kaaba)", "L'Est"],
//     hint: "C'est vers la Mecque.",
//     category: "conditions"
//   },
//   {
//     id: 4,
//     question: "Quelle prière comporte seulement 2 Rak'at ?",
//     answer: "Sobh / Fajr",
//     choices: ["Dhuhr", "Sobh / Fajr", "Asr", "Isha"],
//     hint: "C'est la première prière de la journée.",
//     category: "prières"
//   },
//   {
//     id: 5,
//     question: "Que doit-on dire juste avant de commencer les ablutions ?",
//     answer: "Bismillah",
//     choices: ["Hamdoulillah", "Allahou Akbar", "Bismillah", "SobhanAllah"],
//     hint: "Cela signifie 'Au nom d'Allah'.",
//     category: "ablutions"
//   }
// ];


// const wordGameData = [
//   // Pour Liyana (Série 1)
//   { word: "بَابٌ", letters: ["بَ", "ا", "بٌ"], fr: "Une porte", icon: "🚪" },
//   { word: "كِتَابٌ", letters: ["كِ", "تَ", "ا", "بٌ"], fr: "Un livre", icon: "📚" },
//   { word: "قَلَمٌ", letters: ["قَ", "لَ", "مٌ"], fr: "Un stylo", icon: "✏️" },
//   { word: "أَسَدٌ", letters: ["أَ", "سَ", "دٌ"], fr: "Un lion", icon: "🦁" },
//   { word: "بَيْتٌ", letters: ["بَ", "يْ", "تٌ"], fr: "Une maison", icon: "🏠" },
//   { word: "تُفَّاحٌ", letters: ["تُ", "فَّ", "ا", "حٌ"], fr: "Une pomme", icon: "🍎" },
//   { word: "جَمَلٌ", letters: ["جَ", "مَ", "لٌ"], fr: "Un chameau", icon: "🐪" },
//   { word: "دَارٌ", letters: ["دَ", "ا", "رٌ"], fr: "Une demeure", icon: "🏡" },
//   { word: "زَهْرَةٌ", letters: ["زَ", "هْ", "رَ", "ةٌ"], fr: "Une fleur", icon: "🌸" },
//   { word: "سَمَكٌ", letters: ["سَ", "مَ", "كٌ"], fr: "Un poisson", icon: "🐟" },
  
//   // Pour Halim (Série 2)
//   { word: "شَمْسٌ", letters: ["شَ", "مْ", "سٌ"], fr: "Le soleil", icon: "☀️" },
//   { word: "عَيْنٌ", letters: ["عَ", "يْ", "نٌ"], fr: "Un oeil", icon: "👁️" },
//   { word: "فِيلٌ", letters: ["فِ", "ي", "لٌ"], fr: "Un éléphant", icon: "🐘" },
//   { word: "قَمَرٌ", letters: ["قَ", "مَ", "رٌ"], fr: "La lune", icon: "🌙" },
//   { word: "كَلْبٌ", letters: ["كَ", "لْ", "بٌ"], fr: "Un chien", icon: "🐶" },
//   { word: "مَوْزٌ", letters: ["مَ", "وْ", "زٌ"], fr: "Une banane", icon: "🍌" },
//   { word: "نَحْلَةٌ", letters: ["نَ", "حْ", "لَ", "ةٌ"], fr: "Une abeille", icon: "🐝" },
//   { word: "هَدِيَّةٌ", letters: ["هَ", "دِ", "يَّ", "ةٌ"], fr: "Un cadeau", icon: "🎁" },
//   { word: "وَلَدٌ", letters: ["وَ", "لَ", "دٌ"], fr: "Un garçon", icon: "👦" },
//   { word: "يَدٌ", letters: ["يَ", "دٌ"], fr: "Une main", icon: "✋" }
// ];


// const NextLesson = ({ onBack }) => {
//   const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
//   const [quizAttemptStatus, setQuizAttemptStatus] = useState(null);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [score, setScore] = useState(0);

//   const handleQuizAnswer = (selectedChoice) => {
//     if (quizCompleted) return;
//     const currentQuiz = quizData[currentQuizIndex];

//     if (selectedChoice === currentQuiz.answer) {
//       setQuizAttemptStatus("correct");
//       setScore(score + 1);
//       setTimeout(() => {
//         if (currentQuizIndex < quizData.length - 1) {
//           setCurrentQuizIndex((prev) => prev + 1);
//           setQuizAttemptStatus(null);
//         } else {
//           setQuizCompleted(true);
//         }
//       }, 1000);
//     } else {
//       setQuizAttemptStatus("incorrect");
//       setTimeout(() => setQuizAttemptStatus(null), 2000);
//     }
//   };
  

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
//       {/* Header */}
//       <motion.header 
//         className="pt-10 pb-10 px-4 text-center bg-white shadow-sm border-b"
//         initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//       >
//         <button onClick={onBack} className="mb-4 px-6 py-2 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition">
//           ⬅ Retour
//         </button>
//         <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-2">
//           Ma Première Prière 🕌
//         </h1>
//         <p className="text-gray-600 italic">"Le rendez-vous le plus important de la journée"</p>
//       </motion.header>

//       <main className="container mx-auto p-4 md:p-8 max-w-5xl space-y-10">
        
//         {/* Section 1: Les 5 Prières */}
//         <Card icon="🕒" title="Les 5 Prières de la journée">
//           <p className="mb-6 text-gray-700">Chaque prière a son moment précis et un nombre de <strong>Rak'at</strong> (unités de prière) :</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//             {prayers.map((p, i) => (
//               <div key={i} className={`${p.color} p-4 rounded-xl border-2 border-emerald-100 text-center shadow-sm`}>
//                 <span className="text-3xl">{p.icon}</span>
//                 <h4 className="font-bold text-emerald-900 mt-2">{p.name}</h4>
//                 <p className="text-xs text-gray-500 mb-2">{p.time}</p>
//                 <div className="bg-white rounded-full py-1 px-3 inline-block font-bold text-emerald-700 border border-emerald-200">
//                   {p.rakaat} Raka'at
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Card>

//         {/* Section 2: Avant de commencer */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <Card icon="🧼" title="Les Ablutions (Woudou)">
//             <ul className="space-y-3 text-gray-700">
//               <li className="flex items-center gap-2">✅ <strong>Niyya :</strong> Avoir l'intention dans le cœur.</li>
//               <li className="flex items-center gap-2">✅ <strong>Bismillah :</strong> Le dire avant de commencer.</li>
//               <li className="flex items-center gap-2">💧 Laver 3x : Mains, Bouche, Nez, Visage.</li>
//               <li className="flex items-center gap-2">💧 Laver 3x : Bras (jusqu'au coude).</li>
//               <li className="flex items-center gap-2">💧 Passer l'eau : Tête (1x) et Oreilles (1x).</li>
//               <li className="flex items-center gap-2">💧 Laver 3x : Pieds (jusqu'aux chevilles).</li>
//             </ul>
//           </Card>

//           <Card icon="📍" title="Les 4 Conditions">
//             <div className="space-y-4">
//               <div className="p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
//                 <strong>1. Être propre :</strong> Corps (ablutions) et vêtements.
//               </div>
//               <div className="p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
//                 <strong>2. Lieu propre :</strong> Prier sur un tapis ou sol propre.
//               </div>
//               <div className="p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
//                 <strong>3. La Qibla :</strong> Se tourner vers la Kaaba à la Mecque.
//               </div>
//               <div className="p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
//                 <strong>4. L'heure :</strong> Prier quand c'est le moment de la prière.
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* Section 3: Quiz Interactif */}
//         <Card icon="🎯" title="Test tes connaissances !" className="bg-black-900 text-black">
//           {!quizCompleted ? (
//             <div >
//               <p className="text-emerald-200 mb-4">Question {currentQuizIndex + 1} / {quizData.length}</p>
//               <h3 className="text-xl font-bold mb-6">{quizData[currentQuizIndex].question}</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black">
//                 {quizData[currentQuizIndex].choices.map((choice, i) => (
//                   <button
//                     key={i}
//                     onClick={() => handleQuizAnswer(choice)}
//                     className={`p-4 rounded-xl border-2 transition-all font-semibold  ${
//                       quizAttemptStatus === "correct" && choice === quizData[currentQuizIndex].answer
//                         ? "bg-green-500 border-green-300 text-white"
//                         : quizAttemptStatus === "incorrect" && choice !== quizData[currentQuizIndex].answer
//                         ? "bg-red-500 border-red-300 text-white"
//                         : "bg-white/10 border-white/20 hover:bg-white/20 text-white"
//                     }`}
//                   >
//                     {choice}
//                   </button>
//                 ))}
//               </div>
//               {quizAttemptStatus === "incorrect" && (
//                 <p className="mt-4 text-orange-300 italic">💡 Indice : {quizData[currentQuizIndex].hint}</p>
//               )}
//             </div>
//           ) : (
//             <div className="text-center py-10">
//               <h2 className="text-3xl font-bold mb-4">Macha'Allah ! 🎉</h2>
//               <p className="text-xl mb-6">Tu as terminé le quiz avec un score de {score} / {quizData.length}</p>
//               <button 
//                 onClick={() => {setCurrentQuizIndex(0); setQuizCompleted(false); setScore(0);}}
//                 className="px-8 py-3 bg-black text-emerald-900 rounded-full font-bold shadow-lg"
//               >
//                 Recommencer le quiz 🔄
//               </button>
//             </div>
//           )}
//         </Card>

//         <Card icon="👶👧" title="Le coin de Liyana et Halim">
//   <p className="mb-6 text-gray-700 text-lg">
//     Coucou Liyana et Halim ! Voici vos premiers mots magiques en arabe. Essayez de les répéter ! 
//   </p>
//   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//     {motsEnfants.map((mot, i) => (
//       <motion.div
//         key={i}
//         whileHover={{ scale: 1.05, rotate: 2 }}
//         className={`p-6 rounded-3xl border-4 ${mot.color} flex flex-col items-center justify-center shadow-sm text-center`}
//       >
//         <span className="text-5xl mb-3">{mot.icon}</span>
//         <h3 className="text-3xl font-bold text-gray-800 mb-1 font-script">{mot.ar}</h3>
//         <p className="text-emerald-600 font-bold text-lg">{mot.trans}</p>
//         <p className="text-gray-500 italic text-sm">{mot.fr}</p>
//       </motion.div>
//     ))}
//   </div>
//   <div className="mt-8 p-4 bg-emerald-50 rounded-2xl border-2 border-dashed border-emerald-200 text-center">
//     <p className="text-emerald-700 font-medium">
//       🌟 Défi pour Liyana et Halim : Trouvez un objet dans la maison qui correspond à un de ces mots !
//     </p>
//   </div>
// </Card>
// <Card icon="🌈" title="Le Grand Voyage de Liyana & Halim">
//   <p className="text-gray-600 mb-8 italic text-center">
//     "On apprend en s'amusant ! Répétez les mots à voix haute."
//   </p>

//   {Object.entries(vocabulaireEnfants).map(([categorie, mots]) => (
//     <div key={categorie} className="mb-10">
//       <h3 className="text-xl font-bold text-emerald-800 mb-4 capitalize flex items-center gap-2">
//         {categorie === 'salutations' && '✨ La Politesse'}
//         {categorie === 'famille' && '🏠 Ma Famille'}
//         {categorie === 'maison' && '🏠 maison'}
//         {categorie === 'etude' && '📚 Étude'}
//         {categorie === 'nature' && '🌍 Mon Monde'}
//       </h3>
      
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {mots.map((mot, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`p-4 rounded-2xl border-2 ${mot.color} shadow-sm flex flex-col items-center text-center cursor-pointer transition-colors`}
//           >
//             <span className="text-4xl mb-2">{mot.icon}</span>
//             <h4 className="text-2xl font-bold text-gray-800 mb-1 font-script leading-loose">{mot.ar}</h4>
//             <p className="text-emerald-700 font-bold text-xs uppercase tracking-wider">{mot.trans}</p>
//             <p className="text-gray-500 text-sm">{mot.fr}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   ))}

//   {/* Petit jeu bonus */}
//   <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-3xl text-white text-center shadow-lg">
//     <h4 className="text-xl font-bold mb-2">🏆 Le Défi des Champions</h4>
//     <p className="opacity-90">
//       Liyana, arrive-tu à dire <strong>"Shoukran Abbi"</strong> ? <br/>
//       Halim, arrive-tu à dire <strong>"Oummi Zahra"</strong> ?
//     </p>
//   </div>
// </Card>

//       </main>
      
      
//     </div>
//   );
// };
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
  const [activeTab, setActiveTab] = useState("sort"); // sort, exceptions, master
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
      {/* Header avec Score */}
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
        
        {/* Navigation des exercices */}
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