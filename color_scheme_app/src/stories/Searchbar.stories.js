import React from 'react';
import Searchbar from '../components/Searchbar.js';
import configData from '../context/config.json';

export default {
  title: 'Searchbar',
  component: Searchbar,
};

const Template = (args) => <Searchbar {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = { 
    inputColor: configData.THEME_COLORS.FROZEN2.btnBorderColor,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  inputColor: configData.THEME_COLORS.SUNFLOWER1.btnBorderColor,
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  inputColor: configData.THEME_COLORS.PERIWINKLES1.btnBorderColor,
};

export const Spring1 = Template.bind({});
Spring1.args = {
  inputColor: configData.THEME_COLORS.SPRING1.btnBorderColor,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
  inputColor: configData.THEME_COLORS.SANJUAN1.btnBorderColor,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
  inputColor: configData.THEME_COLORS.SEAFOAM1.btnBorderColor,
};

export const Coral1 = Template.bind({});
Coral1.args = {
  inputColor: configData.THEME_COLORS.CORAL1.btnBorderColor,
};
