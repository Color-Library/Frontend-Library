// src/components/Breadcrumbs.stories.js
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs.js';
import configData from '../context/config.json';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
  },
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
  tab1: "Home",
  tab2: 'About',
  tab3: '',
  tab4: 'Profile',
  btnBackgroundColor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
  tab1: "Home",
  tab2: 'About',
  tab3: '',
  tab4: 'Profile',
  btnBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
  tab1: "Home",
  tab2: 'About',
  tab3: '',
  tab4: 'Profile',
    backgroundColor: '#E8C78E',
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
  tab1: "Home",
  tab2: 'About',
  tab3: '',
  tab4: 'Profile',
  btnBackgroundColor: configData.THEME_COLORS.SPRING1.btnBackgroundColor,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
  tab1: "Home",
  tab2: 'About',
  tab3: '',
  tab4: 'Profile',
  btnBackgroundColor: configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  tab1: "Home",
  tab2: 'About',
  tab3: '',
  tab4: 'Profile',
  btnBackgroundColor: configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  tab1: "Home",
  tab2: 'About',
  tab3: '',
  tab4: 'Profile',
  btnBackgroundColor: configData.THEME_COLORS.CORAL1.btnBackgroundColor,
};
