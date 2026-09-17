export type ItemCategory = 
  | 'People' 
  | 'Animals' 
  | 'Food' 
  | 'Nature' 
  | 'Rooms' 
  | 'Cars' 
  | 'Objects';

export type AnswerType = 'AI' | 'REAL';

export interface GameItem {
  id: string;
  image: string;
  answer: AnswerType;
  category: ItemCategory;
  categoryRu: string;
  title: string;
  explanation: string;
  clues: string[];
}

export type ScreenState = 'HOME' | 'PLAYING' | 'STATS' | 'RULES' | 'GAMEOVER';

export interface GameStats {
  gamesPlayed: number;
  totalCorrect: number;
  totalAnswered: number;
  bestScore: number;
  totalXp: number;
  maxStreak: number;
}

export interface UserLevel {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
  badge: string;
}

export interface AnswerResult {
  isCorrect: boolean;
  userAnswer: AnswerType;
  earnedXp: number;
  streak: number;
  item: GameItem;
}
