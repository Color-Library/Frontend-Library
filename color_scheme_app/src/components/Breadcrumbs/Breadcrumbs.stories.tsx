import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Breadcrumbs, { BreadcrumbsProps } from './Breadcrumbs';
import configData from '../../context/config.json';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
  },
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {
  tabs: [
    {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
    {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
    {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
  ],
  background: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
  color: configData.THEME_COLORS.FROZEN2.borderOuterBorder,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = { 
  tabs: [
    {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
    {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
    {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
  ],
  background: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
  color: configData.THEME_COLORS.SUNFLOWER1.borderOuterBorder,
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = { 
  tabs: [
    {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
    {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
    {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
  ],
  background: configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
  color: configData.THEME_COLORS.PERIWINKLES1.borderOuterBorder,
};

export const Spring1 = Template.bind({});
Spring1.args = { 
  tabs: [
    {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
    {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
    {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
  ],
  background: configData.THEME_COLORS.SPRING1.btnBackgroundColor,
  color: configData.THEME_COLORS.SPRING1.borderOuterBorder,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = { 
  tabs: [
    {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
    {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
    {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
  ],
  background: configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
  color: configData.THEME_COLORS.SANJUAN1.borderOuterBorder,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = { 
  tabs: [
    {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
    {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
    {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
  ],
  background: configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
  color: configData.THEME_COLORS.SEAFOAM1.borderOuterBorder,
};

export const Coral1 = Template.bind({});
Coral1.args = { 
  tabs: [
    {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
    {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
    {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
  ],
  background: configData.THEME_COLORS.CORAL1.btnBackgroundColor,
  color: configData.THEME_COLORS.CORAL1.borderOuterBorder,
};
