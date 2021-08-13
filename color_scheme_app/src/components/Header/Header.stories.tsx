import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Header, { HeaderProps } from './Header';
import configData from '../../context/config.json';

export default {
    title: 'Components/Page Sections/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
      },
  } as Meta;

  const Template: Story<HeaderProps> = (args) => <Header {...args}/>

  export const frozen2 = Template.bind({});
  frozen2.args = {
    tabs: [
      {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
      {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
      {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
    ],
    hBackgroundColor: configData.THEME_COLORS.FROZEN2.hBackgroundColor,
    hColor: configData.THEME_COLORS.FROZEN2.hColor,
    hLogo: configData.THEME_COLORS.FROZEN2.hLogo,
  }

  export const sunflower1 = Template.bind({});
  sunflower1.args = {
    tabs: [
      {name: 'Home', link: '#'},
      {name: 'About', link: '#'},
      {name: 'Profile', link: '#'},
    ],
    hBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.hBackgroundColor,
    hColor: configData.THEME_COLORS.SUNFLOWER1.hColor,
    hLogo: configData.THEME_COLORS.SUNFLOWER1.hLogo,
  }

  export const perwinkles1 = Template.bind({});
  perwinkles1.args = {
    tabs: [
      {name: 'Home', link: '#'},
      {name: 'About', link: '#'},
      {name: 'Profile', link: '#'},
    ],
    hBackgroundColor: configData.THEME_COLORS.PERIWINKLES1.hBackgroundColor,
    hColor: configData.THEME_COLORS.PERIWINKLES1.hColor,
    hLogo: configData.THEME_COLORS.PERIWINKLES1.hLogo,
  }

export const spring1 = Template.bind({});
spring1.args = {
    tabs: [
      {name: 'Home', link: '#'},
      {name: 'About', link: '#'},
      {name: 'Profile', link: '#'},
    ],
    hBackgroundColor: configData.THEME_COLORS.SPRING1.hBackgroundColor,
    hColor: configData.THEME_COLORS.SPRING1.hColor,
    hLogo: configData.THEME_COLORS.SPRING1.hLogo,
}

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
    tabs: [
      {name: 'Home', link: '#'},
      {name: 'About', link: '#'},
      {name: 'Profile', link: '#'},
    ],
    hBackgroundColor: configData.THEME_COLORS.SANJUAN1.hBackgroundColor,
    hColor: configData.THEME_COLORS.SANJUAN1.hColor,
    hLogo: configData.THEME_COLORS.SANJUAN1.hLogo,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  tabs: [
    {name: 'Home', link: '#'},
    {name: 'About', link: '#'},
    {name: 'Profile', link: '#'},
  ],
  hBackgroundColor: configData.THEME_COLORS.SEAFOAM1.hBackgroundColor,
  hColor: configData.THEME_COLORS.SEAFOAM1.hColor,
  hLogo: configData.THEME_COLORS.SEAFOAM1.hLogo,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  tabs: [
    {name: 'Home', link: '#'},
    {name: 'About', link: '#'},
    {name: 'Profile', link: '#'},
  ],
  hBackgroundColor: configData.THEME_COLORS.CORAL1.hBackgroundColor,
  hColor: configData.THEME_COLORS.CORAL1.hColor,
  hLogo: configData.THEME_COLORS.CORAL1.hLogo,
};
