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
  backgroundColor: configData.THEME_COLORS.FROZEN2.backgroundColor,
  color: configData.THEME_COLORS.FROZEN2.color,
  borderColor: 'cyan',
};