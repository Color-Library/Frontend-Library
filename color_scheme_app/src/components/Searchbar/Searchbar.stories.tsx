import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Searchbar, { SearchbarProps } from './Searchbar';
import configData from '../../context/config.json';

export default {
  title: 'Components/Elements/Searchbar',
  component: Searchbar,
} as Meta;

const Template: Story<SearchbarProps> = (args) => <Searchbar {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = { 
    inputColor: configData.THEME_COLORS.FROZEN2.btnBorderColor,
    htmlfor: 'searchbar',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  inputColor: configData.THEME_COLORS.SUNFLOWER1.btnBorderColor,
  htmlfor: 'searchbar',
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  inputColor: configData.THEME_COLORS.PERIWINKLES1.btnBorderColor,
  htmlfor: 'searchbar',
};

export const Spring1 = Template.bind({});
Spring1.args = {
  inputColor: configData.THEME_COLORS.SPRING1.btnBorderColor,
  htmlfor: 'searchbar',
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
  inputColor: configData.THEME_COLORS.SANJUAN1.btnBorderColor,
  htmlfor: 'searchbar',
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
  inputColor: configData.THEME_COLORS.SEAFOAM1.btnBorderColor,
  htmlfor: 'searchbar',
};

export const Coral1 = Template.bind({});
Coral1.args = {
  inputColor: configData.THEME_COLORS.CORAL1.btnBorderColor,
  htmlfor: 'searchbar',
};
