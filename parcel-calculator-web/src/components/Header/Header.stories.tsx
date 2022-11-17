import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ParcelCalculator/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});
