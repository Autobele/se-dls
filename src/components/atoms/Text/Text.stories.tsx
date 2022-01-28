import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Text, TextProps } from '.';

export default {
  title: 'Typography',
  component: Text,
  args: {
    children: 'SE Design Language System',
    as: 'h1',
    fontSize: 'lg'
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Light:  Story<TextProps> = (args) => <Text {...args}/>
export const Dark:  Story<TextProps> = (args) => <Text {...args}/>


Light.parameters = {
  backgrounds: {
    default: 'light'
  }
}

Dark.args = {
  children: 'SE Design System Library - Dark',
  fontColor: 'magenta'
}