# EverythingUI - React and Next.js UI library with components what I love

[![npm version](https://img.shields.io/npm/v/@somemedic/everything-ui.svg)](https://www.npmjs.com/package/@somemedic/everything-ui)
[![License](https://img.shields.io/npm/l/@somemedic/everything-ui.svg)](https://github.com/SomeMedic/EverythingUI/blob/main/LICENSE)

A modern, customizable UI component library built with React and Next.js. This library is actively maintained and regularly updated with new components.

## Features

- 🎨 Customizable theming system
- 🌍 Internationalization support
- 📱 Responsive components
- ⚡ Built with TypeScript
- 📚 Storybook documentation
- ⚛️ React 18 support
- 🔥 Next.js 14 compatible

## Installation

```bash
npm install @somemedic/everything-ui
# or
yarn add @somemedic/everything-ui
# or
pnpm add @somemedic/everything-ui
```

## Usage

Here's a quick example of how to use a Button component:

```tsx
import { Button } from '@somemedic/everything-ui';

function MyComponent() {
  return (
    <Button 
      variant="primary"
      onClick={() => console.log('Button clicked!')}
    >
      Click me
    </Button>
  );
}
```

## Documentation

For full documentation and component examples, please visit our Storybook:

```bash
# Run Storybook locally
npm run storybook
```

## Contributing

This library is in active development, and we're constantly adding new components and features. Contributions are welcome!

## License

MIT © [SomeMedic](https://github.com/SomeMedic)