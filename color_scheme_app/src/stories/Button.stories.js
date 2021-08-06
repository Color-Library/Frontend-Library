// src/components/Button.stories.js
import React from 'react';
import Button from '../components/Button.js';
import configData from '../context/config.json';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
  },
};

const Template = (args) => <Button {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
  btnLabel: 'Click Me',
  btnBackgroundColor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: 'white',
  btnBorderColor: 'cyan',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
  btnLabel: 'Click Me',
  btnBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: 'white',
  btnBorderColor: '#B3550E'
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
  btnLabel: 'Click Me',
  btnBackgroundColor: configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: 'white',
  btnBorderColor: '#7371FC'
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
  btnLabel: 'Click Me',
  btnBackgroundColor: '#DFF977',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: 'white',
  btnBorderColor: '#2E570F'
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
  btnLabel: 'Click Me',
  btnBackgroundColor: '#98002E',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: 'white',
  btnBorderColor: '#D24A00'
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  btnLabel: 'Click Me',
  btnBackgroundColor: '#1A936F',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: 'white',
  btnBorderColor: '#88D498'
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  btnLabel: 'Click Me',
  btnBackgroundColor: '#F38375',
  btnWidth:'100px',
  btnHeight: '40px',
  btnTxtColor: 'white',
  btnBorderColor: '#EF6351'
};
