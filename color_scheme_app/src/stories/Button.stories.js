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
  color: '#084C91',
};
