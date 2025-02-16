'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Highlight, themes, type Language } from 'prism-react-renderer';

interface PreviewTabsProps {
  preview: React.ReactNode;
  code: string;
  language?: Language;
}

export const PreviewTabs: React.FC<PreviewTabsProps> = ({ 
  preview, 
  code,
  language = 'tsx'
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container>
      <TabList>
        <Tab 
          active={activeTab === 'preview'} 
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </Tab>
        <Tab 
          active={activeTab === 'code'} 
          onClick={() => setActiveTab('code')}
        >
          Code
        </Tab>
      </TabList>
      <Content>
        {activeTab === 'preview' ? (
          <PreviewContent>{preview}</PreviewContent>
        ) : (
          <CodeContent>
            <Highlight
              theme={themes.nightOwl}
              code={code.trim()}
              language={language}
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
            <CopyButton 
              onClick={handleCopy}
              copied={copied}
            />
          </CodeContent>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  overflow: hidden;
  background: ${({ theme }) => theme.surface};
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  background: ${({ theme, active }) => active ? theme.background : 'transparent'};
  color: ${({ theme, active }) => active ? theme.text : theme.textSecondary};
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Content = styled.div`
  position: relative;
`;

const PreviewContent = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: ${({ theme }) => theme.background};
`;

const CodeContent = styled.div`
  margin: 0;
  background: ${({ theme }) => theme.codeBackground};
  position: relative;
  overflow: hidden;
`;

const Pre = styled.pre`
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Line = styled.div`
  display: table-row;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const CopyButton = styled.button<{ copied: boolean }>`
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

  ${CodeContent}:hover & {
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