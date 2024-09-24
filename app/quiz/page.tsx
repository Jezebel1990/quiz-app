'use client';
import { shuffleArray } from "../../utils/arrayUtils";
import { useEffect, useState } from 'react';
import Quiz from "./Quiz";
import { Difficulty, QuestionsState } from "../../types/quiz";
import { useDifficulty } from "../../context/DifficultyContext";

const TOTAL_QUESTIONS = 6;

const getQuestions = async (difficulty: Difficulty): Promise<QuestionsState> => {
  const endpoint = `https://quizapi-4g8l.onrender.com/quiz/difficulty/${difficulty}`;
  const response = await fetch(endpoint, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Erro ao buscar as perguntas');
  }

  const data = await response.json();
  console.log(`Perguntas recebidas para a dificuldade "${difficulty}":`, data);

  return data.slice(0, TOTAL_QUESTIONS).map(({ id, question, options, correctAnswer }: any) => ({
    id,
    question,
    options,
    correctAnswer,
    answers: shuffleArray([...options]),
  }));
};

const QuizPage = () => {
  const { difficulty } = useDifficulty();
  const [questions, setQuestions] = useState<QuestionsState>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const fetchedQuestions = await getQuestions(difficulty);
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Erro ao buscar perguntas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [difficulty]);

  if (loading) {
    return (
        <div className="mt-10">
          <p className="mt-40 text-[#46178F] text-lg font-medium">
            Carregando, por favor aguarde...
          </p>
          <div className="flex justify-center mt-10">
            <div
              className=" inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-[#46178F] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>Nenhuma pergunta encontrada para este nível de dificuldade.</div>;
  }

  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};

export default QuizPage;
