// src/components/Button.stories.js
import React from 'react';
import Form from '../components/Form.js';

export default {
  title: 'Form',
  component: Form,
  argTypes: {
  },
};

const Template = (args) => <Form {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
    formTitle: 'Form Title',
    backgroundColor: '#ffffff',
    inputBoxColor: '',
    inputTxtColor: '#084C91',
    textColor: '',
    outerBorder: '#084C91',
    midBorder: '#60DBC5',
    innerBorder: '#DDDDDD',
    textColor: '#04284D',
    buttonLabel: 'Submit Form',
    buttonColor: '#DDDDDD',
    buttonTxtColor: '#084C91',
    onSubmit: null,
    label1: 'First Name: ',
    label2: 'Last Name: ',
    label3: 'Email: ',
    label4: 'Password: ',
    label1For: 'label1',
    label2For: 'label2',
    label3For: 'label3',
    label4For: 'label4',
    type1: 'text',
    type2: 'text',
    type3: 'text',
    type4: 'text',
    inputName1: 'inputs',
    inputName2: 'inputs',
    inputName3: 'inputs',
    inputName4: 'inputs'

};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  formTitle: 'Form Title',
  backgroundColor: '#E8C78E',
  inputBoxColor: '#401201',
  inputTxtColor: '#F5E6CC',
  textColor: '#401201',
  outerBorder: '#B3550E',
  midBorder: '#401201',
  innerBorder: '#F28705',
  buttonLabel: 'Submit Form',
  buttonColor: '#FDDAAF',
  buttonBorder: '#B3550E',
  buttonTxtColor: '#401201',
  onSubmit: null,
  label1: 'First Name: ',
  label2: 'Last Name: ',
  label3: 'Email: ',
  label4: 'Password: ',
  label1For: 'label1',
  label2For: 'label2',
  label3For: 'label3',
  label4For: 'label4',
  type1: 'text',
  type2: 'text',
  type3: 'text',
  type4: 'text',
  inputName1: 'inputs',
  inputName2: 'inputs',
  inputName3: 'inputs',
  inputName4: 'inputs'

};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  formTitle: 'Form Title',
  backgroundColor: 'white',
  inputBoxColor: '#F5EFFF',
  inputTxtColor: '#3936FC',
  textColor: '#0703DD',
  outerBorder: '#E5D9F2',
  midBorder: '#7371FC',
  innerBorder: '#A594F9',
  buttonLabel: 'Submit Form',
  buttonColor: '#F5EFFF',
  buttonBorder: '#7371FC',
  buttonTxtColor: '#3936FC',
  onSubmit: null,
  label1: 'First Name: ',
  label2: 'Last Name: ',
  label3: 'Email: ',
  label4: 'Password: ',
  label1For: 'label1',
  label2For: 'label2',
  label3For: 'label3',
  label4For: 'label4',
  type1: 'text',
  type2: 'text',
  type3: 'text',
  type4: 'text',
  inputName1: 'inputs',
  inputName2: 'inputs',
  inputName3: 'inputs',
  inputName4: 'inputs'

};

export const Spring1 = Template.bind({});
Spring1.args = {
  formTitle: 'Form Title',
  backgroundColor: 'white',
  inputBoxColor: '#DFF977',
  inputTxtColor: '#7D451B',
  textColor: '#2E570F',
  outerBorder: '#472C1B',
  midBorder: '#D7A01D',
  innerBorder: '#9BE564',
  buttonLabel: 'Submit Form',
  buttonColor: '#DFF977',
  buttonBorder: '#2E570F',
  buttonTxtColor: '#2E570F',
  onSubmit: null,
  label1: 'First Name: ',
  label2: 'Last Name: ',
  label3: 'Email: ',
  label4: 'Password: ',
  label1For: 'label1',
  label2For: 'label2',
  label3For: 'label3',
  label4For: 'label4',
  type1: 'text',
  type2: 'text',
  type3: 'text',
  type4: 'text',
  inputName1: 'inputs',
  inputName2: 'inputs',
  inputName3: 'inputs',
  inputName4: 'inputs'

};
