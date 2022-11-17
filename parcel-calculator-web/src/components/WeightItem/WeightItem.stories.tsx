import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WeightItem } from './WeightItem';

export default {
  title: 'ParcelCalculator/WeightItem',
  component: WeightItem,
  argTypes: {
    id: { control: 'number' },
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof WeightItem>;

const Template: ComponentStory<typeof WeightItem> = args => (
  <WeightItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
};
