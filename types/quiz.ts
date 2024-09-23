export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
  }


  export type Question = {
    correctAnswer: string;
    difficulty: Difficulty;
    question: string;
    options: Array<string>;
  };
  
  export type QuestionsState = Array<Question & { answers: Array<string> }>;