import { Language } from '../types';

export interface Translations {
  // Brand & Header
  brandTagline: string;
  homeTitle: string;
  rulesTitle: string;
  statsTitle: string;
  levelBadge: (level: number) => string;

  // Home Screen
  mediaGameBadge: string;
  gameConceptBadge: string;
  gameTitle: string;
  gameSlogan: string;
  mainQuestionQuote: string;
  gameSubtitle: string;
  gameDescription: string;
  playBtn: string;
  playButton: string;
  aiCardTitle: string;
  aiCardSub: string;
  aiCardClues: string;
  realCardTitle: string;
  realCardSub: string;
  realCardClues: string;
  vs: string;
  vsDivider: string;
  bestScoreLabel: string;
  currentLevelLabel: string;
  recordStreakLabel: string;
  inARowStreak: (streak: number) => string;
  consecutiveCount: (streak: number) => string;
  statsBtn: string;
  rulesBtn: string;
  howToPlayBtn: string;
  feedbackLink: string;

  // Game Screen
  questionProgress: (current: number, total: number) => string;
  whatIsThis: string;
  streakBonusHint: (bonus: number) => string;
  zoomBtn: string;
  zoomHint: string;
  tapToZoom: string;
  loadingImage: string;
  imageLoading: string;
  categoryLabel: string;
  aiBtn: string;
  aiSub: string;
  aiSubtitle: string;
  realBtn: string;
  realSub: string;
  realSubtitle: string;

  // Result Feedback
  correctTitle: string;
  incorrectTitle: string;
  streakBanner: (streak: number) => string;
  streakBonusBadge: string;
  correctAnswerLabel: string;
  aiAnswerText: string;
  realAnswerText: string;
  whyTitle: string;
  cluesToCheckTitle: string;
  nextBtn: string;
  gameOverBtn: string;

  // Game Over Screen
  gameOverTitle: string;
  sessionSub: string;
  investigationSession: string;
  answersLabel: string;
  correctCountSub: string;
  correctSublabel: string;
  scoreLabel: string;
  pointsLabel: string;
  accuracyLabel: string;
  resultSub: string;
  resultSublabel: string;
  highPerfTitle: string;
  highAccuracyTitle: string;
  highPerfSub: string;
  highAccuracyDesc: string;
  lowPerfTitle: string;
  lowAccuracyTitle: string;
  lowPerfSub: string;
  lowAccuracyDesc: string;
  yourStatusLabel: string;
  yourStatus: string;
  totalXpLabel: (xp: number) => string;
  playAgainBtn: string;
  feedbackBtn: string;
  toHomeBtn: string;
  homeBtn: string;

  // Stats Screen
  statsHeader: string;
  myStatsTitle: string;
  backBtn: string;
  resetStatsTitle: string;
  resetStatsTooltip: string;
  currentLevelHeader: (level: number) => string;
  currentRankBadge: (level: number) => string;
  totalXpEarned: (xp: number) => string;
  totalEarnedXp: (xp: number) => string;
  toNextLevel: (title: string) => string;
  progressToNextRank: (title: string) => string;
  maxLevelReached: string;
  maxRankReached: string;
  gamesPlayedLabel: string;
  totalCorrectLabel: string;
  correctAnswersCountLabel: string;
  accuracyRateLabel: string;
  accuracyMetricLabel: string;
  bestScoreMetricLabel: string;
  maxStreakLabel: string;
  maxStreakMetricLabel: string;
  currentRankMetricLabel: string;
  detectiveHierarchyTitle: string;
  fromXpText: (xp: number) => string;
  fromMinXp: (xp: number) => string;
  statusCurrent: string;
  currentBadge: string;
  statusAchieved: string;
  achievedBadge: string;
  statusLocked: string;
  lockedBadge: string;
  resetModalTitle: string;
  resetConfirmTitle: string;
  resetModalDesc: string;
  resetConfirmDesc: string;
  cancelBtn: string;
  confirmResetBtn: string;
  returnBtn: string;

