// src/components/Button.stories.js
import React from 'react';

import Button from '../components/Button.js';
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: {control: 'color'}
  },
};

const Template = (args) => <Button {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
  label: 'Click Me',
  backgroundColor: '#DDDDDD',
  width:'100px',
  height: '40px',
  color: '#084C91',
  borderColor: 'cyan',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
  label: 'Click Me',
  backgroundColor: '#FDDAAF',
  width:'100px',
  height: '40px',
  color: '#401201',
  borderColor: '#B3550E'
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
  label: 'Click Me',
  backgroundColor: '#F5EFFF',
  width:'100px',
  height: '40px',
  color: '#3936FC',
  borderColor: '#7371FC'
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
  label: 'Click Me',
  backgroundColor: '#DFF977',
  width:'100px',
  height: '40px',
  color: '#2E570F',
  borderColor: '#2E570F'
};