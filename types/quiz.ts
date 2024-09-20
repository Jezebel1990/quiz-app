export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
  }


  export type Question = {
    correctAnswer: number;
    difficulty: Difficulty;
    options: Array<string>;
    question: string;
  };
  
  export type QuestionsState = Array<Question & { answers: Array<string> }>;