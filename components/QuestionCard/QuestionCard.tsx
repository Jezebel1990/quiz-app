import { getBGColor } from "./helpers";

type Props = {
    currentQuestionIndex: number;
    question: string;
    correctAnswer: string;
    options: Array<string>;
    userAnswer: string | undefined;
    onClick: (option: string, currentQuestionIndex: number) => void;
};

const QuestionCard: React.FC<Props> = ({ 
    currentQuestionIndex, 
    question, 
    options, 
    userAnswer, 
    correctAnswer, 
    onClick, 
}) => {
    return (
    <div>
        <p className='text-[20px] max-w-[400px]' 
        dangerouslySetInnerHTML={{ __html: question}} />
      <div className='flex flex-col items-center pt-8'>
      {options.map((option, index) => (
        <div
        key={index}
        onClick={() => onClick(option, currentQuestionIndex)}
        className={`${getBGColor(
            userAnswer,
            correctAnswer,
            option
        )} cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full my-2 rounded-[10px]`}
        >
            <span className='truncate' dangerouslySetInnerHTML={{ __html: option}}/>
            </div>
      ))}
      </div>
    </div>
);
};

export default QuestionCard;