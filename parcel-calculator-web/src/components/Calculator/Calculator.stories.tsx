import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Calculator } from './Calculator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ParcelCalculator/Calculator',
  component: Calculator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Calculator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Calculator> = args => (
  <Calculator {...args} />
);

export const Default = Template.bind({});
