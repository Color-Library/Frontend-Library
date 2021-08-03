// src/components/Button.stories.js
import React from 'react';
import Input from '../components/Input.js';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
  },
};

const Template = (args) => <Input {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
    inputBoxColor: '',
    inputTxtColor: '#084C91',
    inputTxtSize: '20px',
    txtColor: '#084C91',
    label: 'First Name: ',
    labelFor: 'label',
    type: 'text',
    inputName: 'inputs',
    inputWidth: '300px',
    inputHeight: '45px',
    requiredTxt: 'Must fill in',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  inputBoxColor: '#401201',
  inputTxtColor: '#F5E6CC',
  inputTxtSize: '20px',
  txtColor: '#401201',
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  inputWidth: '300px',
  inputHeight: '45px',
  requiredTxt: 'Must fill in',
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  inputBoxColor: '#F5EFFF',
  inputTxtColor: '#3936FC',
  inputTxtSize: '20px',
  txtColor: '#0703DD',
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  inputWidth: '300px',
  inputHeight: '45px',
  requiredTxt: 'Must fill in',
};

export const Spring1 = Template.bind({});
Spring1.args = {
  inputBoxColor: '#DFF977',
  inputTxtColor: '#7D451B',
  inputTxtSize: '20px',
  txtColor: '#2E570F',
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  inputWidth: '300px',
  inputHeight: '45px',
  requiredTxt: 'Must fill in',
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
  inputBoxColor: 'white',
  inputTxtColor: '#7D451B',
  inputTxtSize: '20px',
  txtColor: '#98002E',
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  inputWidth: '300px',
  inputHeight: '45px',
  requiredTxt: 'Must fill in',
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
  inputBoxColor: 'white',
  inputTxtColor: '#114B5F',
  inputTxtSize: '20px',
  txtColor: '#114B5F',
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  inputWidth: '300px',
  inputHeight: '40px',
  requiredTxt: 'Must fill in',
};

export const Coral1 = Template.bind({});
Coral1.args = {
  inputBoxColor: 'white',
  inputTxtColor: 'black',
  inputTxtSize: '20px',
  txtColor: 'black',
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  inputWidth: '300px',
  inputHeight: '45px',
  requiredTxt: 'Must fill in',
};
