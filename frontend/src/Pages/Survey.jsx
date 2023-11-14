// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Survey() {
//   const questions = [
//     "Which of these subjects do you enjoy the most in school?",
//     "Which of these skills do you think you excel at?",
//     "What kind of work environment do you prefer?",
//     "If you could have a superpower, which one would it be?",
//     "If you could spend a day with a famous person, who would it be?",
//     "If you could change one thing in the world, what would it be?",
//     "What type of TV shows or movies do you enjoy?",
//     "If you could start your own business, what would it be?",
//     "What type of problems do you enjoy solving?",
//   ];

//   const answerChoices = [
//     [
//       "Physics (Engineering)",
//       "Business Studies (Business Analysis)",
//       "Biology (Medicine)",
//       "Visual Arts (Art)",
//       "Social Studies (Social Sciences)",
//       "Literature (Humanities)",
//       "ICT or Elective IT (Information Technology)",
//       "Not Sure",
//     ],
//     [
//       "Problem-solving (Engineering)",
//       "Strategic thinking (Business Analysis)",
//       "Empathy and understanding (Medicine)",
//       "Creativity and imagination (Art)",
//       "Critical thinking (Social Sciences)",
//       "Communication and expression (Humanities)",
//       "Technical skills (Information Technology)",
//       "Not Sure",
//     ],
//     [
//       "Structured and predictable (Engineering)",
//       "Corporate and strategic (Business Analysis)",
//       "Helping and healing (Medicine)",
//       "Creative and free-form (Art)",
//       "Research-oriented (Social Sciences)",
//       "Collaborative and expressive (Humanities)",
//       "Tech-oriented and innovative (Information Technology)",
//       "Not Sure",
//     ],
//     [
//       "Ability to build and fix anything (Engineering)",
//       "Ability to heal others (Medicine)",
//       "Ability to create things out of thin air (Art)",
//       "Ability to understand how societies work (Social Sciences)",
//       "Ability to express any thought or idea perfectly (Humanities)",
//       "Ability to communicate with machines (Information Technology)",
//       "Not Sure",
//     ],
//     [
//       "Elon Musk (Engineering)",
//       "Florence Nightingale (Medicine)",
//       "Picasso (Art)",
//       "Nelson Mandela (Social Sciences)",
//       "Shakespeare (Humanities)",
//       "Bill Gates (Information Technology)",
//       "Not Sure",
//     ],
//     [
//       "Build more sustainable cities (Engineering)",
//       "Improve healthcare for everyone (Medicine)",
//       "Promote art and creativity (Art)",
//       "Achieve social justice (Social Sciences)",
//       "Improve education and literacy (Humanities)",
//       "Increase access to technology (Information Technology)",
//       "Not Sure",
//     ],
//     [
//       "Science fiction or documentaries (Engineering)",
//       "Medical dramas or documentaries (Medicine)",
//       "Art films or creative shows (Art)",
//       "Historical dramas or social documentaries (Social Sciences)",
//       "Classic films or philosophical shows (Humanities)",
//       "Tech-related shows or documentaries (Information Technology)",
//       "Not Sure",
//     ],
//     [
//       "A tech startup (Engineering)",
//       "A healthcare clinic (Medicine)",
//       "An art studio (Art)",
//       "A non-profit organization (Social Sciences)",
//       "A publishing house (Humanities)",
//       "A software company (Information Technology)",
//       "Not Sure",
//     ],
//     [
//       "Technical or logical problems (Engineering)",
//       "Health-related or care-giving problems (Medicine)",
//       "Creative or aesthetic problems (Art)",
//       "Social or community problems (Social Sciences)",
//       "Social or community problems (Social Sciences)",
//       "Philosophical or ethical problems (Humanities)",
//       "Computer or tech problems (Information Technology)",
//       "Not Sure",
//     ],
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState(
//     Array(questions.length).fill(null)
//   );

//   const handleNextClick = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePreviousClick = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleAnswerClick = (answerIndex) => {
//     const updatedAnswers = [...selectedAnswers];
//     updatedAnswers[currentQuestionIndex] = answerIndex;
//     setSelectedAnswers(updatedAnswers);
//   };

//   const isLastQuestion = currentQuestionIndex === questions.length - 1;
//   const buttonText = isLastQuestion ? "View Recommended Courses" : "Next";

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="bg-black w-full min-h-[20vh] flex items-center justify-center text-white text-3xl">
//         {questions[currentQuestionIndex]}
//       </div>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-5">
//         {answerChoices[currentQuestionIndex].map((choice, choiceIndex) => (
//           <div
//             key={choiceIndex}
//             onClick={() => handleAnswerClick(choiceIndex)}
//             className={`w-64 h-32 border border-black text-black text-center
//                         hover:bg-green-200 transition-colors ${
//                           selectedAnswers[currentQuestionIndex] === choiceIndex
//                             ? "bg-green-200"
//                             : ""
//                         }`}
//           >
//             {choice}
//           </div>
//         ))}
//       </div>
//       <div className="mt-5">
//         {currentQuestionIndex > 0 && (
//           <button
//             onClick={handlePreviousClick}
//             className="border border-green-500 rounded-md px-4 py-2 text-base font-semibold hover:bg-green-200 transition-colors"
//           >
//             Previous
//           </button>
//         )}

//         {!isLastQuestion ? (
//           <button
//             onClick={handleNextClick}
//             className="border border-green-500 text-green-500 rounded-md px-4 py-2 ml-2 text-base font-semibold hover-bg-green-200 transition-colors"
//           >
//             {buttonText}
//           </button>
//         ) : (
//           <Link to="/recommended-courses">
//             <button className="bg-green-500 text-white rounded-md px-4 py-2 ml-2 text-base font-semibold hover-bg-green-200 transition-colors">
//               {buttonText}
//             </button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Survey;
