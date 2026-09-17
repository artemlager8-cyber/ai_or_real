import { UserLevel } from '../types';

export const LEVELS: UserLevel[] = [
  {
    level: 1,
    title: 'Новичок',
    minXp: 0,
    maxXp: 500,
    badge: '🌱',
  },
  {
    level: 2,
    title: 'Внимательный',
    minXp: 500,
    maxXp: 1200,
    badge: '🔍',
  },
  {
    level: 3,
    title: 'Детектив',
    minXp: 1200,
    maxXp: 2500,
    badge: '🕵️',
  },
  {
    level: 4,
    title: 'Эксперт',
    minXp: 2500,
    maxXp: 4500,
    badge: '⚡',
  },
  {
    level: 5,
    title: 'AI Hunter',
    minXp: 4500,
    maxXp: 99999,
    badge: '👑',
  },
];

export function getLevelByXp(xp: number): UserLevel {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

export function getStreakBonus(currentStreak: number): number {
  if (currentStreak <= 1) return 100;
  if (currentStreak === 2) return 120;
  if (currentStreak === 3) return 150;
  return 200; // 4 or more
}
