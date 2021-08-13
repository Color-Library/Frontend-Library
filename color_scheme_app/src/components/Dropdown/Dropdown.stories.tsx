import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Dropdown, { DropdownProps } from './Dropdown';
import configData from '../../context/config.json';

export default {
    title: 'Components/Elements/Dropdown',
    component: Dropdown,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'}
    },
  } as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {
  label: 'Hover me',
  content: [
    {name: 'First Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Second Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Third Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
  ],
  backgroundColor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.FROZEN2.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  label: 'Hover me',
  content: [
    {name: 'First Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Second Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Third Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
  ],
  backgroundColor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.SUNFLOWER1.borderTxtColor,
  borderColor: '2px solid ' + configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
}

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  label: 'Hover me',
  content: [
    {name: 'First Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Second Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Third Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
  ],
  backgroundColor: configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.PERIWINKLES1.borderTxtColor,
  borderColor: '2px solid ' + configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
}

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
  label: 'Hover me',
  content: [
    {name: 'First Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Second Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Third Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
  ],
  backgroundColor: configData.THEME_COLORS.SPRING1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.SPRING1.borderTxtColor,
  borderColor: '2px solid ' + configData.THEME_COLORS.SPRING1.btnBackgroundColor,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
  label: 'Hover me',
  content: [
    {name: 'First Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Second Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Third Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
  ],
  backgroundColor: configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
  textcolor: 'white',
  borderColor: '2px solid' + configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  label: 'Hover me',
  content: [
    {name: 'First Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Second Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Third Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
  ],
  backgroundColor: configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.SEAFOAM1.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  label: 'Hover me',
  content: [
    {name: 'First Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Second Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
    {name: 'Third Link', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
  ],
  backgroundColor: configData.THEME_COLORS.CORAL1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.CORAL1.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.CORAL1.btnBackgroundColor,
};

