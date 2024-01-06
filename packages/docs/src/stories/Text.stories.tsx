import type { StoryObj, Meta } from '@storybook/react';

import { Text, TextProps } from '@tupi/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolores ea dolorem distinctio odio aspernatur, hic ipsa illum sapiente itaque quos rerum doloremque natus alias, quia fugiat est eum? Voluptatibus.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
