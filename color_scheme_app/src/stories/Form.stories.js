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
    buttonLabel: 'Submit Form',
    buttonColor: '#DDDDDD',
    buttonTxtColor: '#084C9',
    onSubmit: undefined,
    label1: 'Input One: ',
    label2: 'Input Two: ',
    label3: 'Input Three: ',
    label1For: 'label1',
    label2For: 'label2',
    label3For: 'label3',
    type1: 'text',
    type2: 'text',
    type3: 'text',
    inputName1: 'inputs',
    inputName2: 'inputs',
    inputName3: 'inputs'
};
