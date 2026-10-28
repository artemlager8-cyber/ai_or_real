export type Language = 'ru' | 'en';

export type ItemCategory = 
  | 'People' 
  | 'Animals' 
  | 'Food' 
  | 'Nature' 
  | 'Rooms' 
  | 'Cars' 
  | 'Objects'
  | 'News'
  | 'Ads'
  | string;

export type AnswerType = 'AI' | 'REAL';

export interface GameItem {
  id: string;
  image: string;
  answer: AnswerType;
  category: ItemCategory;
  categoryRu: string;
  categoryEn?: string;
  title: string;
  titleEn?: string;
  explanation: string;
  explanationEn?: string;
  clues: string[];
  cluesEn?: string[];
}

export type Question = GameItem;

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
  titleEn?: string;
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
