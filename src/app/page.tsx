'use client';

import React from 'react';
import styled from 'styled-components';
import { SparkleButton, GlowButton, GlitchButton, GooeyButton, SeasonButton, CopyButton, NotificationButton, SpinButton, GithubStarButton, FloatingButton, StarAIButton, SpaceButton, StardustButton, JavaButton, SendButton, CreditsButton, AIButton } from '@/components/buttons';
import { useTheme } from '@/components/theme';
import { PreviewTabs } from '@/components/PreviewTabs';
import { Highlight, themes } from 'prism-react-renderer';
import { Language, useTranslation, ComponentCategory } from '@/components/i18n/translations';

const Section = styled.section`
  padding: 4rem 2rem;
  position: relative;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: ${({ theme }) => `linear-gradient(to right, ${theme.surface}F0, ${theme.surface}E8)`};
  color: ${({ theme }) => theme.text};
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 4px 30px ${({ theme }) => theme.border};

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: inherit;

    h1 {
      font-size: 1.25rem;
      margin: 0;
      font-weight: 600;
      background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
      -webkit-background-clip: text;
      color: transparent;
    }

    p {
      font-size: 0.875rem;
      margin: 0;
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  color: ${({ theme }) => theme.text};

  &:hover {
    background: ${({ theme }) => theme.border};
  }
`;

const Main = styled.main`
  padding-top: 60px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: ${({ theme }) => `radial-gradient(circle at 50% 0%, ${theme.border}20 0%, transparent 50%)`};
    z-index: -1;
  }
`;

const HeroSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  text-align: center;
  position: relative;
  padding: 6rem 2rem;

  h2 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    -webkit-background-clip: text;
    color: transparent;
    animation: fadeSlideUp 0.8s ease-out;
  }

  p {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto 3rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    animation: fadeSlideUp 0.8s ease-out 0.2s backwards;
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InstallSection = styled(Section)`
  background: ${({ theme }) => theme.surface};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${({ theme }) => `radial-gradient(circle at 50% 50%, ${theme.border}20 0%, transparent 50%)`};
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const InstallBlock = styled.div`
  position: relative;
  background: ${({ theme }) => theme.codeBackground};
  color: #fff;
  border-radius: 1rem;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 
    0 4px 6px -1px ${({ theme }) => theme.border},
    0 10px 20px -5px ${({ theme }) => theme.border}40;
  transform: perspective(1000px) rotateX(2deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: perspective(1000px) rotateX(0deg);
  }
`;

const Pre = styled.pre`
  margin: 0;
  padding: 1.5rem;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;

  .token.function {
    color: #61AFEF;  /* npm */
  }
  
  .token.keyword {
    color: #C678DD;  /* install */
  }
  
  .token.string {
    color: #98C379;  /* package name */
  }
`;

const Line = styled.div`
  display: table-row;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const CopyIconButton = styled.button<{ copied: boolean }>`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  color: ${({ theme, copied }) => copied ? theme.text : theme.textSecondary};
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${InstallBlock}:hover & {
    opacity: 1;
  }

  &:hover {
    background: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
  }

  &::before {
    content: "${({ copied }) => copied ? '✓' : '📋'}";
  }
`;

const ComponentsSection = styled(Section)`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: ${({ theme }) => `linear-gradient(to bottom, transparent, ${theme.background})`};
    pointer-events: none;
  }
`;

const ComponentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const ComponentCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 
    0 4px 6px -1px ${({ theme }) => theme.border},
    0 10px 20px -5px ${({ theme }) => theme.border}40;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 8px 12px -2px ${({ theme }) => theme.border},
      0 20px 30px -10px ${({ theme }) => theme.border}40;

    &::before {
      opacity: 1;
    }
  }
`;

const ComponentHeader = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '✨';
      font-size: 1.2rem;
    }
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LanguageToggle = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;

  &:hover {
    background: ${({ theme }) => theme.border};
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CategoryTab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  color: ${({ theme, active }) => active ? theme.text : theme.textSecondary};
  background: ${({ theme, active }) => active ? theme.surface : 'transparent'};
  box-shadow: ${({ theme, active }) => active ? `0 4px 6px -1px ${theme.border}, 0 10px 20px -5px ${theme.border}40` : 'none'};

  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.surface};
  }
`;

