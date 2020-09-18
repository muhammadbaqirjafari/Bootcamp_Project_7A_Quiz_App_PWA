import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import { Difficulty } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.style';

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS, 
      Difficulty.EASY
    );
    
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // Users Answers
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = answer === questions[number].correct_answer;
      // Update User Scores
      if (correct) setScore(prev => prev + 1);
      // Update Answer Array
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    // Check if we are not at last question
    const nextQuestionNumber = number + 1;

    if(nextQuestionNumber === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(number + 1);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
          <h1>React Quiz By Muhammad Baqir</h1>
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          ) : null}
          {!gameOver && <p className="score">Score: {score}</p>}
          {loading && <p>Loading Questions ...</p> }
          {!gameOver && !loading && <QuestionCard 
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />}
          {!gameOver && !loading && userAnswers.length === number + 1 && number + 1 !== TOTAL_QUESTIONS && <button className="next" onClick={nextQuestion}>
            Next Question
          </button>}
      </Wrapper>
    </>
  );
}

export default App;