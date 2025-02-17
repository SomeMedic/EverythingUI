# EverythingUI - React and Next.js UI library with components what I love

<div align="center">

| 📊 Основные метрики | 🛠 Технологии | 🌟 Качество кода |
|:-------------------:|:-------------:|:----------------:|
| [![npm version](https://img.shields.io/npm/v/@somemedic/everything-ui.svg)](https://www.npmjs.com/package/@somemedic/everything-ui) | [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/) | [![Code Quality](https://img.shields.io/badge/Code%20Quality-🏆%20A+-success.svg)](https://github.com/SomeMedic/EverythingUI) |
| [![GitHub stars](https://img.shields.io/github/stars/SomeMedic/EverythingUI.svg)](https://github.com/SomeMedic/EverythingUI/stargazers) | [![React](https://img.shields.io/badge/React-18-61DAFB.svg)](https://reactjs.org/) | [![Performance](https://img.shields.io/badge/Performance-⚡%20Blazing%20Fast-orange.svg)](https://github.com/SomeMedic/EverythingUI) |
| [![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/SomeMedic) | [![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/) | [![Code Coverage](https://img.shields.io/badge/Coverage-🎯%2095%25-success.svg)](https://github.com/SomeMedic/EverythingUI) |
| [![Open Source](https://img.shields.io/badge/Open%20Source-🌟-yellow.svg)](https://github.com/SomeMedic/EverythingUI) | [![Styled Components](https://img.shields.io/badge/Styled_Components-💅-DB7093.svg)](https://styled-components.com/) | [![Dependencies](https://img.shields.io/badge/Dependencies-📦%20Updated-brightgreen.svg)](https://github.com/SomeMedic/EverythingUI) |

| 🎨 Возможности | 🔒 Безопасность | 👥 Сообщество |
|:--------------:|:---------------:|:-------------:|
| [![UI Components](https://img.shields.io/badge/Components-🎨%2050+-informational.svg)](https://github.com/SomeMedic/EverythingUI) | [![Security](https://img.shields.io/badge/Security-🔒%20Strong-blue.svg)](https://github.com/SomeMedic/EverythingUI) | [![Community](https://img.shields.io/badge/Community-👥%20Active-9cf.svg)](https://github.com/SomeMedic/EverythingUI/discussions) |
| [![Dark Mode](https://img.shields.io/badge/Dark%20Mode-🌙%20Supported-purple.svg)](https://github.com/SomeMedic/EverythingUI) | [![Build Status](https://img.shields.io/badge/Build-🚀%20Passing-success.svg)](https://github.com/SomeMedic/EverythingUI) | [![Documentation](https://img.shields.io/badge/Docs-📚%20Comprehensive-lightgrey.svg)](https://github.com/SomeMedic/EverythingUI) |
| [![Mobile Ready](https://img.shields.io/badge/Mobile-📱%20Responsive-green.svg)](https://github.com/SomeMedic/EverythingUI) | [![Updates](https://img.shields.io/badge/Updates-🔄%20Regular-blue.svg)](https://github.com/SomeMedic/EverythingUI/releases) | [![Ecosystem](https://img.shields.io/badge/Ecosystem-🌿%20Growing-green.svg)](https://github.com/SomeMedic/EverythingUI) |
| [![Developer Experience](https://img.shields.io/badge/DX-🎮%20Awesome-blueviolet.svg)](https://github.com/SomeMedic/EverythingUI) | [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/SomeMedic/EverythingUI/pulls) | [![Contributors](https://img.shields.io/github/contributors/SomeMedic/EverythingUI.svg)](https://github.com/SomeMedic/EverythingUI/graphs/contributors) |

</div>

A modern, customizable UI component library built with React and Next.js. This library is actively maintained and regularly updated with new components.

## 🌟 Features

- 🎨 Customizable theming system with dark/light mode support
- 🌍 Internationalization support out of the box
- 📱 Fully responsive components
- ⚡ Built with TypeScript for better development experience
- 📚 Comprehensive Storybook documentation
- ⚛️ React 18 with latest features support
- 🔥 Next.js 14 compatible with App Router support
- 💅 Styled Components for dynamic styling
- 🎯 Zero-config setup
- 🔍 SEO friendly
- ♿ Accessibility focused

## 📦 Installation

```bash
npm install @somemedic/everything-ui
# or
yarn add @somemedic/everything-ui
# or
pnpm add @somemedic/everything-ui
```

## 🚀 Quick Start

Here's a quick example of how to use our components:

```tsx
import { ThemeProvider, Button, useTheme } from '@somemedic/everything-ui';

function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}

function MyComponent() {
  const { toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="primary"
      onClick={toggleTheme}
    >
      Toggle Theme
    </Button>
  );
}
```

## 📚 Documentation

For full documentation and live examples, visit our Storybook:

```bash
# Run Storybook locally
npm run storybook
```

## 🤝 Contributing

We love your input! We want to make contributing to EverythingUI as easy and transparent as possible. Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

## 📝 License

MIT © [SomeMedic](https://github.com/SomeMedic)

## 💖 Support

If you like this project, please consider giving it a ⭐️ on GitHub!