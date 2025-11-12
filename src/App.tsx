import React, { useState, useEffect } from 'react';
import './App.css';
import { getQuestions, Question } from './questions';

interface QuizResult {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface Attempt {
  date: string;
  score: number;
  total: number;
  percentage: number;
  stars: number;
}

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [stars, setStars] = useState<number>(0);

  // Load questions from external file
  useEffect(() => {
    const loadQuestions = async () => {
      const questionsData = await getQuestions();
      setQuestions(questionsData);
      setAnswers(new Array(questionsData.length).fill(""));
    };

    loadQuestions();
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: string[]) => {
    let correctCount = 0;
    finalAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setStars(Math.floor((correctCount / questions.length) * 5));
    setShowResults(true);
  };

  // ✅ Save the attempt only AFTER results are shown (and score updated)
  useEffect(() => {
    if (showResults && questions.length > 0) {
      const attempt: Attempt = {
        date: new Date().toLocaleString(),
        score,
        total: questions.length,
        percentage: Math.round((score / questions.length) * 100),
        stars: Math.floor((score / questions.length) * 5),
      };

      const previousAttempts: Attempt[] = JSON.parse(localStorage.getItem("quizAttempts") || "[]");
      // Avoid saving duplicate of same attempt (if React renders twice)
      const last = previousAttempts[previousAttempts.length - 1];
      if (!last || last.date !== attempt.date) {
        previousAttempts.push(attempt);
        localStorage.setItem("quizAttempts", JSON.stringify(previousAttempts));
      }
    }
  }, [showResults, score, questions.length]);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setAnswers(new Array(questions.length).fill(''));
    setShowResults(false);
    setScore(0);
    setStars(0);
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < count ? '⭐' : '☆'
    ).join('');
  };

  if (questions.length === 0) {
    return <div className="App">Loading questions...</div>;
  }

  // ✅ Results Screen
  if (showResults) {
    const results: QuizResult[] = questions.map((q, index) => ({
      question: q.question,
      userAnswer: answers[index],
      correctAnswer: q.correctAnswer,
      isCorrect: answers[index] === q.correctAnswer
    }));

    // Load all previous attempts
    const allAttempts: Attempt[] = JSON.parse(localStorage.getItem("quizAttempts") || "[]");
    // ✅ Exclude current one from “Past Attempts” display
    const previousAttempts = allAttempts.slice(0, -1);

    return (
      <div className="App">
        <h1>Quiz Results</h1>

        <div className="results-summary">
          <h2>Score: {score}/{questions.length}</h2>
          <div className="stars">{renderStars(stars)}</div>
          <p>Percentage: {Math.round((score / questions.length) * 100)}%</p>
        </div>
        {previousAttempts.length === 0 && (<p>This was your first attempt!</p>)}
<button onClick={resetQuiz} className="reset-button">Take Quiz Again</button>

        <div className="results-details">
          {results.map((result, index) => (
            <div key={index} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
              <h3>Question {index + 1}: {result.question}</h3>
              <p>Your answer: {result.userAnswer || 'No answer'}</p>
              <p>Correct answer: {result.correctAnswer}</p>
              <p>{result.isCorrect ? '✓ Correct' : '✗ Incorrect'}</p>
            </div>
          ))}
        </div>

        

        {/* ✅ Attempt History */}
        <div className="attempt-history">
          <h2>Past Attempts</h2>
          {previousAttempts.length === 0 ? (
            <p>No previous attempts found.</p>
          ) : (
            <table className="attempt-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Score</th>
                  <th>Percentage</th>
                  <th>Stars</th>
                </tr>
              </thead>
              <tbody>
                {previousAttempts.map((a, index) => (
                  <tr key={index}>
                    <td>{a.date}</td>
                    <td>{a.score}/{a.total}</td>
                    <td>{a.percentage}%</td>
                    <td>{renderStars(a.stars)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }

  // ✅ Quiz Screen
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      <h1 className=''><img src="/quiz.png" className='header-image' alt='' height={30} width={30} />Quiz App</h1>
      <div className="quiz-container">
        <div className="question-counter">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="question">
          <h2>{currentQuestion.question}</h2>
          <p><strong>Topic:</strong> {currentQuestion.topic}</p>
        </div>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="next-button"
        >
          {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default App;
