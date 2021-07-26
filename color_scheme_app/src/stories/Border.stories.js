// src/components/Button.stories.js
import React from 'react';
import Border from '../components/Border.js';

export default {
  title: 'Border',
  component: Border,
  argTypes: {
  },
};

const Template = (args) => <Border {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
    backgroundColor: '#ffffff',
    outerBorder: '#084C91',
    midBorder: '#60DBC5',
    innerBorder: '#DDDDDD',
    content: 'This is the border content',
    txtColor: '',

};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  backgroundColor: '#E8C78E',
  outerBorder: '#B3550E',
  midBorder: '#401201',
  innerBorder: '#F28705',
  content: 'This is the border content',
  txtColor: '#401201',

};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  backgroundColor: 'white',
  outerBorder: '#E5D9F2',
  midBorder: '#7371FC',
  innerBorder: '#A594F9',
  content: 'This is the border content',
  txtColor: '#0703DD',

};

export const Spring1 = Template.bind({});
Spring1.args = {
  backgroundColor: 'white',
  outerBorder: '#472C1B',
  midBorder: '#D7A01D',
  innerBorder: '#9BE564',
  content: 'This is the border content',
  txtColor: '#2E570F',


};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
  backgroundColor: '#FDCC00',
  outerBorder: '#0ADCE1',
  midBorder: '#D24A00',
  innerBorder: '#D8AF02',
  content: 'This is the border content',
  txtColor: '#98002E',
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
  backgroundColor: 'white',
  outerBorder: '#1A936F',
  midBorder: '#114B5F',
  innerBorder: '#88D498',
  content: 'This is the border content',
  txtColor: '#114B5F',

};

export const Coral1 = Template.bind({});
Coral1.args = {
  backgroundColor: '#FFE3E0',
  outerBorder: '#F38375',
  midBorder: '#F7A399',
  innerBorder: '#FBC3BC',
  content: 'This is the border content',
  txtColor: 'black',

};
