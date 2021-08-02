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
  FooterLabel: 'I am the Footer',
  FooterBackgroundColor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
  FooterTxtColor: configData.THEME_COLORS.FROZEN2.btnTxtColor,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
    FooterLabel: 'I am the Footer',
    FooterBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
    FooterTxtColor: configData.THEME_COLORS.SUNFLOWER1.btnTxtColor,
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
    FooterLabel: 'I am the Footer',
    FooterBackgroundColor: configData.THEME_COLORS.PERWINKLES1.btnBackgroundColor,
    FooterTxtColor: configData.THEME_COLORS.PERWINKLES1.btnTxtColor,
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
    FooterLabel: 'I am the Footer',
    FooterBackgroundColor: configData.THEME_COLORS.SPRING1.backgroundColor,
    FooterTxtColor: configData.THEME_COLORS.SPRING1.color,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
    FooterLabel: 'I am the Footer',
    FooterBackgroundColor: configData.THEME_COLORS.SANJUAN1.backgroundColor,
    FooterTxtColor: configData.THEME_COLORS.SANJUAN1.color,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
    FooterLabel: 'I am the Footer',
    FooterBackgroundColor: configData.THEME_COLORS.SEAFOAM1.backgroundColor,
    FooterTxtColor: configData.THEME_COLORS.SEAFOAM1.color,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
    FooterLabel: 'I am the Footer',
    FooterBackgroundColor: configData.THEME_COLORS.CORAL1.backgroundColor,
    FooterTxtColor: configData.THEME_COLORS.CORAL1.color,
};
