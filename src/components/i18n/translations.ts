export type ComponentCategory = 'buttons' | 'cards' | 'inputs' | 'checkboxes';
export type Language = 'ru' | 'en';

type Categories = {
  [K in ComponentCategory]: string;
};

type TranslationsWithoutCategories = {
  title: string;
  description: string;
  installation: string;
  components: string;
  buttonText: string;
  heroButtonText: string;
  sparkleButtonTitle: string;
  sparkleButtonDescription: string;
  glowButtonTitle: string;
  glowButtonDescription: string;
  glitchButtonTitle: string;
  glitchButtonDescription: string;
  gooeyButtonTitle: string;
  gooeyButtonDescription: string;
  seasonButtonTitle: string;
  seasonButtonDescription: string;
  copyButtonTitle: string;
  copyButtonDescription: string;
  notificationButtonTitle: string;
  notificationButtonDescription: string;
  spinButtonTitle: string;
  spinButtonDescription: string;
  githubStarButtonTitle: string;
  githubStarButtonDescription: string;
  floatingButtonTitle: string;
  floatingButtonDescription: string;
  starAIButtonTitle: string;
  starAIButtonDescription: string;
  spaceButtonTitle: string;
  spaceButtonDescription: string;
  stardustButtonTitle: string;
  stardustButtonDescription: string;
  javaButtonTitle: string;
  javaButtonDescription: string;
  javaButtonNow: string;
  sendButtonTitle: string;
  sendButtonDescription: string;
  creditsButtonTitle: string;
  creditsButtonDescription: string;
  aiButtonTitle: string;
  aiButtonDescription: string;
};

type Translations = TranslationsWithoutCategories & {
  categories: Categories;
};

export type TranslationKey = keyof TranslationsWithoutCategories | `categories.${ComponentCategory}`;

