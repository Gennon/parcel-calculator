import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PriceList } from './PriceList';

export default {
  title: 'ParcelCalculator/PriceList',
  component: PriceList,
  argTypes: {},
} as ComponentMeta<typeof PriceList>;

const Template: ComponentStory<typeof PriceList> = args => (
  <PriceList {...args} />
);

export const Default = Template.bind({});