const ComponentsContent = styled.div<{ active: boolean }>`
  opacity: ${({ active }) => active ? 1 : 0};
  transform: translateY(${({ active }) => active ? '0' : '20px'});
  transition: all 0.3s ease;
  position: ${({ active }) => active ? 'relative' : 'absolute'};
  pointer-events: ${({ active }) => active ? 'all' : 'none'};
  width: 100%;
`;

const HomePage = () => {
  const { themeMode, toggleTheme } = useTheme();
  const [language, setLanguage] = React.useState<Language>('ru');
  const [installCopied, setInstallCopied] = React.useState(false);
  const t = useTranslation(language);
  const componentsRef = React.useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = React.useState<ComponentCategory>('buttons');

  const handleInstallCopy = async () => {
    await navigator.clipboard.writeText('npm install @somemedic/everything-ui');
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  const handleHeroButtonClick = () => {
    componentsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const installCode = 'npm install @somemedic/everything-ui';
  const sparkleCode = `import { SparkleButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <SparkleButton text="${t('buttonText')}" />
}`;

  const glowCode = `import { GlowButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <GlowButton text="${t('buttonText')}" />
}`;

  const glitchCode = `import { GlitchButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <GlitchButton text="${t('buttonText')}" />
}`;

  const gooeyCode = `import { GooeyButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <GooeyButton text="${t('buttonText')}" />
}`;

  const seasonCode = `import { SeasonButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return (
    <>
      <SeasonButton text="${t('buttonText')}" variant="winter" />
      <SeasonButton text="${t('buttonText')}" variant="summer" />
    </>
  )
}`;

  const copyCode = `import { CopyButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <CopyButton text="${t('buttonText')}" />
}`;

  const notificationCode = `import { NotificationButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return (
    <>
      <NotificationButton text="${t('buttonText')}" />
      <NotificationButton text="${t('buttonText')}" variant="withDot" />
      <NotificationButton text="${t('buttonText')}" variant="withCounter" count={5} />
      <NotificationButton text="${t('buttonText')}" variant="withPulse" />
    </>
  )
}`;

  const spinCode = `import { SpinButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <SpinButton text="${t('buttonText')}" />
}`;

  const githubStarCode = `import { GithubStarButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <GithubStarButton stars={11} />
}`;

  const floatingCode = `import { FloatingButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <FloatingButton text="${t('buttonText')}" />
}`;

  const starAICode = `import { StarAIButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <StarAIButton text="${t('buttonText')}" />
}`;

  const spaceCode = `import { SpaceButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <SpaceButton text="${t('buttonText')}" />
}`;

  const stardustCode = `import { StardustButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <StardustButton text="${t('buttonText')}" />
}`;

  const javaCode = `import { JavaButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <JavaButton text="${t('buttonText')}" lang={language} />
}`;

  const sendCode = `import { SendButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <SendButton text="${t('buttonText')}" />
}`;

  const creditsCode = `import { CreditsButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return <CreditsButton text="${t('buttonText')}" />
}`;

  const aiCode = `import { AIButton } from '@somemedic/everything-ui'

export default function MyComponent() {
  return (
    <>
      <AIButton text="GPT-Omni" variant="openai" />
      <AIButton text="Claude 3.5" variant="claude" />
      <AIButton text="Google Gemini" variant="gemini" />
      <AIButton text="DeepSeek" variant="deepseek" />
    </>
  )
}`;

  const categories: ComponentCategory[] = ['buttons', 'cards', 'inputs', 'checkboxes'];

  const renderCategoryContent = (category: ComponentCategory) => {
    switch (category) {
      case 'buttons':
        return (
          <ButtonsGrid>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('sparkleButtonTitle')}</h3>
                <Description>{t('sparkleButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<SparkleButton text={t('buttonText')} />}
                code={sparkleCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('glowButtonTitle')}</h3>
                <Description>{t('glowButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<GlowButton text={t('buttonText')} />}
                code={glowCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('glitchButtonTitle')}</h3>
                <Description>{t('glitchButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<GlitchButton text={t('buttonText')} />}
                code={glitchCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('gooeyButtonTitle')}</h3>
                <Description>{t('gooeyButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<GooeyButton text={t('buttonText')} />}
                code={gooeyCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('seasonButtonTitle')}</h3>
                <Description>{t('seasonButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <SeasonButton text={t('buttonText')} variant="winter" />
                    <SeasonButton text={t('buttonText')} variant="summer" />
                  </div>
                }
                code={seasonCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('copyButtonTitle')}</h3>
                <Description>{t('copyButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<CopyButton text={t('buttonText')} />}
                code={copyCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('notificationButtonTitle')}</h3>
                <Description>{t('notificationButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <NotificationButton text={t('buttonText')} />
                    <NotificationButton text={t('buttonText')} variant="withDot" />
                    <NotificationButton text={t('buttonText')} variant="withCounter" count={5} />
                    <NotificationButton text={t('buttonText')} variant="withPulse" />
                  </div>
                }
                code={notificationCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('spinButtonTitle')}</h3>
                <Description>{t('spinButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<SpinButton text={t('buttonText')} />}
                code={spinCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('githubStarButtonTitle')}</h3>
                <Description>{t('githubStarButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<GithubStarButton stars={11} />}
                code={githubStarCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('floatingButtonTitle')}</h3>
                <Description>{t('floatingButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<FloatingButton text={t('buttonText')} />}
                code={floatingCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('starAIButtonTitle')}</h3>
                <Description>{t('starAIButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<StarAIButton text={t('buttonText')} />}
                code={starAICode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('spaceButtonTitle')}</h3>
                <Description>{t('spaceButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '100%'
                  }}>
                    <SpaceButton text={t('buttonText')} />
                    <SpaceButton text={t('buttonText')} variant="golden" />
                    <SpaceButton text={t('buttonText')} variant="dark" />
                  </div>
                }
                code={spaceCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('stardustButtonTitle')}</h3>
                <Description>{t('stardustButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<StardustButton text={t('buttonText')} />}
                code={stardustCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('javaButtonTitle')}</h3>
                <Description>{t('javaButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<JavaButton text={t('buttonText')} lang={language} />}
                code={javaCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('sendButtonTitle')}</h3>
                <Description>{t('sendButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<SendButton text={t('buttonText')} />}
                code={sendCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('creditsButtonTitle')}</h3>
                <Description>{t('creditsButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={<CreditsButton text={t('buttonText')} />}
                code={creditsCode}
                language="tsx"
              />
            </ComponentCard>
            <ComponentCard>
              <ComponentHeader>
                <h3>{t('aiButtonTitle')}</h3>
                <Description>{t('aiButtonDescription')}</Description>
              </ComponentHeader>
              <PreviewTabs 
                preview={
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <AIButton text="GPT-Omni" variant="openai" />
                      <AIButton text="Claude 3.5" variant="claude" />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <AIButton text="Google Gemini" variant="gemini" />
                      <AIButton text="DeepSeek" variant="deepseek" />
                    </div>
                  </div>
                }
                code={aiCode}
                language="tsx"
              />
            </ComponentCard>
          </ButtonsGrid>
        );
      case 'cards':
        return <Description>Карточки скоро появятся...</Description>;
      case 'inputs':
        return <Description>Поля ввода скоро появятся...</Description>;
      case 'checkboxes':
        return <Description>Чекбоксы скоро появятся...</Description>;
    }
  };

  return (
    <>
      <Header>
        <div className="logo">
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
        </div>
        <Controls>
          <LanguageToggle onClick={toggleLanguage}>
            {language === 'ru' ? 'en' : 'ru'}
          </LanguageToggle>
          <ThemeToggle onClick={toggleTheme}>
            {themeMode === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
        </Controls>
      </Header>
      
      <Main>
        <HeroSection>
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
          <SparkleButton text={t('heroButtonText')} onClick={handleHeroButtonClick} />
        </HeroSection>

        <InstallSection>
          <h2>{t('installation')}</h2>
          <InstallBlock>
            <Highlight
              theme={themes.nightOwl}
              code={installCode}
              language="bash"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                      <LineContent>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </LineContent>
                    </Line>
                  ))}
                </Pre>
              )}
            </Highlight>
            <CopyIconButton 
              onClick={handleInstallCopy}
              copied={installCopied}
            />
          </InstallBlock>
        </InstallSection>

        <ComponentsSection ref={componentsRef}>
          <h2>{t('components')}</h2>
          <CategoryTabs>
            {categories.map((category) => (
              <CategoryTab
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {t(`categories.${category}`)}
              </CategoryTab>
            ))}
          </CategoryTabs>
          <ComponentsGrid>
            {categories.map((category) => (
              <ComponentsContent
                key={category}
                active={activeCategory === category}
              >
                {renderCategoryContent(category)}
              </ComponentsContent>
            ))}
          </ComponentsGrid>
        </ComponentsSection>
      </Main>
    </>
  );
};

export default HomePage;