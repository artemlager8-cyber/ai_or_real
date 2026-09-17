import { GameStats } from '../types';

const STATS_STORAGE_KEY = 'ai_or_real_game_stats_v1';

export const DEFAULT_STATS: GameStats = {
  gamesPlayed: 0,
  totalCorrect: 0,
  totalAnswered: 0,
  bestScore: 0,
  totalXp: 0,
  maxStreak: 0,
};

export function loadGameStats(): GameStats {
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    const parsed = JSON.parse(raw);
    return {
      gamesPlayed: Number(parsed.gamesPlayed) || 0,
      totalCorrect: Number(parsed.totalCorrect) || 0,
      totalAnswered: Number(parsed.totalAnswered) || 0,
      bestScore: Number(parsed.bestScore) || 0,
      totalXp: Number(parsed.totalXp) || 0,
      maxStreak: Number(parsed.maxStreak) || 0,
    };
  } catch {
    return DEFAULT_STATS;
  }
}

export function saveGameStats(stats: GameStats): void {
  try {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Failed to save stats to localStorage', err);
  }
}

export function resetGameStats(): GameStats {
  try {
    localStorage.removeItem(STATS_STORAGE_KEY);
  } catch (err) {
    console.error('Failed to reset stats', err);
  }
  return DEFAULT_STATS;
}