  // Rules Screen
  rulesHeader: string;
  howToPlayTitle: string;
  warningNoticeTitle: string;
  warningTitle: string;
  warningNoticeText: string;
  warningDesc: string;
  rulesSectionTitle: string;
  gameRulesTitle: string;
  rulesSteps: string[];
  ruleSteps: string[];
  pointsSectionTitle: string;
  scoringTitle: string;
  streakBreakdown1: string;
  streak1: string;
  streakBreakdown2: string;
  streak2: string;
  streakBreakdown3: string;
  streak3: string;
  streakBreakdown4: string;
  streak4: string;
  streakResetNote: string;
  streakResetDesc: string;
  cheatSheetTitle: string;
  cluesCheatSheetTitle: string;
  cheatSheetItems: Array<{ icon: string; title: string; desc: string }>;
  cheatSheetClues: Array<{ icon: string; title: string; desc: string }>;
  startPlayBtn: string;
  gotItStartGameBtn: string;

  // Image Modal
  inspectTitle: (title: string) => string;
  inspectInstructions: string;
  zoomInTitle: string;
  zoomOutTitle: string;
  resetZoomTitle: string;
  closeBtn: string;

  // Footer
  footerText: string;
  footerNote: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ru: {
    // Brand & Header
    brandTagline: 'ТРЕНАЖЁР МЕДИАГРАМОТНОСТИ',
    homeTitle: 'Главный экран',
    rulesTitle: 'Правила игры',
    statsTitle: 'Моя статистика',
    levelBadge: (level) => `Ур. ${level}`,

    // Home Screen
    mediaGameBadge: 'Обучающая медиа-игра',
    gameConceptBadge: 'Обучающая медиа-игра',
    gameTitle: 'AI or Real?',
    gameSlogan: '«Сможешь отличить настоящее?»',
    mainQuestionQuote: '«Сможешь отличить настоящее?»',
    gameSubtitle: 'Тренируй зоркость: находи артефакты нейросетей и настоящие детали реальных фото!',
    gameDescription: 'Тренируй зоркость: находи артефакты нейросетей и настоящие детали реальных фото!',
    playBtn: 'ИГРАТЬ',
    playButton: 'ИГРАТЬ',
    aiCardTitle: 'AI ГЕНЕРАЦИЯ',
    aiCardSub: 'Артефакты, пальцы, блики',
    aiCardClues: 'Артефакты, пальцы, блики',
    realCardTitle: 'РЕАЛЬНОЕ ФОТО',
    realCardSub: 'Фактура, поры, физика',
    realCardClues: 'Фактура, поры, физика',
    vs: 'VS',
    vsDivider: 'VS',
    bestScoreLabel: 'Лучший результат',
    currentLevelLabel: 'Текущий уровень',
    recordStreakLabel: 'Рекордная серия:',
    inARowStreak: (streak) => `${streak} подряд`,
    consecutiveCount: (streak) => `${streak} подряд`,
    statsBtn: 'Статистика',
    rulesBtn: 'Как играть?',
    howToPlayBtn: 'Как играть?',
    feedbackLink: 'Оставить отзыв',

    // Game Screen
    questionProgress: (current, total) => `Вопрос ${current} / ${total}`,
    whatIsThis: 'Что это?',
    streakBonusHint: (bonus) => `Серия даёт бонус: следующий ответ принесет +${bonus} XP`,
    zoomBtn: 'Приблизить',
    zoomHint: 'Нажми для зума',
    tapToZoom: 'Нажми для зума',
    loadingImage: 'Загрузка изображения...',
    imageLoading: 'Загрузка изображения...',
    categoryLabel: 'Категория',
    aiBtn: '🤖 AI',
    aiSub: 'Нейросеть',
    aiSubtitle: 'Нейросеть',
    realBtn: '📷 REAL',
    realSub: 'Настоящее фото',
    realSubtitle: 'Настоящее фото',

    // Result Feedback
    correctTitle: '✓ ПРАВИЛЬНО!',
    incorrectTitle: '✕ НЕПРАВИЛЬНО',
    streakBanner: (streak) => `Серия ${streak} подряд!`,
    streakBonusBadge: 'Бонус серии',
    correctAnswerLabel: 'Правильный ответ:',
    aiAnswerText: '🤖 AI ГЕНЕРАЦИЯ',
    realAnswerText: '📷 РЕАЛЬНОЕ ФОТО',
    whyTitle: 'Почему?',
    cluesToCheckTitle: 'Признаки для проверки:',
    nextBtn: 'СЛЕДУЮЩЕЕ',
    gameOverBtn: 'ИТОГИ ИГРЫ',

    // Game Over Screen
    gameOverTitle: 'ИГРА ЗАВЕРШЕНА',
    sessionSub: 'Сессия детективного расследования',
    investigationSession: 'Сессия детективного расследования',
    answersLabel: 'Ответы',
    correctCountSub: 'правильных',
    correctSublabel: 'правильных',
    scoreLabel: 'Очки',
    pointsLabel: 'Очки',
    accuracyLabel: 'Точность',
    resultSub: 'результат',
    resultSublabel: 'результат',
    highPerfTitle: '🔥 Отлично! Ты хорошо замечаешь признаки AI.',
    highAccuracyTitle: '🔥 Отлично! Ты хорошо замечаешь признаки AI.',
    highPerfSub: 'Ты становишься настоящим AI-детективом!',
    highAccuracyDesc: 'Ты становишься настоящим AI-детективом!',
    lowPerfTitle: '💡 Попробуй ещё раз и внимательнее смотри на детали.',
    lowAccuracyTitle: '💡 Попробуй ещё раз и внимательнее смотри на детали.',
    lowPerfSub: 'Обращай внимание на пальцы, надписи и неестественные тени.',
    lowAccuracyDesc: 'Обращай внимание на пальцы, надписи и неестественные тени.',
    yourStatusLabel: 'Твой статус:',
    yourStatus: 'Твой статус',
    totalXpLabel: (xp) => `Всего ${xp} XP`,
    playAgainBtn: 'ИГРАТЬ СНОВА',
    feedbackBtn: '💬 Оставить отзыв (1 минута)',
    toHomeBtn: 'На главную',
    homeBtn: 'На главную',

    // Stats Screen
    statsHeader: 'Моя статистика',
    myStatsTitle: 'Моя статистика',
    backBtn: 'Назад',
    resetStatsTitle: 'Сбросить статистику',
    resetStatsTooltip: 'Сбросить статистику',
    currentLevelHeader: (level) => `Текущий уровень: ${level}`,
    currentRankBadge: (level) => `Текущий уровень: ${level}`,
    totalXpEarned: (xp) => `Всего набрано: ${xp} XP`,
    totalEarnedXp: (xp) => `Всего набрано: ${xp} XP`,
    toNextLevel: (title) => `До уровня «${title}»`,
    progressToNextRank: (title) => `До уровня «${title}»`,
    maxLevelReached: '👑 Максимальный уровень достигнут!',
    maxRankReached: '👑 Максимальный уровень достигнут!',
    gamesPlayedLabel: 'Игр сыграно',
    totalCorrectLabel: 'Правильных ответов',
    correctAnswersCountLabel: 'Правильных ответов',
    accuracyRateLabel: 'Точность ответов',
    accuracyMetricLabel: 'Точность ответов',
    bestScoreMetricLabel: 'Лучший результат',
    maxStreakLabel: 'Макс. серия',
    maxStreakMetricLabel: 'Макс. серия',
    currentRankMetricLabel: 'Текущий уровень',
    detectiveHierarchyTitle: 'Иерархия детективов',
    fromXpText: (xp) => `от ${xp} XP`,
    fromMinXp: (xp) => `от ${xp} XP`,
    statusCurrent: 'Текущий',
    currentBadge: 'Текущий',
    statusAchieved: '✓ Достигнут',
    achievedBadge: '✓ Достигнут',
    statusLocked: '🔒 Заблокирован',
    lockedBadge: '🔒 Заблокирован',
    resetModalTitle: 'Сбросить всю статистику?',
    resetConfirmTitle: 'Сбросить всю статистику?',
    resetModalDesc: 'Очки, уровень и серии будут обнулены. Это действие нельзя отменить.',
    resetConfirmDesc: 'Очки, уровень и серии будут обнулены. Это действие нельзя отменить.',
    cancelBtn: 'Отмена',
    confirmResetBtn: 'Сбросить',
    returnBtn: 'Вернуться',

    // Rules Screen
    rulesHeader: 'Как играть?',
    howToPlayTitle: 'Как играть?',
    warningNoticeTitle: 'Важное предупреждение:',
    warningTitle: 'Важное предупреждение',
    warningNoticeText: 'Игра не является профессиональным детектором AI. Её цель — научить внимательнее относиться к изображениям в интернете и развивать медиаграмотность.',
    warningDesc: 'Игра не является профессиональным детектором AI. Её цель — научить внимательнее относиться к изображениям в интернете и развивать медиаграмотность.',
    rulesSectionTitle: 'Правила игры',
    gameRulesTitle: 'Правила игры',
    rulesSteps: [
      'Внимательно посмотри на изображение (можно нажать для зума).',
      'Реши: создано ли оно искусственным интеллектом (AI) или это реальное фото (REAL).',
      'Выбери кнопку: 🤖 AI или 📷 REAL.',
      'Мгновенно узнай правильный ответ.',
      'Изучи объяснение признаков и подсказки.',
      'Набирай XP за серии правильных ответов и повышай уровень детектива!',
    ],
    ruleSteps: [
      'Внимательно посмотри на изображение (можно нажать для зума).',
      'Реши: создано ли оно искусственным интеллектом (AI) или это реальное фото (REAL).',
      'Выбери кнопку: 🤖 AI или 📷 REAL.',
      'Мгновенно узнай правильный ответ.',
      'Изучи объяснение признаков и подсказки.',
      'Набирай XP за серии правильных ответов и повышай уровень детектива!',
    ],
    pointsSectionTitle: 'Очки и серии (Streak)',
    scoringTitle: 'Очки и серии (Streak)',
    streakBreakdown1: '1 верный: +100 XP',
    streak1: '1 верный',
    streakBreakdown2: '2 подряд: +120 XP',
    streak2: '2 подряд',
    streakBreakdown3: '3 подряд: +150 XP',
    streak3: '3 подряд',
    streakBreakdown4: '4+ подряд: +200 XP 🔥',
    streak4: '4+ подряд',
    streakResetNote: 'При ошибке серия сбрасывается до 0, а за неверный ответ дается +0 XP.',
    streakResetDesc: 'При ошибке серия сбрасывается до 0, а за неверный ответ дается +0 XP.',
    cheatSheetTitle: 'Шпаргалка: где прячется AI?',
    cluesCheatSheetTitle: 'Шпаргалка: где прячется AI?',
    cheatSheetItems: [
      {
        icon: '✋',
        title: 'Пальцы и руки',
        desc: 'Нейросети часто путают количество пальцев, делают их слишком длинными или «сросшимися».',
      },
      {
        icon: '👁️',
        title: 'Глаза и зрачки',
        desc: 'В AI-портретах зрачки могут быть некруглыми, а форма бликов света в левом и правом глазу не совпадает.',
      },
      {
        icon: '🔤',
        title: 'Текст и вывески',
        desc: 'Настоящие фото содержат читаемые буквы. У AI надписи на футболках, вывесках и часах превращаются в нечитаемые символы.',
      },
      {
        icon: '🪞',
        title: 'Отражения и тени',
        desc: 'В очках, зеркалах и лужах часто отражаются предметы, которых нет в кадре, или тени падают в разные стороны.',
      },
      {
        icon: '✨',
        title: 'Текстура кожи и шерсти',
        desc: 'У искусственных людей кожа часто чересчур «пластиковая» или «восковая», без естественных микропор и морщинок.',
      },
    ],
    cheatSheetClues: [
      {
        icon: '✋',
        title: 'Пальцы и руки',
        desc: 'Нейросети часто путают количество пальцев, делают их слишком длинными или «сросшимися».',
      },
      {
        icon: '👁️',
        title: 'Глаза и зрачки',
        desc: 'В AI-портретах зрачки могут быть некруглыми, а форма бликов света в левом и правом глазу не совпадает.',
      },
      {
        icon: '🔤',
        title: 'Текст и вывески',
        desc: 'Настоящие фото содержат читаемые буквы. У AI надписи на футболках, вывесках и часах превращаются в нечитаемые символы.',
      },
      {
        icon: '🪞',
        title: 'Отражения и тени',
        desc: 'В очках, зеркалах и лужах часто отражаются предметы, которых нет в кадре, или тени падают в разные стороны.',
      },
      {
        icon: '✨',
        title: 'Текстура кожи и шерсти',
        desc: 'У искусственных людей кожа часто чересчур «пластиковая» или «восковая», без естественных микропор и морщинок.',
      },
    ],
    startPlayBtn: 'Понятно, начать игру!',
    gotItStartGameBtn: 'Понятно, начать игру!',

    // Image Modal
    inspectTitle: (title) => `🔍 ${title}`,
    inspectInstructions: 'Внимательно осмотри пальцы, фон, блики и надписи',
    zoomInTitle: 'Увеличить',
    zoomOutTitle: 'Уменьшить',
    resetZoomTitle: 'Сброс масштаба',
    closeBtn: 'Закрыть',

    // Footer
    footerText: 'AI or Real? • Стартап-проект CS-2407 • Медиаграмотность',
    footerNote: 'AI or Real? • Стартап-проект CS-2407 • Медиаграмотность',
  },

