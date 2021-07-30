import React from 'react';
import Footer from '../components/Footer.js';
import configData from '../context/config.json';

export default {
    title: 'Footer',
    component: Footer,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'}
    },
  };

const Template = (args) => <Footer {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
  label: 'I am the Footer',
  backgroundColor: configData.THEME_COLORS.FROZEN2.backgroundColor,
  color: configData.THEME_COLORS.FROZEN2.color,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
    label: 'I am the Footer',
    backgroundColor: configData.THEME_COLORS.SUNFLOWER1.backgroundColor,
    color: configData.THEME_COLORS.SUNFLOWER1.color,
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
    label: 'I am the Footer',
    backgroundColor: configData.THEME_COLORS.PERWINKLES1.backgroundColor,
    color: configData.THEME_COLORS.PERWINKLES1.color,
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
    label: 'I am the Footer',
    backgroundColor: configData.THEME_COLORS.SPRING1.backgroundColor,
    color: configData.THEME_COLORS.SPRING1.color,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
    label: 'I am the Footer',
    backgroundColor: configData.THEME_COLORS.SANJUAN1.backgroundColor,
    color: configData.THEME_COLORS.SANJUAN1.color,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
    label: 'I am the Footer',
    backgroundColor: configData.THEME_COLORS.SEAFOAM1.backgroundColor,
    color: configData.THEME_COLORS.SEAFOAM1.color,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
    label: 'I am the Footer',
    backgroundColor: configData.THEME_COLORS.CORAL1.backgroundColor,
    color: configData.THEME_COLORS.CORAL1.color,
};
