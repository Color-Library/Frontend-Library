// src/components/Button.stories.js
import React from 'react';
import Button from '../components/Button.js';
import configData from '../context/config.json';

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
  backgroundColor: configData.THEME_COLORS.FROZEN2.backgroundColor,
  width:'100px',
  height: '40px',
  color: configData.THEME_COLORS.FROZEN2.color,
  borderColor: 'cyan',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
  label: 'Click Me',
  backgroundColor: configData.THEME_COLORS.SUNFLOWER1.backgroundColor,
  width:'100px',
  height: '40px',
  color: configData.THEME_COLORS.SUNFLOWER1.color,
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

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
  label: 'Click Me',
  backgroundColor: '#98002E',
  width:'100px',
  height: '40px',
  color: '#FDCC00',
  borderColor: '#D24A00'
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  label: 'Click Me',
  backgroundColor: '#1A936F',
  width:'100px',
  height: '40px',
  color: '#F3E9D2',
  borderColor: '#88D498'
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  label: 'Click Me',
  backgroundColor: '#F38375',
  width:'100px',
  height: '40px',
  color: '#FFE3E0',
  borderColor: '#EF6351'
};
