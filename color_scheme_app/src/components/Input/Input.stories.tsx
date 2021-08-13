import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input, { InputProps } from './Input';
import configData from '../../context/config.json';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    color: {control: 'color'}
  },
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
    inputBoxColor: '1px solid' + configData.THEME_COLORS.FROZEN2.btnTxtColor,
    inputTxtColor: configData.THEME_COLORS.FROZEN2.btnTxtColor,
    inputTxtSize: '15px',
    txtColor: configData.THEME_COLORS.FROZEN2.btnTxtColor,
    label: 'First Name: ',
    labelFor: 'label',
    type: 'text',
    inputName: 'inputs',
    requiredTxt: 'Must fill in',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  inputBoxColor: '1px solid' + configData.THEME_COLORS.SUNFLOWER1.btnTxtColor,
    inputTxtColor: configData.THEME_COLORS.SUNFLOWER1.btnTxtColor,
    inputTxtSize: '15px',
    txtColor: configData.THEME_COLORS.SUNFLOWER1.btnTxtColor,
    label: 'First Name: ',
    labelFor: 'label',
    type: 'text',
    inputName: 'inputs',
    requiredTxt: 'Must fill in',
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  inputBoxColor: '1px solid' + configData.THEME_COLORS.PERIWINKLES1.btnTxtColor,
    inputTxtColor: configData.THEME_COLORS.PERIWINKLES1.btnTxtColor,
    inputTxtSize: '15px',
    txtColor: configData.THEME_COLORS.PERIWINKLES1.btnTxtColor,
    label: 'First Name: ',
    labelFor: 'label',
    type: 'text',
    inputName: 'inputs',
    requiredTxt: 'Must fill in',
};

export const Spring1 = Template.bind({});
Spring1.args = {
  inputBoxColor: '1px solid' + configData.THEME_COLORS.SPRING1.btnTxtColor,
  inputTxtColor: configData.THEME_COLORS.SPRING1.btnTxtColor,
  inputTxtSize: '15px',
  txtColor: configData.THEME_COLORS.SPRING1.btnTxtColor,
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  requiredTxt: 'Must fill in',
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
  inputBoxColor: '1px solid' + configData.THEME_COLORS.SPRING1.btnTxtColor,
  inputTxtColor: configData.THEME_COLORS.SPRING1.btnTxtColor,
  inputTxtSize: '15px',
  txtColor: configData.THEME_COLORS.SPRING1.btnTxtColor,
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  requiredTxt: 'Must fill in',
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
  inputBoxColor: '1px solid' + configData.THEME_COLORS.SEAFOAM1.btnTxtColor,
  inputTxtColor: configData.THEME_COLORS.SEAFOAM1.btnTxtColor,
  inputTxtSize: '15px',
  txtColor: configData.THEME_COLORS.SEAFOAM1.btnTxtColor,
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  requiredTxt: 'Must fill in',
};

export const Coral1 = Template.bind({});
Coral1.args = {
  inputBoxColor: '1px solid' + configData.THEME_COLORS.CORAL1.btnTxtColor,
  inputTxtColor: configData.THEME_COLORS.CORAL1.btnTxtColor,
  inputTxtSize: '15px',
  txtColor: configData.THEME_COLORS.CORAL1.btnTxtColor,
  label: 'First Name: ',
  labelFor: 'label',
  type: 'text',
  inputName: 'inputs',
  requiredTxt: 'Must fill in',
};
