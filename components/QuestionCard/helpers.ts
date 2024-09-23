export const getBGColor = (userAnswer: string | undefined, correctAnswer: string, options:string): string => {
    const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer: undefined;

    if ((isAnswerCorrect === true && options === userAnswer) || (isAnswerCorrect === false && options === correctAnswer))
        return 'bg-[#55AC78] text-white';
    if (isAnswerCorrect === false && options === userAnswer) return 'bg-[#db1f1f] text-white';

    return 'bg-white text-[#46178F]';
};