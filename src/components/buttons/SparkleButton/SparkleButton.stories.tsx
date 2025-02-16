import type { Meta, StoryObj } from '@storybook/react';
import { SparkleButton } from './index';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../theme';

const meta = {
  title: 'Buttons/SparkleButton',
  component: SparkleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SparkleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Let's Go",
  },
};

export const CustomText: Story = {
  args: {
    text: 'Нажми меня',
  },
}; 