export const translations: Record<Language, Translations> = {
  ru: {
    title: 'EverythingUI',
    description: 'UI-компоненты для React и Next.js',
    installation: 'Установка',
    components: 'Компоненты',
    buttonText: 'Нажми меня',
    heroButtonText: 'Поехали!',
    sparkleButtonTitle: 'SparkleButton',
    sparkleButtonDescription: 'Красивая кнопка с эффектом искр при наведении',
    glowButtonTitle: 'GlowButton',
    glowButtonDescription: 'Стильная кнопка с эффектом свечения и анимацией нажатия',
    glitchButtonTitle: 'GlitchButton',
    glitchButtonDescription: 'Кнопка с эффектом глитча и мерцающими декорациями',
    gooeyButtonTitle: 'GooeyButton',
    gooeyButtonDescription: 'Кнопка с эффектом "жидкости" и анимированными каплями',
    seasonButtonTitle: 'SeasonButton',
    seasonButtonDescription: 'Кнопка с двумя сезонными вариантами оформления - зимним и летним',
    copyButtonTitle: 'CopyButton',
    copyButtonDescription: 'Кнопка с анимацией копирования файла',
    notificationButtonTitle: 'NotificationButton',
    notificationButtonDescription: 'Кнопка с иконкой уведомления и анимированной стрелкой',
    spinButtonTitle: 'SpinButton',
    spinButtonDescription: 'Кнопка с крутящимся градиентным эффектом и анимацией при наведении',
    githubStarButtonTitle: 'GithubStarButton',
    githubStarButtonDescription: 'Кнопка с радужной анимацией для GitHub звёзд',
    floatingButtonTitle: 'FloatingButton',
    floatingButtonDescription: 'Кнопка с эффектом подъема и красивыми тенями при наведении',
    starAIButtonTitle: 'StarAIButton',
    starAIButtonDescription: 'Кнопка с анимированной иконкой звезды и эффектом увеличения при наведении',
    spaceButtonTitle: 'SpaceButton',
    spaceButtonDescription: 'Космическая кнопка с тремя вариантами дизайна: классический с градиентной подсветкой, золотой с пульсацией и тёмный с орбитальной анимацией',
    stardustButtonTitle: 'Звездная пыль',
    stardustButtonDescription: 'Кнопка с эффектом разлетающихся звезд',
    javaButtonTitle: 'Java кнопка',
    javaButtonDescription: 'Кнопка с анимированной иконкой Java и эффектом смены текста',
    javaButtonNow: 'сейчас!',
    sendButtonTitle: 'SendButton',
    sendButtonDescription: 'Кнопка отправки',
    creditsButtonTitle: 'CreditsButton',
    creditsButtonDescription: 'Кнопка для вывода информации о разработчиках',
    aiButtonTitle: 'AI кнопка',
    aiButtonDescription: 'Брутальная кнопка с двумя вариантами: OpenAI и Claude',
    categories: {
      buttons: 'Кнопки',
      cards: 'Карточки',
      inputs: 'Поля ввода',
      checkboxes: 'Чекбоксы'
    }
  },
  en: {
    title: 'EverythingUI',
    description: 'UI components for React and Next.js',
    installation: 'Installation',
    components: 'Components',
    buttonText: 'Click me',
    heroButtonText: 'Let\'s rock!',
    sparkleButtonTitle: 'SparkleButton',
    sparkleButtonDescription: 'Beautiful button with sparkle effect on hover',
    glowButtonTitle: 'GlowButton',
    glowButtonDescription: 'Stylish button with glow effect and press animation',
    glitchButtonTitle: 'GlitchButton',
    glitchButtonDescription: 'Button with glitch effect and blinking decorations',
    gooeyButtonTitle: 'GooeyButton',
    gooeyButtonDescription: 'Button with gooey effect and animated blobs',
    seasonButtonTitle: 'SeasonButton',
    seasonButtonDescription: 'Button with two seasonal variants - winter and summer',
    copyButtonTitle: 'CopyButton',
    copyButtonDescription: 'Button with file copy animation',
    notificationButtonTitle: 'NotificationButton',
    notificationButtonDescription: 'Button with notification icon and animated arrow',
    spinButtonTitle: 'SpinButton',
    spinButtonDescription: 'Button with spinning gradient effect and hover animation',
    githubStarButtonTitle: 'GithubStarButton',
    githubStarButtonDescription: 'Button with rainbow animation for GitHub stars',
    floatingButtonTitle: 'FloatingButton',
    floatingButtonDescription: 'Button with floating effect and beautiful shadows on hover',
    starAIButtonTitle: 'StarAIButton',
    starAIButtonDescription: 'Button with animated star icon and zoom effect on hover',
    spaceButtonTitle: 'SpaceButton',
    spaceButtonDescription: 'Space-themed button with three design variants: classic with gradient glow, golden with pulse effect, and dark with orbital animation',
    stardustButtonTitle: 'Stardust',
    stardustButtonDescription: 'Button with flying stars effect',
    javaButtonTitle: 'Java Button',
    javaButtonDescription: 'Button with animated Java icon and text swap effect',
    javaButtonNow: 'now!',
    sendButtonTitle: 'SendButton',
    sendButtonDescription: 'Send Button',
    creditsButtonTitle: 'CreditsButton',
    creditsButtonDescription: 'Button for displaying developer information',
    aiButtonTitle: 'AI Button',
    aiButtonDescription: 'Brutalist button with two variants: OpenAI and Claude',
    categories: {
      buttons: 'Buttons',
      cards: 'Cards',
      inputs: 'Inputs',
      checkboxes: 'Checkboxes'
    }
  }
};

export const useTranslation = (lang: Language) => {
  const t = (key: TranslationKey): string => {
    if (key.startsWith('categories.')) {
      const categoryKey = key.split('.')[1] as ComponentCategory;
      return translations[lang].categories[categoryKey];
    }
    return translations[lang][key as keyof TranslationsWithoutCategories];
  };
  return t;
}; 