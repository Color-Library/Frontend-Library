import React from 'react'
import Dropdown from '../components/Dropdown'
import configData from '../context/config.json';

export default {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'}
    },
  };

const Template = (args) => <Dropdown {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
  label: 'Hover me',
  backgroundColor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.FROZEN2.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.FROZEN2.btnBorderColor,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  label: 'Hover me',
  backgroundColor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.SUNFLOWER1.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.SUNFLOWER1.btnBorderColor,
}

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  label: 'Hover me',
  backgroundColor: configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.PERIWINKLES1.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.PERIWINKLES1.btnBorderColor,
}

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
  label: 'Hover me',
  backgroundColor: configData.THEME_COLORS.SPRING1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.SPRING1.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.SPRING1.btnBorderColor,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
  label: 'Hover me',
  backgroundColor: configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.SANJUAN1.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.SANJUAN1.btnBorderColor,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  label: 'Hover me',
  backgroundColor: configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.SEAFOAM1.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.SEAFOAM1.btnBorderColor,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  label: 'Hover me',
  backgroundColor: configData.THEME_COLORS.CORAL1.btnBackgroundColor,
  textcolor: configData.THEME_COLORS.CORAL1.borderTxtColor,
  borderColor: '2px solid' + configData.THEME_COLORS.CORAL1.btnBorderColor,
};
