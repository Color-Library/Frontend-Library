import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Form, { FormProps } from './Form';

export default {
  title: 'Components/Forms/Form',
  component: Form,
  argTypes: {
  },
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
    formTitle: 'Form Title',
    formContent: 'Place Inputs here',
    formTxtColor: '#084C91',
    formBorder: '#DDDDDD',
    formBorderType: 'solid',
    onSubmit: null, 
    action: null, 
    method: null, 
    formId: '0',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
    formTitle: 'Form Title',
    formContent: 'Place Inputs here',
    formTxtColor: '#401201',
    formBorder: '#401201',
    formBorderType: 'solid',
    onSubmit: null, 
    action: null, 
    method: null, 
    formId: '0',
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
    formTitle: 'Form Title',
    formContent: 'Place Inputs here',
    formTxtColor: '#7371FC',
    formBorder: '#7371FC',
    formBorderType: 'solid',
    onSubmit: null, 
    action: null, 
    method: null, 
    formId: '0',
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
    formTitle: 'Form Title',
    formContent: 'Place Inputs here',
    formTxtColor: '#9BE564',
    formBorder: '#9BE564',
    formBorderType: 'solid',
    onSubmit: null, 
    action: null, 
    method: null, 
    formId: '0',
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
    formTitle: 'Form Title',
    formContent: 'Place Inputs here',
    formTxtColor: '#D24A00',
    formBorder: '#D24A00',
    formBorderType: 'solid',
    onSubmit: null, 
    action: null, 
    method: null, 
    formId: '0',
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
    formTitle: 'Form Title',
    formContent: 'Place Inputs here',
    formTxtColor: '#1A936F',
    formBorder: '#1A936F',
    formBorderType: 'solid',
    onSubmit: null, 
    action: null, 
    method: null, 
    formId: '0',
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
    formTitle: 'Form Title',
    formContent: 'Place Inputs here',
    formTxtColor: '#F38375',
    formBorder: '#F38375',
    formBorderType: 'solid',
    onSubmit: null, 
    action: null, 
    method: null, 
    formId: '0',
};