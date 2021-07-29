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
  btnLabel: 'Click Me',
  backgroundColor: configData.THEME_COLORS.FROZEN2.backgroundColor,
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: configData.THEME_COLORS.FROZEN2.color,
  btnBorderColor: 'cyan',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
  btnLabel: 'Click Me',
  backgroundColor: configData.THEME_COLORS.SUNFLOWER1.backgroundColor,
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: configData.THEME_COLORS.SUNFLOWER1.color,
  btnBorderColor: '#B3550E'
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
  btnLabel: 'Click Me',
  backgroundColor: '#F5EFFF',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: '#3936FC',
  btnBorderColor: '#7371FC'
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
  btnLabel: 'Click Me',
  backgroundColor: '#DFF977',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: '#2E570F',
  btnBorderColor: '#2E570F'
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
  btnLabel: 'Click Me',
  backgroundColor: '#98002E',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: '#FDCC00',
  btnBorderColor: '#D24A00'
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  btnLabel: 'Click Me',
  backgroundColor: '#1A936F',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: '#F3E9D2',
  btnBorderColor: '#88D498'
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  btnLabel: 'Click Me',
  backgroundColor: '#F38375',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: '#FFE3E0',
  btnBorderColor: '#EF6351'
};
