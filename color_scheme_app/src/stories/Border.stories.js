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
    borderBackgroundColor: '#ffffff',
    borderOuterBorder: '#084C91',
    borderMidBorder: '#60DBC5',
    borderInnerBorder: '#DDDDDD',
    borderContent: 'This is the border content',
    borderTxtColor: '#084C91',

};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  borderBackgroundColor: '#E8C78E',
  borderOuterBorder: '#B3550E',
  borderMidBorder: '#401201',
  borderInnerBorder: '#F28705',
  borderContent: 'This is the border content',
  borderTxtColor: '#401201',

};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  borderBackgroundColor: 'white',
  borderOuterBorder: '#E5D9F2',
  borderMidBorder: '#7371FC',
  borderInnerBorder: '#A594F9',
  borderContent: 'This is the border content',
  borderTxtColor: '#0703DD',

};

export const Spring1 = Template.bind({});
Spring1.args = {
  borderBackgroundColor: 'white',
  borderOuterBorder: '#472C1B',
  borderMidBorder: '#D7A01D',
  borderInnerBorder: '#9BE564',
  borderContent: 'This is the border content',
  borderTxtColor: '#2E570F',


};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
  borderBackgroundColor: '#FDCC00',
  borderOuterBorder: '#0ADCE1',
  borderMidBorder: '#D24A00',
  borderInnerBorder: '#D8AF02',
  borderContent: 'This is the border content',
  borderTxtColor: '#98002E',
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
  borderBackgroundColor: 'white',
  borderOuterBorder: '#1A936F',
  borderMidBorder: '#114B5F',
  borderInnerBorder: '#88D498',
  borderContent: 'This is the border content',
  borderTxtColor: '#114B5F',

};

export const Coral1 = Template.bind({});
Coral1.args = {
  borderBackgroundColor: '#FFE3E0',
  borderOuterBorder: '#F38375',
  borderMidBorder: '#F7A399',
  borderInnerBorder: '#FBC3BC',
  borderContent: 'This is the border content',
  borderTxtColor: 'black',

};
