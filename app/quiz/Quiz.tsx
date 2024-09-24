'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Question } from '../../types/quiz';

import Button from '../../components/Button/Button';

import { QuestionsState } from '../../types/quiz';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

type Props = {
    questions: QuestionsState;
    totalQuestions: number; 
};

const Quiz = ({ questions, totalQuestions }: Props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState<number>(0);
    const [score, setScore] = React.useState<number>(0);
    const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>({});

    const router = useRouter();
    const isQuestionAnswered = !!userAnswers[currentQuestionIndex];


    const handleOnAnswerClick = (answer: string) => {
        if (isQuestionAnswered) return;

        const currentQuestion = questions[currentQuestionIndex] as Question;

        const correctAnswerIndex: number = Number(currentQuestion.correctAnswer);
        const correctAnswer: string = currentQuestion.options[correctAnswerIndex];


        const isCorrect = correctAnswer === answer;
    
       if (isCorrect) setScore(prev => prev + 1);

       setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
    };
    const handleChangeQuestion = (step: number) => {
        const newQuestionIndex = currentQuestionIndex + step;
        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
        setCurrentQuestionIndex(newQuestionIndex);
    }
    const currentQuestion = questions[currentQuestionIndex];

    const handleFinish = () => {
        localStorage.setItem('quizScore', score.toString()); 
        router.push('/result'); 
    };
    
    return (
    <div className='text-black text-center'>
     <p className='p-8 font-bold text-[20px]'>Pontuação: {score}</p>
     <p className='text-[#46178F] font-bold pb-2 text-[14px]'>
     Pergunta {currentQuestionIndex + 1} de {totalQuestions}
     </p>
     <QuestionCard
     currentQuestionIndex={currentQuestionIndex}
     question={currentQuestion.question}
     options={currentQuestion.options}
     userAnswer={userAnswers[currentQuestionIndex]}
     correctAnswer={currentQuestion.options[parseInt(currentQuestion.correctAnswer)]}
     onClick={handleOnAnswerClick}
     
     />
    <div className='flex justify-between mt-16'>
    <Button 
        text='Voltar' 
        onClick={() => handleChangeQuestion(-1)} />
        <Button
         text={currentQuestionIndex === totalQuestions - 1 ? 'Fim' : 'Próxima'}
         onClick={currentQuestionIndex === totalQuestions - 1 ? handleFinish : () => handleChangeQuestion(1)}
         />

    </div>
    </div>
    );
};

export default Quiz;