  en: {
    // Brand & Header
    brandTagline: 'MEDIA LITERACY TRAINER',
    homeTitle: 'Home Screen',
    rulesTitle: 'Game Rules',
    statsTitle: 'My Statistics',
    levelBadge: (level) => `Lvl. ${level}`,

    // Home Screen
    mediaGameBadge: 'Educational Media Game',
    gameConceptBadge: 'Educational Media Game',
    gameTitle: 'AI or Real?',
    gameSlogan: '"Can you tell what is real?"',
    mainQuestionQuote: '"Can you tell what is real?"',
    gameSubtitle: 'Train your eagle eyes: spot neural network artifacts and authentic details of real photos!',
    gameDescription: 'Train your eagle eyes: spot neural network artifacts and authentic details of real photos!',
    playBtn: 'PLAY',
    playButton: 'PLAY',
    aiCardTitle: 'AI GENERATED',
    aiCardSub: 'Artifacts, fingers, glares',
    aiCardClues: 'Artifacts, fingers, glares',
    realCardTitle: 'REAL PHOTO',
    realCardSub: 'Texture, pores, physics',
    realCardClues: 'Texture, pores, physics',
    vs: 'VS',
    vsDivider: 'VS',
    bestScoreLabel: 'Best Score',
    currentLevelLabel: 'Current Level',
    recordStreakLabel: 'Record Streak:',
    inARowStreak: (streak) => `${streak} in a row`,
    consecutiveCount: (streak) => `${streak} in a row`,
    statsBtn: 'Statistics',
    rulesBtn: 'How to play?',
    howToPlayBtn: 'How to play?',
    feedbackLink: 'Leave feedback',

    // Game Screen
    questionProgress: (current, total) => `Question ${current} / ${total}`,
    whatIsThis: 'What is this?',
    streakBonusHint: (bonus) => `Streak bonus: next correct answer earns +${bonus} XP`,
    zoomBtn: 'Zoom In',
    zoomHint: 'Tap to zoom',
    tapToZoom: 'Tap to zoom',
    loadingImage: 'Loading image...',
    imageLoading: 'Loading image...',
    categoryLabel: 'Category',
    aiBtn: '🤖 AI',
    aiSub: 'Generated',
    aiSubtitle: 'Generated',
    realBtn: '📷 REAL',
    realSub: 'Real photo',
    realSubtitle: 'Real photo',

    // Result Feedback
    correctTitle: '✓ CORRECT!',
    incorrectTitle: '✕ INCORRECT',
    streakBanner: (streak) => `Streak: ${streak} in a row!`,
    streakBonusBadge: 'Streak Bonus',
    correctAnswerLabel: 'Correct answer:',
    aiAnswerText: '🤖 AI GENERATED',
    realAnswerText: '📷 REAL PHOTO',
    whyTitle: 'Why?',
    cluesToCheckTitle: 'Key clues to look for:',
    nextBtn: 'NEXT',
    gameOverBtn: 'VIEW RESULTS',

    // Game Over Screen
    gameOverTitle: 'GAME OVER',
    sessionSub: 'Detective investigation session',
    investigationSession: 'Detective investigation session',
    answersLabel: 'Answers',
    correctCountSub: 'correct',
    correctSublabel: 'correct',
    scoreLabel: 'Score',
    pointsLabel: 'Points',
    accuracyLabel: 'Accuracy',
    resultSub: 'result',
    resultSublabel: 'result',
    highPerfTitle: '🔥 Awesome! You spot AI artifacts really well.',
    highAccuracyTitle: '🔥 Awesome! You spot AI artifacts really well.',
    highPerfSub: 'You are becoming a genuine AI detective!',
    highAccuracyDesc: 'You are becoming a genuine AI detective!',
    lowPerfTitle: '💡 Try again and look closer at subtle details.',
    lowAccuracyTitle: '💡 Try again and look closer at subtle details.',
    lowPerfSub: 'Pay extra attention to hands, lettering, and irregular shadows.',
    lowAccuracyDesc: 'Pay extra attention to hands, lettering, and irregular shadows.',
    yourStatusLabel: 'Your status:',
    yourStatus: 'Your status',
    totalXpLabel: (xp) => `Total ${xp} XP`,
    playAgainBtn: 'PLAY AGAIN',
    feedbackBtn: '💬 Leave feedback (1 min)',
    toHomeBtn: 'To Home',
    homeBtn: 'To Home',

    // Stats Screen
    statsHeader: 'My Statistics',
    myStatsTitle: 'My Statistics',
    backBtn: 'Back',
    resetStatsTitle: 'Reset Statistics',
    resetStatsTooltip: 'Reset Statistics',
    currentLevelHeader: (level) => `Current Level: ${level}`,
    currentRankBadge: (level) => `Current Level: ${level}`,
    totalXpEarned: (xp) => `Total Earned: ${xp} XP`,
    totalEarnedXp: (xp) => `Total Earned: ${xp} XP`,
    toNextLevel: (title) => `To "${title}" level`,
    progressToNextRank: (title) => `To "${title}" level`,
    maxLevelReached: '👑 Maximum level achieved!',
    maxRankReached: '👑 Maximum level achieved!',
    gamesPlayedLabel: 'Games Played',
    totalCorrectLabel: 'Correct Answers',
    correctAnswersCountLabel: 'Correct Answers',
    accuracyRateLabel: 'Accuracy Rate',
    accuracyMetricLabel: 'Accuracy Rate',
    bestScoreMetricLabel: 'Best Score',
    maxStreakLabel: 'Max Streak',
    maxStreakMetricLabel: 'Max Streak',
    currentRankMetricLabel: 'Current Level',
    detectiveHierarchyTitle: 'Detective Hierarchy',
    fromXpText: (xp) => `from ${xp} XP`,
    fromMinXp: (xp) => `from ${xp} XP`,
    statusCurrent: 'Current',
    currentBadge: 'Current',
    statusAchieved: '✓ Achieved',
    achievedBadge: '✓ Achieved',
    statusLocked: '🔒 Locked',
    lockedBadge: '🔒 Locked',
    resetModalTitle: 'Reset all statistics?',
    resetConfirmTitle: 'Reset all statistics?',
    resetModalDesc: 'Points, level ranks, and streaks will be wiped. This action cannot be undone.',
    resetConfirmDesc: 'Points, level ranks, and streaks will be wiped. This action cannot be undone.',
    cancelBtn: 'Cancel',
    confirmResetBtn: 'Reset',
    returnBtn: 'Return',

    // Rules Screen
    rulesHeader: 'How to Play?',
    howToPlayTitle: 'How to Play?',
    warningNoticeTitle: 'Important Disclaimer:',
    warningTitle: 'Important Disclaimer',
    warningNoticeText: 'This game is not a professional AI detector tool. Its purpose is to teach critical evaluation of imagery found online and foster media literacy.',
    warningDesc: 'This game is not a professional AI detector tool. Its purpose is to teach critical evaluation of imagery found online and foster media literacy.',
    rulesSectionTitle: 'Game Rules',
    gameRulesTitle: 'Game Rules',
    rulesSteps: [
      'Carefully inspect the image (tap image to zoom in).',
      'Decide: was it generated by artificial intelligence (AI) or is it a real photo (REAL).',
      'Select your choice: 🤖 AI or 📷 REAL.',
      'Instantly discover if you were correct.',
      'Read the explanation and key visual clues.',
      'Chain consecutive correct answers for streak bonuses and level up!',
    ],
    ruleSteps: [
      'Carefully inspect the image (tap image to zoom in).',
      'Decide: was it generated by artificial intelligence (AI) or is it a real photo (REAL).',
      'Select your choice: 🤖 AI or 📷 REAL.',
      'Instantly discover if you were correct.',
      'Read the explanation and key visual clues.',
      'Chain consecutive correct answers for streak bonuses and level up!',
    ],
    pointsSectionTitle: 'Points & Streaks',
    scoringTitle: 'Points & Streaks',
    streakBreakdown1: '1 correct: +100 XP',
    streak1: '1 correct',
    streakBreakdown2: '2 in a row: +120 XP',
    streak2: '2 in a row',
    streakBreakdown3: '3 in a row: +150 XP',
    streak3: '3 in a row',
    streakBreakdown4: '4+ in a row: +200 XP 🔥',
    streak4: '4+ in a row',
    streakResetNote: 'A wrong answer resets your streak to 0 and awards +0 XP.',
    streakResetDesc: 'A wrong answer resets your streak to 0 and awards +0 XP.',
    cheatSheetTitle: 'Cheat Sheet: Where AI slips up',
    cluesCheatSheetTitle: 'Cheat Sheet: Where AI slips up',
    cheatSheetItems: [
      {
        icon: '✋',
        title: 'Fingers & Hands',
        desc: 'AI frequently scrambles finger counts, drawing fused digits, extra joints, or unnatural bends.',
      },
      {
        icon: '👁️',
        title: 'Eyes & Pupils',
        desc: 'AI portrait pupils often deviate from perfect circles, and light reflections rarely match across both eyes.',
      },
      {
        icon: '🔤',
        title: 'Text & Signboards',
        desc: 'Authentic photos have legible typography. AI lettering on t-shirts, signs, and dials turns into alien squiggles.',
      },
      {
        icon: '🪞',
        title: 'Reflections & Shadows',
        desc: 'Glasses, mirrors, and wet surfaces often reflect ghost objects, or cast shadows in contradictory directions.',
      },
      {
        icon: '✨',
        title: 'Skin & Fur Textures',
        desc: 'Synthetic subjects often look waxy or airbrushed, missing realistic microscopic pores, wrinkles, and fine hairs.',
      },
    ],
    cheatSheetClues: [
      {
        icon: '✋',
        title: 'Fingers & Hands',
        desc: 'AI frequently scrambles finger counts, drawing fused digits, extra joints, or unnatural bends.',
      },
      {
        icon: '👁️',
        title: 'Eyes & Pupils',
        desc: 'AI portrait pupils often deviate from perfect circles, and light reflections rarely match across both eyes.',
      },
      {
        icon: '🔤',
        title: 'Text & Signboards',
        desc: 'Authentic photos have legible typography. AI lettering on t-shirts, signs, and dials turns into alien squiggles.',
      },
      {
        icon: '🪞',
        title: 'Reflections & Shadows',
        desc: 'Glasses, mirrors, and wet surfaces often reflect ghost objects, or cast shadows in contradictory directions.',
      },
      {
        icon: '✨',
        title: 'Skin & Fur Textures',
        desc: 'Synthetic subjects often look waxy or airbrushed, missing realistic microscopic pores, wrinkles, and fine hairs.',
      },
    ],
    startPlayBtn: 'Got it, start game!',
    gotItStartGameBtn: 'Got it, start game!',

    // Image Modal
    inspectTitle: (title) => `🔍 ${title}`,
    inspectInstructions: 'Carefully check fingers, background, lighting reflections, and lettering',
    zoomInTitle: 'Zoom In',
    zoomOutTitle: 'Zoom Out',
    resetZoomTitle: 'Reset Scale',
    closeBtn: 'Close',

    // Footer
    footerText: 'AI or Real? • Startup Project CS-2407 • Media Literacy',
    footerNote: 'AI or Real? • Startup Project CS-2407 • Media Literacy',
  },
};
